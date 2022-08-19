
import React, { useState } from 'react'
import './App.css';
import SearchBar from './components/Search';
import { Container } from 'reactstrap';
function App() {
  const [carrito, setCarrito] = useState([]);
  const [searchVar, setSearchVar] = useState("hola"); //searchvar es el id del producto en la barra de búsqueda
  return (
    <div className="App">
      <Container><h1>Welcome to ShoppyFast!<br />lets start entering your product code!</h1>
        <SearchBar searchVar={searchVar} setSearchVar={setSearchVar} /></Container>


    </div>
  );
}

export default App;
