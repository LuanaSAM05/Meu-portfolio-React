import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem;
`;

export const TitleSection = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #b957d9;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

/* CARD */
export const Card = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  cursor: default;

  background: #0f0a14;

  &:hover img {
    transform: scale(1.08);
  }
`;

/* IMAGEM */
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  transition: 0.6s ease;
`;

/* 🔥 OVERLAY (TOTALMENTE ESCONDIDO) */
export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;

  /* 🔥 começa invisível */
  opacity: 0;
  visibility: hidden;

  /* animação */
  transform: translateY(30px);
  transition: all 0.4s ease;

  /* fundo roxo */
  background: linear-gradient(
    to top,
    rgba(185, 87, 217, 0.9),
    rgba(185, 87, 217, 0.7),
    rgba(185, 87, 217, 0.5),
    rgba(185, 87, 217, 0.3),
   
    transparent
  );

  /* 🔥 aparece só no hover */
  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

/* TEXTO */
export const Title = styled.h3`
  color: #fafafa;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-weight: 800;
  font-size: 1.5rem;
`;

export const Tech = styled.span`
  display: inline-block;

  background: rgba(185, 87, 217, 0.2);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 30px;

  padding: 5px 10px;
  border-radius: 8px;

  border: 1px solid #b957d9;

  width: fit-content; /* 🔥 garante tamanho exato */

  transition: 0.3s;

  ${Card}:hover & {
    background: #b957d9;
    box-shadow: 0 0 10px #b957d9;
  }
`;

/* DESCRIÇÃO */
export const Description = styled.p`
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-top: 5px;
`;

/* LINKS */
export const Links = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  a {
    text-decoration: none;
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 8px;
    background: #fff;
    color: #b957d9;
    font-weight: 800;
    transition: 0.3s;
  }

  a:hover {
    background: #090909;
    color: #b957d9;
    font-weight: 800;
  }
`;