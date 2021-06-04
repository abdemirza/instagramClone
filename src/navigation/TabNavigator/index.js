import React from 'react';
import Activity from '../../screens/HomeScreen';
import AddPost from '../../screens/AddPost';
import Feed from '../../screens/Feed';
import Profile from '../../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const TabNavigator = () => {
  const TabStack = createBottomTabNavigator();
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Profile" component={Profile}></TabStack.Screen>
      <TabStack.Screen name="Feed" component={Feed}></TabStack.Screen>
      <TabStack.Screen name="AddPost" component={AddPost}></TabStack.Screen>
      <TabStack.Screen name="Activity" component={Activity}></TabStack.Screen>
    </TabStack.Navigator>
  );
};
export default TabNavigator;
