import styled from "styled-components";

export const AboutWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 50px;
  min-height: 100vh;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px; /* MENOS ESPAÇO ENTRE TEXTO E IMAGEM */
  }

  .text {
    max-width: 600px;
    margin-left: 50px;
    margin-top: 50px;
  }


  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    color: #b957d9;
    font-size: 3.5rem;
  }

  p {
    color: #ffffffbb;
    font-size: 1.3rem;
    line-height: 1.8;
  }

  /* IMAGENS */
  .images {
    display: flex;
    gap: 25px;
  }

  .images img {
    width: 330px; /* MAIOR */
    height: 440px; /* MAIOR */
    object-fit: cover;
    border-radius: 12px;
    box-shadow:
      0 0 20px #b957d9,
      0 0 40px #b957d9;
    transition: all 0.4s ease;
    margin-top: 130px;
  }

  /* 🔥 EFEITO HOVER MAIS BONITO */
  .images img:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow:
      0 0 30px #b957d9,
      0 0 60px #b957d9;
  }

  .images img:first-child {
    margin-top: 300px;
  }

 /* EDUCATION */
.education {
  margin-top: 180px;
  display: flex;
  flex-direction: column; /* empilha os itens verticalmente */
  justify-content: center; /* centraliza verticalmente */
  align-items: center; /* centraliza horizontalmente */
  text-align: center; /* garante que textos fiquem centralizados */
}

.education h2 {
  color: #b957d9;
  margin-bottom: 60px;
  font-size: 3rem;
}

.symbol {
  color: #b957d9; 
  margin-right: 10px; 
  font-weight: bold;
}

.edu-item {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column; /* título e status empilhados */
  align-items: center; /* centraliza horizontalmente */
}

.edu-item h3 {
  color: #fff;
  font-size: 1.4rem;
  margin: 5px 0 0 0; /* remove espaço acima e coloca abaixo do status */
}

.edu-item p {
  color: #fff;
  font-size: 1.3rem;
  margin: 0; /* remove margens para ficar colado ao h3 */
}

.edu-item span {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2px; /* pequeno espaçamento do status para o nome */
  color: #b957d9; /* se quiser destacar o status */
}

  /* CERTIFICATIONS */
  .certifications {
    margin-top: 80px;
  }

.certifications h2 {
  color: #b957d9;
  margin-bottom: 40px;   /* dá mais espaço embaixo */
  text-align: center;     /* centraliza horizontalmente */
  font-size: 3rem;        /* aumenta a fonte */
  font-weight: bold;      /* opcional: deixa mais destacado */
}


  /* CARROSSEL */
  .carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.carousel-track-container {
  overflow: hidden;
  flex: 1;
}

.carousel-track {
  display: flex;
  gap: 50px;
}

.carousel-track img {
  width: auto;           /* largura automática */
  max-width: 370px;      /* largura máxima desejada */
  height: auto;          /* altura proporcional */
  max-height: 240px;     /* altura máxima */
  object-fit: contain;   /* mostra toda a imagem sem cortar */
  flex-shrink: 0;        /* impede que a imagem encolha */
  border-radius: 30px;
  box-shadow: 0 0 10px #b957d9;
  transition: transform 0.3s;
  margin-bottom: 50px;
  margin-top: 50px;
}

.carousel-track img:hover {
  transform: scale(1.05);
}
.carousel-btn {
  background: rgba(185, 87, 217, 0.8);
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;
  z-index: 10;
}

.carousel-btn:hover {
  background: #b957d9;
}

.carousel-btn.prev {
  margin-right: 10px;
}

.carousel-btn.next {
  margin-left: 10px;
}

  /* ANIMAÇÃO */
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  /* RESPONSIVO */
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

      .text {
      margin: 0;
    }

    .images {
      justify-content: center;
      margin-top: 20px;
    }

    .images img {
      width: 180px;
      height: 240px;
    }

/* RESPONSIVO */
@media (max-width: 768px) {

  .carousel-container {
    width: 100%;
    max-width: 320px; /* 🔥 reduz o tamanho do carrossel */
    margin: 0 auto;
  }

  .carousel-track {
    gap: 20px; /* 🔥 diminui espaço entre imagens */
  }

  .carousel-track img {
    max-width: 250px; /* 🔥 menor no mobile */
    max-height: 160px;
    margin: 30px 0;
  }

  .carousel-btn {
    font-size: 1rem;
    padding: 8px 10px;
  }
}
  }
`;
