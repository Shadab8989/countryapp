import { createContext,useContext, useEffect, useState } from "react";

const countriesData = createContext();

export const DataProvider = () => {
    const [data,setData] = useState()

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/all`)
        .then(response=>response.json())
        .then(val=>setData(val))
    },[])
}