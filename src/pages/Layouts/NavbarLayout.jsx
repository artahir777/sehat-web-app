import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import NavbarLayoutStyle from './NavbarLayoutStyle';

const NavbarLayout = ( props ) => {
    return (
        <NavbarLayoutStyle>
            <Navbar/>
            <div className="content">
                {props.children}
            </div>
        </NavbarLayoutStyle>
    )
}

export default NavbarLayout;