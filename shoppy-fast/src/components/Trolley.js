import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap';

const Trolley = ({ carrito }) => { 

const [total, setTotal] = useState(0);

useEffect(() => {
    const hola = () => {
        setTotal(carrito.reduce((obj, cur) => (obj + cur.price), 0))
    }
    hola()
}
, [carrito]);
console.log(total);

return (
    <React.Fragment>
    {carrito.map(producto => (
        <Card
            style={{
                width: '18rem'
            }}
        >
            <img
                alt="Sample"
                src={producto.img}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {producto.name}
                </CardTitle>
                <CardText>
                    {producto.author}
                </CardText>
                <CardText>
                    {producto.price}
                </CardText>
            </CardBody>
        </Card>)
    )
        }

    </React.Fragment>)
}

export default Trolley