import React, { useContext, useState } from "react";
import SearchField from "./search.js";
import CountryDiv from "./container.js";
import CountriesDataArray from "./context/createContext.js";
import "./api.css";
function CountryInfo() {
	const data = useContext(CountriesDataArray);

	const [countries, setCountries] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = (name) => {
		setErrorMessage(null); // to clear error message

		const country = name;

		let inputfield = document.querySelector(".search-input");
		inputfield.value = "";
		if (data.length > 0) {
			data.forEach((countryData) => {
				if (countryData.name.common.toLowerCase() === country.toLowerCase()) {
					const name = countryData.name.common; // add name
					const flag = countryData.flags.png || countryData.flags.svg; // add flag
					const capital = countryData.capital; // add capital
					const population = countryData.population; // add population
					const region = countryData.region; // add region field
					const currencyValues = Object.values(countryData.currencies);
					const currency = currencyValues[0].name; // add currency name

					const currency_symbol = currencyValues[0].symbol; // add currency symbol
					if (countries.find((c) => c.capital === capital)) {
						setErrorMessage("Country as been searched already");
						setTimeout(() => setErrorMessage(""), 3000);
					}
					if (!countries.find((c) => c.capital === capital)) {
						setCountries((prevCountries) => [
							...prevCountries,
							{
								flag,
								capital,
								population,
								name,
								region,
								currency,
								currency_symbol,
							},
						]);
					}
				}
			});
		}
	};

	return (
		<div>
			<SearchField handleSubmit={handleSubmit} />
			<div className="main-container">
				<div className="message-container">
					<p>Countries Searched: {countries.length}</p>
					{errorMessage && <p>{errorMessage}</p>}
				</div>
				<div
					className="country-display-container"
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						marginBottom:"5rem"
					}}
				>
					{countries.map((country) => (
						<CountryDiv key={country.capital} country={country} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CountryInfo;
