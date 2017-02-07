/**
 * Alexandru
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AsyncStorage,
  Navigator,
  BackAndroid,
  Platform,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import {
  LoginScreen,
  Dashboard,
  MyTasks,
  Calendar,
  Notification,
  ProjectTasks,
  Settings,
  ViewTask,
  AddTask,
  CreateProject,
  ProjectSettings,
  SignUp
} from 'AppComponents';

var FreedNavigator = React.createClass({
  _handlers: ([]: Array<() => boolean>),
  componentWillMount: function() {
    
  },
  componentDidMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  },
  
  componentWillUnmount: function() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  },

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  },

  addBackButtonListener: function(listener) {
    this._handlers.push(listener);
  },

  removeBackButtonListener: function(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  },

  handleBackButton: function() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length >= 1) {
      navigator.pop();
      return true;
    } else {
      BackAndroid.exitApp(0);
    }
  },

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
          
        }}
        initialRoute={{}}
        renderScene={this.renderScene} />
    );
  },

  renderScene: function(route, navigator) {
    switch(route.path) {
      case 'dashboard':
        return ( <Dashboard navigator={navigator} /> );
        break;
      case 'mytasks':
        return ( <MyTasks navigator={navigator} /> );
        break;
      case 'notification':
        return ( <Notification navigator={navigator} /> );
        break;
      case 'projecttasks':
        return ( <ProjectTasks navigator={navigator} /> );
        break;
      case 'settings':
        return ( <Settings navigator={navigator} /> );
        break;
      case 'viewtask':
        return ( <ViewTask navigator={navigator} /> );
        break;
      case 'calendar':
        return ( <Calendar navigator={navigator} /> );
        break;

      case 'addtask':
        return ( <AddTask navigator={navigator} /> );
        break;
      case 'createproject':
        return ( <CreateProject navigator={navigator} /> );
        break;
      case 'projectsettings':
        return ( <ProjectSettings navigator={navigator} /> );
        break;
      case 'signup':
        return ( <SignUp navigator={navigator} /> );
        break;
      default:
        return <LoginScreen navigator={navigator} />;
    }
  },
});

FreedNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

module.exports = connect(select, actions)(FreedNavigator);
