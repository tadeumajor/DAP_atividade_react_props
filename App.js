import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import BemVindo from './components/BemVindo';
import Dados from './components/Dados';
import DadosComProps from './components/DadosComProps';
import AlteraMensagem from './components/AlteraMensagem';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <BemVindo/>
      <Dados/>
      <DadosComProps
      nome="Nome 02"
      apelido="Apelido 02"
      idade={30} 
      />
      <AlteraMensagem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
