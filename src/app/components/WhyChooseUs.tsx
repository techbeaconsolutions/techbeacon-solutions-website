"use client";

import React, { useState, useEffect, ReactNode } from "react";
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
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import GroupIcon from "@mui/icons-material/Group";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { motion } from "framer-motion";

interface StatsCardProps {
  icon: ReactNode;
  value: number;
  suffix?: string;
  title: string;
  subtitle?: string;
  iconBg?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  value,
  suffix,
  title,
  subtitle,
  iconBg,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{ height: "100%" }}
  >
    <Card
      sx={{
        textAlign: "center",
        p: 4,
        borderRadius: 4,
        background:
          "linear-gradient(135deg, rgba(55,69,241,0.9), rgba(12,198,233,0.9))",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            mb: 3,
            mx: "auto",
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: iconBg || "#e4eef9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 800,
            color: "white",
            lineHeight: 1,
          }}
        >
          {value}
          {suffix}
        </Typography>

        <Typography sx={{ fontWeight: 600, mt: 1, color: "white" }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "rgba(255,255,255,0.8)" }}
          >
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

export default function WhyChooseUs() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const reasons = [
    {
      text: "Tailor-made software solutions for your business needs",
    },
    {
      text: "Affordable, transparent pricing with no hidden costs",
    },
    {
      text: "End-to-end support (Dev + Hosting + AMC)",
    },
    {
      text: "Scalable solutions for long-term growth",
    },
  ];

  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      const duration = 2000;
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    animateCounter(75, setProjectsCount);
    animateCounter(45, setClientsCount);
  }, []);

  return (
    <Box
      sx={{
        py: 12,
        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 70%)",
      }}
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            align="center"
            sx={{ color: "white" }}
          >
            Why Choose{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Techbeacon?
            </Box>
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mt: 2,
              mb: 8,
              maxWidth: 750,
              mx: "auto",
              color: "rgba(255,255,255,0.8)",
              fontSize: 16,
            }}
          >
            We deliver exceptional digital solutions with a commitment to
            quality, transparency, and long-term partnerships that help your
            business grow confidently.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 3,
                      background: "rgba(55,69,241,0.15)",
                      border: "1px solid rgba(99,102,241,0.3)",
                      backdropFilter: "blur(8px)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow:
                          "0 10px 25px rgba(0,0,0,0.35)",
                      },
                    }}
                  >
                    <CheckCircleOutlineOutlinedIcon
                      sx={{
                        color: "#0cc6e9",
                        mr: 2,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {reason.text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <StatsCard
                  icon={<GppGoodOutlinedIcon />}
                  value={projectsCount}
                  suffix="+"
                  title="Successful Projects"
                  subtitle="Delivered across multiple industries"
                  iconBg="#e4eef9"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <StatsCard
                  icon={<GroupIcon />}
                  value={clientsCount}
                  suffix="+"
                  title="Happy Clients"
                  subtitle="Trusted by growing businesses"
                  iconBg="#e4f6fa"
                />
              </Grid>
            </Grid>

            {/* Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  mt: 5,
                  p: 4,
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background:
                    "linear-gradient(90deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))",
                  backdropFilter: "blur(10px)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: "white", mb: 3 }}
                >
                  Our Commitment
                </Typography>

                <Grid container spacing={4}>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      sx={{ fontSize: 24, fontWeight: 700, color: "#0cc6e9" }}
                    >
                      100%
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                      Quality Assurance
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Typography
                      sx={{ fontSize: 24, fontWeight: 700, color: "#a855f7" }}
                    >
                      24/7
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                      Dedicated Support
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <AllInclusiveIcon
                      sx={{ fontSize: 32, color: "#0cc6e9", mb: 1 }}
                    />
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                      Long-Term Partnership
                    </Typography>
                  </Grid>
                </Grid>

                {/* CTA */}
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    px: 5,
                    py: 1.5,
                    borderRadius: 3,
                    background:
                      "linear-gradient(90deg,#0871da,#0cc6e9)",
                    fontWeight: 600,
                    "&:hover": {
                      background:
                        "linear-gradient(90deg,#065bb5,#0aa6c4)",
                    },
                  }}
                >
                  Get Free Consultation
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}