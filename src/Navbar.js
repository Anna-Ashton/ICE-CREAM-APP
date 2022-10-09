import React, { useState } from 'react';
import Logo from './storage/ice-cream.jpg';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import {AiOutlineMenu} from 'react-icons/ai';

function Navbar() {

const[click, setClick] = useState(false);

function handleClick() {
  setClick(!click);
}

  return (
    <div className="navigation">
   <header>
    <nav className="navbar">
      <div className="nav-tailwind">
        <AiOutlineMenu size={30}/>
      <div>
        <p>Delivery</p>
        <p>Pickup</p>
      </div>
      </div>
      <div className="logo">
        <Link to='/'><img src={Logo} alt='My ice-cream' /></Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li className="nav-item">
          <Link to='/home' className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/pricing' className='nav-link'>Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className='nav-link'>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className='nav-link'>Contacts</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#ffffoo'}} />):(<FaBars style={{color: '#ffffoo'}}/>)}
        
      </div>
    </nav>
   </header>
   </div>
  )
}

export default Navbar