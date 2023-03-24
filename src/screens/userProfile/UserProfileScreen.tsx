import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

import {AccountProp} from '../../types';
import {colors} from '../../theme';

const UserProfileScreen = ({navigation}: AccountProp<'Account'>) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{color: colors.black}}>UserProfileScreen</Text>
    </View>
  );
};

export default UserProfileScreen;
