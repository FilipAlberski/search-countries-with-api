import React from "react";
import {
    AfterSearchContainer,
    SearchSectionContainer,
} from "./SearchSection.style";

const SearchSection = () => {
    return (
        <>
            <SearchSectionContainer>
                <input type="text" placeholder="Name of a country" />
                <AfterSearchContainer>{/* <div> */}</AfterSearchContainer>
            </SearchSectionContainer>
        </>
    );
};

export default SearchSection;
