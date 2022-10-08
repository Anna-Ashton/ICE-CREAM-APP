import React, { useEffect, useState } from 'react'
import CreamList from './CreamList';
import './CreamContainer.css';
import SearchCream from './SearchCream';
import Navbar from './Navbar';
import Pricing from './Pricing';




function CreamContainer() {
   const [creams, setCreams] = useState([]);
   const [newCream, setNewCream] = useState([]);


useEffect(()=>{
    fetch("http://localhost:3000/creams")
    .then((res)=>res.json())
    .then((creamInfo)=> {
        setCreams(creamInfo)
        setNewCream(creamInfo)})
        .catch((err)=> console.log(err));
   
},[]);



  return (
    <div className='parlour'>
      <div>
        <Navbar />
      </div>
        <h1>Ice-Cream Parlour</h1>
       <SearchCream setCreams={setCreams} newCream={newCream}/>
       <Pricing setCreams={setCreams} />
        <CreamList creams={creams}/>
        

        
    </div>
  )
}

export default CreamContainer