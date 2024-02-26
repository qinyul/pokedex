import {ScrollViewProps} from '../../types/components/scrollview';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView as ScrollViewReact,
  Dimensions,
} from 'react-native';
import {useCallback} from 'react';
import {ON_SCROLL_END_TIMEOUT} from '../../constants/common';
import {useSetRecoilState} from 'recoil';
import {loadingState} from '../../atoms/loading-state';

export const ScrollView = ({children, onReachEnd}: ScrollViewProps) => {
  const setIsLoading = useSetRecoilState(loadingState);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    return paddingToBottom > 90;
  };
  let debounceFn: any;

  const handleOnScroll = useCallback(
    ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (isCloseToBottom(nativeEvent) && onReachEnd) {
        setIsLoading(true);
        if (debounceFn) {
          clearTimeout(debounceFn);
        }

        debounceFn = setTimeout(() => {
          onReachEnd();
        }, ON_SCROLL_END_TIMEOUT);
      }
    },
    [],
  );
  return (
    <ScrollViewReact
      style={{marginTop: 10}}
      scrollEventThrottle={400}
      onScroll={handleOnScroll}>
      {children}
    </ScrollViewReact>
  );
};
