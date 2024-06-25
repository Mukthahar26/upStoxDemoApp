import React, {memo, useEffect, useState} from 'react';
import StockHoldingList from '../../components/blockComponents/stockHoldingList';
import {fetchStockHoldings} from './service';
import {UserHoldingType} from '../../globalData/globalProps';
import ContainerView from '../../components/baseComponents/ContainerView';
import {isArray} from '../../utilities/utils';
import styles from './styles';
import AppText from '../../components/baseComponents/AppText';
import {FlatList, View} from 'react-native';
import {fetchGetRequest} from '../../fetchApicalls/axiosInstance';

const StockHolding = () => {
  const [holdingResponse, setHoldingResponse] = useState<UserHoldingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchGetRequest(
      'https://api.test.datacite.org/providers/caltech/dois?page[size]=10000',
    );
    console.log('fkaresponsekjlfjaslkfdjalk :', response);
    setHoldingResponse(response.data);
    setLoading(false);
  };

  const renderItem = ({item}: any) => {
    const {nameType, name, givenName, familyName} = item.attributes.creators[0];
    console.log('fkakjlfjaslkfdjalk :', item.attributes.creators);
    return (
      <View style={styles.row}>
        <AppText style={styles.color}>{nameType}</AppText>
        <AppText style={styles.color}>{name}</AppText>
        <AppText style={styles.color}>{givenName}</AppText>
        <AppText style={styles.color}>{familyName}</AppText>
      </View>
    );
  };

  return (
    <ContainerView
      isLoading={loading}
      isScrollRequired={false}
      containerStyle={styles.container}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={holdingResponse}
        renderItem={renderItem}
      />
    </ContainerView>
  );
};

export default StockHolding;
