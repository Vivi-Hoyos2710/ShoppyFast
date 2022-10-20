import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Table, Button, Row, Col, ListGroupItem, Label, ListGroup,Badge } from 'reactstrap';
import '../../Estilos/Style.css';
import { BsTrash,BsFillPencilFill } from "react-icons/bs";
import { cerrarSesion } from '../../Services/AdminServices';
const Inventario = () => {

return(<>
<Container style={{ marginTop: '6' }} className='encabezado_inventario' >
<Col xs="6" sm="4" >
                    <Link to="/crearproducto">
                        <Button color="primary" >Crear Producto
                        </Button>
                    </Link>

                </Col>
                <Col xs="6" sm="4" >
                    <Link to="">
                        <Button onClick={e=>{cerrarSesion()}} color="danger">Cerrar Sesión
                        </Button>
                    </Link>

                </Col>
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

                            </th>
                        </tr>
                    </thead>
                    
                        <tbody >
                            <tr>
                                <th scope="row">
                                    <img  alt="img" width="100px" />
                                </th>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                        
                                            
                                </td>
                                <td>
                                <Row>
                                <Col >
                                <Button >
                                    Información
                                            </Button> 
                                </Col>
                                <Col >
                                <Button color="success" ><BsFillPencilFill/>
                                    Editar
                                            </Button> 
                                </Col>
                                <Col>
                                <Button color="danger" ><BsTrash/>
                                Eliminar
                                            </Button>   
                                </Col>
                                </Row>

                                </td>
                            </tr>

                        </tbody>
                </Table>
            </div>

        </React.Fragment></>

    );





};

export default Inventario;