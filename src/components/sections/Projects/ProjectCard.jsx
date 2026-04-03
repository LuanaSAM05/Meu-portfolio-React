import * as S from "./styles";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <S.Card
      as={motion.div}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      }}
      viewport={{ once: true }}
    >
      <S.Image src={project.image} alt={project.alt} />

      <S.Overlay>
        <S.Title>{project.name}</S.Title>

        <S.Tech>
          {project.technologies.join(" • ")}
        </S.Tech>

        <S.Description>
          {project.description}
        </S.Description>

        <S.Links>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </S.Links>
      </S.Overlay>
    </S.Card>
  );
}