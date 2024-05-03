import React, {useState}from 'react'; 
import { Button, Text } from 'react-native';
import Padrao from './Styles/Padrao';



export default(props: any) => {
    const [count, setcount] = useState(0);
  
    const increment = () => {
    setcount(count +1)
  }
  const decrement = () =>{
    if(count > 0){
      setcount(count -1)
    }
    else{
      console.warn("Erro: operação inválida")
    }
  }

  return (
    <>
     <Text style={Padrao.textoDestaque}>{count} </Text>
    
     <Button  
        title='+'
        onPress={increment}
      />
     
     <Button  
        title='-'
        onPress={decrement}
      />

    </>
   )
 }
 

 