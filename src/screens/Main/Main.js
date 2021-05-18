import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { withState } from '../../hoc/withState';
import Items from '../../components/Items';

class Main extends React.Component {
  onDateChange = (date) => {
    Alert.alert(date.toString());
    const { navigation } = this.props;
    navigation.navigate('event');
  }

  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate('create-event');
  }

  render() {
    //const { onDateChange, onPress } = this.props;
    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    return (
      <View style={styles.calendar}>
        <CalendarPicker
          //https://www.npmjs.com/package/react-native-calendar-picker
          onDateChange={this.onDateChange}
          weekdays={weekdays}
          startFromMonday={true}
          previousTitle={'Назад'}
          nextTitle={'Вперед'}
          months={months}
        />
        <TouchableOpacity onPress={this.onPress} style={styles.addButton} >
          <Text>Добавить</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.today}>
            Задачи на сегодня
          </Text>
        </View>
        <Items />
      </View>
    );
  }
}

export default withState(Main);

const styles = StyleSheet.create({
  calendar: {
    marginTop: 30,
  },
  addButton: {
    marginLeft: Dimensions.get('window').width / 2 - 50,
    width: 100,
    height: 30,
    marginTop: 30,
    borderWidth: 1,
    alignItems: 'center',
    //textAlign: 'center',
    justifyContent: 'center',
  },
  today: {
    marginLeft: 25,
    marginTop: 30,
    fontSize: 30,
  },
});