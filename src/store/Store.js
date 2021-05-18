import React from 'react';
import { AppState } from './Index';
import { createEvent } from '../utils';
import Item from '../components/Item';

class Store extends React.Component {
  state = {
    listEvents: [{ id: 1, day: new Date(), name: 'qq1' }, { id: 2, day: new Date(), name: 'qq2' }],
    curDate: new Date(),
  }

  addItem = (/* day, */ name) => {
    const { listEvents, curDate } = this.state;
    if (name != "") {
      listEvents.push(createEvent(curDate, name));
      this.setState({ listEvents });
    }
  }

  onDateSelected = (date) => {
    console.log(date.toString());
    //let day = Date(date);
    //console.log(day);
    //const { curDate } = this.state;
    this.setState({ curDate: date });
  }


  renderItem = ({ item }) => {
    console.log(item.day.toString());
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
          onDateSelected: this.onDateSelected,
        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}

export default Store;