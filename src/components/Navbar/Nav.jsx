import React, { useState } from 'react';
import { NavStyled, Header, Search, Input, Img, NavList, Li, Hamburger, Line } from './StyledNav';
import magnifying_glass from '../../../src/img/magnifying_glass.png';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <NavStyled>
                <Header>TechBlue</Header>
                <Search>
                    <Input type="text" placeholder="Search blog" />
                    <Img src={magnifying_glass} alt="Search Icon" />
                </Search>
            </NavStyled>

            <NavList isOpen = {isOpen}>
                <Li>Web Devlopment</Li>
                <Li>HTML/CSS</Li>
                <Li>Interview prep</Li>
                <Li>JavaScript</Li>
                <Li>Python/Django</Li>
                <Li>React</Li>
            </NavList>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Hamburger>
        </>
    );
}

export default Nav;