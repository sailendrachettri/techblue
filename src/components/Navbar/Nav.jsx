import React, { useState } from 'react';
import { NavStyled, Header, Search, Input, Img, StyledNavLink, NavList, Hamburger, Line } from './StyledNav';
import magnifying_glass from '../../../src/img/magnifying_glass.png';


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <NavStyled>
                <Header to="/">TechBlue</Header>
                <Search>
                    <Input type="text" placeholder="Search blog" />
                    <Img src={magnifying_glass} alt="Search Icon" />
                </Search>
            </NavStyled>

            <NavList isOpen = {isOpen}>
               <StyledNavLink activeClassName="active" exact to="/webdev">Web Devlopment</StyledNavLink> 
               <StyledNavLink activeClassName="active" exact to="/interview">Interview prep</StyledNavLink> 
               <StyledNavLink activeClassName="active" exact to="/backend">Backends</StyledNavLink> 
               <StyledNavLink activeClassName="active" exact to="/frontend">Frontend</StyledNavLink> 
               <StyledNavLink activeClassName="active" exact to="/about">About</StyledNavLink> 
               <StyledNavLink activeClassName="active" exact to="/contact">Contact</StyledNavLink> 
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