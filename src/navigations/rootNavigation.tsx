import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StockHolding from '../screens/stockHolding';
import SplashScreen from '../screens/splashscreen';
import {ScreenNames} from '../enumContants.ts/constants';

export type RootStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.SPLASHSCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.SPLASHSCREEN} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.HOME} component={StockHolding} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
