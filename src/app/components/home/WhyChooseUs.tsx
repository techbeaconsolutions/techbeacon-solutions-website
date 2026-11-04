"use client";

import React, { ReactNode } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Stack,
  Button,
} from "@mui/material";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
}) => (
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,

      background:
        "linear-gradient(145deg, rgba(8,113,218,0.12), rgba(12,198,233,0.035))",

      border: "1px solid rgba(12,198,233,0.16)",

      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",

      color: "white",

      transition:
        "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",

      "&:hover": {
        transform: "translateY(-7px)",

        borderColor: "rgba(12,198,233,0.45)",

        boxShadow:
          "0 18px 45px rgba(8,113,218,0.20)",
      },
    }}
  >
    <CardContent sx={{ p: 3.5 }}>
      {/* Icon */}
      <Box
        sx={{
          width: 58,
          height: 58,
          borderRadius: "16px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          mb: 2.5,

          background:
            "linear-gradient(135deg, rgba(8,113,218,0.20), rgba(12,198,233,0.15))",

          border:
            "1px solid rgba(12,198,233,0.25)",

          color: "#0cc6e9",

          boxShadow:
            "0 8px 25px rgba(8,113,218,0.12)",

          "& svg": {
            fontSize: 28,
          },
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: "1.15rem",
          fontWeight: 700,
          mb: 1,
          color: "#ffffff",
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "0.92rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.65)",
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function WhyChooseUs() {
  const reasons = [
    "Solutions designed around your actual business needs",
    "Transparent pricing with clear project scope",
    "Technology, design, marketing and automation under one roof",
    "Scalable solutions built for long-term business growth",
  ];

  const valueCards = [
    {
      icon: <AutoAwesomeIcon />,
      title: "Business-Focused Solutions",
      description:
        "We focus on building digital solutions that solve real business problems instead of adding unnecessary complexity.",
    },
    {
      icon: <SupportAgentIcon />,
      title: "End-to-End Support",
      description:
        "From development and deployment to ongoing improvements, we help you manage your digital presence beyond launch.",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Built for Growth",
      description:
        "Our websites, software and digital strategies are designed to support your business as it grows.",
    },
    {
      icon: <AllInclusiveIcon />,
      title: "One Digital Partner",
      description:
        "Website development, software, automation, SEO, branding and digital marketing — managed from one place.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        py: {
          xs: 10,
          md: 14,
        },

        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 70%)",
      }}
    >
      {/* ========================================= */}
      {/* BACKGROUND GLOW - TOP LEFT */}
      {/* ========================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 430,
          height: 430,

          borderRadius: "50%",

          top: -190,
          left: -180,

          background:
            "radial-gradient(circle, rgba(8,113,218,0.18), transparent 70%)",

          filter: "blur(35px)",

          pointerEvents: "none",

          animation:
            "whyGlowLeft 10s ease-in-out infinite",

          "@keyframes whyGlowLeft": {
            "0%, 100%": {
              transform: "translate(0,0)",
            },

            "50%": {
              transform: "translate(90px,70px)",
            },
          },
        }}
      />

      {/* ========================================= */}
      {/* BACKGROUND GLOW - BOTTOM RIGHT */}
      {/* ========================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 480,
          height: 480,

          borderRadius: "50%",

          bottom: -220,
          right: -200,

          background:
            "radial-gradient(circle, rgba(12,198,233,0.13), transparent 70%)",

          filter: "blur(40px)",

          pointerEvents: "none",

          animation:
            "whyGlowRight 12s ease-in-out infinite",

          "@keyframes whyGlowRight": {
            "0%, 100%": {
              transform: "translate(0,0)",
            },

            "50%": {
              transform: "translate(-80px,-60px)",
            },
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: {
                xs: 7,
                md: 9,
              },
            }}
          >
            {/* Small Label */}

            <Typography
              sx={{
                display: "inline-block",

                mb: 2,

                fontSize: "0.8rem",
                fontWeight: 700,

                letterSpacing: "0.16em",

                textTransform: "uppercase",

                color: "#0cc6e9",
              }}
            >
              Why TechBeacon
            </Typography>

            {/* Heading */}

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2.2rem",
                  sm: "2.8rem",
                  md: "3.4rem",
                },

                fontWeight: 800,

                lineHeight: 1.1,

                color: "#ffffff",

                mb: 2,
              }}
            >
              Why Choose{" "}

              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #0871da, #0cc6e9, #0871da)",

                  backgroundSize: "200% auto",

                  WebkitBackgroundClip: "text",

                  WebkitTextFillColor:
                    "transparent",

                  animation:
                    "whyGradient 6s linear infinite",

                  "@keyframes whyGradient": {
                    "0%": {
                      backgroundPosition:
                        "0% center",
                    },

                    "100%": {
                      backgroundPosition:
                        "200% center",
                    },
                  },
                }}
              >
                TechBeacon?
              </Box>
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                maxWidth: 760,

                mx: "auto",

                color:
                  "rgba(255,255,255,0.68)",

                fontSize: {
                  xs: "1rem",
                  md: "1.08rem",
                },

                lineHeight: 1.8,
              }}
            >
              We combine technology, design, automation and digital
              marketing to create practical solutions that help businesses
              build, improve and grow their digital presence.
            </Typography>
          </Box>
        </motion.div>

        {/* ========================================= */}
        {/* MAIN CONTENT */}
        {/* ========================================= */}

        <Grid
          container
          spacing={{
            xs: 5,
            md: 7,
          }}
          alignItems="stretch"
        >
          {/* ======================================= */}
          {/* LEFT SIDE */}
          {/* ======================================= */}

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{
                opacity: 0,
                x: -45,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              style={{
                height: "100%",
              }}
            >
              <Paper
                sx={{
                  height: "100%",

                  p: {
                    xs: 3,
                    md: 4,
                  },

                  borderRadius: 4,

                  background:
                    "linear-gradient(145deg, rgba(8,113,218,0.09), rgba(12,198,233,0.035))",

                  border:
                    "1px solid rgba(12,198,233,0.14)",

                  backdropFilter:
                    "blur(14px)",

                  WebkitBackdropFilter:
                    "blur(14px)",
                }}
              >
                {/* Title */}

                <Typography
                  sx={{
                    color: "#ffffff",

                    fontSize: {
                      xs: "1.6rem",
                      md: "1.9rem",
                    },

                    fontWeight: 800,

                    mb: 1.5,
                  }}
                >
                  More Than Just Development
                </Typography>

                {/* Description */}

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.62)",

                    lineHeight: 1.75,

                    fontSize: "0.95rem",

                    mb: 4,
                  }}
                >
                  Your business needs more than a website or an app. We look
                  at the bigger picture — technology, user experience,
                  visibility, automation and digital growth.
                </Typography>

                {/* Reasons */}

                <Stack spacing={2.2}>
                  {reasons.map(
                    (reason, index) => (
                      <motion.div
                        key={reason}
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay:
                            index * 0.12,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",

                            alignItems:
                              "flex-start",

                            gap: 1.5,

                            p: 2,

                            borderRadius: 2.5,

                            background:
                              "rgba(8,113,218,0.07)",

                            border:
                              "1px solid rgba(12,198,233,0.12)",

                            transition:
                              "all 0.3s ease",

                            "&:hover": {
                              background:
                                "rgba(8,113,218,0.13)",

                              borderColor:
                                "rgba(12,198,233,0.25)",

                              transform:
                                "translateX(5px)",
                            },
                          }}
                        >
                          <CheckCircleOutlineOutlinedIcon
                            sx={{
                              color:
                                "#0cc6e9",

                              fontSize: 22,

                              mt: "1px",

                              flexShrink: 0,
                            }}
                          />

                          <Typography
                            sx={{
                              color:
                                "rgba(255,255,255,0.82)",

                              fontSize:
                                "0.9rem",

                              lineHeight:
                                1.55,
                            }}
                          >
                            {reason}
                          </Typography>
                        </Box>
                      </motion.div>
                    )
                  )}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* ======================================= */}
          {/* RIGHT SIDE */}
          {/* ======================================= */}

          <Grid item xs={12} md={7}>
            <Grid container spacing={2.5}>
              {valueCards.map(
                (card, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={card.title}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay:
                          index * 0.12,
                      }}
                      style={{
                        height: "100%",
                      }}
                    >
                      <ValueCard
                        icon={card.icon}
                        title={card.title}
                        description={
                          card.description
                        }
                      />
                    </motion.div>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* ========================================= */}
        {/* COMMITMENT */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Paper
            sx={{
              mt: {
                xs: 6,
                md: 8,
              },

              p: {
                xs: 3,
                md: 5,
              },

              borderRadius: 5,

              background:
                "linear-gradient(135deg, rgba(8,113,218,0.10), rgba(12,198,233,0.07))",

              border:
                "1px solid rgba(12,198,233,0.16)",

              backdropFilter:
                "blur(15px)",

              WebkitBackdropFilter:
                "blur(15px)",

              textAlign: "center",
            }}
          >
            {/* Title */}

            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2rem",
                },

                fontWeight: 800,

                color: "#ffffff",

                mb: 1.5,
              }}
            >
              Our Commitment
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                maxWidth: 700,

                mx: "auto",

                color:
                  "rgba(255,255,255,0.62)",

                lineHeight: 1.7,

                mb: 4,
              }}
            >
              We believe good technology should be useful, understandable
              and built around the people who use it. Our goal is to create
              digital solutions that provide lasting value to your business.
            </Typography>

            {/* Commitment Items */}

            <Grid
              container
              spacing={3}
              sx={{
                mb: 4,
              }}
            >
              {/* Item 1 */}

              <Grid item xs={12} sm={4}>
                <Box>
                  <AutoAwesomeIcon
                    sx={{
                      fontSize: 30,

                      color: "#0cc6e9",

                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#ffffff",

                      fontWeight: 700,

                      mb: 0.5,
                    }}
                  >
                    Quality Focus
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.58)",

                      fontSize:
                        "0.85rem",
                    }}
                  >
                    Thoughtful solutions
                    built with attention
                    to detail.
                  </Typography>
                </Box>
              </Grid>

              {/* Item 2 */}

              <Grid item xs={12} sm={4}>
                <Box>
                  <SupportAgentIcon
                    sx={{
                      fontSize: 30,

                      color: "#0871da",

                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#ffffff",

                      fontWeight: 700,

                      mb: 0.5,
                    }}
                  >
                    Reliable Support
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.58)",

                      fontSize:
                        "0.85rem",
                    }}
                  >
                    Support when you
                    need help with your
                    digital solution.
                  </Typography>
                </Box>
              </Grid>

              {/* Item 3 */}

              <Grid item xs={12} sm={4}>
                <Box>
                  <TrendingUpIcon
                    sx={{
                      fontSize: 30,

                      color: "#0cc6e9",

                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#ffffff",

                      fontWeight: 700,

                      mb: 0.5,
                    }}
                  >
                    Long-Term Growth
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.58)",

                      fontSize:
                        "0.85rem",
                    }}
                  >
                    Solutions that can
                    evolve with your
                    business.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* ===================================== */}
            {/* CTA */}
            {/* ===================================== */}

            <Button
              href="#contact"
              variant="contained"
              size="large"
              endIcon={
                <ArrowForwardIcon />
              }
              sx={{
                px: 4.5,
                py: 1.5,

                borderRadius: 3,

                textTransform: "none",

                fontWeight: 700,

                background:
                  "linear-gradient(90deg, #0871da, #0cc6e9)",

                boxShadow:
                  "0 10px 30px rgba(8,113,218,0.25)",

                transition:
                  "all 0.3s ease",

                "&:hover": {
                  background:
                    "linear-gradient(90deg, #065bb5, #0aa6c4)",

                  transform:
                    "translateY(-2px)",

                  boxShadow:
                    "0 14px 35px rgba(8,113,218,0.35)",
                },
              }}
            >
              Get Free Consultation
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}