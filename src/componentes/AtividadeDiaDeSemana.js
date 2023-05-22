import React, { useState } from "react";
import { Text, Button } from "react-native";
import Estilo from "./Estilo";

export default props => {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const [Dia, setDia] = useState(0)

    const executar = () => {
        const novoDia = (Dia + 1) % diasDaSemana.length
        setDia(novoDia)
    }

    const executar2 = () => {
        const novoDia = (Dia + 2) % diasDaSemana.length
        setDia(novoDia)
    }

    const voltar = () => {
        const novoDia = (Dia - 1 + diasDaSemana.length) % diasDaSemana.length;
        setDia(novoDia)
    }

    return (
        <>
            <Text style={Estilo.txtGrande}>Dia da semana: {diasDaSemana[Dia]}</Text>
            <Button
                title="Próximo dia"
                onPress={executar}
            />
            <Button
                title="Próximo dois dias seguintes"
                onPress={() => {
                    executar2();
                    executar2();
                }}
            />
            <Button
                title="Dia anterior"
                onPress={voltar}
            />
            
        </>
    )
}