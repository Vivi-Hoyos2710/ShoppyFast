import { BsArrowsAngleContract } from 'react-icons/bs';

const axios = require('axios')
function conseguirConfiguracionDeAutenticacion() {
    return {
        headers: {
            'x-access-token': `${localStorage.getItem('tokenAdmin')}`
        }
    }
}
export function cerrarSesion() {
    localStorage.removeItem('tokenAdmin');
    window.location.href = '/';
}

export async function inicioSesion(email, password) {
    const datos = {
        "email": email,
        "password": password
    }
    try {
        const response = await axios.post(
            'https://shoppy-fast.herokuapp.com/api/admin/signin', datos

        )

        localStorage.setItem('tokenAdmin', response.data.token);
        window.location.href = '/inventario';

    } catch (error) {
        console.log("Error", error);
        alert("El usuario y contraseña ingresados son incorrectos por favor ingrese otro: " + error.response.data.message);
        return error.response.data
    }
}
export async function crearProducto(datosProducto) {
    try {
        const headers = conseguirConfiguracionDeAutenticacion();
        await axios.post('https://shoppy-fast.herokuapp.com/api/products', datosProducto, headers);
        window.location.href = '/inventario';
    } catch (error) {
        return error.response.data.msg
    }
}
export async function crearcupon(codigo, porcentaje) {
    const datosCupon = {
        "codigo_cupon": codigo,
        "descuento": porcentaje
    }
    console.log(datosCupon);
    const headers = conseguirConfiguracionDeAutenticacion();
    try {
        await axios.post('https://shoppy-fast.herokuapp.com/api/coupon', datosCupon, headers);
        alert("Cupón creado: "+datosCupon.codigo_cupon+" ");
        window.location.href = '/listacupones';
    } catch (error) {
        return error.response.data.msg
        
    }
}

export async function getAllCupones() {
    const response = await axios.get(
        `https://shoppy-fast.herokuapp.com/api/coupon`
    );
    return response.data;
}

export async function deleteProduct(id) {
    const headers = conseguirConfiguracionDeAutenticacion();
    try {
        const response = await axios.delete(
            `https://shoppy-fast.herokuapp.com/api/products/${id}/`,headers);
        alert("Producto eliminado satisfactoriamente");
        window.location.href = '/inventario';
        
        
    } catch (error) {
        console.log(error);
    }
    
}
export async function actualizarProducto(datosProducto,id) {
    try {
        const headers = conseguirConfiguracionDeAutenticacion();
        await axios.put(`https://shoppy-fast.herokuapp.com/api/products/${id}/`,datosProducto, headers);
        alert("Producto actualizado!");
        window.location.href = '/inventario';
    } catch (error) {
        return error.response.data
    }
}