import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {PropsType} from './props';
import {UserHoldingType} from '../../../globalData/globalProps';
import UserHoldingItem from '../userHoldingItem';
import ErrorMessage from '../errorMessage';
import {ErrorMessageTypes} from '../../../enumContants.ts/enums';
import UnderLine from '../../baseComponents/underLine';
import StockHoldingBottomPannel from '../stockHoldingBottomPanel';

const StockHoldingList = ({list, error}: PropsType) => {
  const renderItem = ({item}: {item: UserHoldingType}) => {
    return <UserHoldingItem item={item} />;
  };

  if (error)
    return <ErrorMessage type={ErrorMessageTypes.SimpleText} message={error} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={styles.contentListStyle}
        ItemSeparatorComponent={() => <UnderLine style={styles.underline} />}
      />
      <StockHoldingBottomPannel list={list} />
    </View>
  );
};

export default StockHoldingList;
