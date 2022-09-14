import React from 'react'
import { Col, Container, Navbar, NavbarBrand, Row} from 'reactstrap'
const Header = () => {
    return (
        <div>
        <Navbar
            className="navbar"
            color="info"
            
        >
            <NavbarBrand href="/" className='mr-auto'>
                <img
                    alt="logo"
                    src="../LogoShoppyFast_.png"
                    style={{
                        height: 70,
                        width: 150,
                    }}
                />
                
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