import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Table, Button, Row, Col, Badge, Alert } from 'reactstrap';
import '../../Estilos/Style.css';
import { BsFillCartFill, BsTrash } from "react-icons/bs";

const Trolley = ({ eliminarItem, agregarProducto, carrito, setCarrito, total, setTotal }) => {
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const facturacion = () => {
        if (carrito.length > 0) {
            navigate("/userInfo");
        }
        else {
            setMensaje("No ha seleccionado productos para generar factura");
        }
    }


    useEffect(() => { ///calcular total
        const calculo = () => {
            setTotal(carrito.reduce((obj, cur) => (obj + (cur.item.price) * cur.quantity), 0))
        }
        calculo();
        setMensaje("No hay productos");
    }, [carrito]);

    return (
        <>
            < Container className='encabezado_carrito'>
                <Row>
                    <Col xs="9" sm="4">
                        <BsFillCartFill />
                        <span><b>Precio Total  </b></span>
                        <Badge color="dark"
                            pill> $ {total} </Badge>
                    </Col>
                    <Col xs="6" sm="4" style={{ marginTop: '6' }}>

                        <Button color="primary" onClick={e => {facturacion()}}>Crear Factura
                        </Button>


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
                        </thead>{carrito.length > 0 ? (<>{carrito.map(elemento => (
                            <tbody key={"body" + elemento.item.id}>
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
                                                <Button color="danger" size="sm" onClick={() => setCarrito(agregarProducto(elemento.item, -1, carrito))}>-
                                                </Button>
                                            </Col>

                                            <Col>
                                                <Badge>

                                                    {elemento.quantity}

                                                </Badge>
                                            </Col>
                                            <Col>
                                                <Button color="success" size="sm" onClick={() => setCarrito(agregarProducto(elemento.item, 1, carrito))}>+
                                                </Button>
                                            </Col>


                                        </Row>

                                    </td>
                                    <td>
                                        <span>{(elemento.item.price)}</span>
                                    </td>
                                    <td>
                                        <span>{(elemento.item.price * elemento.quantity)}</span>
                                    </td>
                                    <td>

                                        <Button color="danger" size="sm" onClick={() => setCarrito(eliminarItem(elemento.item.id, carrito))}><BsTrash />
                                        </Button>


                                    </td>
                                </tr>

                            </tbody>
                        )
                        )
                        }</>) : <tbody><Alert color="info">{mensaje}</Alert></tbody>}

                    </Table>
                </div>

            </React.Fragment >
        </>)
}


export default Trolley
