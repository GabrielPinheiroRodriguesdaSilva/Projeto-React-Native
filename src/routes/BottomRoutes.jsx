import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import { tabOptions, productTabOptions } from './options';
const Tab = createBottomTabNavigator();
export default function BottomRoutes() {
  return <Tab.Navigator screenOptions={tabOptions}><Tab.Screen name="home" component={Home} options={{ title: 'Início' }} /><Tab.Screen name="product" component={Product} options={productTabOptions} /><Tab.Screen name="profile" component={Profile} options={{ title: 'Perfil' }} /><Tab.Screen name="settings" component={Settings} options={{ title: 'Configurações' }} /></Tab.Navigator>;
}
