import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomHomeNavigator from './BottomHomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createStackNavigator();

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={BottomHomeNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Story" component={StoryScreen} options={{headerShown:false}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
