import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Simple from "./Relacao/Simple";
import Frag from "./Relacao/Frag";
import ParImpar from "./Relacao/ParImpar";
import Familia from "./Relacao/Familia";
import Membro from "./Relacao/Membro";


function Nomes(nome1: string, nome2: string){
  return <Membro nome={nome1} sobrenome={nome2} />
}


export default class App extends Component {
  render(){
    
    return(
      <View style={styles.container}>
        {/*<Text style={styles.fonte}>Olá Mundo</Text>
        <Simple text="Simples!"/>*/}
        {/*<Frag title="Título" subTitle="Sub título." />*/}
        {/*<ParImpar number={10}/>*/}

        <Familia>
        {Nomes("Thiago", "Cordeiro")}
        {Nomes("Lionel", "Messi")}
      </Familia>
      
      </View>
    );

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonte: {
    fontSize: 40
  }
})