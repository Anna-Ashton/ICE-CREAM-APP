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
        <input className="submit_input" type="submit" value="search"
        onClick={handleSubmit} />
        </form>

    </div>
  );
}

export default SearchCream;
