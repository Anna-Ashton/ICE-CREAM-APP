import React from 'react'
import CreamPop from './CreamPop'
import './CreamList.css';
function CreamList({creams}) {



  return (
    <div className='listDetail'>
    {creams.map(creamSingle=>
        <CreamPop key={creamSingle.id} id={creamSingle.id} name={creamSingle.name} cream_url={creamSingle.cream_url} ></CreamPop>)}
    </div>

  )
}

export default CreamList