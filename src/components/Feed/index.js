import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';
const data = [
  {
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    caption: 'Beautiful city',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    caption: 'Beautiful city',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    caption: 'Beautiful city',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    caption: 'Beautiful city',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
];
const Feed = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={Stories}
        data={data}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default Feed;
