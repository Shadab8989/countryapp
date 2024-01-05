import React, { useContext, useState } from 'react';
import SearchField from './search.js';
import CountryDiv from './container.js';
import CountriesDataArray from './context/createContext.js';

function CountryInfo() {
  const countrydataVal= useContext(CountriesDataArray)
  if(countrydataVal.length){
    console.log(countrydataVal)  
  }
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setErrorMessage(null); // to clear error message
    
    const country = event.target.elements.country.value;
    
    let inputfield = document.querySelector('.search-input');
    inputfield.value="" 

    fetch(`https://restcountries.com/v2/name/${country}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
  
          data.forEach(countryData => {
            if (countryData.name.toLowerCase() === country.toLowerCase()) {
              const name = countryData.name;                              // add name
              const flag = countryData.flag;                              // add flag
              const capital = countryData.capital;                        // add capital
              const population = countryData.population;                  // add population
              const region = countryData.region;                          // add region field
              const currency = countryData.currencies[0].name;            // add currency data
              const currency_symbol = countryData.currencies[0].symbol
              if(countries.find(c=>c.capital === capital)){
                setErrorMessage('Country as been searched already');
              }
              if (!countries.find(c => c.capital === capital)) {
                setCountries(prevCountries => [
                  ...prevCountries,
                  { flag, capital, population, name, region,currency,currency_symbol }
                ]);
              }
            }
          });
        } else {
          setErrorMessage('No countries found');
          setTimeout(()=>setErrorMessage(''),3000)
        }
      })
      .catch(error => {
        setErrorMessage('An error occurred');
      });
  };
  
  return (
    <div>
      <SearchField handleSubmit={handleSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
      <p>Countries Searched: {countries.length}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
        {countries.map(country => (
          <CountryDiv key={country.capital} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryInfo;
