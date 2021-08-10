import styled from "styled-components";

export const StyledPromption = styled.div`
    background-color: var(--navColor);
    width: 90%;
    margin: 2rem auto;    
`;

export const Items = styled.div`
    padding: 2rem 0 2rem 2rem;
`;

export const H2 = styled.h2`
    font-size: 3rem;
    color: var(--textColor);
`;

export const Desc = styled.p`
    font-size: 2rem;
    max-width: 50%;
    color: var(--textColor);

    @media (max-width: 700px){
        max-width: 90%;
    }
`;

export const SocialIcons = styled.div`
    max-width: 30%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const Img = styled.img`
    width: 40px;
    margin: 5px;
    cursor: pointer;
    transition: transform 0.2s ease-in;

    &:hover{
        transform: rotate(1turn);
    }

    @media (max-width: 900px){
        &:hover{
        transform: none;
    }
    }
`;