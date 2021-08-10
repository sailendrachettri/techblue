import React from 'react';
import { StyledFooter, Span } from '../Footer/StyledFooter';

const currentYear = new Date();

function Footer() {
    return (
        <>
            <StyledFooter>
                <Span>@{currentYear.getFullYear()} TechBlue</Span>
            </StyledFooter> 
        </>
    );
}

export default Footer;