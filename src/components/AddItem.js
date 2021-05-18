import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { withState } from '../hoc/withState';

class AddItem extends React.Component {
  render() {
    const { addItem } = this.props
    return (
      <TouchableOpacity><Text>Добавить</Text></TouchableOpacity>
    )
  }
}

export default withState(AddItem);