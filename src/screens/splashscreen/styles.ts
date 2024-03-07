import {StyleSheet} from 'react-native';
import sizeValues from '../../themes/sizeValues';
import {scale} from 'react-native-size-matters';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brandColor,
  },
  splashImage: {
    resizeMode: 'center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
