"use client";

import { Box, Container, Typography, Grid, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      tag: "Web App",
      title: "FinTech Dashboard",
      subtitle: "Real-time trading analytics platform",
      gradient: "linear-gradient(135deg, #4F46E5, #9333EA)",
    },
    {
      tag: "Full Stack",
      title: "E-Commerce Platform",
      subtitle: "Scalable marketplace with 10M+ users",
      gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    },
    {
      tag: "SaaS",
      title: "Healthcare Portal",
      subtitle: "HIPAA-compliant patient management",
      gradient: "linear-gradient(135deg, #9333EA, #C026D3)",
    },
    {
      tag: "Mobile",
      title: "Real Estate App",
      subtitle: "AI-powered property recommendations",
      gradient: "linear-gradient(135deg, #06B6D4, #0891B2)",
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

        {/* ===== HEADING ===== */}
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
            Our Work
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Featured Projects
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#94A3B8",
            }}
          >
            A selection of projects that showcase our expertise and craft.
          </Typography>
        </Stack>

        {/* ===== PROJECT GRID ===== */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 6,
                    borderRadius: "20px",
                    background: project.gradient,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    minHeight: "220px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: 0.8,
                      mb: 1,
                    }}
                  >
                    {project.tag}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography sx={{ opacity: 0.9 }}>
                    {project.subtitle}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}