import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./components/Simples";
import Familia from "./components/Familia";
import Membro from "./components/Membro";
import FamiliaJson from "./components/FamiliaJson";
import UsusarioLogado from "./components/UsusarioLogado";
import Botao from "./components/Botao";
import Contador from "./components/Contador";


const membrosFamilia1 = [
  { "nome": "Rodrigo", "sobreNome": "Silva"},
  { "nome": "Luciana", "sobreNome": "Alvarenga"}
]
const membrosFamilia2 = [
  { "nome": "Alfredo", "sobreNome": "Silva"},
  { "nome": "João", "sobreNome": "Silva"},
  { "nome": "Maria", "sobreNome": "Silva"}
]

export default class App extends Component {
  render() {
    return(
      <View style={style.container}>
      {/*<Text style=(styles.fonte)>olá mundo</Text>
      <Simples text="Simples!"/>*/}
      {/*Frag titulo="Titulo"
    subtitulo="Sub titulo"  /> */}
    {/*<Parimpar numero={10} /></View>*/}
    

   { /* <FamiliaJson membros={membrosFamilia1}/>
    <FamiliaJson membros={membrosFamilia2}/> */}

  {/*<UsusarioLogado usuario={ {"nome":"teste" , email:"teste@teste.com"} }/>*/}

 {/* <Botao />*/}

 <Contador/>

 

    
    
    

    

    </View>
       
    );
  

      }   
    }

    const style = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      fonte: {
        fontSize:40
      }
    }

    )
