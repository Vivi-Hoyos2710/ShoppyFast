import React,{useState}from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../Usuario/Header';
import Inventario from './Inventario';
import CrearProducto from './CrearProducto';

const adminForm={
    "email" : "",
    "password" : ""
  }
function AdminApp() {
    const [admin, setAdmin] = useState(adminForm);
    return (
        <BrowserRouter>
            <Header />
            <h1> </h1>
            <Routes>
                <Route path='/inventario' element={<Inventario admin={admin} />} />
                <Route path='/crearproducto' element={<CrearProducto admin={admin} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AdminApp;
