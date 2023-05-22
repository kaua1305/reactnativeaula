import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function ExercicioScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Segundaria</Text>
      <Button title="Ir para o contador" onPress={() => navigation.navigate('ContadorV2')}/>
      <Button title="Ir para o aleatorio" onPress={() => navigation.navigate({
        name: 'Aleatorio',
        params: { max: numeroAleatorio} })} />
      <Button title="Voltar para a página anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}