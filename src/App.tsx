import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigations/rootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
