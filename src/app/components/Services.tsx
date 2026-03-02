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
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CodeIcon from "@mui/icons-material/Code";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, scalable web applications built with cutting-edge technologies and frameworks.",
      icon: <LanguageIcon />,
      tag: "Full Stack",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile apps for iOS and Android with fluid UX.",
      icon: <PhoneIphoneIcon />,
      tag: "iOS & Android",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure, CI/CD pipelines, and DevOps automation.",
      icon: <CloudOutlinedIcon />,
      tag: "AWS / GCP",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, user-centered designs that convert visitors into loyal customers.",
      icon: <DesignServicesIcon />,
      tag: "Design Systems",
    },
    {
      title: "Real Estate Tech",
      description:
        "Custom real estate platforms with property management and virtual tours.",
      icon: <ApartmentIcon />,
      tag: "PropTech",
    },
    {
      title: "API & Integrations",
      description:
        "Robust API development and third-party integrations for seamless workflows.",
      icon: <CodeIcon />,
      tag: "Automation",
    },
  ];

  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 60%)",
        color: "#fff",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">

        {/* ===== HERO TEXT ===== */}
        <Stack spacing={3} textAlign="center" mb={10}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6366F1",
              fontWeight: 600,
            }}
          >
            What We Do
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Our Core Services
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#94A3B8",
            }}
          >
            End-to-end digital solutions engineered for scale and performance.
          </Typography>
        </Stack>

        {/* ===== SERVICES GRID ===== */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255,255,255,0.08)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#6366F1",
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 10px 40px rgba(99,102,241,0.15)",
                    },
                  }}
                >
                  <Stack spacing={2}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "12px",
                        backgroundColor:
                          "rgba(99,102,241,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#6366F1",
                      }}
                    >
                      {service.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "white" }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "0.95rem",
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Tag */}
                    <Box
                      sx={{
                        alignSelf: "flex-start",
                        px: 2,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                        backgroundColor:
                          "rgba(255,255,255,0.05)",
                        border:
                          "1px solid rgba(255,255,255,0.08)",
                        color: "#94A3B8",
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