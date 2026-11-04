
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
      "Build responsive, SEO-friendly business websites and landing pages designed to showcase your services, attract potential customers and generate enquiries.",
    href: "/website-development",
    linkText: "Explore Website Development",
  },
  {
    title: "Custom Software Development",
    description:
      "Simplify business operations with custom software, web applications, dashboards and business portals tailored to your workflows and requirements.",
    href: "/software-development",
    linkText: "Explore Software Development",
  },
  {
    title: "SEO Services",
    description:
      "Improve your website's search visibility with technical SEO, on-page optimization and local SEO strategies that help customers find your business.",
    href: "/seo-services",
    linkText: "Explore SEO Services",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence through social media marketing, digital campaigns and targeted strategies designed to connect your business with relevant audiences.",
    href: "/digital-marketing",
    linkText: "Explore Digital Marketing",
  },
  {
    title: "AI Automation",
    description:
      "Streamline repetitive business tasks with practical AI automation solutions that improve workflows, save time and support business productivity.",
    href: "/ai-automation",
    linkText: "Explore AI Automation",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" aria-label="TechBeacon Solutions introduction">
        <Hero />
      </section>

      {/* Services Section */}
      <Box
        component="section"
        id="services"
        aria-labelledby="services-heading"
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
              Our Services
            </Typography>

            <Typography
              id="services-heading"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3.2rem" },
                lineHeight: 1.2,
              }}
            >
              Digital Solutions for Growing Businesses
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#94A3B8",
                maxWidth: 720,
                lineHeight: 1.8,
              }}
            >
              TechBeacon Solutions provides website development, custom
              software development, SEO, digital marketing and AI automation
              services to help businesses build their digital presence
              and grow. Based in Pune, we work with businesses across India.
            </Typography>
          </Stack>

          {/* Service Cards */}
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
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
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    mb: 2,
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  component={Link}
                  href={service.href}
                  variant="text"
                  aria-label={service.linkText}
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
                  {service.linkText} →
                </Button>
              </Box>
            ))}
          </Box>

          {/* All Services CTA */}
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
              View All Services →
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        component="section"
        id="about"
        aria-label="About TechBeacon Solutions"
      >
        <AboutSection />
      </Box>

      {/* Portfolio Section */}
      {/* PortfolioSection already contains id="portfolio". */}
      <PortfolioSection />

      {/* Why Choose Us Section */}
      <Box
        component="section"
        id="why-choose-us"
        aria-label="Why choose TechBeacon Solutions"
      >
        <WhyChooseUs />
      </Box>

      {/* Contact Section */}
      <Box
        component="section"
        id="contact"
        aria-label="Contact TechBeacon Solutions"
      >
        <Contact />
      </Box>
    </>
  );
}
