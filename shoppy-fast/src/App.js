
import React, { useState } from 'react'
import SearchBar from './components/Search';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Trolley from './components/Trolley';
import ProductInfo from './components/ProductInfo';
import UserForm from './components/UserForm';
import { Bill } from './components/Bill';
const initialForm = {
  "name": "",
  "surname": "",
  "document": 0,
  "number": 0,
  "email": ""
};

function App() {
  const [carrito, setCarrito] = useState([]);
  const [searchVar, setSearchVar] = useState(""); //searchvar es el id del producto en la barra de búsqueda
  const [total, setTotal] = useState(0);
  const cantidadCarrito=carrito.length;
  const [infoUser,setInfoUser]=useState(initialForm);
  
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<SearchBar searchVar={searchVar} setSearchVar={setSearchVar} cantidad={cantidadCarrito}/>}/>
            <Route path='carrito' element={<Trolley total={total} setTotal={setTotal} carrito={carrito} setCarrito={setCarrito} />} />
            <Route path='/producto/:id' element={<div><SearchBar searchVar={searchVar} setSearchVar={setSearchVar} cantidad={cantidadCarrito}/><ProductInfo setCarrito={setCarrito} carrito={carrito} /></div>} />
            <Route path='userInfo' element={<UserForm setInfoUser={setInfoUser} infoUsuario={infoUser}/>} />
            <Route path='factura' element={<Bill infoUser={infoUser} carrito={carrito} total={total}/>}/>
          </Routes>
        </BrowserRouter>
      </div>



    );
  }

  export default App;
