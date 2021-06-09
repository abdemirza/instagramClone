import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#8c8c8c',
    width: 280,
    marginTop: 15,
    borderRadius: 5,
    paddingLeft: 20,
  },    
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countryCode: {
    width: 70,
    height: 50,
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#8c8c8c',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
  },
  footNote: {
    fontSize: 13,
    textAlign: 'center',
    width: 380,
    marginTop: 12,
    marginLeft:5,
  },
});
export default styles;
