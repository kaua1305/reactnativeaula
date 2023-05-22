import React from "react"
import {Text} from 'react-native'
import Estilo from "./Estilo"


export default props =>{
// console.warn(param)
    return(
        <Text style={Estilo.txtGrande}>
            O valor {props.max} é maior que {props.min}
        </Text>
    )

} 