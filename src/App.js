import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from './store/configureStore';

import User from './containers/User';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <User />
      </Provider>
    )
  }
}