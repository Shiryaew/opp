import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import { withState } from '../../hoc/withState';
import Items from '../../components/Items';
import AddItem from '../../components/AddItem';

class Event extends React.Component {

  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate('create-event');
  }

  render() {
    const { onDateSelected } = this.props;
    return (
      <View>
        <CalendarStrip style={styles.week}
          scrollable={true}
          scrollerPaging={true}
          onDateSelected={onDateSelected}
        />
        <Items />
        <AddItem
          onPress={this.onPress}
        />
      </View>
    )
  }
}

export default withState(Event);

const styles = StyleSheet.create({
  week: {
    height: 100,
  }
});