
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
  const [infoUser, setInfoUser] = useState(initialForm);
  const [itemCantidad, setItemCantidad] = useState(0); ///Cantidad de productos en carrito [el número que aparece arriba]

  //Funciones
  const eliminarItem = (id) => {

    
    const cantidadDeProductoAEliminar=carrito.filter((productos) => (productos.item.id == id))[0].quantity;
    const nuevaCantidad = itemCantidad -cantidadDeProductoAEliminar;
    if(nuevaCantidad>-1){
      setItemCantidad(nuevaCantidad);
    }
    if (window.confirm("¿Seguro quieres eliminar este producto del carrito?")) {
      const nuevoCarrito = carrito.filter((elemento) => elemento.item.id != id);
      setCarrito(nuevoCarrito);
    }
    

  };


  const agregarProducto = (item, quantity) => {
    const nuevaCantidad = itemCantidad + quantity;
    if(nuevaCantidad>-1){
      setItemCantidad(nuevaCantidad);
    }
    const existingItem = carrito.find(el => el.item.id === item.id);
    if (existingItem) {
      setCarrito(carrito.map((el) => {

        if (el.item.id === item.id && el.quantity > 0) {
          return {
            item: {
              ...el.item
            },
            quantity: el.quantity + quantity,
          };
        }

        return el;
      }))
    }

    else {
      setCarrito([...carrito, { item, quantity }]);
    }
  }

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
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
