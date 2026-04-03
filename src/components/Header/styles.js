import styled from "styled-components";

/* HEADER */
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;
`;

/* NAV */
export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: clamp(8px, 3vw, 25px);

  max-width: 100%;
  width: 100%;
  justify-content: center;

  font-size: 20px;

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    padding: 15px 10px;

    justify-content: space-around;
    gap: 5px;

    border-top: 1px solid #222;
  }
`;

/* LINKS */
export const NavLink = styled.a`
  position: relative;
  color: #b957d9;
  text-decoration: none;
  font-weight: 500;

  /* 🔥 ISSO AQUI RESOLVE O PROBLEMA */
  flex-shrink: 1;
  white-space: nowrap;

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

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;