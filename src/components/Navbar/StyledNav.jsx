import styled from "styled-components";

export const NavStyled = styled.div`
    background-color: var(--navColor);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

export const Header = styled.h2`
    font-size: 2rem;
    margin: 0 5rem;
    color: var(--textColor);
    font-weight: 900;    
`;

export const Search = styled.div`
    margin: 0 5rem 0 0;

    @media (max-width: 900px){
        display: none;
    }
    
`;

export const Input = styled.input`
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    outline: none;
`;

export const Img = styled.img`
    position: relative;
    right: 14%;
    width: 20px;
    top: 6px;
`;

export const NavList = styled.div`
    background-color: var(--navColor);
    margin: 1rem 0;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 900px){
        flex-direction: column;
        padding-top: 2rem;
        display: ${({isOpen}) => (isOpen? "block": "none")};
    }
`;

export const Li = styled.li`
    list-style: none;
    font-size: 1.5rem;
    min-height: 15vh;
    display: flex;
    align-items: center;
    color: var(--textColor);
    cursor: pointer;

    @media (max-width: 900px){
        flex-direction: column;
    }
`;

// Hamburger menu design for mobile view
export const Hamburger = styled.div`
    position: absolute;
    display: none;
    top: 2%;
    right: 11%;

    @media (max-width: 900px){
        display: block;
    }
`;

export const Line = styled.p`
    width: 2rem;
    border: 2px solid var(--textColor);
    margin: 6px 0;
    border-radius: 10px;
`;