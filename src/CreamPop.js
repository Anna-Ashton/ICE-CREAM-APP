import React from "react";
import './CreamPop.css';

function CreamPop({ id, name, cream_url}) {
  return (
    <div className="singleIce" key={id}>
      <img className="ice_cream_img" alt="Ice-cream" src={cream_url} />
      <p className="ice_cream_name">{name}</p>
    </div>
  );
}

export default CreamPop;
