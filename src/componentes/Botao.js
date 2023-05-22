import React, { Fragment } from "react";
import { Button} from "react-native";

export default props => {
    function executar() {
        console.warn("Esta executando!!!")
    }
    return (
        <>
        <Button
            title="Botão número 1"
            onPress={executar}
            />
        <Button
            title="Botão número 2"
            onPress={function() {
                console.warn("Está executando o botão número 2!!!")
            }}

            />
        <Button
            title="Botão número 3"
            onPress={() => {
                console.warn("Está executando o botão número 3!!!")
            }}/>
        </>

        
    )
}