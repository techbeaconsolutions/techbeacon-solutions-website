
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
  AutoGraphRounded,
  CampaignRounded,
  CheckCircleRounded,
  ExpandMoreRounded,
  InsightsRounded,
  QueryStatsRounded,
  SearchRounded,
  ShareRounded,
  TrendingUpRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const gradient = "linear-gradient(100deg, #3478F6, #9858EF)";

const sectionSx = {
  py: { xs: 7, md: 11 },
};

const headingSx = {
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.25rem" },
  lineHeight: 1.12,
  fontWeight: 800,
  letterSpacing: "-0.045em",
  color: "#F5F7FF",
};

const services = [
  {
    number: "01",
    title: "SEO Services in Pune",
    description:
      "Improve your search visibility and help potential customers discover your business through relevant organic searches.",
    icon: <SearchRounded />,
    tags: ["Technical SEO", "On-page SEO", "Local SEO"],
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "Build a recognizable brand, publish engaging content, and connect with the audience that matters to your business.",
    icon: <ShareRounded />,
    tags: ["Content Strategy", "Creative Posts", "Brand Awareness"],
  },
  {
    number: "03",
    title: "Google Ads & Paid Campaigns",
    description:
      "Reach customers actively searching for your products or services with targeted, measurable advertising campaigns.",
    icon: <CampaignRounded />,
    tags: ["Search Ads", "Display Ads", "Remarketing"],
  },
  {
    number: "04",
    title: "Lead Generation",
    description:
      "Create landing pages and campaigns designed to turn relevant traffic into enquiries and potential customers.",
    icon: <TrendingUpRounded />,
    tags: ["Landing Pages", "Lead Funnels", "Conversion Tracking"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Use campaign data and conversion insights to evaluate performance and make smarter marketing decisions.",
    icon: <QueryStatsRounded />,
    tags: ["Campaign Optimization", "Analytics", "ROI Tracking"],
  },
  {
    number: "06",
    title: "Analytics & Reporting",
    description:
      "Understand how visitors find your business, what they do on your website, and where improvements are needed.",
    icon: <InsightsRounded />,
    tags: ["GA4", "Event Tracking", "Monthly Reports"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business, audience, goals, and competition.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "Choose the right channels, messaging, budget, and campaign plan.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Launch campaigns and publish content aligned with your objectives.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Measure performance, identify opportunities, and improve results.",
  },
];

const faqs = [
  {
    question: "Which digital marketing services do you provide in Pune?",
    answer:
      "TechBeacon Solutions can help plan SEO, social media marketing, Google Ads, lead generation, performance marketing, and analytics based on your business needs, audience, and budget.",
  },
  {
    question: "Is digital marketing suitable for small businesses in Pune?",
    answer:
      "Yes. A focused strategy can help small businesses build visibility and generate enquiries. The best channels depend on your target audience, location, goals, and budget.",
  },
  {
    question: "How soon can I expect digital marketing results?",
    answer:
      "Paid advertising may generate traffic and enquiries soon after launch, depending on the campaign and offer. SEO generally takes longer. Results vary, and no specific outcome can be guaranteed.",
  },
  {
    question: "Do you provide customized marketing plans?",
    answer:
      "Yes. The recommended approach should be based on your business objectives, target customers, current online presence, and available budget.",
  },
];

export default function DigitalMarketingClient() {
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
        aria-label="Digital marketing services in Pune"
        sx={{
          position: "relative",
          pt: { xs: 10, md: 16 },
          pb: { xs: 10, md: 15 },
          background:
            "radial-gradient(ellipse at 75% 20%, rgba(104,76,239,.19), transparent 40%), radial-gradient(ellipse at 15% 65%, rgba(52,120,246,.13), transparent 38%), #080B14",
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
                  icon={<AutoGraphRounded />}
                  label="DIGITAL MARKETING AGENCY IN PUNE"
                  sx={{
                    mb: 3,
                    color: "#C9D5FF",
                    border: "1px solid rgba(129,150,255,.28)",
                    bgcolor: "rgba(83,104,230,.10)",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                  }}
                />

                <Typography
                  component="h1"
                  sx={{
                    ...headingSx,
                    fontSize: { xs: "2.8rem", sm: "3.6rem", md: "4.6rem" },
                    maxWidth: 780,
                  }}
                >
                  Digital Marketing Services in Pune for{" "}
                  <Box
                    component="span"
                    sx={{
                      background: gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Business Growth.
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
                  Looking for a digital marketing agency in Pune? TechBeacon Solutions helps businesses improve online visibility, reach relevant audiences, and turn website visits and campaign engagement into meaningful enquiries through a practical digital marketing strategy.
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
                    Discuss Your Project
                  </Button>

                  <Button
                    component={Link}
                    href="#services"
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
                    Explore Services
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={2.5}
                  sx={{ mt: 4 }}
                >
                  {[
                    "Marketing strategy aligned with business goals",
                    "Campaigns guided by performance data",
                    "Clear reporting and communication",
                  ].map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <CheckCircleRounded
                        sx={{ color: "#8B83FF", fontSize: 19 }}
                      />
                      <Typography sx={{ color: "#B8C1D5", fontSize: 13 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <Box
                  sx={{
                    position: "relative",
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
                    justifyContent="space-between"
                    sx={{ mb: 3 }}
                  >
                    <Box>
                      <Typography
                        sx={{ color: "#A7B0C5", fontSize: 13 }}
                      >
                        Your growth strategy
                      </Typography>
                      <Typography
                        sx={{ color: "#FFF", fontWeight: 750, fontSize: 20 }}
                      >
                        Marketing overview
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        color: "#FFF",
                        background: gradient,
                      }}
                    >
                      <AutoGraphRounded />
                    </Box>
                  </Stack>

                  <Box
                    sx={{
                      p: 2.5,
                      mb: 2,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,.035)",
                      border: "1px solid rgba(255,255,255,.07)",
                    }}
                  >
                    <Typography sx={{ color: "#9EAAC2", fontSize: 13 }}>
                      A connected digital strategy
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mt: 2 }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <SearchRounded sx={{ color: "#7CA8FF" }} />
                        <Typography>Search visibility</Typography>
                      </Stack>
                      <Typography sx={{ color: "#A9B5D1", fontSize: 12 }}>
                        SEO
                      </Typography>
                    </Stack>

                    <Box
                      sx={{
                        height: 5,
                        mt: 1.5,
                        borderRadius: 9,
                        bgcolor: "rgba(255,255,255,.08)",
                      }}
                    >
                      <Box
                        sx={{
                          width: "78%",
                          height: "100%",
                          borderRadius: 9,
                          background: gradient,
                        }}
                      />
                    </Box>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mt: 2.5 }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <CampaignRounded sx={{ color: "#B69AFF" }} />
                        <Typography>Campaign reach</Typography>
                      </Stack>
                      <Typography sx={{ color: "#A9B5D1", fontSize: 12 }}>
                        Ads
                      </Typography>
                    </Stack>

                    <Box
                      sx={{
                        height: 5,
                        mt: 1.5,
                        borderRadius: 9,
                        bgcolor: "rgba(255,255,255,.08)",
                      }}
                    >
                      <Box
                        sx={{
                          width: "64%",
                          height: "100%",
                          borderRadius: 9,
                          background:
                            "linear-gradient(90deg, #F4A6FF, #9858EF)",
                        }}
                      />
                    </Box>
                  </Box>

                  <Grid container spacing={2}>
                    {[
                      { title: "Attract", text: "Reach relevant audiences" },
                      { title: "Convert", text: "Create useful next steps" },
                      { title: "Measure", text: "Learn from performance" },
                      { title: "Improve", text: "Refine the strategy" },
                    ].map((item) => (
                      <Grid item xs={6} key={item.title}>
                        <Box
                          sx={{
                            p: 2,
                            height: "100%",
                            borderRadius: 3,
                            border: "1px solid rgba(255,255,255,.07)",
                            bgcolor: "rgba(255,255,255,.025)",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 750, fontSize: 15 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#9EAAC2",
                              fontSize: 12,
                              lineHeight: 1.7,
                              mt: 0.8,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box component="section" id="services" sx={sectionSx}>
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
              WHAT WE DO
            </Typography>
            <Typography
              component="h2"
              sx={{ ...headingSx, textAlign: "center", maxWidth: 800 }}
            >
              Digital marketing services for Pune businesses
            </Typography>
            <Typography
              sx={{
                maxWidth: 700,
                color: "#A7B0C5",
                textAlign: "center",
                lineHeight: 1.9,
              }}
            >
              From SEO and social media to Google Ads and lead generation, choose the channels that fit your Pune business, target customers, and growth priorities.
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

      {/* APPROACH */}
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
            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: "#A99BFF",
                  fontWeight: 750,
                  fontSize: 13,
                  letterSpacing: ".16em",
                }}
              >
                OUR APPROACH
              </Typography>
              <Typography component="h2" sx={{ ...headingSx, mt: 2 }}>
                A local marketing strategy. Better decisions at every step.
              </Typography>
              <Typography sx={{ mt: 2.5, color: "#A7B0C5", lineHeight: 1.9 }}>
                Marketing works best when each activity has a purpose. We connect your business goals with a practical plan, measurable actions, and continuous improvement for businesses in Pune and across India.
              </Typography>

              <Button
                component={Link}
                href="/contact"
                endIcon={<ArrowForwardRounded />}
                sx={{
                  mt: 3,
                  px: 0,
                  color: "#B5A8FF",
                  textTransform: "none",
                  fontWeight: 750,
                }}
              >
                Plan your strategy
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                {process.map((step) => (
                  <Box
                    key={step.number}
                    sx={{
                      display: "flex",
                      gap: 2.5,
                      p: { xs: 2.5, md: 3 },
                      borderRadius: 3,
                      border: "1px solid rgba(155,169,255,.12)",
                      bgcolor: "rgba(16,22,39,.78)",
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 48,
                        height: 48,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 2.5,
                        background: gradient,
                        fontWeight: 800,
                      }}
                    >
                      {step.number}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: 18, fontWeight: 750 }}>
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.8,
                          color: "#A7B0C5",
                          lineHeight: 1.8,
                          fontSize: 14,
                        }}
                      >
                        {step.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* PUNE DIGITAL MARKETING SECTION */}
      <Box
        component="section"
        sx={{
          ...sectionSx,
          background: "linear-gradient(180deg, rgba(32,39,70,.25), rgba(8,11,20,0))",
          borderTop: "1px solid rgba(155,169,255,.10)",
          borderBottom: "1px solid rgba(155,169,255,.10)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography sx={{ color: "#A99BFF", fontWeight: 750, fontSize: 13, letterSpacing: ".16em" }}>
                FOR BUSINESSES IN PUNE
              </Typography>
              <Typography component="h2" sx={{ ...headingSx, mt: 2 }}>
                Help the right customers discover your business.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography sx={{ color: "#A7B0C5", lineHeight: 1.9 }}>
                Whether you serve customers locally in Pune or across India,
                your marketing should make it easy for people to understand what
                you offer and what to do next. A clear strategy can combine
                local and organic search visibility, useful social content,
                paid campaigns, and conversion-focused landing pages.
              </Typography>
              <Typography sx={{ mt: 2, color: "#A7B0C5", lineHeight: 1.9 }}>
                TechBeacon Solutions starts by understanding your services,
                ideal customers, competition, and budget. We then help identify
                suitable channels and ways to measure activity such as relevant
                website visits, calls, form submissions, and other enquiries.
                Campaign performance depends on the offer, audience, budget,
                competition, and execution; specific sales or lead volumes
                cannot be guaranteed.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForwardRounded />}
                  sx={{ background: gradient, color: "#fff", textTransform: "none", borderRadius: 2.5, px: 2.5 }}>
                  Discuss Your Marketing Goals
                </Button>
                <Button component={Link} href="/seo-services"
                  sx={{ color: "#C5B9FF", textTransform: "none" }}>
                  Explore SEO Services
                </Button>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 2 }}>
                <Typography component={Link} href="/website-development"
                  sx={{ color: "#9FB9FF", fontSize: 13, textDecoration: "none", "&:hover": { color: "#fff" } }}>
                  Website Development
                </Typography>
                <Typography component={Link} href="/software-development"
                  sx={{ color: "#9FB9FF", fontSize: 13, textDecoration: "none", "&:hover": { color: "#fff" } }}>
                  Software Development
                </Typography>
              </Stack>
            </Grid>
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
            Frequently asked questions
          </Typography>
          <Typography
            sx={{
              mb: 5,
              color: "#A7B0C5",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            Helpful answers before you start planning your marketing strategy.
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
                maxWidth: 750,
                mx: "auto",
              }}
            >
              Looking for digital marketing services in Pune?
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
              Tell us about your business, target customers, and goals. Let's discuss a digital marketing plan that fits your needs and budget.
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
              Let's Talk Growth
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
