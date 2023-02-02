//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Contador from './components/Contador';

function App() {
  const [valor, setValor]=useState(0);

  const incrementarHandler=()=>{
    console.log("Incrementando");
    setValor(valor+1)
  }
  const DecrementarHandler=()=>{
    console.log("Decrementando");
    setValor(valor-1)
  }
  return (
    <div className="App App-header">
      <Contador valor={valor}/>
      <div>
        <button className='botn-size boton-mas ' onClick={incrementarHandler}>+</button>
        <button className='botn-size boton-reiniciar' onClick={()=> setValor(0)}>Clear</button>
        <button className='botn-size boton-menos' onClick={DecrementarHandler}>-</button>
      </div>
    </div>
  );
}

export default App;
