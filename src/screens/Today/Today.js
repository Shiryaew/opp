import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import AddItem from '../../components/AddItem';
import Items from '../../components/Items';
import { withState } from '../../hoc/withState';

class Today extends React.Component {

  navigateToCreateScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('create-event');
  }

  navigateToEventScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('event');
  }

  render() {
    return (
      <View>
        <Items />
        <TouchableOpacity style={styles.week}
          onPress={this.navigateToEventScreen}>
          <Text style={styles.text}>Задачи на неделю</Text>
        </TouchableOpacity>
        <AddItem
          onPress={this.navigateToCreateScreen}
        />
      </View>
    );
  }
}

export default withState(Today);

const styles = StyleSheet.create({
  week: {
    position: 'absolute',
    marginTop: Dimensions.get("window").height - 155,
    marginLeft: 20,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'gray'
  }
});