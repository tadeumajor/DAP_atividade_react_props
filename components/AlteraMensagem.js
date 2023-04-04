import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const AlteraMensagem = () => {
  const [mensagemAtual, setMensagemAtual] = useState('Mensagem 1');

  const alternaMensagem = () => {
    if (mensagemAtual === 'Mensagem 1') {
      setMensagemAtual('Mensagem 2');
    } else {
      setMensagemAtual('Mensagem 1');
    }
  };

  return (
    <View>
      <Text>{mensagemAtual}</Text>
      <Button title="Muda mensagem" onPress={alternaMensagem} />
    </View>
  );
};

export default AlteraMensagem;