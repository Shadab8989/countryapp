import React, { useState,useContext } from 'react';
import "./search.css"
import CountriesDataArray from "./context/createContext.js";
import ResultsDiv from './resultsDiv.js'


function SearchField({ handleSubmit }) {

  // let results;
  const data = useContext(CountriesDataArray);
  const countryname = data.map(country=>country.name.common)
  // console.log(countryname)

  const [result,setResult] = useState('')
  function handleChange(value){
    // const results = value && countryname.filter(country=> country.toLowerCase().includes(value));   //contains
    const filterResult = value && countryname.filter(country=> value.toLowerCase() === country.toLowerCase().slice(0,value.length));   //contains from beginning
    setResult(filterResult)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="search-field">
      <label>
        <input className="search-input" type="text" name="country" autoComplete='off' placeholder='Search Country here' onChange={(e) => {handleChange(e.target.value)}}/>
      </label>
      <button type="submit" className="search-button">Search</button>
    </form>
    <div className="search-results">
    {result && result.map((name,index) => 
      <ResultsDiv key={index} name={name} />
    )}
    </div>
    </>
  );
}

export default SearchField;
