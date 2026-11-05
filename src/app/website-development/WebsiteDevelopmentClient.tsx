
"use client";

import React from "react";
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
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";

const gradient = "linear-gradient(100deg, #3478F6, #9858EF)";

const WHATSAPP_NUMBER = "919209652754";
const CONTACT_PAGE = "/contact";

const sectionSx = {
  py: { xs: 7, md: 11 },
};

const headingSx = {
  fontWeight: 800,
  letterSpacing: "-0.045em",
  lineHeight: 1.12,
  color: "#F5F7FF",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
};

const services = [
  {
    icon: <LanguageRoundedIcon />,
    title: "Business Websites",
    text: "Professional, responsive business websites that showcase your brand, services and business information while encouraging potential customers to contact you.",
  },
  {
    icon: <AutoAwesomeRoundedIcon />,
    title: "Landing Pages",
    text: "Focused landing pages for advertising campaigns, product launches and business promotions, designed to communicate your offer and generate enquiries.",
  },
  {
    icon: <ShoppingCartRoundedIcon />,
    title: "E-commerce Websites",
    text: "Online stores tailored to your products and business workflow, with product catalogues, shopping experiences and essential integrations.",
  },
  {
    icon: <CodeRoundedIcon />,
    title: "Custom Web Applications",
    text: "Dashboards, portals and custom web applications built around your business processes, requirements and operational goals.",
  },
  {
    icon: <TuneRoundedIcon />,
    title: "Website Redesign",
    text: "Modernize your existing website with improved design, navigation, mobile usability, content structure and user experience.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Maintenance & Support",
    text: "Keep your website updated and reliable with agreed maintenance, technical fixes, content updates and ongoing support.",
  },
];

const process = [
  [
    "01",
    "Discovery & Planning",
    "Understand your business, target audience, website requirements and project goals.",
  ],
  [
    "02",
    "Design",
    "Create a visual direction that reflects your brand and provides a clear customer experience.",
  ],
  [
    "03",
    "Development",
    "Build responsive website pages and implement the functionality required for your project.",
  ],
  [
    "04",
    "Testing & Review",
    "Check website layouts, links, forms, mobile experience, performance and functionality.",
  ],
  [
    "05",
    "Launch & Support",
    "Publish the approved website and provide the support agreed upon for your project.",
  ],
];

const faqs = [
  {
    q: "Which website development company should I choose in Pune?",
    a: "Choose a website development partner that understands your business goals, customers, design preferences and technical requirements. TechBeacon Solutions works on business websites, landing pages, e-commerce websites and custom web applications for businesses looking to strengthen their online presence.",
  },
  {
    q: "How much does website development cost in Pune?",
    a: "Website development pricing depends on the number of pages, design requirements, features, integrations and overall project complexity. Contact TechBeacon Solutions with your requirements to discuss a suitable project scope and quotation.",
  },
  {
    q: "How long does it take to develop a business website?",
    a: "The development timeline depends on the number of pages, functionality, content readiness and project complexity. We discuss the expected timeline and milestones before development begins.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. We build responsive website layouts designed to work across mobile phones, tablets and desktop screens. We also review the user experience across different screen sizes.",
  },
  {
    q: "Can you redesign my existing business website?",
    a: "Yes. We can help improve your existing website's appearance, navigation, content structure, mobile usability and user experience based on your business requirements.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "We can implement SEO-friendly foundations such as semantic HTML headings, page metadata, responsive layouts, internal links and crawlable website structures. Search rankings depend on many factors and cannot be guaranteed.",
  },
  {
    q: "Do you develop e-commerce websites?",
    a: "Yes. We can develop online stores based on your product catalogue, shopping requirements, payment integrations and business workflow. The exact features are finalized according to your project scope.",
  },
  {
    q: "Do you provide website hosting and maintenance?",
    a: "Hosting, domain configuration, deployment and ongoing maintenance can be discussed as part of your project. The services included will be clearly defined in the agreed scope.",
  },
  {
    q: "Do you build websites for small businesses and startups?",
    a: "Yes. We work with businesses and startups that need a professional online presence. Website scope and features can be planned according to your business objectives and budget.",
  },
  {
    q: "How can I get a website development quotation?",
    a: "Visit our contact page or message us on WhatsApp. Share your business type, website requirements, preferred features and any reference websites. Our team can discuss your project and the next steps.",
  },
];

