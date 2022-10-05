import React, { useEffect, useState } from "react";
import {
    AfterSearchContainer,
    SearchSectionContainer,
} from "./SearchSection.style";

const SearchSection = (props) => {
    console.log(props.searchedCountries);
    const [searchedCountries, setSearchedCountries] = useState([]);
    useEffect(() => {
        setSearchedCountries(props.searchedCountries);
    }, [props.searchedCountries]);

    console.log(searchedCountries);
    return (
        <>
            <SearchSectionContainer>
                <input
                    type="text"
                    placeholder="Name of a country"
                    onChange={(e) => {
                        props.searchCountryHandler(e);

                        console.log(props.searchedCountries);
                    }}
                />
                <AfterSearchContainer>
                    {searchedCountries.map((country) => {
                        console.log(country.name);
                    })}
                </AfterSearchContainer>
            </SearchSectionContainer>
        </>
    );
};

export default SearchSection;
