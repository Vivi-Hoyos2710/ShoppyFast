
import React, { useState, useEffect } from 'react'
import SearchBar from './Search';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trolley from './Trolley';
import ProductInfo from './ProductInfo';
import UserForm from './UserForm';
import { Bill } from './Bill';
import { agregarProducto, eliminarItem } from '../MetodosGlobales/TrolleyActions';
import Login from './Login';
import Header from './Header';
const initialForm = {
  "name": "",
  "surname": "",
  "document": 0,
  "number": 0,
  "email": ""
};

function App() {
  const [carrito, setCarrito] = useState([]);
  const [searchVar, setSearchVar] = useState(null); //searchvar es el id del producto en la barra de búsqueda
  const [total, setTotal] = useState(0);
  const [infoUser, setInfoUser] = useState(initialForm);
  const [itemCantidad, setItemCantidad] = useState(0); ///Cantidad de productos en carrito [el número que aparece arriba]
  useEffect(() => { ///calcular total de cantidades
    const cantidades = () => {
      setItemCantidad(carrito.reduce((obj, cur) => (obj + cur.quantity), 0))
    }
    cantidades()
  },[carrito]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<SearchBar searchVar={searchVar} setSearchVar={setSearchVar} cantidad={itemCantidad} />} />
          <Route path='carrito' element={<Trolley eliminarItem={eliminarItem} agregarProducto={agregarProducto} total={total} setTotal={setTotal} carrito={carrito} setCarrito={setCarrito} />} />
          <Route path='/producto/:id' element={<div><SearchBar searchVar={searchVar} setSearchVar={setSearchVar} cantidad={itemCantidad} /><ProductInfo agregarProducto={agregarProducto} setCarrito={setCarrito} carrito={carrito} /></div>} />
          <Route path='userInfo' element={<UserForm setInfoUser={setInfoUser} infoUsuario={infoUser} />} />
          <Route path='factura' element={<Bill infoUser={infoUser} carrito={carrito} total={total} />} />
          <Route path='admin' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
