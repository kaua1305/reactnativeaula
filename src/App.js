import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import ListaProdutos from "./componentes/produto/ListaProdutos"
import ListaProdutoV2 from "./componentes/produto/ListaProdutoV2"
import { SafeAreaView } from "react-native-safe-area-context"

// const Stack = createNativeStackNavigator()

export default () => (
   <SafeAreaView style={styles.TelaIniciante}>
    <ListaProdutoV2/>
   </SafeAreaView>
)

const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

