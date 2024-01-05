import { useEffect, useState } from "react";
import CountriesDataArray from "./context/createContext";
import App from "./App";
import CountryInfo from './api'


export const DataProvider = () => {
    const [data,setData] = useState([])
    const sample = "hello"

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/all`)
        .then(response=>response.json())
        .then(val=>setData(val))
    },[])
    
    return (
        
        <CountriesDataArray.Provider value = {sample}>
            <App />
            <CountryInfo />
        </CountriesDataArray.Provider>
        

)
}