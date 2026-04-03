import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 20px;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopText = styled.div`
  text-align: center;
  max-width: 700px;
  margin-bottom: 50px;
  color: white;

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  p {
    color: #aaa;
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #b957d9, #7b2cbf);
  color: white;
  padding: 50px;

  h2 {
    font-size: 45px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.6;
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const Socials = styled.div`
  margin-top: 20px;
  text-align: center;

  p {
    font-size: 1.5rem;
    margin-top: 80px;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a {
      font-size: 28px;
      transition: transform 0.3s;

      &.instagram {
        color: #E1306C;
      }

      &.linkedin {
        color: #0A66C2;
      }

      &.github {
        color: #333;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #0f0a14, #1a0f23);
  color: white;
  padding: 50px;
  text-align: center;

  h3 {
    font-size: 40px;
    margin-top: 60px;
  }

  p {
    color: #ccc;
    margin-bottom: 25px;
    font-size: 1.3rem;
  }
`;

export const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  background: #b957d9;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    font-size: 24px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: #b957d9;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  font-size: 1.1rem;

  &:hover {
    background: #d070f0;
    transform: scale(1.05);
  }
`;