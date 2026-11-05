
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const WHATSAPP_NUMBER = "919209652754";
const CONTACT_EMAIL = ""; // Add your real business email before using an email CTA.

const gradient = "linear-gradient(100deg, #3478F6, #9858EF)";


const sectionSx = {
  py: { xs: 7, md: 11 },
};

const headingSx = {
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
  lineHeight: 1.12,
  fontWeight: 800,
  letterSpacing: "-0.045em",
  color: "#F5F7FF",
};

const services = [
  {
    icon: <DashboardRoundedIcon />,
    title: "Custom Business Software",
    tag: "Built around your workflow",
    description:
      "Software tailored to your business processes, helping teams manage information and everyday operations more efficiently.",
  },
  {
    icon: <HubRoundedIcon />,
    title: "Web Applications",
    tag: "Access anywhere",
    description:
      "Browser-based applications for customers, employees, and business partners, designed around your requirements.",
  },
  {
    icon: <IntegrationInstructionsRoundedIcon />,
    title: "API & System Integration",
    tag: "Connected systems",
    description:
      "Connect applications and services through APIs and integrations where supported by your existing systems.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Dashboards & Reporting",
    tag: "Clearer insights",
    description:
      "Custom dashboards and reporting interfaces that make important business information easier to review.",
  },
  {
    icon: <SecurityRoundedIcon />,
    title: "Software Modernisation",
    tag: "Improve existing systems",
    description:
      "Improve an existing application's structure, usability, maintainability, and functionality based on a technical review.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Ongoing Support",
    tag: "Long-term care",
    description:
      "Bug fixes, enhancements, and planned maintenance according to the agreed service scope.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss your business, users, challenges, and the outcomes you want to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, features, user journeys, technical approach, and milestones.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We plan the interface and application structure around the people who will use it.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the agreed functionality and connect the required data sources and services.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We check key workflows, responsive behaviour, error states, and agreed requirements.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy the approved solution and provide handover and support as agreed.",
  },
];

