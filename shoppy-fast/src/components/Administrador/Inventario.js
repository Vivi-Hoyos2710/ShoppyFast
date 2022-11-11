import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Table, Button } from 'reactstrap';
import '../../Estilos/Style.css';
import { BsTrash, BsFillPencilFill } from "react-icons/bs";
import { cerrarSesion,deleteProduct } from '../../Services/AdminServices';
import { getAllProduct } from '../../Services/ProductInfoServices';

const Inventario = () => {
    const [listaProductos, setListaProductos] = useState([]);
    useEffect(() => { ///Trae todos los productos de la bdd
        const obtenerProductos = async () => {
            const listado = await getAllProduct();
            setListaProductos(listado.sort((a, b) => parseInt(a.id) - parseInt(b.id)));
        }
        obtenerProductos();
    }, []);
    return (<>
        <Container className='encabezado_inventario' >
            <Link to="/crearproducto">
                <Button color="primary" >Crear Producto
                </Button>
            </Link>
            <Link to="/listacupones">
                <Button color="primary" >Administrar Cupones
                </Button>
            </Link>
            
            <Link to="">
                <Button onClick={e => { cerrarSesion() }} color="danger">Cerrar Sesión
                </Button>
            </Link>
        </Container>

        <React.Fragment>
            <div className='container_table'>
                <Table className='tabla_carro'>
                    <thead>
                        <tr>
                            <th>
                                Id producto
                            </th>
                            <th>
                                Imagen del producto
                            </th>
                            <th>
                                Nombre Producto
                            </th>
                            <th>

                                <span> Stock</span><span> </span>
                            </th>

                            <th>

                            </th>
                        </tr>
                    </thead>

                    {listaProductos.map(elemento => (<tbody >
                        <tr>
                            <td>
                                <span>{elemento.id}</span>

                            </td>
                            <td >
                                <img src={elemento.imgURL} alt="img" width="100px" />
                            </td>
                            <td>
                                <span>{elemento.name}</span>

                            </td>
                            <td>
                                {elemento.cantidad}
                            </td>

                            <td>
                                <Link to={`${elemento.id}/editar`}>
                                    <Button color="success" ><BsFillPencilFill />
                                        Editar
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <Button color="danger" onClick={()=>{if (window.confirm("¿Seguro quieres eliminar el producto "+ elemento.name+" de manera definitiva de la base de datos?")) {deleteProduct(elemento.id)}}} ><BsTrash />
                                    Eliminar
                                </Button>
                            </td>
                        </tr>

                    </tbody>))}
                </Table>
            </div>

        </React.Fragment></>

    );





};

export default Inventario;