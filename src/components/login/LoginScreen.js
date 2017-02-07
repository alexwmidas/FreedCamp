'use strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { styles } from './styles';
var { connect } = require('react-redux');
import { FButton } from 'FButton';
import { TopNavBar } from 'TopNavBar';
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPressDashboard = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'dashboard'});
  }

  onMyTasks = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'mytasks'});
  }

  onAddTasks = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'addtask'});
  }

  onCalendar = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'calendar'});
  }

  onSettings = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'settings'});
  }

  render() {
    return (
      <View style={styles.container}>
        <TopNavBar
          leftLabel=' '
          leftIcon={false}
          rightLabel=''
          rightIcon={false}
          centerLabel={'Login'}
          color={'white'}
        /> 
        <View style={styles.footer}>
          <FButton 
            onPress={this.onSettings}
            caption={'Settings'}
          />
          <FButton 
            onPress={this.onCalendar}
            caption={'Calendar'}
          />
          <FButton 
            onPress={this.onAddTasks}
            caption={'Add Task'}
          />
           <FButton 
            onPress={this.onMyTasks}
            caption={'My Tasks'}
          />
          <FButton 
            onPress={this.onPressDashboard}
            caption={'Dashboard'}
          />

        </View>
      </View>
    );
  }

  
}