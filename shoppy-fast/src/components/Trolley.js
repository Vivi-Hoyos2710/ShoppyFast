import React, { useState, useEffect } from 'react';
import { ListGroup,Container, ListGroupItemHeading, ListGroupItem, ListGroupItemText } from 'reactstrap';

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
        <h1>Carrito</h1>
        < Container >
            <span>Total Price of your Cart</span>
            <span>$ {total}</span>
        </Container>
        <React.Fragment>
            {carrito.map(producto => (
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                        <img src={producto.img} alt="img" /><span>{producto.name}</span>
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            <span><h3>Price</h3>{producto.price}</span>
                        </ListGroupItemText>
                    </ListGroupItem></ListGroup>)

            )
            }

        </React.Fragment ></>)
}

export default Trolley