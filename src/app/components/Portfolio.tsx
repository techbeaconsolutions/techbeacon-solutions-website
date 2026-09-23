"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const projects = [
  {
    title: "Quickchecky",
    category: "Mobile App",
    type: "Our Product",
    description:
      "A grocery price comparison app designed to help users compare prices across multiple quick-commerce platforms.",
    icon: <PhoneAndroidIcon />,
    technologies: ["React Native", "Expo", "API Integration"],
    link: "https://play.google.com/store/apps/details?id=com.pratikostwal.quickcommercecompare",
  },
  {
    title: "TechBeacon Solutions",
    category: "Website Development",
    type: "Company Website",
    description:
      "The official TechBeacon Solutions website, built to showcase digital services, solutions, and business capabilities.",
    icon: <LanguageIcon />,
    technologies: ["Next.js", "MUI", "Framer Motion"],
    link: "https://techbeaconsolutions.com/",
  },
  {
    title: "CRM & Ticketing System",
    category: "Custom Software",
    type: "Internal Project",
    description:
      "A custom system designed to manage users, tickets, workflows, and business operations from a centralized platform.",
    icon: <DashboardIcon />,
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Elite Interiors",
    category: "Website Design",
    type: "Demo Concept",
    description:
      "A modern website concept created to demonstrate how a premium interior design business can present its services online.",
    icon: <DesignServicesIcon />,
    technologies: ["Next.js", "MUI", "Responsive Design"],
    link: "#",
  },
];

const MotionBox = motion(Box);

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PortfolioSection() {
  return (
    <Box
      id="portfolio"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
        background:
          "radial-gradient(circle at 15% 20%, rgba(99,102,241,0.12), transparent 30%), radial-gradient(circle at 85% 80%, rgba(168,85,247,0.12), transparent 30%), #080814",
      }}
    >
      {/* Animated background glow */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
          top: -180,
          left: -180,
          filter: "blur(30px)",
          animation: "portfolioGlowOne 10s ease-in-out infinite",
          pointerEvents: "none",
          "@keyframes portfolioGlowOne": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(100px, 70px)",
            },
          },
        }}
      />

      <Box
        component="span"
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.13), transparent 70%)",
          bottom: -220,
          right: -180,
          filter: "blur(35px)",
          animation: "portfolioGlowTwo 12s ease-in-out infinite",
          pointerEvents: "none",
          "@keyframes portfolioGlowTwo": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(-80px, -60px)",
            },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              display: "inline-block",
              mb: 2,
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#a78bfa",
            }}
          >
            Our Work
          </Typography>

          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3.4rem",
              },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 2,
              background:
                "linear-gradient(90deg, #ffffff 10%, #a78bfa 45%, #60a5fa 75%, #ffffff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "portfolioTextGradient 7s linear infinite",
              "@keyframes portfolioTextGradient": {
                "0%": {
                  backgroundPosition: "0% center",
                },
                "100%": {
                  backgroundPosition: "200% center",
                },
              },
            }}
          >
            Built, Designed & Delivered
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            sx={{
              maxWidth: 680,
              mx: "auto",
              color: "rgba(255,255,255,0.65)",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            A selection of digital products, websites, and business solutions
            we've designed and developed.
          </Typography>
        </Box>

        {/* Portfolio Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              component={motion.div}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: 410,
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  overflow: "hidden",

                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",

                  border: "1px solid rgba(255,255,255,0.09)",

                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",

                  transition:
                    "transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "rgba(139,92,246,0.45)",
                    boxShadow:
                      "0 20px 60px rgba(79,70,229,0.15)",
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.08), transparent 45%, rgba(168,85,247,0.08))",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  },

                  "&:hover::before": {
                    opacity: 1,
                  },
                }}
              >
                {/* Top row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mb: 4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "17px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.22), rgba(168,85,247,0.22))",

                      border:
                        "1px solid rgba(139,92,246,0.25)",

                      color: "#a78bfa",

                      "& svg": {
                        fontSize: 28,
                      },
                    }}
                  >
                    {project.icon}
                  </Box>

                  {/* Type */}
                  <Chip
                    label={project.type}
                    size="small"
                    sx={{
                      color: "#c4b5fd",
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                    }}
                  />
                </Box>

                {/* Category */}
                <Typography
                  sx={{
                    color: "#60a5fa",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    mb: 1,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {project.category}
                </Typography>

                {/* Title */}
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: { xs: "1.65rem", md: "1.9rem" },
                    mb: 1.5,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.62)",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Technologies */}
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{
                    mb: 4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        background: "rgba(255,255,255,0.05)",
                        border:
                          "1px solid rgba(255,255,255,0.08)",
                        fontSize: "0.72rem",
                      }}
                    />
                  ))}
                </Stack>

                {/* Bottom button */}
                <Box
                  sx={{
                    mt: "auto",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Button
                    href={project.link}
                    target={
                      project.link !== "#" ? "_blank" : undefined
                    }
                    rel={
                      project.link !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    disabled={project.link === "#"}
                    endIcon={
                      project.link !== "#" ? (
                        <OpenInNewIcon fontSize="small" />
                      ) : (
                        <ArrowForwardIcon fontSize="small" />
                      )
                    }
                    sx={{
                      px: 0,
                      color: "#a78bfa",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": {
                        background: "transparent",
                        color: "#c4b5fd",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </Box>

                {/* Bottom gradient line */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #6366f1, #a855f7, #60a5fa)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.5s ease",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #6366f1, #a855f7, #60a5fa)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.5s ease",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </MotionBox>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            textAlign: "center",
            mt: { xs: 7, md: 9 },
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.65)",
              mb: 2.5,
              fontSize: "1rem",
            }}
          >
            Have a project in mind?
          </Typography>

          <Button
            href="#contact"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "1rem",
              background:
                "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow:
                "0 10px 30px rgba(99,102,241,0.25)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #4f46e5, #7c3aed)",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 14px 35px rgba(99,102,241,0.35)",
              },
            }}
          >
            Let's Build Something
          </Button>
        </Box>
      </Container>
    </Box>
  );
}