import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const UserStoryPreview = ({story}) => {
  const {
    user: {id, imageUri, name},
  } = story;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Story', {userId: id})}
      style={styles.container}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
