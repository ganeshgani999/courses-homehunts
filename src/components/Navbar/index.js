import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'

import logo from '../assets/nav-logo.jpg'



const Navbar = () => (
    <nav className="nav-bar-container">
        <img src={logo} alt="logo" className='nav-logo'/>
        <div className='nav-links-container'>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/About" className='nav-link'>
                    Why Choose Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Courses' className='nav-link'>
                    Courses
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/ContactUs' className='nav-link'>
                    ContactUs
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Login' className='nav-link'>
                    Login
                </Link>
            </li>
        </div>
    </nav>
)

export default Navbar