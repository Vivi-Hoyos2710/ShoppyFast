import React,{useState}from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../Usuario/Header';
import Inventario from './Inventario';
import CrearProducto from './CrearProducto';
import CrearCupon from './CrearCupon';

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
                <Route path="inventario/:id/editar/" element={<CrearProducto admin={admin} />} />
                <Route path='/crearcupon' element={<CrearCupon admin={admin} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AdminApp;
