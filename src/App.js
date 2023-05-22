import React from "react"
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Primeiro from './componentes/Primeiro'
// import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
// import Titulo from "./componentes/Titulo"
// import Botao from "./componentes/Botao"
// import Contador from "./componentes/Contador"
//import AtividadeDiaDeSemana from "./componentes/AtividadeDiaDeSemana"
// import Pai from "./componentes/Direta/Pai"
//import Pai from "./componentes/Indireta/Pai"
// import HomeScreen from "./componentes/HomeScreen"
// import DetailsScreen from "./componentes/DetailsScreen"
//import ContadorBotoes from "./componentes/Contador/ContadorBotoes"
import ExercicioScreen from "./componentes/ExercicioScreen"
import ExercicioScreen1 from "./componentes/ExercicioScreen1"
import Aleatorio from "./componentes/Aleatorio"
import ContadorV2 from "./componentes/Contador/ContadorV2"

const Stack = createNativeStackNavigator()

export default () => (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Exercicio" component={ExercicioScreen}/>
                <Stack.Screen name="Exercicios1" component={ExercicioScreen1}/>
                <Stack.Screen name="Aleatorio" component={Aleatorio}/>
                <Stack.Screen name="ContadorV2" component={ContadorV2}/>
            </Stack.Navigator>
        </NavigationContainer>

)

    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name="Home" component={HomeScreen}/>
    //         <Stack.Screen name="Details" component={DetailsScreen}/>
    //     </Stack.Navigator>
    //  </NavigationContainer>

        // {/*
        // <ContadorV2/>
        // <Pai/>
        // <Pai/>
        // <AtividadeDiaDeSemana inicial="Domingo"/>
        // <Contador inicial={100}/>
        // <Botao />
        // <Titulo principal="Cadastro Produto"
        //         secundario="Tela de Cadastro"/> 
        //  <Primeiro/>
        // <Text>1 + 2</Text>
        // <Text>O valor da soma de 1 + 2 = {1+2}</Text>
        // <Comp1/>
        // <Comp2/>
        // <Of/> 
        // <MinMax min="3" max="20"/>
        // <MinMax min="5" max="40"/>
        // <MinMax min="7" max="55"/>
        // <Aleatorio miny={1} maxx={100} />*/}



// export default App

const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

// function App(){
//     const jsx = <Text>Kaua Henrique</Text>
//     return jsx
// }

// const App = function () {
//     return <Text>Component 2</Text>
// }

// export default function(){
//     return <Text>Component 3</Text>
// }

// export default () => {
//     return <Text>Component 4</Text>
// }