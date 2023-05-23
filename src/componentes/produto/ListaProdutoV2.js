import React from "react";
import { Text, FlatList } from "react-native";
import Estilo from "../Estilo";

import Produto from "./Produto";

export default props => {

    return (
        <>
            <Text style={Estilo.txtGrande}>
                Lista de produtos Versão 2
            </Text>
            <FlatList
                data={Produto}
                keyExtractor={i => `${i.id}`}
                renderItem={({item: p}) => {
                    return <Text>{p.id} - {p.nome} tem R$ {p.preco}</Text>
                }}
            />
        </>
    )
}