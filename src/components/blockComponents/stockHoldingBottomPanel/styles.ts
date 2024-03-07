import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import globalStyle from '../../../globalData/globalStyle';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: sizeValues.size10,
    borderTopLeftRadius: sizeValues.size10,
    borderTopRightRadius: sizeValues.size10,
    ...globalStyle.elevationStyle,
  },
  underline: {
    width: '20%',
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.black40,
  },
  label: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizeValues.size10,
  },
  profitRow: {
    marginTop: sizeValues.size16,
  },
});

export default styles;
