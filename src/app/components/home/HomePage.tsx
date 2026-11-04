
"use client";

import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Link from "next/link";

import Hero from "./Hero";
import AboutSection from "../../about/page";
import PortfolioSection from "../../portfolio/page";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "../../contact/ContactPageClient";

const services = [
  {
    title: "Website Development",
    description:
      "Responsive, professional websites and landing pages built around your business goals.",
    href: "/website-development",
  },
  {
    title: "Custom Software Development",
    description:
      "Business applications, dashboards, portals, and software tailored to your workflows.",
    href: "/software-development",
  },
  {
    title: "SEO Services",
    description:
      "Improve your search visibility and help potential customers discover your business.",
    href: "/seo-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach relevant audiences with digital marketing strategies designed for business growth.",
    href: "/digital-marketing",
  },
  {
    title: "AI Automation",
    description:
      "Explore automation solutions that can simplify repetitive business tasks.",
    href: "/ai-automation",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <Box
        component="section"
        id="services"
        sx={{
          py: { xs: 8, md: 12 },
          color: "#fff",
          background:
            "radial-gradient(circle at 50% 0%, rgba(49,46,129,0.3), transparent 45%), #080814",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
            <Typography
              component="p"
              sx={{
                color: "#A78BFA",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              What We Do
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3.2rem" },
                lineHeight: 1.2,
              }}
            >
              Digital Services for Growing Businesses
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                maxWidth: 720,
                lineHeight: 1.8,
              }}
            >
              TechBeacon Solutions helps businesses in Pune and beyond build
              their digital presence through website development, software,
              SEO, marketing, and automation.
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {services.map((service) => (
              <Box
                key={service.href}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background:
                    "linear-gradient(145deg, rgba(30,27,75,0.45), rgba(15,23,42,0.65))",
                  transition: "transform 0.25s ease, border-color 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(167,139,250,0.6)",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 1.5 }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  component={Link}
                  href={service.href}
                  variant="text"
                  sx={{
                    px: 0,
                    color: "#A78BFA",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#C4B5FD",
                    },
                  }}
                >
                  Explore service →
                </Button>
              </Box>
            ))}
          </Box>

          <Stack alignItems="center" mt={5}>
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              sx={{
                borderColor: "#8174E8",
                color: "#fff",
                borderRadius: "50px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#A78BFA",
                  backgroundColor: "rgba(167,139,250,0.08)",
                },
              }}
            >
              View All Services
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="about">
        <AboutSection />
      </Box>

      {/* PortfolioSection already contains id="portfolio". */}
      <PortfolioSection />

      <Box component="section" id="why-choose-us">
        <WhyChooseUs />
      </Box>

      <Box component="section" id="contact">
        <Contact />
      </Box>
    </>
  );
}
