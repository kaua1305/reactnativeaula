import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"

export default () => (
    <SafeAreaView style={styles.TelaIniciante}>
    <Familia>
        <Membro nome="Jorge" sobrenome="Pereiras"/>
        <Membro nome="Ednaldo" sobrenome="Pereiras"/>
        <Membro nome="Marcinho" sobrenome="Pereiras"/>
        <Membro nome="Roberta" sobrenome="Pereiras"/>
    </Familia>
    <Familia>
        <Membro nome="Lucas" sobrenome="da Silva"/>
        <Membro nome="Fernando" sobrenome="da Silva"/>
        <Membro nome="Jorge" sobrenome="da Silva"/>
        <Membro nome="Marcia" sobrenome="da Silva"/>
        </Familia>
   </SafeAreaView>
)
const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

