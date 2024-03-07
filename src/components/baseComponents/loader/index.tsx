import {ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../../../themes/colors';

type Props = {
  color?: string;
};
const Loader = ({color}: Props) => {
  return <ActivityIndicator color={color} />;
};

Loader.defaultProps = {
  color: colors.black,
};

export default Loader;
