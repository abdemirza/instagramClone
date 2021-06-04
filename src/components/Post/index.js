import React from 'react';
import {View, Text} from 'react-native';
import PostBody from '../PostBody';
import Body from '../PostBody';
import PostFooter from '../PostFooter';
import PostHeader from '../PostHeader';

const Post = ({post}) => {
  return (
    <View>
      <PostHeader imageUri={post.user.imageUri} name={post.user.name} />
      <PostBody imageUri={post.imageUri} />
      <PostFooter />
    </View>
  );
};

export default Post;
