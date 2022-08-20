import React, { useState, useEffect } from 'react'
import { Container,Card, CardBody, CardTitle, Button, CardText, } from 'reactstrap'
import { useParams } from 'react-router-dom'
import productsList from "../util/db/products";
const ProductInfo = ({ setCarrito, carrito }) => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({
        id: "00",
        name: "NO DATA",
        price: "0",
        img: "https://www.freeiconspng.com/thumbs/error-icon/sign-red-error-icon-1.png",
        amount: 0,
    });
    const data = productsList;
    console.log(productsList.filter((item) => (item.id == id))); //prueba
    useEffect(() => {
        const data = productsList.filter((item) => (item.id == id))[0];//ESTO se cambiará con la bdd
        const conseguirDatos = async () => {
            if (data) {
                setProductInfo(data);
            }
        };
        conseguirDatos();
    }, [id])
    return (
        <div className='containerFluid'>
            <Container className='lg-6'>
                {data ? (<>
                    <h1>Info </h1>
                    <div>id: {productInfo.id}</div>
                    <div>name: {productInfo.name}</div>
                    <div>price {productInfo.price}</div>
                    <button onClick={() => setCarrito([...carrito, productInfo])}>Add to Cart</button>
                </>) : "No se reconoce id de producto"
                }


            </Container>
            <div><img src={productInfo.img} alt="" /></div>


        </div>
    )
}
export default ProductInfo