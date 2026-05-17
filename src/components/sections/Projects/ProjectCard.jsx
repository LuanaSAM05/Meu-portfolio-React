// src/components/Projects/ProjectCard.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Wrapper,
  Label,
  ProjectName,
  Description,
  TechList,
  TechPill,
  LinksRow,
  LinkBtn,
  DevScene,
  DevPlatform,
  DevNotebook,
  DevMobile,
  AdvScene,
} from "./styles";

const easeOut = {
  type: "spring",
  stiffness: 70,
  damping: 16,
};

// ══════════════════════════════════════════
// CARD DEVBURGUER
// ══════════════════════════════════════════

function DevBurguerCard({ project }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <Wrapper ref={ref}>
      <DevScene>

        <motion.div
          style={{
            position: "absolute",
            top: 150,
            left: "5%",
            transform: "translateX(-50%)",
            width: "80%",
            zIndex: 1,
          }}
          initial={{ y: 80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ ...easeOut, delay: 0.05 }}
        >
          <DevPlatform
            src={project.images.estrutura}
            alt=""
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            bottom: "26%",
            left: "8%",
            width: "68%",
            zIndex: 2,
          }}
          initial={{ x: -140, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ ...easeOut, delay: 0.2 }}
          whileHover={{
            y: -8,
            transition: { duration: 0.35 },
          }}
        >
          <DevNotebook
            src={project.images.notebook}
            alt="DevBurguer no notebook"
          />
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            bottom: "36%",
            right: "16%",
            width: "24%",
            zIndex: 3,
          }}
          initial={{ y: -180, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ ...easeOut, delay: 0.4 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.35 },
          }}
        >
          <DevMobile
            src={project.images.mobile}
            alt="DevBurguer no celular"
          />
        </motion.div>

      </DevScene>

      <Info project={project} />
    </Wrapper>
  );
}

// ══════════════════════════════════════════
// CARD ADVOGADA — DOMINÓ 3D
// ══════════════════════════════════════════

const STACK = [
  {
    delay: 0.15,
    top: "40%",
    left: "37%",
    width: "45%",
    zIndex: 2,
    imgIndex: 2,
    rotateY: "-58deg",
    rotateZ: "-1deg",
    translateZ: "-260px",
  },
  {
    delay: 0.25,
    top: "50%",
    left: "47%",
    width: "45%",
    zIndex: 3,
    imgIndex: 1,
    rotateY: "-58deg",
    rotateZ: "-1deg",
    translateZ: "-130px",
  },
  {
    delay: 0.45,
    top: "60%",
    left: "57%",
    width: "50%",
    zIndex: 4,
    imgIndex: 0,
    rotateY: "-58deg",
    rotateZ: "-1deg",
    translateZ: "0px",
  },
];

function AdvogadaCard({ project }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <Wrapper ref={ref}>
      <AdvScene>

        <style>{`
          .stk-card {
            position: absolute;
            border-radius: 14px;
            overflow: hidden;
            background: #fff;
            transform-origin: center left;
            box-shadow:
              0 45px 90px rgba(0,0,0,0.22),
              0 18px 40px rgba(0,0,0,0.12);
            transition:
              transform .4s ease,
              box-shadow .4s ease;
            will-change: transform;
          }

          .stk-card img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
          }

          .stk-card:hover {
            box-shadow:
              0 60px 120px rgba(0,0,0,0.32),
              0 24px 50px rgba(0,0,0,0.18);
          }
        `}</style>

        {/* NOTEBOOK RETO */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "1%",
            width: "48%",
            transform: "scaleX(1.85)",
            zIndex: 10,
          }}
          initial={{ opacity: 0, y: 120, scale: 0.9 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 16,
            delay: 0.05,
          }}
          whileHover={{
            y: -12,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          <img
            src={project.images.notebook}
            alt="Notebook"
            style={{
              width: "100%",
              display: "block",
              objectFit: "contain",
              filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.45))",
            }}
          />
        </motion.div>

        {/* PÁGINAS DOMINÓ */}
        {STACK.map((card, i) => (
          <motion.div
            key={i}
            className="stk-card"
            style={{
              top: card.top,
              left: card.left,
              width: card.width,
              zIndex: card.zIndex,
              transformStyle: "preserve-3d",
              transform: `
                perspective(2400px)
                rotateY(${card.rotateY})
                rotateZ(${card.rotateZ})
                translateZ(${card.translateZ})
              `,
            }}
            initial={{ opacity: 0, y: -120, scale: 0.7 }}
            animate={
              inView
                ? { opacity: 1, y: 0, scale: 1 }
                : {}
            }
            transition={{
              type: "spring",
              stiffness: 65,
              damping: 16,
              delay: card.delay,
            }}
            whileHover={{
              y: -16,
              x: 6,
              scale: 1.04,
              transition: { duration: 0.35 },
            }}
          >
            <img
              src={project.images.slides[card.imgIndex]}
              alt={`Página ${card.imgIndex + 1}`}
            />
          </motion.div>
        ))}

      </AdvScene>

      <Info project={project} />
    </Wrapper>
  );
}

// ══════════════════════════════════════════
// INFO
// ══════════════════════════════════════════

function Info({ project }) {
  const isDevBurguer = project.type === "devburguer";
  const isAdvogada = project.type === "advogada";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.65 }}
    >
      <Label color={project.color}>
        {project.tagline}
      </Label>

      <ProjectName>
        {project.name}
      </ProjectName>

      <Description>
        {project.description}
      </Description>

      <TechList>
        {project.technologies.map((t) => (
          <TechPill key={t} color={project.color}>
            {t}
          </TechPill>
        ))}
      </TechList>

      <LinksRow>
        <LinkBtn
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          $primary
          color={project.color}
        >
          Ver Demo
        </LinkBtn>

        {isDevBurguer ? (
          <>
            <LinkBtn
              href={project.github.frontend}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Frontend
            </LinkBtn>

            <LinkBtn
              href={project.github.api}
              target="_blank"
              rel="noreferrer"
            >
              GitHub API
            </LinkBtn>
          </>
        ) : isAdvogada ? (
          <>
            <LinkBtn
              href={project.github.frontend}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Frontend
            </LinkBtn>

            <LinkBtn
              href={project.github.backend}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Backend
            </LinkBtn>
          </>
        ) : (
          <LinkBtn
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </LinkBtn>
        )}
      </LinksRow>
    </motion.div>
  );
}

// ══════════════════════════════════════════
// EXPORT
// ══════════════════════════════════════════

export default function ProjectCard({ project }) {
  if (project.type === "devburguer") {
    return <DevBurguerCard project={project} />;
  }

  if (project.type === "advogada") {
    return <AdvogadaCard project={project} />;
  }

  return null;
}