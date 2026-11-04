
"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowForwardRounded,
  CheckCircleRounded,
  ExpandMoreRounded,
  InsightsRounded,
  LanguageRounded,
  LinkRounded,
  QueryStatsRounded,
  SearchRounded,
  SpeedRounded,
  TravelExploreRounded,
  TrendingUpRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const gradient = "linear-gradient(100deg, #3478F6, #9858EF)";

const sectionSx = {
  py: { xs: 7, md: 11 },
};

const headingSx = {
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
  lineHeight: 1.12,
  fontWeight: 800,
  letterSpacing: "-0.045em",
  color: "#F5F7FF",
};

const services = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "Improve the technical foundations of your website so search engines can crawl, understand, and index your important pages.",
    icon: <SpeedRounded />,
    tags: ["Crawlability", "Indexing", "Core Web Vitals"],
  },
  {
    number: "02",
    title: "On-Page SEO",
    description:
      "Optimize page titles, headings, internal links, content structure, and other on-page elements around relevant search intent.",
    icon: <LanguageRounded />,
    tags: ["Title Tags", "Content Structure", "Internal Links"],
  },
  {
    number: "03",
    title: "Keyword Research",
    description:
      "Discover relevant search terms and understand what potential customers are looking for before planning your content.",
    icon: <SearchRounded />,
    tags: ["Search Intent", "Keyword Mapping", "Competitor Research"],
  },
  {
    number: "04",
    title: "Local SEO",
    description:
      "Help nearby customers discover your business through location-focused website content and Google Business Profile optimization.",
    icon: <TravelExploreRounded />,
    tags: ["Local Visibility", "Business Profile", "Location Pages"],
  },
  {
    number: "05",
    title: "Content SEO",
    description:
      "Build useful, search-focused content that answers customer questions and supports your business expertise.",
    icon: <TrendingUpRounded />,
    tags: ["Content Planning", "Topic Clusters", "Content Updates"],
  },
  {
    number: "06",
    title: "SEO Analytics & Reporting",
    description:
      "Track organic search performance, indexing, relevant traffic, and conversions to identify opportunities for improvement.",
    icon: <InsightsRounded />,
    tags: ["Search Console", "Analytics", "Performance Reports"],
  },
];

const process = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "Review your website's technical health, content, indexing, and existing search performance.",
  },
  {
    number: "02",
    title: "Research & Strategy",
    description:
      "Identify relevant keywords, search intent, competitor opportunities, and priorities.",
  },
  {
    number: "03",
    title: "Optimize & Improve",
    description:
      "Implement technical fixes and improve pages, content, and internal linking.",
  },
  {
    number: "04",
    title: "Measure & Refine",
    description:
      "Monitor performance and adjust the strategy based on evidence and business goals.",
  },
];

const faqs = [
  {
    question: "What is SEO?",
    answer:
      "Search engine optimization (SEO) improves a website's visibility in unpaid search results. It includes technical improvements, useful content, on-page optimization, and building a clear site structure.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes time. Meaningful improvements can take several months, depending on competition, website condition, content quality, and implementation. Rankings and results cannot be guaranteed.",
  },
  {
    question: "Do you provide local SEO for small businesses?",
    answer:
      "Yes. Local SEO can include Google Business Profile improvements, location-relevant content, consistent business details, and guidance on building a stronger local search presence.",
  },
  {
    question: "Can SEO help generate leads?",
    answer:
      "SEO can attract people searching for relevant products or services. Clear service pages, useful content, strong calls to action, and a good user experience help turn relevant visits into enquiries.",
  },
  {
    question: "How do you measure SEO performance?",
    answer:
      "Performance can be assessed using organic search clicks and impressions, relevant keyword visibility, indexing health, qualified website traffic, and conversions or enquiries.",
  },
];

