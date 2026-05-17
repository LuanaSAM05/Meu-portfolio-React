// src/components/Projects/projects.js

import notebookDev    from "../../../assets/img/notebook-devburguer.png";
import celularDev     from "../../../assets/img/celular-devburguer.png";
import estruturaDev   from "../../../assets/img/estrutura-roxa-devburguer.png";

import notebookAdv    from "../../../assets/img/notebook-advogada.png";
import sobreAdv       from "../../../assets/img/sobre_advogada.jpeg";
import areasAdv       from "../../../assets/img/areas_de_atuacao_advogada.jpeg";
import servicosAdv    from "../../../assets/img/servicos_advogada.jpeg";

export const projects = [
  {
    id: 1,
    type: "devburguer",
    name: "DevBurguer",
    tagline: "Full Stack · E-commerce",
    description:
      "Sistema web completo para hamburgueria artesanal com cardápio digital, carrinho de compras, autenticação de utilizadores e painel administrativo para gestão de pedidos e produtos em tempo real.",
    technologies: ["React", "Vite", "Styled Components", "Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Axios"],
    images: {
      notebook:  notebookDev,
      mobile:    celularDev,
      estrutura: estruturaDev,
    },
    github: {
      frontend: "https://github.com/LuanaSAM05/dev-burguer-frontend.git",
      api:      "https://github.com/LuanaSAM05/dev-burguer-api.git",
    },
    demo: "https://dev-burguer-2026.vercel.app/login",
    color: "#b957d9",
  },
  {
    id: 2,
    type: "advogada",
    name: "Dra. Regilainy Alves",
    tagline: "Direito Agrário · Institucional",
    description:
      "Site institucional para escritório especializado em Direito Agrário e regularização fundiária, com foco em credibilidade, clareza de informação e experiência do utilizador para produtores rurais.",
    technologies: ["React", "HTML", "CSS", "Tailwind", "JavaScript", "Git", "GitHub"],
    images: {
      notebook: notebookAdv,
      slides: [sobreAdv, areasAdv, servicosAdv],
    },
    github: "https://github.com/LuanaSAM05/Site-Dra-Regilainy-Alves.git",
    demo: "https://regilainy-alves-direito-agrario.vercel.app/",
    color: "#b8860b",
  },
];