
import React, { useState } from 'react'
import './App.css';
import SearchBar from './components/Search';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Trolley from './components/Trolley';
import ProductInfo from './components/ProductInfo';
import CheckOut from './components/CheckOut';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [searchVar, setSearchVar] = useState("hola"); //searchvar es el id del producto en la barra de búsqueda
  const [infoUsuario,setInfoUsuario]= useState({});
  const cantidadCarrito=carrito.length;
  console.log(cantidadCarrito); //Tamaño arreglo de productos en carrito :)
    return (
      <div className="App">
        <BrowserRouter>
          <Header cantidad={cantidadCarrito}/>
          <Container><h1>Welcome to ShoppyFast!<br />lets start entering your product code!</h1>
            <SearchBar searchVar={searchVar} setSearchVar={setSearchVar} />
          </Container>
          <Routes>
            <Route path='carrito' element={<Trolley carrito={carrito} setCarrito={setCarrito} />} />
            <Route path='/producto/:id' element={<ProductInfo setCarrito={setCarrito} carrito={carrito} />} />
            <Route path='userInfo' element={<CheckOut infoUsuario={infoUsuario} setInfoUsuario={setInfoUsuario}/>} />
          </Routes>
        </BrowserRouter>
      </div>



    );
  }

  export default App;
