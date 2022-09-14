import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody, Spinner, Button, CardText, CardHeader, Row, Col, } from 'reactstrap'
import { useParams } from 'react-router-dom'
import productsList from "../util/db/products";
import { getProduct } from '../Services/ProductInfoServices'; //No borrar

const ProductInfo = ({ setCarrito, carrito }) => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({
        id: "00",
        name: "NO DATA",
        price: "0",
        img: "https://www.freeiconspng.com/thumbs/error-icon/sign-red-error-icon-1.png",
        amount: 0,
    });
    //console.log(productsList.filter((item) => (item.id == id))); //prueba
    // const data = productInfo;
    // useEffect(() => {
    //     const data = productsList.filter((item) => (item.id == id))[0];//ESTO se cambiará con la bdd
    //     const conseguirDatos = async () => {
    //         if (data) {
    //             setProductInfo(data);
    //         }
    //     };
    //     conseguirDatos();
    // }, [id])
    useEffect(() => {
        const conseguirDatos = async () => {
            const data = await getProduct(id);
            console.log(data);
            if (data) {
                setProductInfo(data[0]);
            }
        };
        conseguirDatos();
    }, [id]);
const carga= (evento)=>{
    <>
    <Spinner
    color="primary"
    type="grow">
    Loading...
  </Spinner>
  <br/>
  <Spinner
    color="primary"
    type="grow"
  >
    Loading...
  </Spinner>
  </>
}
    return (
        <div className='containerFluid' >
            <Container className='lg-6'>
                {productInfo ? (<>
                    <Container onLoad={carga}>
                        <Card className='my-2'color="danger" outline style={{ width: '30rem' }}>
                            <CardHeader tag="h3">{productInfo.name}</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col Col sm="12" md={{ size: 8, offset: 2 }}>
                                        <img src={productInfo.imgURL} alt="img" width="100%" />
                                    </Col>
                                    <Col>
                                        <CardText>
                                            <div><b>Price:</b>
                                            {productInfo.price}</div>
                                            <div><b>Brand:</b>
                                            {productInfo.marca}</div>
                                            <div><b>Features:</b>
                                            <p>"{productInfo.description}"</p></div>
                                            <br/>
                                        </CardText>
                                    </Col>
                                <Col Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Button color="danger" onClick={() => setCarrito([...carrito, productInfo])}>Add to Cart</Button>
                                </Col>
                                </Row>
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