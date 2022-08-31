import React, { useState, useEffect } from 'react';
import { ListGroup,Container, ListGroupItemHeading, ListGroupItem, ListGroupItemText ,Table} from 'reactstrap';
import '../Estilos/Style.css';
import { BsFillCartFill } from "react-icons/bs";
const Trolley = ({ carrito, setCarrito }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => { ///calcular total
        const hola = () => {
            setTotal(carrito.reduce((obj, cur) => (obj + cur.price), 0))
        }
        hola()
    }
        , [carrito]);
    console.log(total);
    ///
    const eliminarItemCarrito = (id) => {
        const arr = carrito.filter((item) => item.id !== id);
        setCarrito(arr);
    };
    return (<>
        < Container className='encabezado_carrito' >
            <BsFillCartFill/> 
            <span><b>Total Price of your Cart :</b></span>
            <span>$ {total}</span>
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
                        Cantidad
                        </th>
                        <th>
                        Precio
                        </th>
                    </tr>
                </thead>
            {carrito.map(producto => (
                <tbody>
                    <tr>
                        <th scope="row">
                        <img src={producto.imgURL} alt="img" width="100px" />
                        </th>
                        <td>
                        <span>{producto.name}</span>
                        </td>
                        <td>
                        2
                        </td>
                        <td>
                        <span>{producto.price}</span>
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

