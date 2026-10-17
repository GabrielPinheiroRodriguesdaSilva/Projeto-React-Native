import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Page from '../components/Page';
import Header from '../components/Header';
import { colors } from '../theme';
export default function Settings() {
  return <Page><Header title="Configurações" subtitle="Tudo organizado do seu jeito." /><View style={{ backgroundColor: 'white', borderRadius: 24, padding: 28, gap: 20 }}><MaterialIcons name="settings" size={52} color={colors.primary} /><Text style={{ color: colors.text, fontSize: 19, fontWeight: '700' }}>My App • versão 1.0.0</Text><Text style={{ color: colors.muted, lineHeight: 24 }}>Projeto de estudo dos navegadores Stack, Bottom Tabs e Drawer.</Text></View></Page>;
}
