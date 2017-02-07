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
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onNavLeftAction = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.pop();
  }

  onProjectTasks = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'projecttasks'});
  }

  onProjectSettings = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'projectsettings'});
  }

  onCreateProject = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'createproject'});
  }

  onEditProject = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'createproject'});
  }

  onNotification = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'notification'});
  }


  render() {
    return (
      <View style={styles.container}>
        <TopNavBar
          leftAction={this.onNavLeftAction}
          leftLabel='Back'
          rightLabel=''
          rightIcon={false}
          centerLabel={'Dashboard'}
          color={'white'}
        /> 
        <View style={styles.footer}>
          <FButton 
            onPress={this.onNotification}
            caption={'Notification'}
          />
          <FButton 
            onPress={this.onEditProject}
            caption={'Edit Project'}
          />
          <FButton 
            onPress={this.onCreateProject}
            caption={'Create Project'}
          />
          <FButton 
            onPress={this.onProjectSettings}
            caption={'Project Settings'}
          />
          <FButton 
            onPress={this.onProjectTasks}
            caption={'Project Tasks'}
          />
        </View>
      </View>
    );
  }

  
}