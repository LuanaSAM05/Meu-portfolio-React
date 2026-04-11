import React from "react";
import {
  Section,
  Container,
  Left,
  Right,
  Button,
  Socials,
  TopText,
  IconCircle
} from "./styles";

import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section as={motion.section} id="contact">

      
      <TopText
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Gostou do meu trabalho e quer saber mais informações ?</h2>
        <p>
          Terei grande prazer em atender você! Entre em contato comigo para discutir seu projeto, tirar dúvidas ou simplesmente bater um papo sobre tecnologia e design. Estou ansiosa para ouvir suas ideias e ajudar a transformá-las em realidade.
        </p>
      </TopText>

      <Container>

        
        <Left
          as={motion.div}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Vamos conversar ?</h2>

          <p>
            Estou pronta para oferecer a melhor solução para o seu projeto.
            Entre em contato por um dos meus canais oficiais.
          </p>

          <Socials>
            <p>Me siga nas redes sociais</p>

            <div className="icons">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/luuana_05"
                target="_blank"
                className="instagram"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/luana-s-a-melo-027a77365"
                target="_blank"
                className="linkedin"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/LuanaSAM05"
                target="_blank"
                className="github"
              >
                <FaGithub />
              </motion.a>
            </div>
          </Socials>
        </Left>

        
        <Right
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <IconCircle
            as={motion.div}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <FaPhone />
          </IconCircle>

          <h3>Atendimento via WhatsApp</h3>

          <p>
            Clique no botão abaixo para iniciar uma conversa direta e tirar suas dúvidas agora mesmo.
          </p>

          <Button
            as={motion.a}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/353874446710"
            target="_blank"
          >
            Quero conversar!
          </Button>
        </Right>

      </Container>
    </Section>
  );
}