import {ViewStyle} from 'react-native-size-matters';
import {ErrorMessageTypes} from '../../../enumContants.ts/enums';

export type Props = {
  type: ErrorMessageTypes;
  message?: string;
  style?: ViewStyle;
};
