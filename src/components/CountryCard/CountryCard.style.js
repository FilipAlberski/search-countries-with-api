import styled from "styled-components";

export const CountryCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    width: 800px;
    color: black;
    gap: 1rem;
    background-color: #fff;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

    img {
        width: auto;
        height: 2rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }

    button {
        padding: 0.5rem;
        background-color: #393e46;
        color: white;
        border: none;
        border-radius: 1rem;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
    }
`;
