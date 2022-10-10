import React from 'react'
import Last from './storage/ice4.jpg';
import Pic from './storage/cream b.jpg';
import Nice from './storage/cream a.jpg';
import './Home.css';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div className='intro'>
       
        <h1>
        Welcome to Icy-Creamy-World
        </h1>
    <Link to='/' className='container-link'>Click to see Ice-Cream</Link>
    <div className="home">
        <img src={Last} alt='Ice-cream Parlour' />
        <img src={Pic} alt='Icy-cream Parlour' />
        <img src={Nice} alt='Creamy' />
    </div>
    </div>
  )
}

export default Home;