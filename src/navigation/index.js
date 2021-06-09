import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomHomeNavigator from './BottomHomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import StoryScreen from '../screens/StoryScreen';
import FirstScreen from '../screens/FirstScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const RootStack = createStackNavigator();

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Home"
          component={BottomHomeNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Story"
          component={StoryScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
