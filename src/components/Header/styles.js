import styled from "styled-components";

/* HEADER */
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 30px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;

  animation: slideDown 0.8s ease forwards;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

/* NAV */
export const Nav = styled.nav`
  display: flex;
  gap: 60px;
  font-size: 20px;
  align-items: center;

  /* 📱 RESPONSIVO */
@media (max-width: 768px) {
    .jWHzme {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #0f0a14;
        padding: 10px 5px;
        justify-content: initial;
        gap: 40px;
        flex-wrap: wrap;
        border-top: 1px solid #222;
    }
}
`;

/* LINKS */
export const NavLink = styled.a`
  position: relative;
  color: #b957d9;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  opacity: 0;
  transform: translateY(-60px);

  animation: fadeDown 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  &:nth-child(1) { animation-delay: 0.8s; }
  &:nth-child(2) { animation-delay: 1s; }
  &:nth-child(3) { animation-delay: 1.2s; }
  &:nth-child(4) { animation-delay: 1.4s; }
  &:nth-child(5) { animation-delay: 1.6s; }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: #b957d9;
    transition: 0.6s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #fff;
    text-shadow: 0 0 8px #c464e4;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 12px; /* 🔥 menor pra caber tudo */
  }
`;