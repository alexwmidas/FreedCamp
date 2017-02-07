/**
 *
 * @providesModule TopNavBar
 */

import React, { PropTypes } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const renderLeftSide = (icon, label, action, sideFontSize, color, sideWidth) => (
  <TouchableOpacity onPress={action} style={[styles.button, styles.buttonLeft, { width: sideWidth, flexDirection: 'row'}]}>
    {icon}
    {
        <Text style={[{ color }, {fontSize: sideFontSize}, styles.leftLabelStyle]} >
          {label.toUpperCase()}
        </Text>
    }
  </TouchableOpacity>
);

const renderRightSide = (icon, label, action, sideFontSize, color, sideWidth) => (
  <TouchableOpacity onPress={action} style={[styles.button, styles.buttonRight, { width: sideWidth, flexDirection: 'row'}]}>
    {
        <Text style={[{ color }, {fontSize: sideFontSize}, styles.rightLabelStyle]} >
          {label.toUpperCase()}
        </Text>
    }
    {icon}
  </TouchableOpacity>
);

const renderCenter = (centerLabel, centerFontSize, color) => (
  <View style={{width: Dimensions.get('window').width * 0.50}}>
    {
      typeof centerLabel === 'object' ? centerLabel :
        <Text style={[styles.centerLabel, { color }, {width: Dimensions.get('window').width * 0.50, textAlign: 'center'}, {fontSize: centerFontSize}]}>
          {centerLabel}
        </Text>
    }
  </View>
);
export const TopNavBar = ({
  leftIcon,
  leftLabel,
  rightLabel,
  rightIcon,
  rightAvatar,
  rightAvatarUrl,
  centerLabel,
  leftAction,
  rightAction,
  backgroundColor,
  sideFontSize,
  centerFontSize,
  color,
  wrapStyle,
  sideWidth,
  leftSideWidth,
  rightSideWidth
}) => {
  // let iconLeft = leftIcon   ? <Icon name="ios-arrow-back" size={30} style={[styles.iconLeft, { color: color }]} /> : undefined;
  // let iconRight = rightIcon ? <Icon name="ios-arrow-forward" size={30} style={[styles.iconRight, { color: color }]} /> : undefined;
  let iconLeft, iconRight;
  if (leftIcon === true) {
    iconLeft = <Icon name="ios-arrow-back" size={30} style={[styles.iconLeft, { color: color }]} />;
  } else if (leftIcon !== false) {
    iconLeft = <Icon name={leftIcon} size={20} style={[{}, { color: color }]} />;
  }  
  if (rightIcon === true) {
    iconRight = <Icon name="ios-arrow-forward" size={30} style={[styles.iconRight, { color: color }]} />;
  } else if (rightIcon !== false) {
    iconRight = <Icon name={rightIcon} size={20} style={[styles.iconRight, { color: color }]} />;
  }

  if (rightAvatar === true) {
    iconRight = <Image source={{uri: rightAvatarUrl}} style={styles.itemAvatar} resizeMode={'cover'} />
  }

  return (
    <View style={[styles.container, { backgroundColor }, wrapStyle]}>
      {leftLabel ?
        renderLeftSide(iconLeft, leftLabel, leftAction, sideFontSize, color, sideWidth) :
        <View style={styles.button} />
      }
      {centerLabel ? renderCenter(centerLabel, centerFontSize, color) : <View /> }
      {rightLabel || rightAvatar ?
        renderRightSide(iconRight, rightLabel, rightAction, sideFontSize, color, sideWidth) :
        <View style={styles.button} />
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  centerLabel: {
    fontWeight: '300',
    fontSize: 18
  },
  button: {
    // width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingRight: 6
  },
  buttonLeft: {
    // justifyContent: 'flex-start'
    position: 'absolute',
    left: 10
  },
  buttonRight: {
    // justifyContent: 'flex-end',
    position: 'absolute',
    right: 10
  },
  iconLeft: {
    // height: 30,
    // width: 18,
    paddingRight: 3
  },
  iconRight: {
    // height: 30,
    // width: 18,
    paddingLeft: 3,
  },
  leftLabelStyle: {
    fontSize: 12,
    
  },
  rightLabelStyle: {
    fontSize: 12
  },
  itemAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15
  }
});


TopNavBar.propTypes = {
  leftLabel: PropTypes.any,
  rightLabel: PropTypes.any,
  rightIcon: PropTypes.any,
  centerLabel: PropTypes.any,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  backgroundColor: PropTypes.string,
  sideFontSize: PropTypes.number,
  centerFontSize: PropTypes.number,
  color: PropTypes.string,
  sideWidth: PropTypes.number,
  wrapStyle: View.propTypes.style,
};

TopNavBar.defaultProps = {
  leftIcon: true,
  rightIcon: true,
  leftLabel: null,
  backgroundColor: '#59AEC5',
  sideFontSize: 13,
  centerFontSize: 18,
  color: 'white',
  // sideWidth: 80,
};
