import React from "react";
import { Text } from "react-native";
import Padrao from "../Styles/Padrao";

export default (props: any) => {
    <>
        <Text>{props.titulo}</Text>
        <Text>{props.subtitulo}</Text>
    </>
}