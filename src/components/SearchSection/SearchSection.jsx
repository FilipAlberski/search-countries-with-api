import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import {
    AfterSearchContainer,
    SearchSectionContainer,
} from "./SearchSection.style";

const SearchSection = (props) => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setCountries(props.countries);
    }, [props.countries]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        setFilteredCountries(countries.filter((country) => country.name));

        console.log(filteredCountries);
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
                    {filteredCountries.map((e) => {
                        {
                            return (
                                <CountryCard name={e.name.common}></CountryCard>
                            );
                        }
                    })}
                </AfterSearchContainer>
            </SearchSectionContainer>
        </>
    );
};

export default SearchSection;
