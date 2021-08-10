import styled from "styled-components";

export const StyledHero = styled.div`
    width: 95%;
    margin: 5rem auto;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--bgColor);

    @media  (max-width: 678px){
        width: 100%;
    }
    
`;

export const Items = styled.div`
    width: 30%;
    margin: 1rem;
    box-shadow: 1px 1px 4px var(--boxShadowColor);
    border-radius: 1.5rem;
    cursor: pointer;
    transition: transform 1s ease-in;
    font-size: 1rem;
    
    &:hover{
        transform: scale(1.1, 1.1);
    }

    @media  (max-width: 1100px){
        min-width: 40%;
    }

    @media  (max-width: 500px){
        min-width: 70%;
    }
`;

export const Img = styled.img`
    width: 100%;
    
`;

export const BlockDesc = styled.div`
    margin: 1rem;
    
`;

export const TagAndDate = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;

    @media  (max-width: 1000px){
        width: 100%;
    }
`;

export const Tags = styled.p`
    background-color: var(--tagsColor);
    padding: 3px 8px;
    border-radius: 6px;
    color: var(--textColor);
`;

export const PublishDate = styled.p`
    opacity: 0.6;
    margin-left: 1rem;
    color: var(--textColor);
`;


export const Desc = styled.div`
    margin: 1rem 0;
    font-size: 1.5rem;
    border-radius: 1px solid red;
    color: var(--textColor);
    
`;


export const AuthorName = styled.div`
    opacity: 0.6;
    color: var(--textColor);
    
`;