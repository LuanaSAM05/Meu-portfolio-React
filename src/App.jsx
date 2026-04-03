import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <>
      <Header />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}

export default App;