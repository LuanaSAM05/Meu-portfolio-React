import { Container } from "./styles";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import bgVideo from "../../../assets/videos/borboleta-roxa.mp4";

export function Home() {
  return (
    <Container>
      <section id="home">

        
        <motion.div
          className="left"
          initial={{ opacity: 0, scale: 0.9, x: 80 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <video autoPlay loop muted playsInline>
            <source src={bgVideo} type="video/mp4" />
          </video>
        </motion.div>

       
        <div className="right">
          <h1>
            Olá, eu sou a
            <br />
            <span className="name">Luana Melo</span>
          </h1>

          <h3 className="typing">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Web Developer",
                2000,
                "Front-end Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>
        </div>

      </section>
    </Container>
  );
}

export default Home;