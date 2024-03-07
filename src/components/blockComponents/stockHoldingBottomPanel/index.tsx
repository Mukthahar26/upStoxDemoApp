import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import AppButton from '../../baseComponents/AppButton';
import UnderLine from '../../baseComponents/underLine';
import {
  getCurrentTotal,
  getFloatingValues,
  getInvestmentTotal,
  getProfitlLossTotal,
  getTodaysProfitlLoss,
} from '../../../utilities/utils';
import {UserHoldingType} from '../../../globalData/globalProps';

type Props = {
  list: UserHoldingType[];
};
const StockHoldingBottomPannel = ({list}: Props) => {
  const [shouldExpand, setShouldExpand] = useState(false);
  let dataList: any = [
    {
      label: 'Profit and Loss:',
      value: getProfitlLossTotal(list),
      isProfit: true,
    },
  ];

  if (shouldExpand)
    dataList.unshift(
      ...[
        {label: 'Current Value:', value: getCurrentTotal(list)},
        {label: 'Total Investment:', value: getInvestmentTotal(list)},
        {label: "Today's Profit and Loss:", value: getTodaysProfitlLoss(list)},
      ],
    );
  const expand = () => setShouldExpand(!shouldExpand);

  return (
    <View style={styles.container}>
      <AppButton onPress={expand}>
        <UnderLine style={styles.underline} />
      </AppButton>
      {dataList.map((item: any) => (
        <View style={[styles.row, item.isProfit && styles.profitRow]}>
          <AppText style={styles.label}>{item.label}</AppText>
          <AppText>{getFloatingValues(item.value)}</AppText>
        </View>
      ))}
    </View>
  );
};

export default StockHoldingBottomPannel;
