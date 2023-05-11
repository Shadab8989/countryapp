import React from "react";
import "./container.css";

function CountryDiv({ country }) {
	const population = country.population;

	let displayPopulation;
	if (population >= 1000000000) {
		displayPopulation = (population / 1000000000).toFixed(1) + " billion";
	} else if (population >= 1000000) {
		displayPopulation = (population / 1000000).toFixed(1) + " million";
	} else if (population >= 1000) {
		displayPopulation = (population / 1000).toFixed(1) + " thousand";
	} else {
		displayPopulation = population;
	}

	return (
		<div className="country-info">
			<img src={country.flag} alt="flag" />
			<div className="text-info">
				<h2>{country.name}</h2>
				<p>
					Capital: <span>{country.capital}</span>
				</p>
				<p>
					Population: <span>{displayPopulation}</span>
				</p>
				<p>
					Currency:{" "}
					<span>
						{country.currency}({country.currency_symbol})
					</span>
				</p>
				<p>
					Region: <span>{country.region}</span>
				</p>
				<p>
					<a
						className="wikiLink"
						href={`https://en.wikipedia.org/wiki/${country.name}`}
						target="_blank"
						rel="noreferrer"
					>
						WIKIPEDIA
					</a>
				</p>
				{/* <button type="button" onClick={removeCountry}>Close</button> */}
			</div>
		</div>
	);
}

export default CountryDiv;
