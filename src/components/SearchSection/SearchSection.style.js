import styled from "styled-components";

export const SearchSectionContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #393e46;
    color: white;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

    input {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 1rem;

        font-size: 1.5rem;
        outline: none;
        @media (min-width: 768px) {
            width: 70%;
        }
    }
`;

export const AfterSearchContainer = styled.div`
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    padding-top: 1.5rem;
    color: white;
`;
