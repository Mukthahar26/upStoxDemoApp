import {StyleSheet} from 'react-native';
import sizeValues from '../../themes/sizeValues';
import {scale} from 'react-native-size-matters';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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
});

export default styles;
