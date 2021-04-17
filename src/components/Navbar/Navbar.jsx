import React from 'react'
import { Link } from 'react-router-dom';
import NavbarStyle from './NavbarStyle';


const Navbar = () => {
    return ( 
        <NavbarStyle>
                    <div className = "Navbar">
                <div className = "logo" >
                    {/* <Link to = "/" > <img src = "/images/logo.png" alt = "Site logo"  /> </Link> */}
                    <img src = "/images/logo.png" alt = "Site logo"  />
                    <h1> SEHAT - An e-healthcare System! </h1>
                </div>
                <div className = "Navbar-Items" >
                    <ul>
                        <Link to = "/" > <li> Home </li> </Link>
                        <Link to = "/services" > <li> Services </li> </Link>
                        <Link to = "/about" > <li> About Us </li> </Link>
                        <Link to = "/sign-in" > <li> Login </li> </Link>
                    </ul>
                </div>
            </div>
        </NavbarStyle>
     );
}
 
export default Navbar;