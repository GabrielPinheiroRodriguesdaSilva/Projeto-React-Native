import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Page from '../components/Page';
import Header from '../components/Header';
import { colors } from '../theme';
const products = [{ name: 'Fone sem fio', detail: 'Som para acompanhar seu dia', icon: 'headphones', price: 'R$ 149,90' }, { name: 'Relógio inteligente', detail: 'Sua rotina em movimento', icon: 'watch', price: 'R$ 249,90' }, { name: 'Caixa de som', detail: 'Música em qualquer lugar', icon: 'speaker', price: 'R$ 199,90' }];
export default function Product() {
  return <Page><Header title="Produtos" subtitle="Três ideias para conectar sua rotina." />{products.map(item => <View key={item.name} style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 16, flexDirection: 'row', alignItems: 'center', gap: 16 }}><MaterialIcons name={item.icon} size={34} color={colors.primary} /><View style={{ flex: 1 }}><Text style={{ color: colors.text, fontWeight: '700', fontSize: 17 }}>{item.name}</Text><Text style={{ color: colors.muted, marginTop: 6 }}>{item.detail}</Text><Text style={{ color: colors.primary, marginTop: 12, fontWeight: '700' }}>{item.price}</Text></View></View>)}</Page>;
}
