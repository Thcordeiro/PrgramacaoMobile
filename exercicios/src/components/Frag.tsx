import React from "react";
import { Text } from "react-native";

export default (props: any) => {
    <>
        <Text>{props.titulo}</Text>
        <Text>{props.subtitulo}</Text>
    </>
}