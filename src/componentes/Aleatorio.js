import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './Estilo';

function gerarNumeroAleatorio(miny, maxx) {
  return Math.floor(Math.random() * (maxx - miny + 1)) + miny;
}

const Aleatorio = ({ miny, maxx }) => {
  const numeroAleatorio = gerarNumeroAleatorio(0, 100);

  return (
    <View>
      <Text style={Estilo.txtGrande}>Número Aleatório: {route.params?.max}</Text>
    </View>
  );
};

export default Aleatorio;

{/* <Aleatorio miny={1} maxx={100} /> */}


