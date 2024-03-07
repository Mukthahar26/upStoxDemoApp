import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {splashImage} from '../../utilities/imagePaths';
import {ScreenNames} from '../../enumContants.ts/constants';
import {RootStackParamList} from '../../navigations/rootNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.SPLASHSCREEN
>;
const SplashScreen = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ScreenNames.HOME);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={splashImage} style={styles.splashImage} />
    </View>
  );
};

export default SplashScreen;
