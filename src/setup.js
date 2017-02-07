/**
 * Alexandru
 * @flow
 */

'use strict';

import FreedApp from './FreedApp';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import React, { Component } from 'react';

function setup(): Component {
  console.disableYellowBox = true;

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }
    render() {
      return (
        <Provider store={this.state.store}>
          <FreedApp />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
