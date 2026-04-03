import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f0a14, #1a0f23);
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FooterLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #fff;
  opacity: 0.5;
  border-radius: 2px;
`;

export const FooterText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #b957d9;
`;

export const FooterCredit = styled.p`
  font-size: 1rem;
  opacity: 0.7;
  margin: 0;
  color: #fff;
`;