import React from "react";

function CreamPop({ id, name, cream_url, price_ksh }) {
  return (
    <div className="singleIce" key={id}>
      <img className="Ice_cream_img" alt="Ice-cream" src={cream_url} />
      <p className="IceCream_name">  {name}</p>
      <button>
      {price_ksh}</button>

    

    </div>
  );
}

export default CreamPop;
