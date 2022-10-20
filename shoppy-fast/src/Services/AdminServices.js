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
        "email" : email,
        "password" : password
    }
    try {
        const response = await axios.post(
            'https://shoppy-fast.herokuapp.com/api/admin/signin', datos

        )
        console.log(response);
        localStorage.setItem('tokenAdmin', response.data.token);
        window.location.href = '/inventario';

    } catch (error) {
        console.log("Entra aquí y debe devolver esto")
        alert("Contraseña o correo inválidos: "+error.response.data.message);
        return error.response.data
    }
}
export async function crearProducto(datosProducto) {
    try {
        const headers=conseguirConfiguracionDeAutenticacion();
        await axios.post('https://shoppy-fast.herokuapp.com/api/products',datosProducto,headers);
        
    } catch (error) {
        console.log("Error",error);
        return error
    }
}