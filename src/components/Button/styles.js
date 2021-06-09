import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 360,
    height: 50,
    backgroundColor: '#0275d8',
    borderRadius: 5,
    margin:15,
  },
  buttonText: {
    color: 'white',
  },
  icon: {
    padding: 5,
    color: 'white',
  },
});
export default styles;
