// Navbar.js

import React from 'react';
import '../css/navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">NCC</div>
            <ul className="navbar-menu">
              <li>
                 <Link to="/">Home</Link>
                </li> 
                 <li>

                 <Link to="/timeline"> Timeline</Link>
                 </li>
            

                
                {/* <li><a href="#about">About</a></li> */}
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
    );
};

export default Navbar;