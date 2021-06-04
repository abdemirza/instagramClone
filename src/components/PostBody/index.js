import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const PostBody = ({imageUri}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri:imageUri}} />
    </View>
  );
};

export default PostBody;
