import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 6,
    flex: 1,
  },
  icon: {
    //   backgroundColor:'red',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    padding: 23,
  },
  header: {
    display: 'flex',
    width: 400,
    marginTop: 20,
    // justifyContent: 'space-evenly',
  },
  line: {
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 2,
    width: 170,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    margin: 0,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
  },
  footer: {
   width:"100%",
   height:65,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'row',
   marginTop:'40%',
   borderWidth:0.5,

  },
  footerText: {
    fontSize: 12,
    color: 'grey',
  },
});
export default styles;
