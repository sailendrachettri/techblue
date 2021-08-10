import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled.div`
    background-color: var(--navColor);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

export const Header = styled(NavLink)`
    font-size: 2rem;
    margin: 0 5rem;
    color: var(--textColor);
    font-weight: 900;  
    cursor: pointer;
    text-decoration: none;
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
    padding: 2rem 0;
    display: flex;
    justify-content: space-evenly;
    
    @media (max-width: 900px){

        flex-direction: column;
        padding-top: 2rem;
        display: ${({isOpen}) => (isOpen? "block": "none")};
    }
`;

export const StyledNavLink = styled(NavLink)`
    list-style: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: var(--textColor);
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 900px){
        flex-direction: column;
        margin: 1rem 0;
        padding: 1rem 0;
        user-select: none;
    }

    &.${props => props.activeClassName}{
        color: #ffffffB3;
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