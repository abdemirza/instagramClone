import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';
import Stories from '../../components/Stories';

const post = {
  user: {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
    name: 'Lukas',
  },
  imageUri:
    'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  caption: 'Beautiful city',
  likeCount: 1234,
  postedAt: '6 minutes ago',
};

const HomeScreen = () => {
  return (
    <View>
      <Stories />
      <Post post={post} />
    </View>
  );
};

export default HomeScreen;
