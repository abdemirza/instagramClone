import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <View
      style={{backgroundColor: 'violet', height: 1500, alignContent: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
          marginTop: 200,
          textAlign: 'center',
        }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
