import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import { headerOptions } from './options';
const Stack = createNativeStackNavigator();
export default function StackRoutes({ nested = false }) {
  return <Stack.Navigator screenOptions={{ ...headerOptions, animation: 'slide_from_right' }}><Stack.Screen name="home" component={Home} options={{ title: 'Início', headerShown: !nested }} /><Stack.Screen name="product" component={Product} options={{ title: 'Produtos' }} /></Stack.Navigator>;
}