// FAQ structured data uses the same questions and answers
// displayed in the page.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://techbeaconsolutions.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website Development",
      item: "https://techbeaconsolutions.com/website-development",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services in Pune",
  serviceType: "Website Design and Development",
  description:
    "Responsive business websites, landing pages, e-commerce websites and custom web applications for businesses in Pune.",
  url: "https://techbeaconsolutions.com/website-development",
  areaServed: {
    "@type": "City",
    name: "Pune",
    containedInPlace: {
      "@type": "State",
      name: "Maharashtra",
    },
  },
  provider: {
    "@type": "Organization",
    name: "TechBeacon Solutions",
    url: "https://techbeaconsolutions.com",
  },
};

const serializeJsonLd = (schema: object) =>
  JSON.stringify(schema).replace(/</g, "\\u003c");

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

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 5 }}>
      <Eyebrow>{eyebrow}</Eyebrow>

      <Typography component="h2" sx={headingSx}>
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 2,
          color: "#AAB7CC",
          lineHeight: 1.8,
          fontSize: { xs: 15, md: 17 },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default function WebsiteDevelopmentClient() {
  const contactHref = CONTACT_PAGE;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi TechBeacon Solutions, I am looking for website development services in Pune. I would like to discuss my business website requirements and get a quotation."
  )}`;

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        bgcolor: "#050B16",
        color: "#F5F7FF",
        backgroundImage:
          "radial-gradient(ellipse at 85% 5%, rgba(69,75,220,0.18), transparent 35%)",
        "& *": { boxSizing: "border-box" },
      }}
    >
      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(serviceSchema),
        }}
      />

      {/* HERO */}

      <Box
        component="section"
        sx={{
          ...sectionSx,
          pt: { xs: 7, md: 11 },
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(100,75,230,.12), transparent 40%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Eyebrow>WEBSITE DEVELOPMENT COMPANY IN PUNE</Eyebrow>

              <Typography
                component="h1"
                sx={{
                  ...headingSx,
                  fontSize: {
                    xs: "2.8rem",
                    sm: "3.5rem",
                    md: "4.2rem",
                  },
                  lineHeight: 1.03,
                }}
              >
                Website Development in{" "}
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
                  Pune for Growing Businesses.
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 550,
                  color: "#AAB7CC",
                  lineHeight: 1.85,
                  fontSize: { xs: 16, md: 18 },
                }}
              >
                Looking for a website development company in Pune?
                TechBeacon Solutions designs and develops modern,
                mobile-friendly websites for businesses and startups.
                From professional business websites and landing pages
                to e-commerce stores and custom web applications,
                we build digital experiences around your business goals.
              </Typography>

              <Grid container spacing={1.5} sx={{ mt: 2 }}>
                {[
                  [
                    <DevicesRoundedIcon key="i" />,
                    "Responsive design",
                  ],
                  [
                    <SearchRoundedIcon key="i" />,
                    "SEO-friendly structure",
                  ],
                  [
                    <RocketLaunchRoundedIcon key="i" />,
                    "Performance focused",
                  ],
                  [
                    <AutoAwesomeRoundedIcon key="i" />,
                    "Lead-focused layouts",
                  ],
                ].map(([icon, label]) => (
                  <Grid item xs={6} key={String(label)}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ color: "#A98AFF", display: "flex" }}>
                        {icon}
                      </Box>

                      <Typography
                        sx={{
                          color: "#D3DCEC",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {label}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

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
                  Get a Free Website Quote
                </Button>

                <Button
                  component={Link}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    px: 2.2,
                    py: 1.4,
                    borderRadius: "12px",
                    color: "#E5ECFA",
                    borderColor: "rgba(111,218,177,0.65)",
                    textTransform: "none",
                    "& .MuiButton-startIcon": {
                      color: "#52D69A",
                    },
                  }}
                >
                  Discuss on WhatsApp
                </Button>
              </Stack>

              <Typography
                sx={{ mt: 2, color: "#71819C", fontSize: 12 }}
              >
                Clear scope · Responsive experience · Built around your goals
              </Typography>

              <Typography
                component={Link}
                href="/services"
                sx={{
                  display: "inline-block",
                  mt: 2,
                  color: "#B7A8FF",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Explore all our digital services →
              </Typography>
            </Grid>

            {/* WEBSITE MOCKUP */}

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 580,
                  mx: "auto",
                  p: 2,
                  borderRadius: "26px",
                  border: "1px solid rgba(133,156,211,0.3)",
                  background:
                    "linear-gradient(145deg,rgba(25,42,73,.9),rgba(8,15,29,.97))",
                  boxShadow: "0 30px 80px rgba(0,0,0,.35)",
                }}
              >
                <Stack direction="row" spacing={1} sx={{ p: 1, mb: 1 }}>
                  {["#FF6B7A", "#F7C66A", "#5ED7A2"].map((color) => (
                    <Box
                      key={color}
                      sx={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        bgcolor: color,
                      }}
                    />
                  ))}

                  <Typography sx={{ ml: 1, color: "#91A2C1", fontSize: 10 }}>
                    yourbusiness.com
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    minHeight: { xs: 290, sm: 380 },
                    p: { xs: 2.5, sm: 4 },
                    borderRadius: "17px",
                    background:
                      "radial-gradient(ellipse at 100% 0%,rgba(113,91,255,.4),transparent 45%),linear-gradient(145deg,#142847,#08101E)",
                  }}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 800 }}>
                    YOUR BRAND
                  </Typography>

                  <Typography
                    sx={{
                      mt: 5,
                      maxWidth: 300,
                      fontSize: { xs: 30, sm: 42 },
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    Make your first impression{" "}
                    <Box component="span" sx={{ color: "#A994FF" }}>
                      count.
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      maxWidth: 280,
                      color: "#AAB9D2",
                      fontSize: 13,
                      lineHeight: 1.8,
                    }}
                  >
                    A modern digital experience made for your customers
                    and business goals.
                  </Typography>

                  <Button
                    component={Link}
                    href="/portfolio"
                    size="small"
                    sx={{
                      mt: 3,
                      color: "#fff",
                      textTransform: "none",
                      background: gradient,
                      borderRadius: "8px",
                      px: 2,
                    }}
                  >
                    Explore our work ↗
                  </Button>
                </Box>

                {/* MOBILE MOCKUP */}

                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: -4, sm: -15 },
                    bottom: { xs: -15, sm: -25 },
                    width: { xs: 100, sm: 135 },
                    height: { xs: 170, sm: 220 },
                    p: 1,
                    borderRadius: "22px",
                    bgcolor: "#101A2C",
                    border: "1px solid rgba(179,166,255,.6)",
                    transform: "rotate(5deg)",
                    boxShadow: "0 20px 45px rgba(0,0,0,.4)",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      p: 1,
                      background: "linear-gradient(160deg,#263D6A,#0B1222)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#9B8AFF",
                        fontSize: 9,
                        fontWeight: 800,
                      }}
                    >
                      YOUR BRAND
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2,
                        fontSize: 16,
                        fontWeight: 800,
                        lineHeight: 1.1,
                      }}
                    >
                      Made for your next step.
                    </Typography>

                    <Box
                      sx={{
                        mt: 2,
                        height: 45,
                        borderRadius: 1,
                        bgcolor: "rgba(139,121,255,.23)",
                      }}
                    />

                    <Box
                      sx={{
                        mt: 1,
                        height: 5,
                        width: "80%",
                        bgcolor: "rgba(255,255,255,.2)",
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TRUST STRIP */}

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
            ["01", "Business-first", "Built around your goals"],
            ["02", "Responsive", "Across screen sizes"],
            ["03", "SEO-ready", "Sound technical foundations"],
            ["04", "Human support", "A clear project process"],
          ].map(([n, title, description], i) => (
            <Grid item key={title} xs={6} md={3}>
              <Box
                sx={{
                  p: { xs: 2, md: 2.6 },
                  height: "100%",
                  borderRight: {
                    xs: i % 2 === 0 ? "1px solid #26364F" : 0,
                    md: i < 3 ? "1px solid #26364F" : 0,
                  },
                  borderBottom: {
                    xs: i < 2 ? "1px solid #26364F" : 0,
                    md: 0,
                  },
                }}
              >
                <Typography sx={{ color: "#9A8BFF", fontSize: 11 }}>
                  {n}
                </Typography>

                <Typography sx={{ mt: 1, fontWeight: 750 }}>
                  {title}
                </Typography>

                <Typography
                  sx={{ mt: 0.5, color: "#93A2BC", fontSize: 12 }}
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SERVICES */}

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
          <SectionTitle
            eyebrow="WEBSITE DEVELOPMENT SERVICES"
            title="Website development for your next stage."
            description="Looking for professional website development in Pune? Explore business websites, landing pages, e-commerce stores and custom web applications built around your requirements."
          />

          <Grid container spacing={2.2}>
            {services.map((service) => (
              <Grid item key={service.title} xs={12} sm={6} md={4}>
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
                      component="h3"
                      sx={{ mt: 2.2, fontSize: 19, fontWeight: 750 }}
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
                      {service.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* LOCAL WEBSITE DEVELOPMENT - PUNE */}

      <Box
        component="section"
        sx={{
          ...sectionSx,
          background:
            "radial-gradient(ellipse at 90% 50%,rgba(116,77,244,.10),transparent 45%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={7}>
              <Eyebrow>WEBSITE DEVELOPMENT IN PUNE</Eyebrow>

              <Typography component="h2" sx={headingSx}>
                Helping Pune Businesses Build a Strong Online Presence
              </Typography>

              <Typography
                sx={{ mt: 2.5, color: "#AAB7CC", lineHeight: 1.9 }}
              >
                Your website is often the first place potential customers
                learn about your business. A professional website can help
                explain your services, establish credibility and make it
                easier for customers to contact you.
              </Typography>

              <Typography
                sx={{ mt: 2, color: "#AAB7CC", lineHeight: 1.9 }}
              >
                TechBeacon Solutions works with startups, small businesses
                and growing companies in Pune to plan and develop websites
                that reflect their brand and business requirements.
              </Typography>

              <Stack spacing={2} sx={{ mt: 3 }}>
                {[
                  "Professional websites for local businesses",
                  "Mobile-friendly layouts for your customers",
                  "Clear service information and enquiry options",
                  "SEO-friendly technical foundations",
                  "Custom features based on your requirements",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <CheckCircleRoundedIcon
                      sx={{ color: "#9B8AFF", fontSize: 21 }}
                    />

                    <Typography sx={{ color: "#D3DCEC" }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 4,
                  px: 3,
                  py: 1.5,
                  borderRadius: "12px",
                  background: gradient,
                  textTransform: "none",
                  fontWeight: 750,
                }}
              >
                Discuss Your Website Project
              </Button>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "22px",
                  border: "1px solid rgba(133,156,211,.25)",
                  background:
                    "linear-gradient(145deg,rgba(25,42,73,.8),rgba(8,15,29,.97))",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 3,
                    background: gradient,
                    mb: 3,
                  }}
                >
                  <TravelExploreRoundedIcon sx={{ fontSize: 27 }} />
                </Box>

                <Typography sx={{ fontSize: 22, fontWeight: 800 }}>
                  Websites for Growing Businesses
                </Typography>

                <Typography
                  sx={{ mt: 1.5, color: "#AAB7CC", lineHeight: 1.8 }}
                >
                  Practical digital solutions for different business
                  requirements.
                </Typography>

                {[
                  "Startups and new businesses",
                  "Small and medium businesses",
                  "Interior design and service businesses",
                  "Retail and local businesses",
                  "Growing companies",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{ mt: 2.5 }}
                  >
                    <CheckCircleRoundedIcon sx={{ color: "#9985FF" }} />

                    <Typography sx={{ color: "#D3DCEC", fontSize: 14 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* DEVELOPMENT PROCESS */}

      <Box component="section" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionTitle
            eyebrow="HOW WE WORK"
            title="A clear process, from idea to launch."
            description="Know what happens next, what we need from you, and what each stage is designed to deliver."
          />

          <Grid container spacing={2}>
            {process.map(([number, title, description]) => (
              <Grid item key={number} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    height: "100%",
                    p: 2.4,
                    borderRadius: "17px",
                    border: "1px solid rgba(112,140,198,.2)",
                    bgcolor: "rgba(10,20,36,.55)",
                  }}
                >
                  <Box
                    sx={{
                      width: 47,
                      height: 47,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(162,136,255,.7)",
                      color: "#B7A4FF",
                      bgcolor: "rgba(129,104,255,.12)",
                      fontWeight: 800,
                    }}
                  >
                    {number}
                  </Box>

                  <Typography
                    component="h3"
                    sx={{ mt: 2, fontWeight: 750 }}
                  >
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
                    {description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PORTFOLIO */}

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
              <Grid container spacing={1.5}>
                {[
                  ["INTERIOR DESIGN", "Spaces made personal", "#BBA58D"],
                  ["WELLNESS", "Care that feels human", "#76C5C3"],
                  [
                    "FOOD & HOSPITALITY",
                    "A taste of something special",
                    "#E6A15D",
                  ],
                ].map(([title, subtitle, color], i) => (
                  <Grid item key={title} xs={i === 0 ? 12 : 6}>
                    <Box
                      sx={{
                        minHeight: i === 0 ? 170 : 135,
                        p: 2.5,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        borderRadius: "15px",
                        border: "1px solid rgba(255,255,255,.12)",
                        background: `linear-gradient(145deg,${color}33,#0A111E)`,
                      }}
                    >
                      <Typography
                        sx={{
                          color,
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: ".12em",
                        }}
                      >
                        {title}
                      </Typography>

                      <Typography sx={{ mt: 1, fontSize: 19, fontWeight: 750 }}>
                        {subtitle}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography sx={{ mt: 1.5, color: "#7185A7", fontSize: 11 }}>
                Replace these concept cards with screenshots of real projects
                when available.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Eyebrow>SELECTED WORK</Eyebrow>

              <Typography component="h2" sx={headingSx}>
                Thoughtful websites. Built for real businesses.
              </Typography>

              <Typography sx={{ mt: 2, color: "#AAB7CC", lineHeight: 1.85 }}>
                Explore website design concepts and completed projects.
                See how thoughtful design, clear structure and user
                experience can support different business requirements.
              </Typography>

              <Button
                component={Link}
                href="/portfolio"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 3,
                  px: 2.4,
                  py: 1.25,
                  borderRadius: "11px",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 700,
                  background: gradient,
                }}
              >
                View Our Portfolio
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY TECHBEACON */}

      <Box id="about" component="section" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionTitle
            eyebrow="WHY TECHBEACON"
            title="A thoughtful partner for your digital presence."
            description="Practical design and development decisions, so your website has a purpose beyond looking good."
          />

          <Grid container spacing={2.5}>
            {[
              [
                <AutoAwesomeRoundedIcon key="i" />,
                "Brand-aligned design",
                "A visual direction that reflects your business and audience.",
              ],
              [
                <DevicesRoundedIcon key="i" />,
                "Responsive by design",
                "Layouts planned for mobile, tablet and desktop.",
              ],
              [
                <SearchRoundedIcon key="i" />,
                "SEO foundations",
                "Semantic structure, relevant metadata and a sound SEO starting point.",
              ],
              [
                <SupportAgentRoundedIcon key="i" />,
                "Clear communication",
                "Defined scope, review points and expectations throughout the project.",
              ],
            ].map(([icon, title, text]) => (
              <Grid item key={String(title)} xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    p: 2.4,
                    height: "100%",
                    borderLeft: "2px solid rgba(146,120,255,.75)",
                    bgcolor: "rgba(14,25,43,.48)",
                  }}
                >
                  <Box sx={{ color: "#A996FF", display: "flex" }}>
                    {icon}
                  </Box>

                  <Typography
                    component="h3"
                    sx={{ mt: 1.8, fontWeight: 750 }}
                  >
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

      {/* RELATED SERVICES - INTERNAL LINKS */}

      <Box
        component="section"
        sx={{
          ...sectionSx,
          bgcolor: "rgba(9,19,34,.56)",
          borderTop: "1px solid rgba(123,148,196,.09)",
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            eyebrow="MORE DIGITAL SOLUTIONS"
            title="Explore Our Other Services"
            description="Discover more ways TechBeacon Solutions can support your business with digital technology and online growth."
          />

          <Grid container spacing={2.5}>
            {[
              {
                title: "SEO Services",
                description:
                  "Improve your website's search visibility through technical SEO, on-page optimization and local search strategies.",
                href: "/seo-services",
              },
              {
                title: "Software Development",
                description:
                  "Explore custom software, business applications and digital solutions built around your operational needs.",
                href: "/software-development",
              },
              {
                title: "Digital Marketing",
                description:
                  "Reach potential customers through digital campaigns, online marketing and strategic promotion.",
                href: "/digital-marketing",
              },
            ].map((service) => (
              <Grid item xs={12} md={4} key={service.href}>
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: "17px",
                    border: "1px solid rgba(103,134,195,.23)",
                    bgcolor: "rgba(10,21,38,.82)",
                    transition: "all .25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "rgba(151,125,255,.7)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 20, fontWeight: 750 }}>
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      color: "#9EADC4",
                      lineHeight: 1.8,
                      fontSize: 14,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Button
                    component={Link}
                    href={service.href}
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      mt: 2,
                      color: "#B7A8FF",
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Explore Service
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}

      <Box
        component="section"
        sx={{
          ...sectionSx,
          borderTop: "1px solid rgba(123,148,196,.09)",
        }}
      >
        <Container maxWidth="md">
          <SectionTitle
            eyebrow="WEBSITE DEVELOPMENT FAQ"
            title="Questions before you get started?"
            description="Answers to common questions about website development, pricing, timelines and working with TechBeacon Solutions in Pune."
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
                expandIcon={
                  <ExpandMoreRoundedIcon sx={{ color: "#A995FF" }} />
                }
                sx={{ px: 2.5, py: 0.6 }}
              >
                <Typography sx={{ fontWeight: 650, fontSize: 15 }}>
                  {q}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5 }}>
                <Typography
                  sx={{
                    color: "#AAB7CC",
                    fontSize: 14,
                    lineHeight: 1.85,
                  }}
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
                <Eyebrow>LET'S BUILD YOUR WEBSITE</Eyebrow>

                <Typography
                  component="h2"
                  sx={{
                    ...headingSx,
                    fontSize: {
                      xs: "2.1rem",
                      sm: "2.8rem",
                      md: "3.4rem",
                    },
                  }}
                >
                  Ready to Build a Website for Your Business in Pune?
                </Typography>

                <Typography
                  sx={{ mt: 2, color: "#B2C0D6", lineHeight: 1.8 }}
                >
                  Tell us about your business, website requirements and
                  goals. Let's discuss the right website solution for
                  your next stage of growth.
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
                    Request a Free Quote
                  </Button>

                  <Button
                    component={Link}
                    href={whatsappHref}
                    startIcon={<WhatsAppIcon />}
                    variant="outlined"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 2.4,
                      py: 1.4,
                      borderRadius: "11px",
                      color: "#E5ECFA",
                      borderColor: "rgba(111,218,177,.6)",
                      textTransform: "none",
                      "& .MuiButton-startIcon": {
                        color: "#52D69A",
                      },
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
                    sx={{
                      fontSize: { xs: 45, md: 65 },
                      color: "#B7A5FF",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
