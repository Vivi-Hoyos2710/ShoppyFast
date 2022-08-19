import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'
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
        </div>
    )
}
export default Header;