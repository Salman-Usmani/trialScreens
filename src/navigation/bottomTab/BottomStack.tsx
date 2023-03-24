import React from 'react';
import {FeedScreen, UserProfileScreen} from '../../screens';
// import {colors} from '../../theme';
import {bottomTabScreenList} from '../../types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './BottomBar';

const Bottom = createBottomTabNavigator<bottomTabScreenList>();

const BottomStack = () => {
  return (
    <Bottom.Navigator
      tabBar={props => MyTabBar(props)}
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}
      // screenOptions={{
      //   tabBarHideOnKeyboard: true,
      //   headerTitleAlign: 'center',
      //   headerTintColor: colors.white,
      //   headerStyle: {
      //     backgroundColor: colors.white,
      //   },
      // }}
      // sceneContainerStyle={{
      //   backgroundColor: colors.white,
      // }}
    >
      <Bottom.Screen name="Feed" component={FeedScreen} />
      <Bottom.Screen name="UserProfile" component={UserProfileScreen} />
    </Bottom.Navigator>
  );
};
export default BottomStack;
