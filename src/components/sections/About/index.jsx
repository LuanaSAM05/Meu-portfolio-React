import { useRef } from "react";
import { motion } from "framer-motion";
import { AboutWrapper } from "./styles";

import Image1 from "../../../assets/img/luana1.jpeg";
import Image2 from "../../../assets/img/luana2.jpeg";

import Certificado1 from "../../../assets/img/certificado1.png";
import Certificado2 from "../../../assets/img/certificado2.png";
import Certificado3 from "../../../assets/img/certificado3.png";
import Certificado4 from "../../../assets/img/certificado4.png";
import Certificado5 from "../../../assets/img/certificado5.png";
import Certificado6 from "../../../assets/img/certificado6.png";
import Certificado7 from "../../../assets/img/certificado7.png";
import Certificado8 from "../../../assets/img/certificado8.jpg";

function About() {
  const carouselRef = useRef(null);

  const certificados = [
    Certificado1,
    Certificado2,
    Certificado3,
    Certificado4,
    Certificado5,
    Certificado6,
    Certificado7,
    Certificado8,
  ];

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.querySelector("img").offsetWidth + 20;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });

    const maxScroll = container.scrollWidth / 2;

    setTimeout(() => {
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = container.scrollLeft - maxScroll;
      }
      if (container.scrollLeft <= 0 && direction === -1) {
        container.scrollLeft = container.scrollLeft + maxScroll;
      }
    }, 500);
  };

  // animações
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <AboutWrapper>
      <section id="about">
        {/* Conteúdo principal */}
        <motion.div
          className="content"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="text" variants={container}>
            <motion.h1 variants={fadeUp}>
              Olá, eu sou a <span>Luana Melo</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Estou em transição de carreira para a área de tecnologia, com foco
              em desenvolvimento Front-End, área pela qual me identifiquei e me
              apaixonei.
            </motion.p>

            <motion.p variants={fadeUp}>
              Atualmente estou em formação em desenvolvimento Full Stack e já
              tive contato com Quality Assurance (QA), o que me proporciona uma
              visão mais completa sobre a criação de aplicações.
            </motion.p>

            <motion.p variants={fadeUp}>
              Sou dedicada, paciente, tenho facilidade de aprendizado e estou
              sempre em busca de evoluir e aprimorar minhas habilidades,
              principalmente na construção de interfaces modernas e funcionais.
            </motion.p>

            <motion.p variants={fadeUp}>
              Estou em busca de uma oportunidade como desenvolvedora ou projetos
              freelance para desenvolvimento de sites, onde eu possa aplicar
              meus conhecimentos e crescer profissionalmente.
            </motion.p>

          </motion.div>

          {/* Imagens */}
          <motion.div
            className="images"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            <motion.img src={Image1} alt="Foto de Luana" />
            <motion.img src={Image2} alt="Foto de Luana" />
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="education"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>

          <div className="edu-item">
            <h3>✿ Desenvolvimento Full Stack</h3>
            <span>Em andamento</span>
            <p>
              Curso com <strong>Rodolfo Mori</strong> no{" "}
              <strong>DevClub</strong> desde 10 de Julho de 2025.
            </p>
          </div>

          <div className="edu-item">
            <h3>✿ Quality Assurance (QA)</h3>
            <span>Concluído</span>
            <p>
              Curso com <strong>Gustavo Farias</strong> desde 20 de Maio de
              2025, <br />
              com foco em testes e garantia de qualidade.
            </p>
          </div>
        </motion.div>

        {/* Certificados */}
        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2>Certifications</h2>

          <div className="carousel-container">
            <button onClick={() => scrollCarousel(-1)}>◄</button>

            <div className="carousel-track-container" ref={carouselRef}>
              <div className="carousel-track">
                {certificados.concat(certificados).map((img, index) => (
                  <img src={img} alt={`Certificado ${index + 1}`} key={index} />
                ))}
              </div>
            </div>

            <button onClick={() => scrollCarousel(1)}>►</button>
          </div>
        </motion.div>
      </section>
    </AboutWrapper>
  );
}

export default About;