export default function SEOClient() {
  return (
    <Box
      sx={{
        bgcolor: "#080B14",
        color: "#F5F7FF",
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 10, md: 16 },
          pb: { xs: 10, md: 15 },
          background:
            "radial-gradient(ellipse at 78% 20%, rgba(116,77,244,.20), transparent 40%), radial-gradient(ellipse at 10% 70%, rgba(52,120,246,.14), transparent 38%), #080B14",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Chip
                  icon={<TravelExploreRounded />}
                  label="SEARCH ENGINE OPTIMIZATION"
                  sx={{
                    mb: 3,
                    color: "#C9D5FF",
                    border: "1px solid rgba(129,150,255,.28)",
                    bgcolor: "rgba(83,104,230,.10)",
                    fontWeight: 700,
                    letterSpacing: ".07em",
                  }}
                />

                <Typography
                  component="h1"
                  sx={{
                    ...headingSx,
                    fontSize: {
                      xs: "2.8rem",
                      sm: "3.6rem",
                      md: "4.5rem",
                    },
                    maxWidth: 760,
                  }}
                >
                  Get discovered. Build visibility.{" "}
                  <Box
                    component="span"
                    sx={{
                      background: gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Grow organically.
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 650,
                    color: "#A7B0C5",
                    fontSize: { xs: "1rem", md: "1.15rem" },
                    lineHeight: 1.9,
                  }}
                >
                  Help the right customers find your business on Google with
                  strategic SEO, technically sound websites, and content built
                  around what your audience is searching for.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    endIcon={<ArrowForwardRounded />}
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 700,
                      background: gradient,
                      boxShadow: "0 10px 35px rgba(87,91,235,.25)",
                      "&:hover": { opacity: 0.9 },
                    }}
                  >
                    Get an SEO Consultation
                  </Button>

                  <Button
                    component={Link}
                    href="#seo-services"
                    variant="outlined"
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: 2.5,
                      color: "#F5F7FF",
                      borderColor: "rgba(255,255,255,.22)",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#8C83FF",
                        bgcolor: "rgba(255,255,255,.04)",
                      },
                    }}
                  >
                    Explore SEO Services
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={2.5}
                  sx={{ mt: 4 }}
                >
                  {[
                    "Search-focused strategy",
                    "Technical best practices",
                    "Measurable progress",
                  ].map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <CheckCircleRounded
                        sx={{ color: "#9985FF", fontSize: 19 }}
                      />
                      <Typography sx={{ color: "#B8C1D5", fontSize: 13 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* SEO VISUAL */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    border: "1px solid rgba(153,167,255,.2)",
                    borderRadius: 5,
                    background:
                      "linear-gradient(145deg, rgba(30,38,66,.94), rgba(13,17,31,.96))",
                    boxShadow: "0 30px 100px rgba(0,0,0,.3)",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{ mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        background: gradient,
                      }}
                    >
                      <SearchRounded sx={{ fontSize: 27 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#A7B0C5", fontSize: 13 }}>
                        Your organic growth
                      </Typography>
                      <Typography sx={{ fontWeight: 750, fontSize: 20 }}>
                        SEO strategy
                      </Typography>
                    </Box>
                  </Stack>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,.035)",
                      border: "1px solid rgba(255,255,255,.07)",
                    }}
                  >
                    <Typography
                      sx={{ color: "#A7B0C5", fontSize: 12, mb: 2 }}
                    >
                      KEY AREAS OF FOCUS
                    </Typography>

                    {[
                      {
                        title: "Technical health",
                        subtitle: "Crawl, index and performance",
                        icon: <SpeedRounded />,
                        color: "#7CA8FF",
                      },
                      {
                        title: "Relevant content",
                        subtitle: "Intent and useful answers",
                        icon: <LanguageRounded />,
                        color: "#B69AFF",
                      },
                      {
                        title: "Authority & links",
                        subtitle: "Credibility and discovery",
                        icon: <LinkRounded />,
                        color: "#79D9CE",
                      },
                    ].map((item, index) => (
                      <Stack
                        key={item.title}
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{
                          py: 2,
                          borderBottom:
                            index < 2
                              ? "1px solid rgba(255,255,255,.07)"
                              : "none",
                        }}
                      >
                        <Box sx={{ color: item.color, display: "flex" }}>
                          {item.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{ color: "#9EAAC2", fontSize: 12, mt: 0.5 }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                        <CheckCircleRounded
                          sx={{ color: item.color, fontSize: 19 }}
                        />
                      </Stack>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      mt: 2,
                      p: 2.5,
                      borderRadius: 3,
                      background:
                        "linear-gradient(120deg, rgba(52,120,246,.13), rgba(152,88,239,.13))",
                      border: "1px solid rgba(153,130,255,.16)",
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <QueryStatsRounded
                        sx={{ color: "#B9A9FF", fontSize: 28 }}
                      />
                      <Box>
                        <Typography sx={{ fontWeight: 750 }}>
                          Measure what matters
                        </Typography>
                        <Typography
                          sx={{ color: "#A7B0C5", fontSize: 12, mt: 0.5 }}
                        >
                          Visibility · Relevant traffic · Enquiries
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box component="section" id="seo-services" sx={sectionSx}>
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Typography
              sx={{
                color: "#A99BFF",
                fontWeight: 750,
                fontSize: 13,
                letterSpacing: ".16em",
              }}
            >
              OUR SEO SERVICES
            </Typography>
            <Typography
              component="h2"
              sx={{
                ...headingSx,
                textAlign: "center",
                maxWidth: 820,
              }}
            >
              Build a stronger foundation for organic growth
            </Typography>
            <Typography
              sx={{
                maxWidth: 700,
                color: "#A7B0C5",
                textAlign: "center",
                lineHeight: 1.9,
              }}
            >
              From technical improvements to local discovery, every SEO
              activity should support a clear search and business objective.
            </Typography>
          </Stack>

          <Grid container spacing={2.5}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.number}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 3.5 },
                      borderRadius: 4,
                      border: "1px solid rgba(155,169,255,.13)",
                      bgcolor: "#0D1220",
                      transition:
                        "transform .3s ease, border-color .3s ease, background .3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(145,124,255,.55)",
                        background: "#11182A",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          display: "grid",
                          placeItems: "center",
                          color: "#C3B7FF",
                          borderRadius: 3,
                          background: "rgba(126,104,255,.13)",
                          "& svg": { fontSize: 27 },
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        sx={{
                          color: "#65708A",
                          fontSize: 13,
                          fontWeight: 750,
                        }}
                      >
                        {service.number}
                      </Typography>
                    </Stack>

                    <Typography
                      component="h3"
                      sx={{ mt: 3, fontSize: 21, fontWeight: 750 }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1.5,
                        color: "#A7B0C5",
                        lineHeight: 1.85,
                        fontSize: 14,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={1}
                      sx={{ mt: 2.5 }}
                    >
                      {service.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            color: "#B9C3DB",
                            bgcolor: "rgba(255,255,255,.045)",
                            border: "1px solid rgba(255,255,255,.07)",
                            fontSize: 11,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WHY SEO */}
      <Box
        component="section"
        sx={{
          ...sectionSx,
          background:
            "linear-gradient(180deg, rgba(32,39,70,.32), rgba(8,11,20,0))",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#A99BFF",
                  fontWeight: 750,
                  fontSize: 13,
                  letterSpacing: ".16em",
                }}
              >
                WHY SEO MATTERS
              </Typography>

              <Typography component="h2" sx={{ ...headingSx, mt: 2 }}>
                Be present when customers search for what you offer.
              </Typography>

              <Typography
                sx={{ mt: 2.5, color: "#A7B0C5", lineHeight: 1.9 }}
              >
                A useful, accessible website gives search engines and visitors
                a clearer understanding of your business. SEO helps you build
                that foundation over time, rather than relying exclusively on
                paid traffic.
              </Typography>

              <Stack spacing={2} sx={{ mt: 3 }}>
                {[
                  "Help relevant customers discover your services",
                  "Improve the usefulness and structure of your website",
                  "Understand which pages attract valuable visitors",
                  "Build sustainable organic visibility over time",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                  >
                    <CheckCircleRounded
                      sx={{ color: "#9B8AFF", mt: 0.2, fontSize: 21 }}
                    />
                    <Typography sx={{ color: "#D0D6E6", lineHeight: 1.7 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 5,
                  border: "1px solid rgba(155,169,255,.15)",
                  bgcolor: "#0D1220",
                }}
              >
                <Typography sx={{ fontSize: 21, fontWeight: 750, mb: 1 }}>
                  A connected SEO workflow
                </Typography>
                <Typography
                  sx={{ color: "#A7B0C5", lineHeight: 1.8, mb: 3 }}
                >
                  Each stage builds on the previous one to create a more
                  informed and consistent optimization process.
                </Typography>

                {[
                  {
                    title: "Understand",
                    description: "Research customers and search intent",
                  },
                  {
                    title: "Fix",
                    description: "Address technical and usability issues",
                  },
                  {
                    title: "Optimize",
                    description: "Improve relevant pages and content",
                  },
                  {
                    title: "Evaluate",
                    description: "Measure changes and prioritize next steps",
                  },
                ].map((item, index) => (
                  <Stack
                    key={item.title}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{
                      py: 2,
                      borderBottom:
                        index < 3
                          ? "1px solid rgba(255,255,255,.07)"
                          : "none",
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 42,
                        height: 42,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 2.5,
                        background: gradient,
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 750 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ mt: 0.5, color: "#A7B0C5", fontSize: 13 }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PROCESS */}
      <Box component="section" sx={sectionSx}>
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Typography
              sx={{
                color: "#A99BFF",
                fontWeight: 750,
                fontSize: 13,
                letterSpacing: ".16em",
              }}
            >
              OUR PROCESS
            </Typography>
            <Typography
              component="h2"
              sx={{ ...headingSx, textAlign: "center" }}
            >
              From SEO audit to ongoing improvement
            </Typography>
          </Stack>

          <Grid container spacing={2.5}>
            {process.map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.number}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid rgba(155,169,255,.13)",
                    bgcolor: "#0D1220",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 36,
                      fontWeight: 850,
                      letterSpacing: "-.04em",
                      background: gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: 19, fontWeight: 750 }}>
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.5,
                      color: "#A7B0C5",
                      fontSize: 14,
                      lineHeight: 1.85,
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

      {/* FAQ */}
      <Box component="section" sx={sectionSx}>
        <Container maxWidth="md">
          <Typography
            component="h2"
            sx={{ ...headingSx, textAlign: "center", mb: 2 }}
          >
            SEO questions, answered
          </Typography>
          <Typography
            sx={{
              mb: 5,
              color: "#A7B0C5",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            Understand what to expect before investing in search optimization.
          </Typography>

          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              disableGutters
              sx={{
                mb: 1.5,
                color: "#F5F7FF",
                bgcolor: "#0D1220",
                border: "1px solid rgba(155,169,255,.13)",
                borderRadius: "12px !important",
                "&:before": { display: "none" },
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRounded sx={{ color: "#B9ADFF" }} />}
                sx={{ px: 2.5, py: 1 }}
              >
                <Typography sx={{ fontWeight: 650, pr: 2 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ px: 2.5, pb: 3, color: "#A7B0C5", lineHeight: 1.9 }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box component="section" sx={{ pb: { xs: 8, md: 13 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              p: { xs: 4, md: 8 },
              borderRadius: { xs: 4, md: 6 },
              border: "1px solid rgba(171,158,255,.28)",
              background:
                "radial-gradient(ellipse at 15% 10%, rgba(52,120,246,.24), transparent 45%), radial-gradient(ellipse at 90% 90%, rgba(152,88,239,.25), transparent 45%), #101528",
            }}
          >
            <Typography
              component="h2"
              sx={{
                ...headingSx,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              Let's make your business easier to discover.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                mx: "auto",
                maxWidth: 650,
                color: "#A7B0C5",
                lineHeight: 1.9,
              }}
            >
              Tell us about your website and business goals. We'll discuss
              practical SEO opportunities to improve your search presence.
            </Typography>

            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardRounded />}
              sx={{
                mt: 3.5,
                px: 3.5,
                py: 1.6,
                borderRadius: 2.5,
                background: gradient,
                color: "#FFF",
                textTransform: "none",
                fontWeight: 750,
              }}
            >
              Discuss Your SEO Goals
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
