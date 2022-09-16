import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody, Spinner, Button, CardText, CardHeader, Row, Col, } from 'reactstrap'
import { useParams } from 'react-router-dom'
import productsList from "../util/db/products";
import { getProduct } from '../Services/ProductInfoServices'; //No borrar

const ProductInfo = ({ setCarrito, carrito,agregarProducto }) => {
    const { id } = useParams();
    const [load, setLoad] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [dato, hayDatos] = useState(false);

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
        hayDatos(false);
        const conseguirDatos = async () => {
            setLoad(true);
            const data = await getProduct(id);
            if (data) {
                setProductInfo(data[0]);
                setLoad(false);
                if (data.length == 1) {
                    hayDatos(true);
                    
                }
            }
        };
        conseguirDatos();
    }, [id]);
    const carga = () => {
        <>
            <Spinner
                color="primary"
                type="grow">
                Loading...
            </Spinner>
            <br />
            <Spinner
                color="primary"
                type="grow"
            >
                Loading...
            </Spinner>
        </>
    };
    
    return (
        <div className='containerFluid' >
            <Container className='lg-6'>
                {load == false ? (<>
                    {
                        dato && productInfo.id? (
                            <>
                                <Container onLoad={carga}>
                                    <Card className='my-2' color="danger" outline style={{ width: '30rem' }}>
                                        <CardHeader tag="h3">{productInfo.name}</CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col sm={{ size: 3, offset: 3 }} md={{ size: 6, offset: 3 }}>
                                                    <img src={productInfo.imgURL} alt="img" width="100%" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>

                                                    <div><b>Precio:</b>
                                                        {productInfo.price}</div>
                                                    <div><b>Marca:</b>
                                                        {productInfo.marca}</div>
                                                    <div><b>Descripción:</b>
                                                        "{productInfo.description}"</div>
                                                    <br />

                                                </Col>
                                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                                    <Button color="danger" onClick={()=>agregarProducto(productInfo,1)}>Add to Cart</Button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Container>
                            </>) : "El código no corresponde a ningún producto, por favor ingrese otro."
                    }


                </>) : (<><Spinner color="primary" type="grow">Loading...</Spinner><br /><Spinner color="primary" type="grow">Loading...</Spinner></>)
                }


            </Container>



        </div >
    )
}
export default ProductInfo