import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import TabNavigator from './TabNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
        <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
