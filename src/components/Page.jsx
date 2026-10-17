import React from 'react';
import { ScrollView } from 'react-native';
import { colors } from '../theme';
export default function Page({ children }) {
  return <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 24, paddingBottom: 40, flexGrow: 1 }}>{children}</ScrollView>;
}
