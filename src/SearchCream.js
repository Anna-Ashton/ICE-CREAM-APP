import React from "react";
import './Search.css';

function SearchCream({setCreams, newCream}) {

    

    function changeHandler(e) {
        setCreams([
            ...newCream.filter((creamy)=>{
                return creamy.name.includes(e.target.value);
            })
        ])
    }

function handleSubmit(e) {
    e.preventDefault();
changeHandler();

    }


  return (
    <div className="search-bar">
        <form className="search-form">
        <input
          type="text"
          className="ice_cream_input"
          placeholder="look up your fav cream"
          onChange={changeHandler}
         
        />
        <button className="submit_input" type="submit" value="search"
        onClick={handleSubmit}>Get Your Cream</button>
        </form>

    </div>
  );
}

export default SearchCream;
