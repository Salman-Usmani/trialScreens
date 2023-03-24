import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: hp(2),
  },
  searchView: {
    width: wp(90),
    alignSelf: 'center',
    marginVertical: hp(1),
  },

  userInfoContainer: {
    // flex: 1,
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
