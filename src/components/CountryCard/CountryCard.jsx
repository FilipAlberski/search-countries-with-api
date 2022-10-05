import React from "react";
import { CountryCardContainer } from "./CountryCard.style";

const CountryCard = (props) => {
    return (
        <CountryCardContainer>
            <h4>{props.name}</h4>
            <button>Choose it</button>
        </CountryCardContainer>
    );
};

export default CountryCard;
