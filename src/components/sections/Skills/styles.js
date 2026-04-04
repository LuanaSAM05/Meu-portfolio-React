import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

/* CONTAINER */
export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* TITLE */
export const Title = styled.h2`
  font-size: 3rem;
  color: #b957d9;
  margin-bottom: 40px;
  font-weight: 800;
  letter-spacing: 2px;
`;

/* CATEGORY */
export const Category = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 50px;
`;

/* CATEGORY TITLE */
export const CategoryTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 400;

  .symbol {
    color: #b957d9;
    margin-right: 15px;
    font-weight: bold;
  }
`;

/* GRID */
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 25px;
`;

/* CARD (RESPONSIVO CORRIGIDO) */
export const Card = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px 20px;
  text-align: center;
  cursor: pointer;

  border: 1px solid rgba(255, 255, 255, 0.1);

  animation: ${float} 5s ease-in-out infinite;
  transition: all 0.4s ease;

  /* 🔥 impede estourar */
  width: 100%;
  max-width: 180px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow:
      0 0 25px rgba(185, 87, 217, 0.6),
      0 0 50px rgba(140, 0, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 18px 12px;
    max-width: 140px;

    &:hover {
      transform: translateY(-4px) scale(1.03);
    }
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
    margin-left: -25px;
    max-width: 100%;
    

    &:hover {
      transform: translateY(-3px) scale(1.02);
    }
  }
`;

/* ICON */
export const Icon = styled.div`
  font-size: 2.5rem;
  color: #b957d9;
  margin-bottom: 10px;
  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.2) rotate(5deg);
    color: #fff;
  }
`;

/* NAME */
export const SkillName = styled.p`
  color: #fff;
  font-size: 1.3rem;
  transition: 0.3s;

  ${Card}:hover & {
    color: #b957d9;
  }
`;