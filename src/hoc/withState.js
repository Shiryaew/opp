import React from 'react';
import { AppState } from "../store/Index"

export function withState(Component) {
  class Wrapper extends React.Component {
    render() {
      return (
        <AppState.Consumer>
          {(state) => (
            <Component
              {...this.props}
              {...state}
            />
          )}
        </AppState.Consumer>
      )

    }
  }

  return Wrapper;
}