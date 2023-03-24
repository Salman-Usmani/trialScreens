import React from 'react';

import {SvgXml} from 'react-native-svg';
import {Text, TouchableOpacity, View} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {styles} from './style';
import {feedSvgBlur, feedSvgFocus} from '../../assets';

const MyTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element => {
  return (
    <View style={styles().tabBarView}>
      <View style={styles().tabBarInnerView}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let iconName;

          if (route.name === 'Feed') {
            iconName = isFocused ? feedSvgFocus : feedSvgBlur;
          } else if (route.name === 'UserProfile') {
            iconName = isFocused ? feedSvgBlur : feedSvgFocus;
          } else {
            iconName = feedSvgBlur;
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles().tabBarBtn}>
              <SvgXml xml={iconName} />
              <Text style={styles(isFocused).tabName}>
                {route.name === 'LibraryStack'
                  ? 'Library'
                  : route.name === 'AccountStack'
                  ? 'Account'
                  : route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyTabBar;
