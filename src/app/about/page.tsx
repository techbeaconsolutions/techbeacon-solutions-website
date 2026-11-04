"use client";

import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      title: "Web & Apps",
      description:
        "Modern websites and mobile applications built for today's businesses.",
    },
    {
      title: "Custom Software",
      description:
        "Business-focused software, dashboards, portals, and integrations.",
    },
    {
      title: "AI & Automation",
      description:
        "Smart automation solutions that help reduce repetitive work.",
    },
    {
      title: "Digital Growth",
      description:
        "SEO, local visibility, social media, and digital marketing solutions.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b1120 60%)",
        color: "#fff",
        py: { xs: 10, md: 14 },

        /* =========================
           LEFT ANIMATED GLOW
        ========================= */
        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: "280px", md: "500px" },
          height: { xs: "280px", md: "500px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.20), transparent 70%)",
          top: "-180px",
          left: "-120px",
          filter: "blur(30px)",
          pointerEvents: "none",
          animation: "floatGlow 10s ease-in-out infinite",
        },

        /* =========================
           RIGHT ANIMATED GLOW
        ========================= */
        "&::after": {
          content: '""',
          position: "absolute",
          width: { xs: "260px", md: "450px" },
          height: { xs: "260px", md: "450px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.16), transparent 70%)",
          bottom: "-180px",
          right: "-100px",
          filter: "blur(30px)",
          pointerEvents: "none",
          animation: "floatGlowReverse 12s ease-in-out infinite",
        },

        /* =========================
           ANIMATION KEYFRAMES
        ========================= */
        "@keyframes floatGlow": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(70px, 40px)",
          },
        },

        "@keyframes floatGlowReverse": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(-60px, -30px)",
          },
        },

        "@keyframes gradientMove": {
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
        <Stack spacing={3} textAlign="center" mb={10}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                    "linear-gradient(90deg, #6366F1, #A78BFA, #38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TechBeacon
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#94A3B8",
                maxWidth: "750px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              We help businesses build, improve, and grow their digital
              presence through technology, design, automation, and digital
              marketing.
            </Typography>
          </motion.div>
        </Stack>

        {/* =========================
            MAIN CONTENT
        ========================= */}
        <Grid
          container
          spacing={{ xs: 7, md: 10 }}
          alignItems="center"
        >
          {/* =========================
              LEFT SIDE
          ========================= */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                  Who We Are
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  Technology That Helps
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      background:
                        "linear-gradient(90deg, #6366F1, #A78BFA, #38BDF8, #6366F1)",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation:
                        "gradientMove 6s ease-in-out infinite",
                    }}
                  >
                    Businesses Move Forward
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    color: "#94A3B8",
                    lineHeight: 1.8,
                  }}
                >
                  TechBeacon Solutions is a full-service digital solutions
                  agency helping businesses turn ideas into practical digital
                  experiences.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    color: "#94A3B8",
                    lineHeight: 1.8,
                  }}
                >
                  From modern websites and mobile applications to custom
                  software, AI automation, SEO, and digital marketing, we
                  combine technology and creativity to build solutions around
                  your business needs.
                </Typography>
              </motion.div>
            </Stack>
          </Grid>

          {/* =========================
              RIGHT SIDE - FEATURE CARDS
          ========================= */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "100%",
                        p: 3,
                        borderRadius: 3,

                        background:
                          "linear-gradient(145deg, rgba(15,23,42,0.85), rgba(30,27,75,0.55))",

                        border:
                          "1px solid rgba(148,163,184,0.12)",

                        backdropFilter: "blur(10px)",

                        overflow: "hidden",

                        transition:
                          "border-color 0.3s ease, box-shadow 0.3s ease",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, rgba(99,102,241,0.16), transparent 70%)",
                          top: "-50px",
                          right: "-40px",
                          pointerEvents: "none",
                        },

                        "&:hover": {
                          borderColor:
                            "rgba(129,140,248,0.45)",

                          boxShadow:
                            "0 15px 40px rgba(79,70,229,0.15)",
                        },
                      }}
                    >
                      {/* SMALL ACCENT */}
                      <Box
                        sx={{
                          width: "34px",
                          height: "4px",
                          borderRadius: "10px",
                          mb: 2,
                          background:
                            "linear-gradient(90deg, #6366F1, #A78BFA, #38BDF8)",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#94A3B8",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
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