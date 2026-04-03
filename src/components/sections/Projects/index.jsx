import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import * as S from "./styles";
import { motion } from "framer-motion";

export default function Projects() {
  const mainProjects = projects.slice(0, 6);
  const featuredProject = projects[6];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <S.Section id="projects">

      <S.TitleSection>My Projects</S.TitleSection>

      <S.Grid
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {mainProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </S.Grid>

      {featuredProject && (
        <S.FeaturedWrapper>
          <ProjectCard project={featuredProject} featured />
        </S.FeaturedWrapper>
      )}

    </S.Section>
  );
}