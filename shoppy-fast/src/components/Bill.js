import React,{useEffect,useState} from 'react'
import { Card, CardFooter, CardHeader, ListGroup,ListGroupItem,Col,Row } from 'reactstrap'
import {crearFactura}from '../Services/ProductInfoServices'
export const Bill = ({ infoUser, carrito,total }) => {
    const [iva,setIva]= useState({});
    useEffect(async ()=>{
        const datos= await crearFactura({
            "products" : carrito
        });
        setIva(datos);
    },[]);
    console.log(iva);
    //console.log(infoUser);
    return (
        <div>
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
                    <Col xs="6">Nombre</Col>
                    <Col xs="6">Precio</Col>
                    </Row>
                </CardHeader>

                <ListGroup >
                
                    {carrito.map(producto => (
                    <ListGroupItem>
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
                    <Col xs="6">{total*(iva)}</Col>
                    </Row>
                    </ListGroupItem>
                </ListGroup>
                <CardFooter>
                <Row>
                    <Col xs="6">Total</Col>
                    <Col xs="6">{total*(1+iva)}</Col>
                    </Row>
                </CardFooter>
            </Card>
        </div>
    )
}
