import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ToggleSidebar from '../ToggleSidebar/ToggleSidebar';
import NavbarStyle from './NavbarStyle';
import navbar_items from "../../mockData/navbar_items";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <NavbarStyle menuOpen = {isOpen} >
            <div className = "Navbar">
                <div className = "logo" >
                    {/* <Link to = "/" > <img src = "/images/logo.png" alt = "Site logo"  /> </Link> */}
                    <img src = "/images/logo.png" alt = "Site logo"  />
                    <h1> SEHAT - An e-healthcare System! </h1>
                </div>
                <div className="hamburger" onClick = { ()=>{ setIsOpen(s => !s) } } >
                    <MenuOutlined/> 
                </div>
                <div className = "Navbar-Items" >
                    <span className = "closebtn" onClick = { () => {setIsOpen(false)} } > <CloseOutlined/> </span>
                    <ul>
                        <Link to = "/" > <li> Home </li> </Link>
                        <Link to = "/about" > <li> About Us </li> </Link>
                        <Link to = "/sign-in" > <li> Login </li> </Link>
                    </ul>
                </div>
            </div>
        </NavbarStyle>
     );
}
 
export default Navbar;