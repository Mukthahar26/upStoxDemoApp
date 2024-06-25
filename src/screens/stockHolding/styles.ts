import {StyleSheet} from 'react-native';
import sizeValues from '../../themes/sizeValues';
import {scale} from 'react-native-size-matters';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 0,
    height: 100,
  },
  title: {
    height: scale(40),
    padding: sizeValues.size10,
    justifyContent: 'center',
    backgroundColor: colors.brandColor,
  },
  titleLabel: {
    color: colors.white,
  },
  row: {
    backgroundColor: colors.brandColor,
    marginBottom: 10,
    borderRadius: 5,
    padding: 16,
  },
  color: {
    color: colors.white,
  },
});

export default styles;
