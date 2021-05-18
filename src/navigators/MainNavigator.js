import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main/Main';
import Event from '../screens/Event/Event';
import CreateEvent from '../screens/CreateEvent/CreateEvent';
import Today from '../screens/Today/Today';

const Stack = createStackNavigator();

class MainNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" options={{ title: 'Календарь' }} component={Main} />
          <Stack.Screen name="event" options={{ title: 'События' }} component={Event} />
          <Stack.Screen name="create-event" options={{ title: 'Добавление события' }} component={CreateEvent} />
          <Stack.Screen name="today" options={{ title: 'Задачи на сегодня' }} component={Today} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainNavigator;
