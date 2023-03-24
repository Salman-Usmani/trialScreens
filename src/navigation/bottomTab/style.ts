import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../theme';
export const styles = (props?: boolean) =>
  StyleSheet.create({
    tabBarView: {
      // flexDirection: 'row',
      backgroundColor: colors.white,
      // paddingBottom: hp(2),
      // paddingHorizontal: wp(3),
    },
    tabBarInnerView: {
      // flex: 1,
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: wp(5),
    },
    tabBarBtn: {
      flex: 1,
      justifyContent: 'center',
      paddingVertical: hp(1),
      alignItems: 'center',
    },
    tabName: {
      color: props ? colors.black : 'rgba(255, 255, 255, 0.4)',
    },
  });
