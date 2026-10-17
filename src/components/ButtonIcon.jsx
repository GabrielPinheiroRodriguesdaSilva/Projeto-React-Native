import React from 'react';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme';
export default function ButtonIcon({ name, label, onPress }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={({ pressed }) => ({ backgroundColor: colors.primary, padding: 14, borderRadius: 18, opacity: pressed ? 0.7 : 1 })}><MaterialIcons name={name} size={26} color="white" /></Pressable>;
}
