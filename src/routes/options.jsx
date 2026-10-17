import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme';
export const headerOptions = { headerStyle: { backgroundColor: 'white' }, headerTintColor: colors.text, headerShadowVisible: false, headerTitleAlign: 'center', contentStyle: { backgroundColor: colors.background } };
export function tabOptions({ route }) {
  return { ...headerOptions, headerShown: true, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.muted, tabBarLabelPosition: 'below-icon', tabBarHideOnKeyboard: true, tabBarStyle: { height: 90, paddingTop: 8, paddingBottom: 24 }, tabBarLabelStyle: { fontSize: 10, marginBottom: 2 }, tabBarIcon: ({ focused, color, size }) => <MaterialIcons name={route.name === 'profile' ? (focused ? 'person' : 'person-outline') : ({ home: 'home', homeStack: 'home', product: 'inventory-2', settings: 'settings' }[route.name])} size={size} color={color} /> };
}
export const productTabOptions = { title: 'Produtos', tabBarBadge: 3, tabBarBadgeStyle: { backgroundColor: '#dc2626', color: 'white' } };
export function drawerItem(label, icon) {
  return { title: label, drawerLabel: label, drawerIcon: ({ color, size }) => <MaterialIcons name={icon} size={size} color={color} /> };
}
export const drawerOptions = { ...headerOptions, drawerActiveTintColor: colors.primary, drawerInactiveTintColor: colors.muted, drawerActiveBackgroundColor: '#dbeafe', swipeEnabled: true, swipeEdgeWidth: 60, drawerType: 'front' };
