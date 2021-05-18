import React from 'react';
import { View, FlatList } from 'react-native';
import { withState } from '../hoc/withState';

class Items extends React.Component {
  render() {
    const { renderItem, listEvents } = this.props
    return (
      <FlatList
        data={listEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    )
  }
}

export default withState(Items);