import React from 'react';
import {View, ViewStyle} from 'react-native';

export const Column = ({
  customStyle,
  children,
}: {
  customStyle?: ViewStyle;
  children: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...(customStyle && {
          ...customStyle,
        }),
      }}>
      {children}
    </View>
  );
};
