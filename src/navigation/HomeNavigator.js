import React from 'react'

import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/instagramLogo.png';
import { Image } from 'react-native';

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Instagram',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
        headerTitle: () => (
          <Image
            source={logo}
            resizeMode="contain"
            style={{width: 135, height: 50}}
          />
        ),
        headerRight: () => (
          <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeNavigator;
