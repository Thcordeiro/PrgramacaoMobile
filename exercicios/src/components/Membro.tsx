import React from "react";
import { Text } from "react-native";
import Padrao from "./Styles/Padrao";

export default (props: any) => (
    <Text style={Padrao.bigText}>
        {props.nome} {props.sobrenome}
    </Text>
)

   