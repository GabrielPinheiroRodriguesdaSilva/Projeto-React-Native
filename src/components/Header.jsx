import React from 'react';
import { View, Text } from 'react-native';
import Title from './Title';
import { colors } from '../theme';
export default function Header({ title, subtitle, children }) {
  return <View style={{ marginBottom: 28 }}><Text style={{ color: colors.primary, fontSize: 12, fontWeight: '800', letterSpacing: 2, marginBottom: 12 }}>MY APP / EXPLORAR</Text><View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}><View style={{ flex: 1 }}><Title>{title}</Title>{subtitle && <Text style={{ color: colors.muted, lineHeight: 22, marginTop: 10 }}>{subtitle}</Text>}</View>{children}</View></View>;
}
