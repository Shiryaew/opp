import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { withState } from '../../hoc/withState';
import Items from '../../components/Items';

class Event extends React.Component {
  render() {
    const { curDate, onDateSelected } = this.props;
    return (
      <View /* style={styles.event} */>
        <CalendarStrip style={{ borderWidth: 1, height: 100 }}
          scrollable={true}
          scrollerPaging={true}
          onDateSelected={onDateSelected}
        />
        <Items />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  event: {
    marginTop: 50,
  },
});

export default withState(Event);
