import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Table, Button, Row, Col, ListGroupItem, Label, ListGroup,Badge } from 'reactstrap';
import '../../Estilos/Style.css';
import { BsFillCartFill, BsTrash } from "react-icons/bs";

const Trolley = ({ eliminarItem,agregarProducto,carrito, setCarrito, total, setTotal, cantidad, setCantidad }) => {



    useEffect(() => { ///calcular total
        const calculo = () => {
            setTotal(carrito.reduce((obj, cur) => (obj + (cur.item.price)*cur.quantity), 0))
        }
        calculo()
    }
        , [carrito]);
    ///
   
    return (<>

        < Container className='encabezado_carrito' >
            <Row>
                <Col xs="9" sm="4">
                    <BsFillCartFill />
                    <span><b>Precio Total  </b></span>
                    <Badge color="dark"
                    pill> $ {total} </Badge>
                </Col>
                <Col xs="6" sm="4" style={{ marginTop: '6' }}>
                    <Link to="/userInfo">
                        <Button color="primary" >Crear Factura
                        </Button>
                    </Link>

                </Col>
                <Col xs="6" sm="4" style={{ marginTop: '6' }}>
                    <Link to="/">
                        <Button color="danger" >Volver
                        </Button>
                    </Link>

                </Col>
            </Row>
        </Container>

        <React.Fragment>
            <div className='container_table'>
                <Table className='tabla_carro'>
                    <thead>
                        <tr>
                            <th>
                                Imagen del producto
                            </th>
                            <th>
                                Nombre Producto
                            </th>
                            <th>
                            
                            <span> Cantidad </span> <span>de</span> <span>Productos </span>
                            </th>
                            <th>
                                Precio por producto
                            </th>
                            <th>
                                Precio total producto
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    {carrito.map(elemento => (
                        <tbody key={"body"+elemento.item.id}>
                            <tr>
                                <th scope="row">
                                    <img src={elemento.item.imgURL} alt="img" width="100px" />
                                </th>
                                <td>
                                    <span>{elemento.item.name}</span>
                                </td>
                                <td>
                                    <Row key={elemento.item.id}>
                                    <Col>
                                            <Button color="danger" size="sm" onClick={()=>agregarProducto(elemento.item,-1)}>-
                                            </Button>
                                        </Col>
                                       
                                        <Col>
                                        <Badge>
                                                
                                                        {elemento.quantity}
                                                
                                        </Badge>       
                                        </Col>
                                        <Col>
                                            <Button color="success" size="sm" onClick={()=>agregarProducto(elemento.item,1)}>+
                                            </Button>
                                        </Col>
                                     

                                    </Row>     
                                            
                                </td>
                                <td>
                                    <span>{(elemento.item.price)}</span>
                                </td>
                                <td>
                                    <span>{(elemento.item.price*elemento.quantity)}</span>
                                </td>
                                <td>
                                    
                                <Button color="danger" size="sm" onClick={() => eliminarItem(elemento.item.id)}><BsTrash/>
                                            </Button>   
                                    

                                </td>
                            </tr>

                        </tbody>
                    )
                    )
                    }
                </Table>
            </div>

        </React.Fragment ></>)
}


export default Trolley
