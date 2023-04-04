import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Dados() {
    let nome="Pessoa 01"
    let apelido ="Apelido 01"
    let idade = 20

  return (
   

    <View style={styles.container}>
      <Text style={styles.paragraph}>
      nome: {nome} <br/>
      apelido: {apelido} <br/>
      idade: {idade} <br/>

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
