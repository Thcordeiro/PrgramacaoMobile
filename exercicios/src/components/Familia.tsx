import React from "react";
import Membro from "./Membro";
import { Text } from "react-native";
import Padrao from "./Styles/Padrao";


export default (props: any) =>(
    <>
      <Text style= {Padrao.textoDestaque}>Membros da Familia</Text>
      {props.children}
    </>
)
