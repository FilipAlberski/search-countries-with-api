import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import {
    AfterSearchContainer,
    SearchSectionContainer,
} from "./SearchSection.style";

const SearchSection = (props) => {
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
                    type="text"
                    placeholder="Name of a country"
                    onChange={handleSearch}
                />
                <AfterSearchContainer>
                    {tooManyMatches ? (
                        <p> too many matches</p>
                    ) : (
                        <CountryCard country={filteredCountries} />
                    )}
                </AfterSearchContainer>
            </SearchSectionContainer>
        </>
    );
};

export default SearchSection;
