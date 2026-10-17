import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import StackRoutes from './StackRoutes';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import { tabOptions, productTabOptions, drawerOptions } from './options';
import { colors } from '../theme';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const items = [{ name: 'homeStack', label: 'Início', icon: 'home' }, { name: 'product', label: 'Produtos', icon: 'inventory-2' }, { name: 'profile', label: 'Perfil', icon: 'person' }, { name: 'settings', label: 'Configurações', icon: 'settings' }];
function HomeStack() { return <StackRoutes nested />; }
function NestedTabs() {
  return <Tab.Navigator screenOptions={props => ({ ...tabOptions(props), headerShown: false })}><Tab.Screen name="homeStack" component={HomeStack} options={{ title: 'Início' }} /><Tab.Screen name="product" component={Product} options={productTabOptions} /><Tab.Screen name="profile" component={Profile} options={{ title: 'Perfil' }} /><Tab.Screen name="settings" component={Settings} options={{ title: 'Configurações' }} /></Tab.Navigator>;
}
function Menu(props) {
  const tabState = props.state.routes[props.state.index].state;
  const current = tabState?.routes[tabState.index ?? 0]?.name ?? 'homeStack';
  return <DrawerContentScrollView {...props}>{items.map(item => <DrawerItem key={item.name} label={item.label} focused={current === item.name} activeTintColor={colors.primary} activeBackgroundColor="#dbeafe" icon={({ color, size }) => <MaterialIcons name={item.icon} color={color} size={size} />} onPress={() => { props.navigation.navigate('tabs', { screen: item.name }); props.navigation.closeDrawer(); }} />)}</DrawerContentScrollView>;
}
export default function NestedRoutes() {
  return <Drawer.Navigator screenOptions={drawerOptions} drawerContent={props => <Menu {...props} />}><Drawer.Screen name="tabs" component={NestedTabs} options={({ route }) => { const tab = getFocusedRouteNameFromRoute(route) ?? 'homeStack'; const state = route.state; const homeRoute = state?.routes.find(item => item.name === 'homeStack'); const inner = homeRoute?.state; const stackProduct = tab === 'homeStack' && inner?.routes[inner.index ?? 0]?.name === 'product'; return { title: items.find(item => item.name === tab)?.label ?? 'Início', headerShown: !stackProduct }; }} /></Drawer.Navigator>;
}
