"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Paper,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaletteIcon from "@mui/icons-material/Palette";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive websites designed to represent your business and generate enquiries.",
      icon: <LanguageIcon />,
      tag: "Web Development",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications built for businesses, startups, and digital products.",
      icon: <PhoneIphoneIcon />,
      tag: "iOS & Android",
    },
    {
      title: "Custom Software",
      description:
        "Business-focused dashboards, portals, CRM systems, and custom applications built around your workflow.",
      icon: <CodeIcon />,
      tag: "Business Software",
    },
    {
      title: "AI & Automation",
      description:
        "AI-powered tools and automated workflows that reduce repetitive work and improve business efficiency.",
      icon: <AutoAwesomeIcon />,
      tag: "AI Solutions",
    },
    {
      title: "SEO & Google Business",
      description:
        "Improve your search visibility, local presence, and Google Business Profile to help customers find you.",
      icon: <SearchIcon />,
      tag: "Local SEO",
    },
    {
      title: "Digital Marketing",
      description:
        "Social media, campaigns, content, and digital strategies designed to help your business reach more customers.",
      icon: <CampaignIcon />,
      tag: "Marketing",
    },
    {
      title: "Branding & UI/UX",
      description:
        "Professional visual identities and user experiences that create a consistent and memorable brand.",
      icon: <PaletteIcon />,
      tag: "Design & Branding",
    },
    {
      title: "WhatsApp Automation",
      description:
        "Automate customer communication, lead handling, notifications, and everyday business workflows.",
      icon: <WhatsAppIcon />,
      tag: "Automation",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 60%, #080d18 100%)",
        color: "#fff",
        py: { xs: 10, md: 14 },

        /* =========================
           ANIMATED BACKGROUND
        ========================= */

        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: "350px", md: "650px" },
          height: { xs: "350px", md: "650px" },
          borderRadius: "50%",
          top: "-300px",
          left: "-150px",

          background:
            "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 40%, transparent 72%)",

          filter: "blur(35px)",
          pointerEvents: "none",

          animation:
            "servicesGlowLeft 10s ease-in-out infinite",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: { xs: "300px", md: "550px" },
          height: { xs: "300px", md: "550px" },
          borderRadius: "50%",
          bottom: "-300px",
          right: "-150px",

          background:
            "radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(167,139,250,0.08) 40%, transparent 72%)",

          filter: "blur(40px)",
          pointerEvents: "none",

          animation:
            "servicesGlowRight 12s ease-in-out infinite",
        },

        /* =========================
           KEYFRAMES
        ========================= */

        "@keyframes servicesGlowLeft": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(80px, 50px) scale(1.08)",
          },
        },

        "@keyframes servicesGlowRight": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(-70px, -50px) scale(1.1)",
          },
        },

        "@keyframes iconGlow": {
          "0%, 100%": {
            boxShadow: "0 0 0 rgba(99,102,241,0)",
          },
          "50%": {
            boxShadow: "0 0 22px rgba(99,102,241,0.18)",
          },
        },

        "@keyframes accentGradient": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* =========================
            SECTION HEADER
        ========================= */}

        <Stack
          spacing={3}
          textAlign="center"
          mb={{ xs: 7, md: 10 }}
          alignItems="center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#818CF8",
                fontWeight: 600,
              }}
            >
              What We Do
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              Everything Your Business Needs{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #6366F1, #A78BFA, #38BDF8, #6366F1)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation:
                    "accentGradient 6s ease-in-out infinite",
                }}
              >
                to Go Digital
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: "#94A3B8",
                maxWidth: "720px",
                lineHeight: 1.7,
              }}
            >
              From websites and software to SEO, automation, and digital
              marketing, we create practical digital solutions built around
              your business.
            </Typography>
          </motion.div>
        </Stack>

        {/* =========================
            SERVICES GRID
        ========================= */}

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={service.title}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                style={{
                  height: "100%",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: "300px",
                    p: 3.5,

                    borderRadius: "22px",

                    background:
                      "linear-gradient(145deg, rgba(17,24,39,0.92), rgba(30,27,75,0.55))",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    backdropFilter: "blur(12px)",

                    overflow: "hidden",

                    transition:
                      "border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

                    /* Card glow */

                    "&::before": {
                      content: '""',
                      position: "absolute",

                      width: "150px",
                      height: "150px",

                      borderRadius: "50%",

                      top: "-80px",
                      right: "-70px",

                      background:
                        "radial-gradient(circle, rgba(99,102,241,0.20), transparent 70%)",

                      pointerEvents: "none",

                      transition:
                        "transform 0.5s ease",
                    },

                    /* Bottom gradient line */

                    "&::after": {
                      content: '""',
                      position: "absolute",

                      left: "15%",
                      right: "15%",
                      bottom: 0,

                      height: "2px",

                      borderRadius: "999px",

                      background:
                        "linear-gradient(90deg, transparent, #6366F1, #38BDF8, transparent)",

                      backgroundSize: "200% 100%",

                      opacity: 0,

                      transition:
                        "opacity 0.35s ease",

                      animation:
                        "accentGradient 4s linear infinite",
                    },

                    "&:hover": {
                      borderColor:
                        "rgba(129,140,248,0.45)",

                      background:
                        "linear-gradient(145deg, rgba(23,31,52,0.96), rgba(38,32,90,0.68))",

                      boxShadow:
                        "0 20px 50px rgba(79,70,229,0.18)",
                    },

                    "&:hover::before": {
                      transform:
                        "scale(1.4)",
                    },

                    "&:hover::after": {
                      opacity: 1,
                    },
                  }}
                >
                  <Stack
                    spacing={2.5}
                    sx={{
                      height: "100%",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* =========================
                        ICON
                    ========================= */}

                    <Box
                      sx={{
                        width: 54,
                        height: 54,

                        borderRadius: "15px",

                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.20), rgba(56,189,248,0.08))",

                        border:
                          "1px solid rgba(129,140,248,0.20)",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        color: "#818CF8",

                        transition:
                          "all 0.35s ease",

                        animation:
                          "iconGlow 4s ease-in-out infinite",

                        "& svg": {
                          fontSize: "26px",
                          transition:
                            "transform 0.35s ease",
                        },

                        "&:hover svg": {
                          transform:
                            "scale(1.12) rotate(3deg)",
                        },
                      }}
                    >
                      {service.icon}
                    </Box>

                    {/* =========================
                        TITLE
                    ========================= */}

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* =========================
                        DESCRIPTION
                    ========================= */}

                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* =========================
                        TAG
                    ========================= */}

                    <Box
                      sx={{
                        alignSelf: "flex-start",

                        px: 1.5,
                        py: 0.6,

                        borderRadius: "999px",

                        fontSize: "0.7rem",
                        fontWeight: 500,

                        background:
                          "rgba(99,102,241,0.06)",

                        border:
                          "1px solid rgba(129,140,248,0.15)",

                        color: "#A5B4FC",

                        transition:
                          "all 0.3s ease",

                        "&:hover": {
                          background:
                            "rgba(99,102,241,0.14)",

                          borderColor:
                            "rgba(129,140,248,0.35)",
                        },
                      }}
                    >
                      {service.tag}
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}