import React from 'react';
import {View, Text} from 'react-native';
import { Icon } from 'react-native-vector-icons/Entypo';
import Feed from '../../components/Feed';
import Post from '../../components/Post';
import Stories from '../../components/UserStoriesPreview';



const HomeScreen = () => {
  return (
    <View>
      <Feed />
    </View>
  );
};

export default HomeScreen;
