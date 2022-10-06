import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import {
    AfterSearchContainer,
    SearchSectionContainer,
} from "./SearchSection.style";

const SearchSection = (props) => {
    const [countryIsChosen, setCountryIsChosen] = useState(false);

    const handleCountryIsChosen = (x) => {
        setCountryIsChosen(x);
    };

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    const [tooManyMatches, setTooManyMatches] = useState(true);

    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setCountries(props.countries);
    }, [props.countries]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (filteredCountries.length > 10) {
            setTooManyMatches(true);
        } else {
            setTooManyMatches(false);
        }
    };

    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) =>
                country.name.common.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, countries]);

    return (
        <>
            <SearchSectionContainer>
                <input
                    onClick={() => setCountryIsChosen(true)}
                    type="text"
                    placeholder="Name of a country"
                    onChange={handleSearch}
                />
                <AfterSearchContainer show={countryIsChosen}>
                    {tooManyMatches ? (
                        <p> too many matches</p>
                    ) : (
                        <CountryCard
                            handleCountryClick={props.handleCountryClick}
                            country={filteredCountries}
                            handleCountryIsChosen={handleCountryIsChosen}
                        />
                    )}
                </AfterSearchContainer>
            </SearchSectionContainer>
        </>
    );
};

export default SearchSection;
