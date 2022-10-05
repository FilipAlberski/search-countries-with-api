import axios from "axios";
import React, { useState, useEffect } from "react";
import { AppContainer } from "./App.style";
import ChoosedCountry from "./components/ChoosedCountry/ChoosedCountry";
import Header from "./components/Header/Header";

import SearchSection from "./components/SearchSection/SearchSection";
import { GlobalStyle } from "./globalStyles";

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                setCountries(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [country, setCountry] = useState("");

    const [searchedCountries, setSearchedCountries] = useState(["test"]);

    const [searchCountry, setSearchCountry] = useState("");

    useEffect(() => {
        const filteredCountry = countries.filter((country) => {
            return country.name.common
                .toLowerCase()
                .includes(searchCountry.toLowerCase());
        });
        setSearchedCountries(filteredCountry);
    }, [searchCountry, countries]);

    const searchCountryHandler = (e) => {
        setSearchCountry(e.target.value);
    };

    return (
        <AppContainer>
            <GlobalStyle />
            <Header />

            <SearchSection
                searchedCountries={searchedCountries}
                searchCountryHandler={searchCountryHandler}
            />
            <ChoosedCountry country={country} />
        </AppContainer>
    );
}

export default App;
