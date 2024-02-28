import {ViewStyle} from 'react-native/types';

export interface ScrollViewProps {
  children: JSX.Element;
  onReachEnd?: () => void;
  contentContainerStyle?: ViewStyle;
}
