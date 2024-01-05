import React, { useState,useEffect } from 'react';
import "./App.css"
import CountryInfo from './api.js';
import CountriesDataArray from "./context/createContext";

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response=>response.json())
    .then(val=>setData(val))
},[])



  return (
    <div className="App">
    <CountriesDataArray.Provider value={data}>
      <CountryInfo />
    </CountriesDataArray.Provider>
    </div>
  );
}

export default App;
