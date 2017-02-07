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
export class Settings extends Component {
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

  onLogout = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.popToTop(0)
  }


  render() {
    return (
      <View style={styles.container}>
        <TopNavBar
          leftAction={this.onNavLeftAction}
          leftLabel='Back'
          rightLabel=''
          rightIcon={false}
          centerLabel={'User Settings'}
          color={'white'}
        /> 
        <View style={styles.footer}>
          <FButton 
            onPress={this.onLogout}
            caption={'Logout'}
          />
        </View>
      </View>
    );
  }

  
}