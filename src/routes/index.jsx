import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackRoutes from './StackRoutes';
import BottomRoutes from './BottomRoutes';
import DrawerRoutes from './DrawerRoutes';
import NestedRoutes from './NestedRoutes';
import { colors } from '../theme';
// Altere esta linha para : 'stack' | 'bottom' | 'drawer' | 'aninhado'.
const TIPO_DE_NAVEGACAO = 'stack';
const navigators = { stack: StackRoutes, bottom: BottomRoutes, drawer: DrawerRoutes, aninhado: NestedRoutes };
const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: colors.primary, background: colors.background } };
export default function Routes() {
  const Navigator = navigators[TIPO_DE_NAVEGACAO];
  if (!Navigator) throw new Error('TIPO_DE_NAVEGACAO inválido. Use stack, bottom, drawer ou aninhado.');
  return <NavigationContainer key={TIPO_DE_NAVEGACAO} theme={theme}><Navigator /></NavigationContainer>;
}
