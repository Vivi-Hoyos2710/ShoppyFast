
import React, { useState } from 'react'
import './App.css';
import SearchBar from './components/Search';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Trolley from './components/Trolley';
import ProductInfo from './components/ProductInfo';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [searchVar, setSearchVar] = useState("hola"); //searchvar es el id del producto en la barra de búsqueda

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Container><h1>Welcome to ShoppyFast!<br />lets start entering your product code!</h1>
            <SearchBar searchVar={searchVar} setSearchVar={setSearchVar} />
          </Container>
          <Routes>
            <Route path='carrito' element={<Trolley carrito={carrito} setCarrito={setCarrito} />} />
            <Route path='/producto/:id' element={<ProductInfo setCarrito={setCarrito} carrito={carrito} />} />
          </Routes>
        </BrowserRouter>
      </div>



    );
  }

  export default App;
