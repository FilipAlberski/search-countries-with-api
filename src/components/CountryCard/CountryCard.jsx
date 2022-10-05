import React from "react";
import { CountryCardContainer } from "./CountryCard.style";

const CountryCard = (props) => {
    return (
        <>
            {props.country.map((country) => (
                <CountryCardContainer key={country.cca3}>
                    <img src={country.flags.png} alt="flag" />
                    <h2>{country.name.common}</h2>
                    <p>
                        <strong>Population:</strong> {country.population}
                    </p>
                    <p>
                        <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                        <strong>Capital:</strong> {country.capital}
                    </p>
                </CountryCardContainer>
            ))}
        </>
    );
};

export default CountryCard;
