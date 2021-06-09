import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '35%',
    flex: 0.9,
  },

  image: {
    height: 60,
    width: 180,
    resizeMode: 'stretch',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    width: 350,
    height: 50,
    padding: 10,
  },
  button: {
    marginTop: 15,
    width: 350,
    height: 50,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#0275d8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {
    color: '#0275d8',
    textAlign: 'center',
    marginRight: 5,
  },
  buttonText: {
    color: '#0275d8',
    fontWeight: 'bold',
  },
  forgotContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  forgotText: {
    color: '#8c8c8c',
    fontSize: 12,
  },
  forgotButton: {
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 5,
  },
  line: {
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 1,
    width: 155,
  },
  orContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footer: {
    justifyContent: 'center',
    borderColor: '#8c8c8c',
    borderWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    flex:0.1,
  },
  footerText: {
    color: '#8c8c8c',
  },
  footerButton: {
    color: 'black',
    marginLeft: 5,
  },
});

export default styles;
