import React from 'react'
import { Col, Container, Navbar, NavbarBrand, Row} from 'reactstrap'
import {FaShoppingCart} from 'react-icons/fa';
const Header = () => {
    return (
        <div>
        <Navbar
            className="navbar"
            color="dark"
            dark
        >
            <NavbarBrand href="/" className='mr-auto'>
                <img
                    alt="logo"
                    src="../logo-shoppy.png"
                    style={{
                        height: 60,
                        width: 60,
                    }}
                />
                ShoppyFast
            </NavbarBrand>
            
        </Navbar>
        <Container>
            <Row>
                <Col >
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Header;