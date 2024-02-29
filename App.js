import { useState } from "react";
import { Estilo } from "./components/Estilo"
import { ImageBackground, Switch, Text, View } from 'react-native';

export default function App() {
  let lista = useState(false)
  let done = lista[0]
  let setDone = lista[1]
  let palavra = 'Não concluido'
  function apertado(){
    alert('Apertado')
  }
  function mudarDone(){
    setDone(!done)
  }
  return (
    <View style={{
      display: "flex",
      backgroundColor: '#505050',
      padding: '5px', position: 'absolute', width: '100%', height: '100%', alignItems: "center", justifyContent: "center", flex: 2,
    }}>
      <View>
        <Estilo texto="Nome: " />
        <Estilo texto="Termino: " />
        <select style={{ backgroundColor: '##FFFFFF', borderRadius: '5px', height:'40%', }}>
          <option value=''>Choose priority</option>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
        <Switch  value={done} onValueChange={mudarDone}/>
      </View>

    </View>
  );
}

