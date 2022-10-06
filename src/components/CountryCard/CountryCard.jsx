import React from "react";
import { CountryCardContainer } from "./CountryCard.style";

const CountryCard = (props) => {
    return (
        <>
            {props.country.map((country) => (
                <CountryCardContainer key={country.cca3}>
                    <img src={country.flags.png} alt="flag" />
                    <h2>{country.name.common}</h2>

                    <button
                        onClick={() => {
                            props.handleCountryIsChosen(false);
                            props.handleCountryClick(country);
                        }}
                    >
                        choose
                    </button>
                </CountryCardContainer>
            ))}
        </>
    );
};

export default CountryCard;
