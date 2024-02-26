import {ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <>
      <ActivityIndicator
        size={'large'}
        color={'white'}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 10,
          backgroundColor: 'rgb(84, 180, 255)',
          padding: 10,
          borderRadius: 15,
        }}
      />
    </>
  );
};
