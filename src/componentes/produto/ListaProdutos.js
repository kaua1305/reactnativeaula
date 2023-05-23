import React from "react";
import { Text } from "react-native";
import Estilo from "../Estilo";

import Produto from "./Produto";

export default props => {
function obterLista(){
    return Produto.map(p => {
        return <Text key={p.id}>{p.id} - {p.nome} tem R$ {p.preco} </Text>
    })
}
    return (
        <>
            <Text style={Estilo.txtGrande}>
                Lista de produtos
            </Text>
            {obterLista()}
        </>
    )
}