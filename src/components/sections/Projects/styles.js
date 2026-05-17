// src/components/Projects/styles.js

import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 2rem;
  background: black;
  text-align: center;
  align-self: center;
`;

export const TitleSection = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: #fff;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 200px;
  margin-top: -80px;

  span {
    color: #b957d9;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ color }) => color || "#b957d9"};
  margin-top: 50px;
  text-align: center;
`;

export const ProjectName = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 50px;
  margin-top: 15px;
  text-align: center;
`;

export const Description = styled.p`
  color: #aaa;
  font-size: 18px;
  line-height: 1.65;
  max-width: 620px;
  margin: -25px auto 20px auto;
  text-align: center;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
  justify-content: center;
`;

export const TechPill = styled.span`
  font-size: 15px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid ${({ color }) => color || "#b957d9"}55;
  color: ${({ color }) => color || "#b957d9"};
  background: ${({ color }) => color || "#b957d9"}11;
  letter-spacing: 0.03em;
`;

export const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const LinkBtn = styled.a`
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;

  ${({ $primary, color }) =>
    $primary
      ? `background: ${color || "#b957d9"}; color: #fff;`
      : `background: #1a1a1a; color: #ccc; border: 1px solid #333;`}

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

/* ══════════════════════
   DEVBURGUER
══════════════════════ */
export const DevScene = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  overflow: visible;

  @media (max-width: 768px) {
    height: 320px;
  }

  @media (max-width: 480px) {
    height: 240px;
  }
`;

export const DevPlatform = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

export const DevNotebook = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.65));
`;

export const DevMobile = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 16px 32px rgba(0,0,0,0.6));
`;

/* ══════════════════════
   ADVOGADA
══════════════════════ */
export const AdvScene = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  overflow: visible;
  perspective: 2600px;
  transform-style: preserve-3d;

  @media (max-width: 900px) {
    height: 560px;
  }

  @media (max-width: 768px) {
    height: 440px;
  }

  @media (max-width: 480px) {
    height: 360px;
  }
`;