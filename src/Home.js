import React from 'react'
import Logo from './storage/ice-cream.jpg';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div>
       
        <h1>
        Welcome to Icy-Creamy-World
        </h1>
    <Link to='/' className='container-link'>See Your Ice-Cream</Link>
    <div className="home">
        <img src={Logo} alt='Ice-cream Parlour' />
    </div>
    </div>
  )
}

export default Home;