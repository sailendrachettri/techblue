import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #2C394B;
    }

    :root{
        --boxShadowColor: #0E121840;
        --bgColor: #2C394B;
        --tagsColor: #5089C6;
        --textColor: #ffffff;
        --navColor: #5089C6;
    }
`;