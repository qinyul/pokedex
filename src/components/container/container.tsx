import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {useRecoilValue} from 'recoil';
import {loadingState} from '../../atoms/loading-state';
import {Loading} from '../loading';
export const Container = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
  const isLoading = useRecoilValue(loadingState);

  return (
    <SafeAreaView style={styles.container}>
      {children}
      {isLoading && <Loading />}
    </SafeAreaView>
  );
};
