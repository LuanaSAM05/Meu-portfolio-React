import React from "react";
import { HeaderContainer, Nav, NavLink } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;