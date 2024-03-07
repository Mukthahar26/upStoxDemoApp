import sizeValues from '../../../themes/sizeValues';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: sizeValues.size10,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
