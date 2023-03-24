import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {rootStackScreenList} from '../../types';
import {BottomStack} from '../';

const Stack = createStackNavigator<rootStackScreenList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomStack} />
    </Stack.Navigator>
  );
};
export default RootStack;
