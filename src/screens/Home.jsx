import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Page from '../components/Page';
import Header from '../components/Header';
import ButtonIcon from '../components/ButtonIcon';
import { colors } from '../theme';
export default function Home({ navigation }) {
  return <Page><Header title="Tudo começa aqui." subtitle="Conheça os produtos e explore seu aplicativo."><ButtonIcon name="add" label="Abrir produtos" onPress={() => navigation.navigate('product')} /></Header><View style={{ backgroundColor: colors.primary, borderRadius: 24, padding: 28, gap: 18 }}><MaterialIcons name="explore" size={52} color="#bfdbfe" /><Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>Um app, várias maneiras de navegar.</Text><Text style={{ color: '#dbeafe', lineHeight: 24 }}>Toque no + para abrir os produtos. A mesma tela funciona com pilha, abas e menu lateral.</Text></View><Text style={{ marginTop: 28, color: colors.muted, lineHeight: 24 }}>PROJETO DE AULA • REACT NATIVE + EXPO</Text></Page>;
}
