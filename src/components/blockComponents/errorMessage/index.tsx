import React from 'react';
import {View, Text} from 'react-native';
import {Props} from './props';
import styles from './styles';
import {ErrorMessageTypes} from '../../../enumContants.ts/enums';

const ErrorMessage = ({type, message}: Props) => {
  if (type === ErrorMessageTypes.SimpleText)
    return (
      <View style={styles.container}>
        <Text>{message ?? 'Error Occured'}</Text>
      </View>
    );
};

export default ErrorMessage;
