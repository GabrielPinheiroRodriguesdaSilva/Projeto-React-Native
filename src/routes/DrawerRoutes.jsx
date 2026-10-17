import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import { drawerOptions, drawerItem } from './options';
const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
  return <Drawer.Navigator screenOptions={drawerOptions}><Drawer.Screen name="home" component={Home} options={drawerItem('Início', 'home')} /><Drawer.Screen name="product" component={Product} options={drawerItem('Produtos', 'inventory-2')} /><Drawer.Screen name="profile" component={Profile} options={drawerItem('Perfil', 'person')} /><Drawer.Screen name="settings" component={Settings} options={drawerItem('Configurações', 'settings')} /></Drawer.Navigator>;
}
