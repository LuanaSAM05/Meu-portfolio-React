import React, { useState } from "react";
import {
  HeaderContainer,
  NavWrapper,
  Nav,
  NavLink,
  Hamburger,
  MobileMenu,
  DownloadButton,
  DropdownMenu
} from "./styles";

import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCV, setOpenCV] = useState(false);

  return (
    <HeaderContainer>
      <NavWrapper>

        {/* BOTÃO ÚNICO */}
        <div style={{ position: "relative" }}>
          <DownloadButton onClick={() => setOpenCV(!openCV)}>
            <FaDownload />
            <span>Download CV</span>
          </DownloadButton>

          {openCV && (
            <DropdownMenu>
              <a href="/CV Portugues.pdf" download>🇧🇷 Português</a>
              <a href="/CV English.pdf" download>🇬🇧 English</a>
            </DropdownMenu>
          )}
        </div>

        {/* LINKS */}
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

      </NavWrapper>

      {/* HAMBURGER */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </Hamburger>

      {/* MOBILE */}
      {isOpen && (
        <MobileMenu>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {/* MESMO BOTÃO NO MOBILE */}
          <div style={{ position: "relative" }}>
            <DownloadButton onClick={() => setOpenCV(!openCV)}>
              <FaDownload />
              <span>Download CV</span>
            </DownloadButton>

            {openCV && (
              <DropdownMenu>
                <a href="/CV Portugues.pdf" download>🇧🇷 Português</a>
                <a href="/CV English.pdf" download>🇬🇧 English</a>
              </DropdownMenu>
            )}
          </div>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}