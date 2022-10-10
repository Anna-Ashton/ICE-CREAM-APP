import React from "react";
import Sunday from "./storage/sun1.jpg";
import Wednesday from "./storage/sun2.jpg";
import './About.css';
import {Link} from 'react-router-dom';

function About() {
  const aboutUs =
    "We are a one stop shop for ice-cream. Come get icy this summer!";
  const feed = "Yummy and Creamy!";
  return (
    <div className="smart">
      <h1 className="about">{aboutUs}</h1>
      <h2>{feed}</h2>
      <Link to='/' className='container-link'>Click to see Ice-Cream</Link>

      <div className="pictorial">
        <img src={Sunday} alt="Hey!" />
        <img src={Wednesday} alt="Hi" />
      </div>
    </div>
  );
}

export default About;
