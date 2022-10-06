import React, { useEffect, useState } from 'react'
import CreamList from './CreamList';

function CreamContainer() {
   const [creams, setCreams] = useState([]);


useEffect(()=>{
    fetch("http://localhost:3000/creams")
    .then((res)=>res.json())
    .then((creamInfo)=> setCreams(creamInfo))
},[]);



  return (
    <div>Ice-Cream Parlour
        <CreamList creams={creams}/>
    </div>
  )
}

export default CreamContainer