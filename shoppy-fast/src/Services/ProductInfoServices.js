const axios = require('axios');
export async function getProduct(id) {
    const response = await axios.get(
        `https://shoppy-fast.herokuapp.com/api/products/${id}`
    );
    return response.data;
}
export async function getAllProduct() {
    const response = await axios.get(
        `https://shoppy-fast.herokuapp.com/api/products/`
    );
    return response.data;
}
export async function crearFactura(data) {
    const response=await axios.post(
        'https://shoppy-fast.herokuapp.com/api/f/calcularIva',
        data
    );
    return response.data;
}
export async function enviarFacturaPorCorreo(data) {
    const response=await axios.post(
        'https://shoppy-fast.herokuapp.com/api/f/enviarFactura',
        data
    );
    return response.data;
}

