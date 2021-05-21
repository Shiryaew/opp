import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { withState } from '../../hoc/withState';

class CreateEvent extends React.Component {
  render() {
    const { onChangeText, addItem } = this.props
    return (
      <View style={styles.createEvent}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          autoFocus={true}
        >
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={addItem}>
          <Text>Добавить</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withState(CreateEvent);

const styles = StyleSheet.create({
  createEvent: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: 'lightgray',
  },
  input: {
    width: Dimensions.get("window").width - 100,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  }
});