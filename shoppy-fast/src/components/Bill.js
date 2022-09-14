import React from 'react'
import { Card, CardFooter, CardHeader, ListGroup,ListGroupItem } from 'reactstrap'

export const Bill = ({ userInfo, carrito }) => {
    return (
        <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardHeader>
                    Featured
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem>
                        An item
                    </ListGroupItem>
                    <ListGroupItem>
                        A second item
                    </ListGroupItem>
                    <ListGroupItem>
                        And a third item
                    </ListGroupItem>
                </ListGroup>
                <CardFooter>
                    
                </CardFooter>
            </Card>
        </div>
    )
}
