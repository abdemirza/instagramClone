import React from 'react';
import {View, Text} from 'react-native';

const PostScreen = () => {
  return (
    <View
      style={{backgroundColor: 'yellow', height: 1500, alignContent: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
          marginTop: 200,
          textAlign: 'center',
        }}>
        Post
      </Text>
    </View>
  );
};

export default PostScreen;
