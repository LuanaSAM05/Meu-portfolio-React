import React from "react";
import { FooterContainer, FooterLine, FooterText, FooterCredit } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLine />
      <FooterText>Transformando ideias em projetos reais 💜</FooterText>
      <FooterCredit>© {new Date().getFullYear()} Luana Melo. Todos os direitos reservados.</FooterCredit>
    </FooterContainer>
  );
}