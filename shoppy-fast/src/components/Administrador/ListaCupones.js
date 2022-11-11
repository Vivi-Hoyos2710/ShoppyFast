import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Table, Button } from 'reactstrap';
import '../../Estilos/Style.css';
import { getAllCupones} from '../../Services/AdminServices';


const ListaCupones = () => {
    const [listaCupones, setlistaCupones] = useState([]);
    useEffect(() => { ///Trae todos los productos de la bdd
        const obtenerCupones = async () => {
            const listado = await getAllCupones();
            setlistaCupones(listado);
        }
        obtenerCupones();
    }, []);
    return (<>
        <Container className='encabezado_inventario' >
            
            <Link to="/crearcupon">
                <Button color="primary" >Crear Cupon
                </Button>
            </Link>
            
            <Link to="/inventario">
                <Button>Volver
                </Button>
            </Link>
        </Container>

        <React.Fragment>
            <div className='container_table'>
                <Table className='tabla_cupones'>
                    <thead>
                        <tr>
                            <th>
                            Código de Cupón
                            </th>
                            <th>
                            Descuento
                            </th>
                            
                            
                        </tr>
                    </thead>
                    {listaCupones.map(elemento => (<tbody>
                   
                        <tr>
                        <td>
                        {elemento.codigo_cupon} 

                            </td>
                            <td >
                        {elemento.descuento} %
                            </td>
                        </tr>

                    </tbody>))}
                </Table>
            </div>

        </React.Fragment></>

    );





};

export default ListaCupones;