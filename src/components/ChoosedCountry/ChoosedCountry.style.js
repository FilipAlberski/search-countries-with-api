import styled from "styled-components";

export const ChoosedCountryContainer = styled.div`
    display: ${(props) => (props.show ? "flex" : "none")};
    z-index: 1;

    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #393e46;
    color: white;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;
