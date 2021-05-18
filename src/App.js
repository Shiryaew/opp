import React from 'react';
import MainNavigator from './navigators/MainNavigator';
import Store from './store/Store';

class App extends React.Component {
  render() {
    return (
      <Store>
        <MainNavigator />
      </Store>
    )
  }
}

export default App;