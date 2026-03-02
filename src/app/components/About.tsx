"use client";

import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b1120 60%)",
        color: "#fff",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">

        {/* HERO TITLE */}
        <Stack spacing={3} textAlign="center" mb={10}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              About{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #6366F1, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Techbbeacon
              </Box>
            </Typography>
          </motion.div>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#94A3B8",
            }}
          >
            A team of passionate technologists building the future of digital experiences.
          </Typography>
        </Stack>

        {/* MAIN CONTENT GRID */}
        <Grid container spacing={8} alignItems="center">

          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6366F1",
                  fontWeight: 600,
                }}
              >
                Our Story
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Building Digital Excellence Since 2010
              </Typography>

              <Typography sx={{ color: "#94A3B8", lineHeight: 1.8 }}>
                Techbbeacon Solutions was founded with a simple mission:
                to help businesses thrive in the digital age. Over the years,
                we’ve grown from a small startup to a full-service IT company
                trusted by clients worldwide.
              </Typography>

              <Typography sx={{ color: "#94A3B8", lineHeight: 1.8 }}>
                Our team combines deep technical expertise with creative
                problem-solving to deliver scalable, secure, and
                future-ready solutions.
              </Typography>

            </Stack>
          </Grid>

          {/* RIGHT SIDE - STATS */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={6}>

              {[
                { value: "250+", label: "Projects Delivered" },
                { value: "120+", label: "Happy Clients" },
                { value: "15+", label: "Years in Business" },
                { value: "98%", label: "Client Retention" }
              ].map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "3rem", md: "4rem" },
                        fontWeight: 800,
                        background:
                          "linear-gradient(90deg, #6366F1, #A78BFA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontSize: "0.85rem",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}

            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}