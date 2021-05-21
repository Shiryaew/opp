import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import { withState } from '../hoc/withState';

class Items extends React.Component {
  render() {
    const { renderItem, listEvents } = this.props
    return (
      <FlatList
        style={styles.list}
        data={listEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    )
  }
}

export default withState(Items);

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
    width: Dimensions.get("window").width,
    borderColor: 'lightgray',
    borderTopWidth: 1,
  }
})