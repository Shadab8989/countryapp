import React, { useState,useContext } from 'react';
import "./search.css"
import CountriesDataArray from "./context/createContext.js";



function SearchField({ handleSubmit }) {

  const data = useContext(CountriesDataArray);
  const countryname = data.map(country=>country.name.common)
  // console.log(countryname)

  const [input,setInput] = useState('')
  function handleChange(value){
    setInput(value)
    const results = input && countryname.filter(country=> country.toLowerCase().includes(input));
    console.log(results)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="search-field">
      <label>
        <input className="search-input" type="text" name="country" autoComplete='off' placeholder='Search Country here' onChange={(e) => {handleChange(e.target.value)}}/>
      </label>
      <button type="submit" className="search-button">Search</button>
    </form>
    <div className="search-results">Search Results</div>
    </>
  );
}

export default SearchField;
