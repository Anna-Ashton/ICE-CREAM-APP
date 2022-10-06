import React from 'react'

function CreamPop({
    id,
    name,
    cream_url,
    price_ksh,
}) {
  return (
    <div className="singleIce">
        <img alt='Ice-cream' src={cream_url} />
        {id}
        {name}
      
        {price_ksh}
    </div>
  )
}

export default CreamPop;