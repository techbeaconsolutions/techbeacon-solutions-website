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
  iconColor?: string;
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
        borderRadius: 3,
        bgcolor: "#fcfcfd",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            mb: 2,
            mx: "auto",
            width: 64,
            height: 64,
            borderRadius: "50%",
            bgcolor: iconBg || "#e4eef9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography component="p" fontWeight={700} color="primary">
          {value}
          {suffix}
        </Typography>
        <Typography component="p" fontWeight={600}>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, whiteSpace: "pre-line" }}
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
      icon: <CheckCircleOutlineOutlinedIcon sx={{ color: "#3688da" }} />,
      text: "Tailor-made software solutions for your business needs",
    },
    {
      icon: <CheckCircleOutlineOutlinedIcon sx={{ color: "#06c3e0" }} />,
      text: "Affordable, transparent pricing with no hidden costs",
    },
    {
      icon: <CheckCircleOutlineOutlinedIcon sx={{ color: "#3688da" }} />,
      text: "End-to-end support (Dev + Hosting + AMC)",
    },
    {
      icon: <CheckCircleOutlineOutlinedIcon sx={{ color: "#06c3e0" }} />,
      text: "Scalable for long-term growth",
    },
  ];

  useEffect(() => {
    const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      const duration = 2000;
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        setter(value);
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    animateCounter(75, setProjectsCount);
    animateCounter(45, setClientsCount);
  }, []);

  return (
    <Box sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" fontWeight={700} align="center">
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
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            We deliver exceptional results with a commitment to quality,
            transparency, and long-term partnerships.
          </Typography>
        </motion.div>

        {/* Content */}
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left side - Reasons */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      bgcolor: "transparent",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "grey.50",
                        boxShadow: 3,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ mr: 2 }}>{reason.icon}</Box>
                    <Typography variant="body1" fontSize={13}>
                      {reason.text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Right side - Stats */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <StatsCard
                  icon={<GppGoodOutlinedIcon />}
                  value={projectsCount}
                  suffix="+"
                  title="Projects Delivered"
                  subtitle={"Successfully completed across\nindustries"}
                  iconBg="#e4eef9"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StatsCard
                  icon={<GroupIcon />}
                  value={clientsCount}
                  suffix="+"
                  title="Clients Served"
                  subtitle={"Happy clients across all India"}
                  iconBg="#e4f6fa"
                />
              </Grid>
            </Grid>

            {/* Commitment Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  mt: 4,
                  p: 4,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "primary.main",
                  background:
                    "linear-gradient(90deg, rgba(8,113,218,0.05), rgba(12,198,233,0.05))",
                }}
              >
                <Typography variant="h3" fontWeight={600} align="center">
                  Our Commitment
                </Typography>
                <Grid container spacing={4} textAlign="center" sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <Typography component="p" color="primary" fontWeight={700}>
                      100%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quality Assurance
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography component="p" color="secondary" fontWeight={700}>
                      24/7
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Support Available
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <AllInclusiveIcon color="primary" sx={{ fontSize: 28, mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Long-term Partnership
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
