import React from 'react';
import Logo from './storage/ice-cream.jpg';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
  return (
   <header>
    <nav className="navbar">
      <div className="logo">
        <Link to='/'><img src={Logo} alt='My ice-cream' /></Link>
      </div>
      <ul className="nav-menu">
      <li className="nav-item">
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className='nav-link'>Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className='nav-link'>FAQ</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className='nav-link'>Contacts</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars />
      </div>
    </nav>
   </header>
  )
}

export default Navbar