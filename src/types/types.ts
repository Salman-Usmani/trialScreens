import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

//Stack Navigator
export type rootStackScreenList = {
  Splash: undefined;
  BottomTab: undefined;
};
export type rootStackNavigationProp<T extends keyof rootStackScreenList> =
  StackScreenProps<rootStackScreenList, T>;

//Bottom Tab
export type bottomTabScreenList = {
  UserProfile: undefined;
  Feed: undefined;
};
export type bottomTabProp<T extends keyof bottomTabScreenList> =
  BottomTabScreenProps<bottomTabScreenList, T>;
