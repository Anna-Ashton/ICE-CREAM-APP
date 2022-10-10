import React, { useState} from 'react'
import {Link} from 'react-router-dom';

function Pricing({setCreams}) {
    const [dataObj, setDataObj] = useState({});
    function handleBlur(e) {
        setDataObj({ ...dataObj, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
       
       setCreams((prev) => [...prev, dataObj]);
       fetch("http://localhost:3000/creams",{
        method:"POST",
        headers:{"Content-Type": "application/json",},
        body:JSON.stringify({...dataObj,"number":parseInt(dataObj.number)})
       })
       console.log(dataObj);
      }

  return (
    <div>
        <Link to='/' className='container-link'>Go to table</Link>
        <form className="ui form">
        <div className="inline fields">
          <input type="number" name="id" 
          placeholder='index'
          onBlur={handleBlur} />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="cream_url"
            placeholder="Ice-Cream Detail"
            onBlur={handleBlur}
          />
          <input
            type="number"
            name="price_ksh"
            placeholder="Amount_Ksh"
            step="50"
            onBlur={handleBlur}
          />
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Put Your Ice-Cream
        </button>
      </form>
    </div>
  )
}

export default Pricing;