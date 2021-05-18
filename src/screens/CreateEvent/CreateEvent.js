import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import CalendarStrip from 'react-native-calendar-strip';

class CreateEvent extends React.Component {
  render() {
    return (
      <View style={styles.createEvent}>
        <Text>
          createEvent
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  createEvent: {
    marginTop: 50,
  },
});

export default CreateEvent;