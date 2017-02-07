/**
 * @providesModule FButton
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

export class FButton extends Component {
  props: {
    type: 'primary' | 'secondary' | 'bordered';
    caption: string;
    style: any;
    captionStyle: any;
    onPress: () => void;
  };

  render() {
    const caption = this.props.caption.toUpperCase();
    
    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}>
        <View style={[styles.button, styles.border]}>
          <Text style={[styles.caption, styles.secondaryCaption, this.props.captionStyle]}>
            {caption}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const HEIGHT = 50;

var styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    marginTop: 5,
    marginBottom: 5
    // borderRadius: HEIGHT / 2,
    // borderWidth: 1 / PixelRatio.get(),
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  border: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: HEIGHT / 2,
  },
  primaryButton: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 12,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 12,
  },
  primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    // color: F8Colors.lightText,
    color: 'gray'
  }
});

// module.exports = FButton;
