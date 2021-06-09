import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 3,
  },
  image: {
    height: 60,
    width: 180,
    resizeMode: 'stretch',
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: '#0275d8',
    borderRadius: 5,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
