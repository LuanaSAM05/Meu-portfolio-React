import styled from "styled-components";

export const Container = styled.div`
  #home {
    display: flex;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

 
  .left {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
  }

  .left video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin-left: 170px;
  }

  
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    color: white;
    z-index: 1;
    font-family: "Poppins", sans-serif;
  }

 
  .right h1 {
    font-size: 50px;
    line-height: 1.3;
    margin-bottom: 10px;
    margin-top: 30px;
    font-weight: 400;

    opacity: 0;
    transform: translateY(-30px);

    animation: fadeDown 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.8s;
  }

  
  .name {
    margin-left: 90px;
    margin-top: 35px;
    display: block;
    font-size: 90px;
    font-family: "Sacramento", cursive;
    color: #b957d9;

    opacity: 0;
    transform: translateY(-30px);

    animation: fadeDown 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1.2s;
  }

  
  .typing {
    margin-top: 20px;
    font-size: 50px;
    color: #fff;
    min-height: 40px;

    opacity: 0;
    transform: translateY(-30px);

    animation: fadeDown 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1.6s;
  }

  .typing span {
    white-space: nowrap;
  }

  
  #home::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;

    background: linear-gradient(
      to bottom,
      transparent,
      #000
    );

    z-index: 1;
  }

  
  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

 
  @media (max-width: 768px) {
    #home {
      justify-content: center;
      align-items: center;
    }

    .right {
      width: 100%;
      padding: 30px;
      text-align: center;
      align-items: center;
    }

    .left video {
      object-position: center;
      filter: brightness(0.35) blur(1px);
    }

    .right h1 {
      font-size: 34px;
    }

    .name {
      margin-left: 8px;
      font-size: 60px;
      font-family: "Dancing Script", cursive;
    }

    .typing {
      font-size: 22px;
      min-height: 35px;
    }
  }
`;