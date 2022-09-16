const axios = require('axios');
export async function getProduct(id) {
    const response = await axios.get(
        `https://shoppy-fast.herokuapp.com/api/products/${id}`
    );
    return response.data;
}
