import {StyleSheet} from 'react-native';
import sizeValues from '../../../themes/sizeValues';
import colors from '../../../themes/colors';
sizeValues;

const styles = StyleSheet.create({
  item: {
    padding: sizeValues.size10,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '700',
  },
  row1: {
    marginTop: sizeValues.size16,
  },
});

export default styles;
