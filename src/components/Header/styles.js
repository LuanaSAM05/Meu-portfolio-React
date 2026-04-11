import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const borderAnimation = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;


export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;


export const NavWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between; 

  position: relative;
`;


export const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 50px;
  font-size: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const NavLink = styled.a`
  position: relative;
  color: #b957d9;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: #b957d9;
    transition: 0.4s ease;
  }

  &:hover::after { width: 100%; }
  &:hover { color: #fff; }
`;

export const DownloadButton = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;

  border-radius: 50px;
  background: linear-gradient(
    90deg,
    #656565,
    #ce63f2,
    #6d0590,
    #440559,
    #656565
  );
  background-size: 200%;
  animation: ${borderAnimation} 4s linear infinite;

  padding: 3px;
  transition: transform 0.3s ease;

  svg {
    color: #b957d9;
    font-size: 14px;
    margin-left: 10px;
  }

  span {
    padding: 7px 25px;
    border-radius: 50px;
    background: #0d0d0d;
    font-size: 15px;
    color: #b957d9;
    font-weight: 600;
    white-space: nowrap;
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
  }

  @media (max-width: 768px) {
    width: 220px; 

    span {
      width: 100%;
      text-align: center;
      padding: 7px 20px;
    }
  }
`;


export const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background: #111;
  border-radius: 10px;
  padding: 5px 5px;
  text-align: center;
  min-width: 180px;
  z-index: 50;

  a {
    color: #b957d9;
    padding: 10px;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      background: #2c0c3a;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    position: initial;
    width: 100%;
  }
`;


export const Hamburger = styled.div`
  display: none;
  color: #b957d9;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: fixed; 
    right: 20px;
    top: 25px;
    z-index: 1000;
  }
`;


export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  background: rgba(15,10,20,0.95);
  backdrop-filter: blur(6px);
  z-index: 20;

  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  a {
    font-size: 22px;
    color: #b957d9;
  }

  ${DownloadButton} {
    width: 220px;
  }
`;