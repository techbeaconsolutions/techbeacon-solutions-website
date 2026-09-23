"use client";

import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  const services = [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "AI Automation",
    "SEO",
    "Digital Marketing",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 15%, #312e81 0%, #111827 45%, #0b1120 75%)",
        color: "#fff",
        py: { xs: 12, md: 18 },

        /* =========================
           ANIMATED BACKGROUND GLOW
        ========================= */
        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: "500px", md: "900px" },
          height: { xs: "500px", md: "900px" },
          borderRadius: "50%",
          top: "-420px",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0.10) 35%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animation: "heroGlow 10s ease-in-out infinite",
        },

        /* =========================
           SECONDARY GLOW
        ========================= */
        "&::after": {
          content: '""',
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          bottom: "-280px",
          right: "-150px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          animation: "heroGlowReverse 12s ease-in-out infinite",
        },

        /* =========================
           ANIMATIONS
        ========================= */
        "@keyframes heroGlow": {
          "0%, 100%": {
            transform: "translateX(-50%) scale(1)",
          },
          "50%": {
            transform: "translateX(-50%) scale(1.08)",
          },
        },

        "@keyframes heroGlowReverse": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(-40px, -30px)",
          },
        },

        "@keyframes heroGradient": {
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
        <Stack
          spacing={{ xs: 3, md: 4 }}
          textAlign="center"
          alignItems="center"
        >
          {/* =========================
              EYEBROW
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.7rem", md: "0.8rem" },
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#A5B4FC",
              }}
            >
              Digital Solutions for Modern Businesses
            </Typography>
          </motion.div>

          {/* =========================
              MAIN HEADLINE
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 800,
                fontSize: {
                  xs: "2.8rem",
                  sm: "3.6rem",
                  md: "4.8rem",
                  lg: "5.6rem",
                },
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#fff",
                }}
              >
                We Build Digital
              </Box>

              <br />

              <Box
                component="span"
                sx={{
                  color: "#fff",
                }}
              >
                Solutions
              </Box>

              <br />

              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #6366F1, #A78BFA, #38BDF8, #6366F1)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "heroGradient 6s ease-in-out infinite",
                }}
              >
                That Grow Your Business
              </Box>
            </Typography>
          </motion.div>

          {/* =========================
              DESCRIPTION
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#9CA3AF",
                maxWidth: "720px",
                lineHeight: 1.7,
              }}
            >
              Websites, mobile apps, custom software, AI automation, SEO,
              and digital marketing — all designed around your business.
            </Typography>
          </motion.div>

          {/* =========================
              CTA BUTTONS
          ========================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {/* PRIMARY CTA */}
              <Button
                variant="contained"
                component="a"
                href="#contact"
                sx={{
                  minWidth: "210px",
                  background:
                    "linear-gradient(90deg, #6366F1, #7C3AED)",
                  color: "#fff",
                  borderRadius: "50px",
                  px: 5,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow:
                    "0 10px 30px rgba(99,102,241,0.35)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #4F46E5, #6D28D9)",
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 14px 35px rgba(99,102,241,0.45)",
                  },
                }}
              >
                Get Free Consultation
              </Button>

              {/* SECONDARY CTA */}
              <Button
                variant="outlined"
                component="a"
                href="/#portfolio"
                sx={{
                  minWidth: "180px",
                  borderColor: "rgba(148,163,184,0.35)",
                  color: "#fff",
                  borderRadius: "50px",
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    borderColor: "#818CF8",
                    backgroundColor:
                      "rgba(99,102,241,0.08)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                View Our Work
              </Button>
            </Stack>
          </motion.div>

          {/* =========================
              SERVICE STRIP
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ width: "100%" }}
          >
            <Box
              mt={{ xs: 5, md: 7 }}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={1.5}
            >
              {services.map((service) => (
                <Box
                  key={service}
                  sx={{
                    px: 2,
                    py: 0.9,
                    borderRadius: "999px",
                    fontSize: {
                      xs: "0.7rem",
                      md: "0.75rem",
                    },
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.75)",

                    border:
                      "1px solid rgba(129,140,248,0.18)",

                    backgroundColor:
                      "rgba(99,102,241,0.06)",

                    backdropFilter: "blur(8px)",

                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      color: "#fff",
                      borderColor:
                        "rgba(129,140,248,0.55)",
                      backgroundColor:
                        "rgba(99,102,241,0.12)",
                      transform:
                        "translateY(-2px)",
                      boxShadow:
                        "0 5px 20px rgba(99,102,241,0.12)",
                    },
                  }}
                >
                  {service}
                </Box>
              ))}
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;