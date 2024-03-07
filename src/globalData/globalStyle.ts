import {Platform, StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  elevationStyle: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default globalStyle;
