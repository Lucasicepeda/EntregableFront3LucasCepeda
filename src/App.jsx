import { useState } from 'react'
import './App.css'
import './Card.css'
import Form from './Form'
import Card from "./Card";


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [usuarios, setUsuarios] = useState([])

  const addUsuario = (usuario)=>{
    setUsuarios([...usuarios,usuario]);
  }


  return (
    <div className="App">
      <h1>Cual es tu piloto favorito?</h1>
      <Form onAddUsuario={addUsuario}/>
      <Card usuarios={usuarios}/>
    </div>
  );
}

export default App;