import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Item from '../components/Item';
import { AppState } from './Index';
import { createEvent } from '../utils';

class Store extends React.Component {
  state = {
    listEvents: [],
    curDate: new Date(),
    eventName: '',
  }

  componentDidMount() {
    this.init()
  }

  init = async () => {
    try {
      const persistedStatelistEvents = await AsyncStorage.getItem('listEvents');
      if (!persistedStatelistEvents) return
      this.setState({
        listEvents: JSON.parse(persistedStatelistEvents),
      })
    } catch (e) {
      console.error(e)
    }
  }

  persistState = (newState) => {
    this.setState(newState, async () => {
      try {
        await AsyncStorage.setItem('listEvents', JSON.stringify(this.state.listEvents))
      } catch (e) {
        console.error(e)
      }
    })
  }

  addItem = () => {
    const { listEvents, curDate, eventName } = this.state;
    if (eventName != "") {
      let event = createEvent(curDate, eventName);
      listEvents.push(event);
      this.persistState({ listEvents });
    }
    console.log(this.state);
  }

  getProductIndexById = (id) => {
    return this.state.listEvents.findIndex((event) => { return event.id === id })
  }

  deleteItem = (id) => {
    const { listEvents } = this.state;
    listEvents.splice(this.getProductIndexById(id), 1);
    this.persistState({ listEvents });
  }

  onDateSelected = (date) => {
    console.log(date.toString());
    this.setState({ curDate: date });
  }

  onChangeText = (name) => {
    this.setState({ eventName: name });
    console.log(this.state);
  }

  renderItem = ({ item }) => {
    console.log(item.date.toString());
    return (
      <Item
        {...item}
      />
    )
  }

  render() {
    return (
      <AppState.Provider
        value={{
          addItem: this.addItem,
          renderItem: this.renderItem,
          listEvents: this.state.listEvents,
          curDate: this.state.curDate,
          eventName: this.state.eventName,
          onDateSelected: this.onDateSelected,
          onChangeText: this.onChangeText,
          deleteItem: this.deleteItem,
        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}

export default Store;