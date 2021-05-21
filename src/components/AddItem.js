import React from 'react';
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withState } from '../hoc/withState';

class AddItem extends React.Component {
  render() {
    const { onPress } = this.props
    return (
      <TouchableOpacity
        style={styles.add}
        onPress={onPress}
      >
        <Icon
          name='add'
          type='MaterialIcons'
          color='white'
          size={25}
        />
      </TouchableOpacity>
    )
  }
}

export default withState(AddItem);

const styles = StyleSheet.create({
  add: {
    position: "absolute",
    marginTop: Dimensions.get("window").height - 170,
    marginLeft: Dimensions.get("window").width - 110,
    backgroundColor: '#3f48cc',
    elevation: 10,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
})