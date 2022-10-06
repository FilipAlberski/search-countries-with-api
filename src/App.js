import axios from "axios";
import React, { useState, useEffect } from "react";
import { AppContainer } from "./App.style";
import ChoosedCountry from "./components/ChoosedCountry/ChoosedCountry";
import Header from "./components/Header/Header";

import SearchSection from "./components/SearchSection/SearchSection";
import { GlobalStyle } from "./globalStyles";

function App() {
    const [countries, setCountries] = useState([]);

    const [displayChoosedCountry, setDisplayChoosedCountry] = useState(false);
    const [SelectedCountry, setSelectedCountry] = useState([]);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        if (country) {
            setDisplayChoosedCountry(true);
        }
    };
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

    return (
        <AppContainer>
            <GlobalStyle />
            <Header />

            <SearchSection
                countries={countries}
                handleCountryClick={handleCountryClick}
            />
            {displayChoosedCountry && (
                <ChoosedCountry
                    show={displayChoosedCountry}
                    country={SelectedCountry}
                />
            )}
        </AppContainer>
    );
}

export default App;
