import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TypographyProps} from '../../types/components/typography';

export const Typography = ({
  text,
  customStyle,
}: TypographyProps): React.JSX.Element => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'RobotoSlab-Light',
    },
  });

  return (
    <Text
      style={{
        ...styles.text,
        ...(customStyle && {
          ...customStyle,
        }),
      }}>
      {text}
    </Text>
  );
};
