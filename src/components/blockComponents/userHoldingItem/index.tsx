import React from 'react';
import {View} from 'react-native';
import AppText from '../../baseComponents/AppText';
import styles from './styles';
import {UserHoldingType} from '../../../globalData/globalProps';
import {RUPEESSYMBOL} from '../../../enumContants.ts/constants';
import {getFloatingValues} from '../../../utilities/utils';

const UserHoldingItem = ({
  item: {ltp, quantity, profitLossValue, symbol},
}: {
  item: UserHoldingType;
}) => {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <AppText style={styles.label}>{symbol}</AppText>
        <AppText>
          LTP:
          {
            <AppText
              style={styles.label}>{` ${RUPEESSYMBOL} ${getFloatingValues(
              ltp,
            )}`}</AppText>
          }
        </AppText>
      </View>
      <View style={[styles.row, styles.row1]}>
        <AppText>{quantity}</AppText>
        <AppText>
          P/L:
          {
            <AppText
              style={styles.label}>{` ${RUPEESSYMBOL} ${getFloatingValues(
              profitLossValue,
            )}`}</AppText>
          }
        </AppText>
      </View>
    </View>
  );
};

export default UserHoldingItem;
