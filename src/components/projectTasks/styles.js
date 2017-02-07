import {
  Dimensions,
  StyleSheet
} from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59AEC5',
    paddingTop: 20
  },
  footer: {
  	flex: 1,
  	backgroundColor: 'white',
  	flexDirection: 'column-reverse',
  	padding: 20
  }

});