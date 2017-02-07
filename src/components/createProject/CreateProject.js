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
export class CreateProject extends Component {
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

  render() {
    return (
      <View style={styles.container}>
        <TopNavBar
          leftAction={this.onNavLeftAction}
          leftLabel='Back'
          rightLabel=''
          rightIcon={false}
          centerLabel={'Create Project'}
          color={'white'}
        /> 
        <View style={styles.footer}>
        </View>
      </View>
    );
  }

  
}