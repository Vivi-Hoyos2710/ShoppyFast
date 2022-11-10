import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Button, Card, CardFooter, CardHeader, ListGroup, ListGroupItem, Col, Row, Container } from 'reactstrap'
import { crearFactura } from '../../Services/ProductInfoServices';
import { enviarFacturaPorCorreo } from '../../Services/ProductInfoServices';
export const Bill = ({ infoUser, carrito, total }) => {
    const [facturaIva, setFacturaIva] = useState({});
    useEffect(() => {
        const enviarDatos = async () => {
            const datos = await crearFactura({
                "products": carrito
            });
            setFacturaIva(datos);
        }
        enviarDatos();
    });
    const ivaAbs = facturaIva.ivaTotal;
    const totalConIva = facturaIva.precioTotal;

    const enviarCorreoFactura = async () => {
        const data = {
            "user_email": infoUser.email,
            "user_name": infoUser.name,
            "products": carrito,
            "subtotal": total,
            "total_price": totalConIva

        };
        console.log(data);
        const datos = await enviarFacturaPorCorreo(data);
        console.log(datos);
    }
    if (infoUser.check) {
        enviarCorreoFactura();
        infoUser.check=false;
    }
    
    return (
        <Container className="align-items-center" style={{ marginTop: '60px' }}>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardHeader>
                    Shoppy Fast Bill
                    <Row>
                        <Col xs="6">Cliente</Col>
                        <Col xs="6">{infoUser.name}<span> </span>{infoUser.surname}</Col>
                    </Row>
                    <Row>
                        <Col xs="6">Cedula</Col>
                        <Col xs="6">{infoUser.document}</Col>
                    </Row>

                </CardHeader>
                <CardHeader>
                    <Row>
                        <Col xs="6"><b>Nombre</b></Col>
                        <Col xs="6"><b>Precio</b></Col>
                    </Row>
                </CardHeader>

                <ListGroup >

                    {carrito.map(producto => (
                        <ListGroupItem key={producto.item.id}>
                            <Row>
                                <Col xs="6">{producto.item.name}</Col>
                                <Col xs="6">{producto.item.price}</Col>
                            </Row>

                        </ListGroupItem>))
                    }
                    <ListGroupItem>
                        <Row>
                            <Col xs="6">SubTotal</Col>
                            <Col xs="6">{total}</Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col xs="6">IVA 19%</Col>
                            <Col xs="6">{ivaAbs}</Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
                <CardFooter>
                    <Row>
                        <Col xs="6">Total</Col>
                        <Col xs="6">{totalConIva}</Col>
                    </Row>
                </CardFooter>
            </Card>
            <Row style={{ marginTop: '30px' }} spacing={2}>
                <Link to="/userInfo">
                    <Button color="danger" >Volver
                    </Button>
                </Link>
                
            </Row>
        </Container>
    )
}