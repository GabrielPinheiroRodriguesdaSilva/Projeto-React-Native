import React from 'react';
import { Text } from 'react-native';
import { colors } from '../theme';
export default function Title({ children }) {
  return <Text accessibilityRole="header" style={{ color: colors.text, fontSize: 28, fontWeight: '800' }}>{children}</Text>;
}
