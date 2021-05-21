import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { withState } from '../hoc/withState';

class Item extends React.Component {
  render() {
    const { curDate, id, date, name, deleteItem } = this.props;
    const currentDate = new Date(curDate);
    const newDate = new Date(date);
    if (currentDate.getDate() === newDate.getDate() && currentDate.getMonth() === newDate.getMonth() && currentDate.getFullYear() === newDate.getFullYear())
      return (
        <View style={styles.item}>
          <Text style={styles.text}> {name} </Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              deleteItem(id);
              ToastAndroid.show("Удалено", ToastAndroid.SHORT);
            }}
          >
            <Icon
              name='close'
              type='MaterialIcons'
              color='gray'
              size={23}
            />
          </TouchableOpacity>
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
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    position: 'absolute',
    fontSize: 16,
    width: Dimensions.get("window").width - 130,
    marginLeft: 10,
  },
  deleteButton: {
    width: 40,
    height: 40,
    marginTop: 1,
    marginLeft: Dimensions.get("window").width - 115,
    justifyContent: 'center',
    alignItems: 'center'
  }
})