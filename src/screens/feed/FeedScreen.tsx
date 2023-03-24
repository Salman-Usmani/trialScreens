import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {colors} from '../../theme';

// import {welcome} from '../../theme/assets/svg';

const FeedScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{color: colors.black}}>FeedScreen</Text>
    </View>
  );
};

export default FeedScreen;
