import React from 'react';
import {View, FlatList, ViewStyle} from 'react-native';
import styles from './styles';
import Loader from '../loader';

type props = {
  children: any;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  headerName?: string;
  mainContainerStyle?: ViewStyle;
  isScrollRequired: boolean;
  isLoading?: boolean;
};
const ContainerView = ({
  children,
  style,
  containerStyle,
  mainContainerStyle,
  isScrollRequired,
  isLoading,
}: props) => {
  if (isLoading)
    return (
      <View style={styles.loadingView}>
        <Loader />
      </View>
    );
  return (
    <View style={[{flex: 1}, mainContainerStyle]}>
      {isScrollRequired ? (
        <FlatList
          data={[{}]}
          contentContainerStyle={[styles.container, style]}
          renderItem={() => <View style={[containerStyle]}>{children}</View>}
        />
      ) : (
        <View style={[styles.container, containerStyle]}>{children}</View>
      )}
    </View>
  );
};

ContainerView.defaultProps = {
  shouldGoBackEnable: true,
  headerName: '',
  isScrollRequired: true,
};

export default ContainerView;
