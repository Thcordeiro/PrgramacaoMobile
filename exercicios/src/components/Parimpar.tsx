import React from "react";
import { Text } from "react-native";
import Padrao from "./Styles/Padrao";

function getResultado(num: number){
    const resultado = num %2==0 ? 'Par' : 'Impar';

    return resultado
}

export default (props:{numero:number}) => (
    <Text style={Padrao.ex}>{getResultado(props.numero)} </Text>
)

   

            