const faqs = [
  {
    q: "What type of custom software does TechBeacon Solutions develop in Pune?",
    a: "TechBeacon Solutions works on custom business software, web applications, dashboards, reporting tools, API integrations, and improvements to existing systems. The right solution depends on your business requirements and project scope.",
  },
  {
    q: "How much does custom software development cost in Pune?",
    a: "The cost depends on features, complexity, integrations, design, and project scope. Share your requirements with TechBeacon Solutions to discuss an appropriate estimate and proposal.",
  },
  {
    q: "Can you build software around our existing business process?",
    a: "Yes. We start by understanding your current workflow and identifying which requirements the software needs to support.",
  },
  {
    q: "Can you integrate custom software with our existing systems?",
    a: "Integration may be possible when the existing system provides a suitable API or another supported integration method. We assess this during planning.",
  },
  {
    q: "Can the software work on mobile devices?",
    a: "We can plan responsive interfaces for desktop, tablet, and mobile based on the application's users and workflows.",
  },
  {
    q: "Do you provide software maintenance and support after launch?",
    a: "Post-launch support and maintenance can be included in the proposal with clearly defined responsibilities and scope.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Chip
      label={children}
      size="small"
      sx={{
        mb: 2,
        color: "#B7A8FF",
        bgcolor: "rgba(132,102,255,0.10)",
        border: "1px solid rgba(151,126,255,0.3)",
        fontWeight: 800,
        letterSpacing: "0.08em",
        fontSize: 11,
        borderRadius: "8px",
      }}
    />
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        mb: { xs: 4, md: 5 },
        textAlign: "center",
        maxWidth: 760,
        mx: "auto",
      }}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          lineHeight: 1.12,
          fontWeight: 800,
          letterSpacing: "-0.045em",
          color: "#F5F7FF",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          color: "#AAB7CC",
          lineHeight: 1.85,
          fontSize: { xs: 15, md: 17 },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default function SoftwareDevelopmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const contactHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Software Development Enquiry"
      )}`
    : "#contact";

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi TechBeacon Solutions, I'd like to discuss a software development project."
      )}`
    : "#contact";

  const navItems = [
    ["Home", "/"],
    ["Services", "/#services"],
    ["Portfolio", "/portfolio"],
    ["About", "/#about"],
    ["Contact", "#contact"],
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        bgcolor: "#050B16",
        color: "#F5F7FF",
        backgroundImage:
          "radial-gradient(ellipse at 85% 5%, rgba(69,75,220,0.18), transparent 35%), radial-gradient(ellipse at 5% 40%, rgba(30,106,220,0.09), transparent 28%)",
        "& *": { boxSizing: "border-box" },
      }}
    >
      {/* HEADER */}
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid rgba(142,164,205,0.14)",
          bgcolor: "rgba(5,11,22,0.9)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ minHeight: 78 }}
          >
            <Stack
              component={Link}
              href="/"
              direction="row"
              spacing={1.2}
              alignItems="center"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "13px",
                  background: gradient,
                  fontWeight: 900,
                }}
              >
                TB
              </Box>
              <Box>
                <Typography fontWeight={800}>TechBeacon</Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#AAB7CC",
                    letterSpacing: "0.18em",
                  }}
                >
                  SOLUTIONS
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map(([label, href]) => (
                <Typography
                  key={label}
                  component={Link}
                  href={href}
                  sx={{
                    color: label === "Services" ? "#B7A8FF" : "#C2CCDD",
                    textDecoration: "none",
                    fontSize: 13,
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>

            <Button
              component={Link}
              href={contactHref}
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                background: gradient,
                color: "#fff",
                borderRadius: "11px",
                px: 2,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Get a Free Quote
            </Button>

            <Button
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((open) => !open)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#fff",
                minWidth: 42,
              }}
            >
              {menuOpen ? "×" : "☰"}
            </Button>
          </Stack>

          {menuOpen && (
            <Stack sx={{ display: { xs: "flex", md: "none" }, pb: 2 }}>
              {navItems.map(([label, href]) => (
                <Button
                  key={label}
                  component={Link}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    justifyContent: "flex-start",
                    color: "#D9E2F3",
                    textTransform: "none",
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          )}
        </Container>
      </Box>

      {/* HERO */}
      <Box component="section" sx={{ py: { xs: 7, md: 11 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Eyebrow>CUSTOM SOFTWARE DEVELOPMENT COMPANY IN PUNE</Eyebrow>

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "2.8rem",
                    sm: "3.5rem",
                    md: "4.2rem",
                  },
                  lineHeight: 1.03,
                  fontWeight: 800,
                  letterSpacing: "-0.055em",
                  color: "#F5F7FF",
                }}
              >
                Custom Software Development in Pune, Built Around{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(100deg,#6EA5FF,#9A83FF,#D28BFF)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Your Business.
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 560,
                  color: "#AAB7CC",
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.85,
                }}
              >
                Looking for a custom software development company in Pune? TechBeacon Solutions helps businesses plan and build business applications, web platforms, dashboards, and integrations around their real operational needs.
              </Typography>

              <Stack
                spacing={1.3}
                sx={{ mt: 3 }}
              >
                {[
                  "Custom software aligned with your business workflow",
                  "Responsive web applications for your users",
                  "API and system integration planning",
                  "Clear project scope, milestones, and communication",
                ].map((text) => (
                  <Stack
                    key={text}
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        color: "#7EE3B7",
                        bgcolor: "rgba(82,214,154,0.10)",
                        fontSize: 13,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography sx={{ color: "#D3DCEC", fontSize: 14 }}>
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 4 }}
              >
                <Button
                  component={Link}
                  href={contactHref}
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    px: 2.6,
                    py: 1.5,
                    borderRadius: "12px",
                    background: gradient,
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 750,
                  }}
                >
                  Discuss Your Project
                </Button>

                <Button
                  component={Link}
                  href={whatsappHref}
                  target={WHATSAPP_NUMBER ? "_blank" : undefined}
                  rel={WHATSAPP_NUMBER ? "noopener noreferrer" : undefined}
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    px: 2.2,
                    py: 1.4,
                    borderRadius: "12px",
                    color: "#E5ECFA",
                    borderColor: "rgba(111,218,177,0.65)",
                    textTransform: "none",
                    "& .MuiButton-startIcon": { color: "#52D69A" },
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </Stack>

              <Typography sx={{ mt: 2, color: "#71819C", fontSize: 12 }}>
                Serving Pune businesses · Custom-built solutions · Designed to evolve
              </Typography>
            </Grid>

            {/* Software dashboard visual built entirely with MUI */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: "25px",
                  border: "1px solid rgba(133,156,211,0.28)",
                  background:
                    "linear-gradient(145deg,rgba(25,42,73,.88),rgba(8,15,29,.97))",
                  boxShadow: "0 30px 80px rgba(0,0,0,.35)",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 3 }}
                >
                  <Box>
                    <Typography sx={{ fontSize: 11, color: "#9B8AFF", fontWeight: 800 }}>
                      BUSINESS CONTROL CENTER
                    </Typography>
                    <Typography sx={{ mt: 0.5, fontSize: 19, fontWeight: 750 }}>
                      Overview Dashboard
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(139,121,255,.15)",
                      color: "#B7A5FF",
                    }}
                  >
                    <DashboardRoundedIcon />
                  </Box>
                </Stack>

                <Grid container spacing={1.5}>
                  {[
                    ["PROJECTS", "24", "#8BAEFF"],
                    ["TASKS DONE", "86%", "#6BE0B0"],
                    ["OPEN ITEMS", "08", "#C2A2FF"],
                  ].map(([label, value, color]) => (
                    <Grid item xs={4} key={label}>
                      <Box
                        sx={{
                          p: { xs: 1.2, sm: 1.6 },
                          borderRadius: "12px",
                          bgcolor: "rgba(255,255,255,.035)",
                          border: "1px solid rgba(255,255,255,.08)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: 8, sm: 9 },
                            color: "#93A2BC",
                            letterSpacing: ".06em",
                          }}
                        >
                          {label}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 1,
                            fontSize: { xs: 19, sm: 25 },
                            fontWeight: 800,
                            color,
                          }}
                        >
                          {value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    borderRadius: "13px",
                    border: "1px solid rgba(255,255,255,.08)",
                    bgcolor: "rgba(255,255,255,.025)",
                  }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                      Project progress
                    </Typography>
                    <Typography sx={{ fontSize: 11, color: "#A99AFF" }}>
                      On track
                    </Typography>
                  </Stack>

                  {[78, 56, 91].map((value, index) => (
                    <Box key={value} sx={{ mt: 2 }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ mb: 0.7 }}
                      >
                        <Typography sx={{ color: "#AAB7CC", fontSize: 11 }}>
                          {["Development", "Testing", "Delivery"][index]}
                        </Typography>
                        <Typography sx={{ color: "#AAB7CC", fontSize: 11 }}>
                          {value}%
                        </Typography>
                      </Stack>
                      <Box
                        sx={{
                          height: 6,
                          borderRadius: 5,
                          bgcolor: "rgba(255,255,255,.07)",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            width: `${value}%`,
                            height: "100%",
                            borderRadius: 5,
                            background: gradient,
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Stack
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                  sx={{
                    mt: 2,
                    p: 1.5,
                    borderRadius: "12px",
                    bgcolor: "rgba(82,214,154,.07)",
                    border: "1px solid rgba(82,214,154,.15)",
                  }}
                >
                  <CodeRoundedIcon sx={{ color: "#75DDB3" }} />
                  <Typography sx={{ color: "#C8D9DF", fontSize: 12 }}>
                    Designed around your business processes
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICE VALUE STRIP */}
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            mb: { xs: 8, md: 11 },
            border: "1px solid rgba(117,143,198,.25)",
            borderRadius: "18px",
            overflow: "hidden",
            background: "linear-gradient(100deg,#111F36,#091322)",
          }}
        >
          {[
            ["01", "Purpose-built", "Designed for your requirements"],
            ["02", "Connected", "Plan integrations thoughtfully"],
            ["03", "Scalable", "Allow room to evolve"],
            ["04", "Supported", "Plan for life after launch"],
          ].map(([number, title, text], index) => (
            <Grid item xs={6} md={3} key={title}>
              <Box
                sx={{
                  p: { xs: 2, md: 2.6 },
                  height: "100%",
                  borderRight: {
                    xs: index % 2 === 0 ? "1px solid #26364F" : 0,
                    md: index < 3 ? "1px solid #26364F" : 0,
                  },
                  borderBottom: {
                    xs: index < 2 ? "1px solid #26364F" : 0,
                    md: 0,
                  },
                }}
              >
                <Typography sx={{ color: "#9A8BFF", fontSize: 11 }}>
                  {number}
                </Typography>
                <Typography sx={{ mt: 1, fontWeight: 750 }}>
                  {title}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#93A2BC", fontSize: 12 }}>
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SOFTWARE SERVICES */}
      <Box
        id="services"
        component="section"
        sx={{
          ...sectionSx,
          bgcolor: "rgba(9,19,34,.56)",
          borderTop: "1px solid rgba(123,148,196,.09)",
          borderBottom: "1px solid rgba(123,148,196,.09)",
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="OUR SOFTWARE SERVICES"
            title="Custom software solutions for Pune businesses."
            description="From custom business applications to dashboards and integrations, plan a software solution around your team, customers, and business processes in Pune."
          />

          <Grid container spacing={2.2}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "17px",
                    border: "1px solid rgba(103,134,195,.23)",
                    bgcolor: "rgba(10,21,38,.82)",
                    color: "inherit",
                    backgroundImage: "none",
                    transition: "transform .2s, border-color .2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "rgba(151,125,255,.7)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "grid",
                        placeItems: "center",
                        color: "#B2A2FF",
                        borderRadius: "14px",
                        border: "1px solid rgba(151,125,255,.24)",
                        bgcolor: "rgba(120,99,255,.12)",
                        "& .MuiSvgIcon-root": { fontSize: 25 },
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      sx={{
                        mt: 2,
                        color: "#A99AFF",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {service.tag}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{ mt: 1, fontSize: 19, fontWeight: 750 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: "#9EADC4",
                        fontSize: 14,
                        lineHeight: 1.8,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* DEVELOPMENT PROCESS */}
      <Box component="section" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="From a business challenge to a working solution."
            description="A transparent process helps keep priorities clear and gives your team opportunities to review progress."
          />

          <Grid container spacing={2}>
            {process.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.number}>
                <Box
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: "17px",
                    border: "1px solid rgba(112,140,198,.2)",
                    bgcolor: "rgba(10,20,36,.55)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#A995FF",
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    STEP {step.number}
                  </Typography>
                  <Typography
                    component="h3"
                    sx={{ mt: 1.5, fontWeight: 750, fontSize: 18 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#9EADC4",
                      fontSize: 13,
                      lineHeight: 1.8,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TECHNOLOGY APPROACH */}
      <Box
        component="section"
        sx={{
          ...sectionSx,
          bgcolor: "rgba(9,19,34,.56)",
          borderTop: "1px solid rgba(123,148,196,.09)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Eyebrow>ENGINEERED WITH PURPOSE</Eyebrow>
              <Typography component="h2" sx={headingSx}>
                The right approach starts with the right requirements.
              </Typography>
              <Typography sx={{ mt: 2, color: "#AAB7CC", lineHeight: 1.85 }}>
                Software should fit the way your business operates. We discuss
                the features, data, users, integrations, and support needs
                before deciding on an implementation approach.
              </Typography>

              <Stack spacing={2} sx={{ mt: 3 }}>
                {[
                  ["User experience", "Make key tasks clear and straightforward."],
                  ["Architecture", "Plan the application around its requirements."],
                  ["Integration", "Assess how existing tools and data can connect."],
                  ["Maintainability", "Consider testing, documentation, and future updates."],
                ].map(([title, text]) => (
                  <Box key={title}>
                    <Typography sx={{ fontWeight: 750 }}>{title}</Typography>
                    <Typography sx={{ mt: 0.5, color: "#9EADC4", fontSize: 13 }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: "22px",
                  border: "1px solid rgba(121,147,203,.25)",
                  background:
                    "linear-gradient(145deg,rgba(25,43,72,.9),rgba(7,14,26,.95))",
                }}
              >
                <Stack spacing={1.5}>
                  {[
                    ["01", "Business requirements", "Understand the workflow"],
                    ["02", "Application design", "Plan screens and interactions"],
                    ["03", "System development", "Build agreed capabilities"],
                    ["04", "Testing & delivery", "Validate before launch"],
                  ].map(([number, title, text], index) => (
                    <Stack
                      key={number}
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{
                        p: 2,
                        borderRadius: "13px",
                        border: "1px solid rgba(255,255,255,.08)",
                        bgcolor: "rgba(255,255,255,.025)",
                      }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 42,
                          height: 42,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: "12px",
                          color: "#B7A5FF",
                          bgcolor: "rgba(139,121,255,.14)",
                          fontWeight: 800,
                          fontSize: 12,
                        }}
                      >
                        {number}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 750, fontSize: 14 }}>
                          {title}
                        </Typography>
                        <Typography sx={{ mt: 0.4, color: "#93A2BC", fontSize: 12 }}>
                          {text}
                        </Typography>
                      </Box>
                      {index < 3 && (
                        <CodeRoundedIcon
                          sx={{ color: "#8879D9", display: { xs: "none", sm: "block" } }}
                        />
                      )}
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY TECHBEACON */}
      <Box id="about" component="section" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="WHY TECHBEACON"
            title="A software development partner focused on your business goals."
            description="Work with a Pune-focused development team that prioritises clear communication, useful functionality, and a process shaped around your business requirements."
          />

          <Grid container spacing={2.5}>
            {[
              ["Requirements first", "Understand the problem before deciding on the solution."],
              ["Clear milestones", "Agree on deliverables and review points."],
              ["Practical design", "Create interfaces that support real user tasks."],
              ["Support planning", "Define handover and maintenance expectations."],
            ].map(([title, text]) => (
              <Grid item xs={12} sm={6} md={3} key={title}>
                <Box
                  sx={{
                    p: 2.5,
                    height: "100%",
                    borderLeft: "2px solid rgba(146,120,255,.75)",
                    bgcolor: "rgba(14,25,43,.48)",
                  }}
                >
                  <Typography sx={{ fontWeight: 750, fontSize: 16 }}>
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#9EADC4",
                      fontSize: 13,
                      lineHeight: 1.8,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* PUNE BUSINESS CONTEXT */}
      <Box component="section" sx={{ ...sectionSx, bgcolor: "rgba(9,19,34,.56)", borderTop: "1px solid rgba(123,148,196,.09)" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Eyebrow>SOFTWARE DEVELOPMENT IN PUNE</Eyebrow>
              <Typography component="h2" sx={headingSx}>
                Software that fits the way your Pune business works.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography sx={{ color: "#AAB7CC", lineHeight: 1.9 }}>
                Businesses in Pune operate across many industries and have different
                processes, teams, and customer needs. Off-the-shelf tools may not
                always support a specific workflow. Custom software can bring
                business information, everyday tasks, and essential processes into
                a solution planned around your requirements.
              </Typography>
              <Typography sx={{ mt: 2, color: "#AAB7CC", lineHeight: 1.9 }}>
                TechBeacon Solutions discusses your goals first, then helps define
                the features, user experience, integrations, delivery milestones,
                and support expectations. Whether you need an internal business
                application, a customer-facing web platform, or a reporting
                dashboard, the project starts with a clear understanding of the
                problem you want to solve.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />}
                  sx={{ background: gradient, color: "#fff", textTransform: "none", borderRadius: "11px", px: 2.5 }}>
                  Discuss Your Requirements
                </Button>
                <Button component={Link} href="/website-development"
                  sx={{ color: "#C8C1FF", textTransform: "none" }}>
                  Explore Website Development
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box
        component="section"
        sx={{
          ...sectionSx,
          bgcolor: "rgba(9,19,34,.56)",
          borderTop: "1px solid rgba(123,148,196,.09)",
        }}
      >
        <Container maxWidth="md">
          <SectionHeading
            eyebrow="FAQ"
            title="Custom software development in Pune: FAQs."
            description="Answers to common questions about custom software development, project costs, integrations, timelines, and support for businesses in Pune."
          />

          {faqs.map(({ q, a }) => (
            <Accordion
              key={q}
              disableGutters
              elevation={0}
              sx={{
                mb: 1,
                color: "#F5F7FF",
                bgcolor: "rgba(10,21,38,.78)",
                border: "1px solid rgba(112,140,198,.2)",
                borderRadius: "12px !important",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  borderColor: "rgba(151,125,255,.42)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon sx={{ color: "#A995FF" }} />}
                sx={{ px: 2.5, py: 0.6 }}
              >
                <Typography sx={{ fontWeight: 650, fontSize: 15 }}>
                  {q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5 }}>
                <Typography
                  sx={{ color: "#AAB7CC", fontSize: 14, lineHeight: 1.85 }}
                >
                  {a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CONTACT CTA */}
      <Box id="contact" component="section" sx={sectionSx}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 3, sm: 5, md: 7 },
              borderRadius: { xs: "22px", md: "30px" },
              border: "1px solid rgba(153,132,255,.34)",
              background:
                "radial-gradient(ellipse at 90% 0%,rgba(106,83,255,.29),transparent 42%),linear-gradient(120deg,#101F38,#0A1222)",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Eyebrow>LET'S BUILD SOMETHING USEFUL</Eyebrow>
                <Typography
                  component="h2"
                  sx={{
                    ...headingSx,
                    fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem" },
                  }}
                >
                  Need custom software for your Pune business?
                </Typography>
                <Typography sx={{ mt: 2, color: "#B2C0D6", lineHeight: 1.8 }}>
                  Tell us what you want to improve, automate, or build. TechBeacon Solutions will discuss your requirements, possible approach, and next steps for your software project.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 3.5 }}
                >
                  <Button
                    component={Link}
                    href={contactHref}
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      px: 2.6,
                      py: 1.45,
                      borderRadius: "11px",
                      color: "#fff",
                      fontWeight: 750,
                      textTransform: "none",
                      background: gradient,
                    }}
                  >
                    Discuss Your Project
                  </Button>

                  <Button
                    component={Link}
                    href={whatsappHref}
                    target={WHATSAPP_NUMBER ? "_blank" : undefined}
                    rel={WHATSAPP_NUMBER ? "noopener noreferrer" : undefined}
                    startIcon={<WhatsAppIcon />}
                    variant="outlined"
                    sx={{
                      px: 2.4,
                      py: 1.4,
                      borderRadius: "11px",
                      color: "#E5ECFA",
                      borderColor: "rgba(111,218,177,.6)",
                      textTransform: "none",
                      "& .MuiButton-startIcon": { color: "#52D69A" },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    width: { xs: 95, md: 150 },
                    height: { xs: 95, md: 150 },
                    borderRadius: "35px",
                    border: "1px solid rgba(172,153,255,.4)",
                    bgcolor: "rgba(126,105,255,.12)",
                    mx: { xs: 0, md: "auto" },
                  }}
                >
                  <RocketLaunchRoundedIcon
                    sx={{ fontSize: { xs: 45, md: 65 }, color: "#B7A5FF" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid rgba(142,164,205,.12)",
          py: 3,
        }}
      >

      </Box>
    </Box>
  );
}
