/**
 * Alexandru
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import FreedNavigator from './FreedNavigator';
import { connect } from 'react-redux';

var FreedApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
         />
        <FreedNavigator role="none" />
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function select(store) {
  return {
  };
}

function actions(dispatch) {
  return {
  };
}

module.exports = connect(select, actions)(FreedApp);
