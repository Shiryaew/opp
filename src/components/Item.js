import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { withState } from '../hoc/withState';

class Item extends React.Component {

  render() {
    const { curDate, day, name } = this.props;
    const currentDate = new Date(curDate);
    if (currentDate.getDate() === day.getDate() && currentDate.getMonth() === day.getMonth() && currentDate.getFullYear() === day.getFullYear())
      return (
        <View style={styles.item}>
          <Text style={styles.text}> {name} </Text>
        </View>
      )
    else return <View />;
  }
}

export default withState(Item);

const styles = StyleSheet.create({
  item: {
    marginLeft: 30,
    width: Dimensions.get("window").width - 60,
    height: 70,
    //borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: 'lightgray',

  },
  text: {
    fontSize: 16,
    width: Dimensions.get("window").width - 100,
    textAlign: "center"
  }
})