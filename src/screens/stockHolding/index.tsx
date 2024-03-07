import React, {useEffect, useState} from 'react';
import StockHoldingList from '../../components/blockComponents/stockHoldingList';
import {fetchStockHoldings} from './service';
import {UserHoldingType} from '../../globalData/globalProps';
import ContainerView from '../../components/baseComponents/ContainerView';
import {isArray} from '../../utilities/utils';
import styles from './styles';
import AppText from '../../components/baseComponents/AppText';
import {View} from 'react-native';

const StockHolding = () => {
  const [holdingResponse, setHoldingResponse] = useState<UserHoldingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    setLoading(true);
    setError('');
    const result = await fetchStockHoldings();
    if (isArray(result)) setHoldingResponse(result as UserHoldingType[]);
    else setError('Something went wrong');
    setLoading(false);
  };

  return (
    <ContainerView
      isLoading={loading}
      isScrollRequired={false}
      containerStyle={styles.container}>
      <View style={styles.title}>
        <AppText style={styles.titleLabel}>Upstox Holding</AppText>
      </View>
      <StockHoldingList error={error} list={holdingResponse} />
    </ContainerView>
  );
};

export default StockHolding;
