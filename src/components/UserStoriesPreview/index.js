import React, {Profiler} from 'react';
import {View, Text, FlatList} from 'react-native';
import storiesData from '../../data/stories';
import UserStoryPreview from '../UserStoryPreview';
import styles from './styles';

const UserStoriesPreview = () => {
  //   const stories = data.map(profile => {
  //     <Story uri={profile.uri} name={profile.name} />;
  //   });
  return (  
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      horizontal
      data={storiesData}
      renderItem={({item}) => (
        <UserStoryPreview story={item} />
      )}
    />
  );
};

export default UserStoriesPreview;
