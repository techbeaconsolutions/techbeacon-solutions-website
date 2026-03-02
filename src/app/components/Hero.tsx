"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "radial-gradient(circle at 50% 20%, #2d3fff 0%, #0b1120 55%)",
        color: "#fff",
        overflow: "hidden",
        py: { xs: 12, md: 18 },
      }}
    >
      {/* Soft Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-250px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1100px",
          height: "1100px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(11,17,32,0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4} textAlign="center" alignItems="center">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 800,
                fontSize: { xs: "2.8rem", md: "4.8rem", lg: "5.8rem" },
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              <Box component="span" sx={{ color: "#fff" }}>
                We Build Digital
              </Box>
              <br />
              <Box component="span" sx={{ color: "#fff" }}>
                Experiences
              </Box>
              <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #6366F1, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Matter
              </Box>
            </Typography>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#9CA3AF",
                maxWidth: "700px",
              }}
            >
              Transform your business with cutting-edge web, mobile,
              and cloud solutions. We turn ambitious ideas into
              powerful digital products.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                component="a"
                href="#contact"
                sx={{
                  backgroundColor: "#6366F1",
                  borderRadius: "50px",
                  px: 5,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
                  "&:hover": {
                    backgroundColor: "#4F46E5",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Start Your Project →
              </Button>

              <Button
                variant="outlined"
                component="a"
                href="/portfolio"
                sx={{
                  borderColor: "#334155",
                  color: "#fff",
                  borderRadius: "50px",
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#6366F1",
                    backgroundColor: "rgba(99,102,241,0.08)",
                  },
                }}
              >
                View Our Work
              </Button>
            </Stack>
            {/* Tech Stack Strip */}
            <Box
              mt={{ xs: 8, md: 12 }}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  mr: 1,
                }}
              >
                Built with
              </Typography>

              {[
                "React",
                "Next.js",
                "Node.js",
                "AWS",
                "TypeScript",
                "PostgreSQL",
              ].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 0.8,
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      borderColor: "rgba(99,102,241,0.4)",
                      backgroundColor: "rgba(99,102,241,0.1)",
                    },
                  }}
                >
                  {tech}
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