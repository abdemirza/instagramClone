import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  rightIcons: {
    flexDirection: 'row',
  },
});
