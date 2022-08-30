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

        < Container >
            <BsFillCartFill /> 
            <span>Total Price of your Cart</span>
            <span>$ {total}</span>
        </Container>
        <React.Fragment>
            {carrito.map(producto => (
            <Table className='tabla_carro'>
                <thead>
                    <tr>
                        <th>
                        
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
                <tbody>
                    <tr>
                        <th scope="row">
                        <img src={producto.imgURL} alt="img" width="10%" />
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
            </Table>
            )
            )
            }

        </React.Fragment ></>)
}


export default Trolley

