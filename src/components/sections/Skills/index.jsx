import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Title,
  Category,
  CategoryTitle,
  SkillsGrid,
  Card,
  Icon,
  SkillName,
} from "./styles";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

function Skills() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container id="skills">
      <Title id="title-skills">Skills</Title>

      {/* Frontend */}
      <Category>
        <CategoryTitle>
          <span className="symbol">✿</span>Frontend
        </CategoryTitle>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            <motion.div variants={item}>
              <Card>
                <Icon><FaHtml5 /></Icon>
                <SkillName>HTML</SkillName>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <Icon><FaCss3Alt /></Icon>
                <SkillName>CSS</SkillName>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <Icon><FaJs /></Icon>
                <SkillName>JavaScript</SkillName>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <Icon><FaReact /></Icon>
                <SkillName>React</SkillName>
              </Card>
            </motion.div>
          </SkillsGrid>
        </motion.div>
      </Category>

      {/* Backend */}
      <Category>
        <CategoryTitle>
          <span className="symbol">✿</span>Backend
        </CategoryTitle>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            <motion.div variants={item}>
              <Card>
                <Icon><FaNodeJs /></Icon>
                <SkillName>Node.js</SkillName>
              </Card>
            </motion.div>
          </SkillsGrid>
        </motion.div>
      </Category>

      {/* Tools */}
      <Category>
        <CategoryTitle>
          <span className="symbol">✿</span>Tools
        </CategoryTitle>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            <motion.div variants={item}>
              <Card>
                <Icon><FaGitAlt /></Icon>
                <SkillName>Git</SkillName>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <Icon><FaGithub /></Icon>
                <SkillName>GitHub</SkillName>
              </Card>
            </motion.div>
          </SkillsGrid>
        </motion.div>
      </Category>
    </Container>
  );
}

export default Skills;