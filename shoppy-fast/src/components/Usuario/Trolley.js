import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Table, Button, Row, Col, Badge, Alert } from 'reactstrap';
import '../../Estilos/Style.css';
import { BsFillCartFill, BsTrash } from "react-icons/bs";
import { aplicarDescuento } from '../../Services/ProductInfoServices';
const Trolley = ({ eliminarItem, agregarProducto, carrito, setCarrito, total, setTotal, cupon }) => {
    const [mensaje, setMensaje] = useState("");
    const [descuento, setDescuentoAplicado] = useState(0);
    const [totalDcto,setTotalDcto]=useState(0);
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

    useEffect(() => {
        const restarTotal = async () => {
            const respuesta = await aplicarDescuento(total, cupon.descuento);
            console.log(respuesta);
            setDescuentoAplicado(respuesta.descuento_aplicado);
            setTotalDcto(respuesta.nuevo_precio_total);
        }
        if (cupon.descuento !== 0) {
            restarTotal();
        }
    }, [cupon, total]);

    return (
        <>
            < Container className='encabezado_carrito'>

            </Container>
            <Container className='encabezado_inventario' >


                <Col xs="9" sm="4">
                    <BsFillCartFill />
                    <span><b>Precio Total  </b></span>
                    neto:  
                    <Badge color="dark"
                        pill> $ {total} </Badge> <br/>
                    {cupon.descuento !== 0?<>con descuento:
                    <Badge color="dark"
                        pill> $ {totalDcto} </Badge></>:""}

                </Col>

                <Button color="primary" onClick={e => { facturacion() }}>Crear Factura
                </Button>




                <Link to="/ingresarcupon">
                    <Button color="primary" >Cupón de descuento
                    </Button>
                </Link>



                <Link to="/">
                    <Button color="danger" >Volver
                    </Button>
                </Link>


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
                        }<tr>
                                <td colspan="6">{cupon.descuento !== 0 ? (<Alert color="info">{"Descuento aplicado: $"+descuento}</Alert>) : ""}</td>
                            </tr>
                            
                        </>) : <tr><td colspan="6"><Alert color="info">{mensaje}</Alert></td></tr>}

                    </Table>


                </div>

            </React.Fragment >
        </>)
}


export default Trolley
