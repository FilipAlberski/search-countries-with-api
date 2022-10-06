import React from "react";
import { ChoosedCountryContainer } from "./ChoosedCountry.style";

const ChoosedCountry = (props) => {
    console.log(props.country);
    return (
        <ChoosedCountryContainer show={props.show}>
            <h1>{props.country.name.common}</h1>
            <img src={props.country.flags.png} alt="flag" />
            <p>Capital: {props.country.capital}</p>
            <p>Region: {props.country.region}</p>
            <p>Subregion: {props.country.subregion}</p>
            <p>Population: {props.country.population}</p>
            <p>Area: {props.country.area}</p>
        </ChoosedCountryContainer>
    );
};

export default ChoosedCountry;
