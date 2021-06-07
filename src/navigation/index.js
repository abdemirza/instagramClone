import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomHomeNavigator from './BottomHomeNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <BottomHomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
