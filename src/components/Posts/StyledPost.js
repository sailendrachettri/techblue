import styled from "styled-components";

export const StyledPost = styled.div`
    width : 90%;
    margin: auto;
    min-height: 100vh;
    background-color: var(--bgColor);
`;

export const Items = styled.div`
    display: flex;
    margin: 4rem 0 4rem 0;
    min-width: 70%;
    padding: 5px;
    box-shadow: 1px 4px 4px var(--boxShadowColor);
    
    @media  (max-width: 800px){
        flex-direction: column;
        border-radius: 12px;
        align-items: center;
    }
`;

export const Img = styled.img`
    max-width: 40%;
    border-radius: 5px;

    @media  (max-width: 800px){
      min-width: 93%;
    }
`;

export const LeftSection = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Tag = styled.p`
    background-color: var(--tagsColor);
    padding: 3px 8px;
    margin: 0;
    border-radius: 6px;
    color: var(--textColor);
    width: fit-content;
    font-family: var(--fontAll);
    font-weight: 400;
`;

export const Title = styled.p`
    font-size: 2rem;
    color: white;
    font-family: var(--fontAll);
    font-weight: 700;
`;

export const Desc = styled.p`
    font-size: 1.2rem;
    color: var(--textColor);
    margin: 0;
    font-family: var(--fontAll);
    font-weight: 400;
`;