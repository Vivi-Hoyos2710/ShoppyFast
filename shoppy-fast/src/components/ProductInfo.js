import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody, CardTitle, Button, CardText, CardHeader, Row, Col, } from 'reactstrap'
import { useParams } from 'react-router-dom'
import productsList from "../util/db/products";
import { getProduct } from '../Services/ProductInfoServices';

const ProductInfo = ({ setCarrito, carrito }) => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({
        id: "00",
        name: "NO DATA",
        price: "0",
        img: "https://www.freeiconspng.com/thumbs/error-icon/sign-red-error-icon-1.png",
        amount: 0,
    });
    console.log(productsList.filter((item) => (item.id == id))); //prueba
    const data = productInfo;
    useEffect(() => {
        const data = productsList.filter((item) => (item.id == id))[0];//ESTO se cambiará con la bdd
        const conseguirDatos = async () => {
            if (data) {
                setProductInfo(data);
            }
        };
        conseguirDatos();
    }, [id])
    /* useEffect(() => {
        const conseguirDatos = async () => {
            const data = await getProduct(id);
            console.log(data);
            if (data) {
                setProductInfo(data[0]);
            }
        };
        conseguirDatos();
    }, [id]); */

    return (
        <div className='containerFluid'>
            <Container className='lg-6'>
                {productInfo ? (<>
                    <Container>
                        <Card className="my-2" color="danger" outline style={{ width: '18rem' }}>
                            <CardHeader tag="h2">{productInfo.name}</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="6">
                                        <img src={productInfo.imgURL} alt="img" width="100%" />
                                    </Col>
                                    <Col>
                                        <CardText>
                                            <div>Price {productInfo.price}</div>
                                            <div>Brand {productInfo.marca}</div>
                                            <h3>Features {productInfo.description}</h3>
                                        </CardText>
                                    </Col>
                                </Row>

                                <Button color="danger" onClick={() => setCarrito([...carrito, productInfo])}>Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </Container>

                </>) : "No se reconoce id de producto"
                }


            </Container>



        </div>
    )
}
export default ProductInfo