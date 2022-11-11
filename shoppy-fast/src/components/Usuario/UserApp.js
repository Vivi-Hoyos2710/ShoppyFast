
import React, { useState, useEffect } from 'react'
import SearchBar from './Search';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trolley from './Trolley';
import ProductInfo from './ProductInfo';
import UserForm from './UserForm';
import IngresarCupon from './IngresarCupon';
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

  const [total, setTotal] = useState(0);
  const [cupon,setCupon]=useState({
    "codigo_cupon": "",
    "descuento": 0,
});
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
          <Route path='/' element={<SearchBar cantidad={itemCantidad} />} />
          <Route path='carrito' element={<Trolley eliminarItem={eliminarItem} agregarProducto={agregarProducto} total={total} setTotal={setTotal} carrito={carrito} setCarrito={setCarrito} cupon={cupon}/>} />
          <Route path='/producto/:id' element={<div><SearchBar cantidad={itemCantidad} /><ProductInfo agregarProducto={agregarProducto} setCarrito={setCarrito} carrito={carrito} /></div>} />
          <Route path='userInfo' element={<UserForm setInfoUser={setInfoUser} infoUsuario={infoUser} />} />
          <Route path='factura' element={<Bill infoUser={infoUser} carrito={carrito} total={total}/>} />
          <Route path='admin' element={<Login />} />
          <Route path='ingresarcupon' element={<IngresarCupon setCupon={setCupon}/>} />
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
