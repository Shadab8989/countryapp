import React, { useState,useContext,useRef} from 'react';
import "./search.css"
import CountriesDataArray from "./context/createContext.js";
import ResultsDiv from './resultsDiv.js'


function SearchField({ handleSubmit }) {

  const data = useContext(CountriesDataArray);
  const countryname = data.map(country=>country.name.common)

  const [result,setResult] = useState([])
  const [input,setInput] = useState('')

  const inputRef = useRef(null);

  function handleChange(value){
    setInput(value)
    // const results = value && countryname.filter(country=> country.toLowerCase().includes(value));   //contains
    const filterResult = value && countryname.filter(country=> value.toLowerCase() === country.toLowerCase().slice(0,value.length));   //contains from beginning
    setResult(filterResult)
  }

  function ownHandleSubmit(event){
    event.preventDefault();
    handleSubmit(input);
    setInput([])
    inputRef.current.focus();
  }

  function handleClick(name){
    setResult([]);
    setInput(name);
    inputRef.current.focus()
  }

  return (
    <div className='search-input-container'>
      <form onSubmit={ownHandleSubmit} className="search-field">
      <label>
        <input ref={inputRef} className="search-input" type="text" name="country" value={input} autoComplete='off' placeholder='Search Country here' onChange={(e) => {handleChange(e.target.value)}}/>
      </label>
      <button type="submit" className="search-button">Search</button>
    </form>
    {result && <div className="search-results">
    {result.map((name,index) => 
      <ResultsDiv key={index} name={name} handleClick={handleClick}/>
    )}
    </div>}
    </div>
    
  );
}

export default SearchField;
