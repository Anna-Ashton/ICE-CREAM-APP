import React from 'react'
import Logo from './storage/ice-cream.jpg';



function Home() {
  return (
    <div>
       
        <h1>
        Welcome to Icy-Creamy-World
        </h1>

    <div className="home">
        <img src={Logo} alt='Ice-cream Parlour' />
    </div>
    </div>
  )
}

export default Home;