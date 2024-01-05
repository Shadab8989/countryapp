import { useEffect, useState } from "react";
import CountriesDataArray from "./context/createContext";
import App from "./App";
import CountryInfo from './api'


export const DataProvider = () => {
    
    const sample = "hello"

    
    
    return (
        
        <CountriesDataArray.Provider value = {sample}>
            <App />
            <CountryInfo />
        </CountriesDataArray.Provider>
        

)
}