import React from 'react';
import {Link} from 'react-router-dom';

function Contact() {
    const contacting="Ann-K:0733333355";
    const contacted="Lucy-O:0744658288";
    const contacts="Albadwin:0788555865";
  return (
    <div>Contact Us
<div className="contact">
<Link to='/' className='container-link'>See Your Ice-Cream</Link>
    <p>{contacting}</p>
    <p>{contacted}</p>
    <p>{contacts}</p>
</div>
    </div>
  )
}

export default Contact