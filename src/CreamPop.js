import React from "react";
import './CreamPop.css';

function CreamPop({ id, name,price_ksh, cream_url}) {
  return (
    <div className="singleIce" key={id}>
      <img className="ice_cream_img" alt="Ice-cream" src={cream_url} />
      <p className="ice_cream_name">{name}</p>
      <p className="price">{price_ksh}</p>
    </div>
  );
}

export default CreamPop;
