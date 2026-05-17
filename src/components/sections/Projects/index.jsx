// src/components/Projects/index.jsx

import React from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import { Section, TitleSection, Grid } from "./styles";

export default function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TitleSection>
          My <span>Projects</span>
        </TitleSection>
      </motion.div>

      <Grid>
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </Grid>
    </Section>
  );
}