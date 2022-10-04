import React, { useState } from "react";
import { AppContainer } from "./App.style";
import Header from "./components/Header/Header";

import SearchSection from "./components/SearchSection/SearchSection";
import { GlobalStyle } from "./globalStyles";

function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            <Header />

            <SearchSection />
        </AppContainer>
    );
}

export default App;
