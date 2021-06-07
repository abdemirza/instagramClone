import React from 'react';
import {View, Text} from 'react-native';

const NotificationsScreen = () => {
  return (
    <View
      style={{backgroundColor: 'green', height: 1500, alignContent: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
          marginTop: 200,
          textAlign: 'center',
        }}>
        Notifications
      </Text>
    </View>
  );
};

export default NotificationsScreen;
