import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody, Spinner, Button, CardHeader, Row, Col,UncontrolledAlert } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../Services/ProductInfoServices'; //No borrar
import { FaCat } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";
const ProductInfo = ({ carrito, setCarrito, agregarProducto }) => {
    const { id } = useParams();
    const [load, setLoad] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [dato, hayDatos] = useState(false);
    //
    useEffect(() => {
        hayDatos(false);
        const conseguirDatos = async () => {
            setLoad(true);
            const data = await getProduct(id);
            if (data) {
                setProductInfo(data[0]);
                setLoad(false);
                if (data.length === 1) {
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
                {load === false ? (<>
                    {
                        dato && id ? (
                            <>
                                <Container onLoad={carga}>
                                    <Card className='my-2' color="danger" outline style={{ width: '50%' }}>
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
                                                    <Button color="danger" onClick={() => setCarrito(agregarProducto(productInfo, 1, carrito))}>Add to Cart</Button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Container>
                            </>) : <UncontrolledAlert color="info">El código no corresponde a ningún producto, por favor ingrese otro. <FaCat/> <TbError404/></UncontrolledAlert>
                    }


                </>) : (<><Spinner color="primary" type="grow">Loading...</Spinner><br /><Spinner color="primary" type="grow">Loading...</Spinner></>)
                }


            </Container>



        </div >
    )
}
export default ProductInfo