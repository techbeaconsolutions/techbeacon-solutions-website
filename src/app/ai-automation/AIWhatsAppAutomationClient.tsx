
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
  AutoAwesomeRounded,
  BoltRounded,
  CheckCircleRounded,
  ExpandMoreRounded,
  ForumRounded,
  HubRounded,
  MarkChatUnreadRounded,
  PsychologyRounded,
  QueryStatsRounded,
  ScheduleRounded,
  SupportAgentRounded,
  SyncAltRounded,
  TaskAltRounded,
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
    title: "AI Chatbots & Assistants",
    description:
      "Create conversational assistants that answer common questions, guide customers, and help your team handle enquiries more efficiently.",
    icon: <PsychologyRounded />,
    tags: ["AI Assistants", "FAQs", "Knowledge Bases"],
  },
  {
    number: "02",
    title: "WhatsApp Business Automation",
    description:
      "Streamline supported customer conversations with automated replies, approved message templates, and structured enquiry workflows.",
    icon: <MarkChatUnreadRounded />,
    tags: ["WhatsApp Business", "Templates", "Messaging Flows"],
  },
  {
    number: "03",
    title: "Lead Qualification & Routing",
    description:
      "Collect relevant lead information, identify customer requirements, and route enquiries to the right person or team.",
    icon: <HubRounded />,
    tags: ["Lead Capture", "Qualification", "Team Routing"],
  },
  {
    number: "04",
    title: "Automated Follow-Ups",
    description:
      "Create timely follow-up workflows for eligible enquiries, appointments, quotations, and customer requests.",
    icon: <ScheduleRounded />,
    tags: ["Follow-Ups", "Reminders", "Notifications"],
  },
  {
    number: "05",
    title: "Business Workflow Integration",
    description:
      "Connect messaging workflows with supported CRMs, forms, websites, databases, and other business tools.",
    icon: <SyncAltRounded />,
    tags: ["CRM", "API Integrations", "Workflow Tools"],
  },
  {
    number: "06",
    title: "Customer Support Automation",
    description:
      "Help customers get answers, submit requests, check supported information, and reach a human when needed.",
    icon: <SupportAgentRounded />,
    tags: ["Support Workflows", "Escalation", "Service Requests"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Map your customer journey, repetitive tasks, business requirements, and existing tools.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the conversation flows, AI capabilities, integrations, and human handoff rules.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "Configure workflows, connect supported services, and test real-world conversation scenarios.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Monitor performance, refine responses, and improve the automation based on actual usage.",
  },
];

const faqs = [
  {
    question: "What is WhatsApp Business automation?",
    answer:
      "It uses approved business messaging capabilities and workflows to handle supported tasks such as customer notifications, enquiry collection, reminders, and routing conversations to a team.",
  },
  {
    question: "Can AI answer customer questions automatically?",
    answer:
      "Yes. An appropriately configured AI assistant can answer questions using your supplied business information. Important actions and uncertain or sensitive requests can be routed to a human.",
  },
  {
    question: "Can automation help generate leads?",
    answer:
      "It can collect enquiry details, ask qualifying questions, organize leads, and route them to your sales team. Results depend on your offer, audience, workflow, and follow-up process.",
  },
  {
    question: "Can WhatsApp automation connect to my CRM or website?",
    answer:
      "Integrations may be possible through supported APIs, webhooks, connectors, or custom development. Feasibility depends on the systems and permissions available.",
  },
  {
    question: "Do I need the WhatsApp Business API?",
    answer:
      "Business messaging automation at scale commonly uses the official WhatsApp Business Platform, directly or through an authorized provider. The appropriate setup depends on your requirements and eligibility.",
  },
  {
    question: "Can customers speak to a human?",
    answer:
      "Yes. Workflows can include escalation rules so customers can request human assistance or be transferred when the automation cannot confidently resolve their request.",
  },
];

export default function AIWhatsAppAutomationClient() {
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
            "radial-gradient(ellipse at 80% 18%, rgba(126,78,244,.22), transparent 40%), radial-gradient(ellipse at 12% 72%, rgba(52,120,246,.14), transparent 38%), #080B14",
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
                  icon={<AutoAwesomeRounded />}
                  label="AI & BUSINESS AUTOMATION"
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
                    maxWidth: 780,
                  }}
                >
                  Less repetitive work.{" "}
                  <Box
                    component="span"
                    sx={{
                      background: gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Smarter conversations.
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
                  Turn repetitive enquiries into streamlined workflows with
                  AI assistants, WhatsApp Business automation, automated
                  follow-ups, and integrations designed around how your
                  business operates.
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
                    Discuss Your Automation
                  </Button>

                  <Button
                    component={Link}
                    href="#automation-services"
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
                    Explore Solutions
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={2.5}
                  sx={{ mt: 4 }}
                >
                  {[
                    "Designed for your workflows",
                    "Human handoff options",
                    "Connected business tools",
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

            {/* AUTOMATION CONCEPT PANEL */}
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
                      <AutoAwesomeRounded sx={{ fontSize: 27 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#A7B0C5", fontSize: 13 }}>
                        Example customer journey
                      </Typography>
                      <Typography sx={{ fontWeight: 750, fontSize: 20 }}>
                        Automated workflow
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack spacing={2}>
                    {[
                      {
                        step: "01",
                        title: "Customer sends an enquiry",
                        detail: "A customer contacts your business",
                        icon: <ForumRounded />,
                        color: "#7CA8FF",
                      },
                      {
                        step: "02",
                        title: "AI assists with the response",
                        detail: "Provides relevant information",
                        icon: <PsychologyRounded />,
                        color: "#B69AFF",
                      },
                      {
                        step: "03",
                        title: "Lead details are organized",
                        detail: "Captures needs and routes the enquiry",
                        icon: <HubRounded />,
                        color: "#79D9CE",
                      },
                      {
                        step: "04",
                        title: "Follow-up or human handoff",
                        detail: "Moves the conversation forward",
                        icon: <TaskAltRounded />,
                        color: "#FFCA86",
                      },
                    ].map((item, index) => (
                      <Box key={item.step}>
                        <Stack
                          direction="row"
                          spacing={1.5}
                          alignItems="center"
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: "rgba(255,255,255,.035)",
                            border: "1px solid rgba(255,255,255,.07)",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: 42,
                              height: 42,
                              display: "grid",
                              placeItems: "center",
                              borderRadius: 2.5,
                              color: item.color,
                              bgcolor: `${item.color}15`,
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              sx={{ fontSize: 13, fontWeight: 750 }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                mt: 0.5,
                                color: "#9EAAC2",
                                fontSize: 11,
                                lineHeight: 1.7,
                              }}
                            >
                              {item.detail}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              color: "#66728B",
                              fontSize: 11,
                              fontWeight: 800,
                            }}
                          >
                            {item.step}
                          </Typography>
                        </Stack>
                        {index < 3 && (
                          <Box
                            sx={{
                              ml: 4.5,
                              height: 15,
                              width: 1,
                              bgcolor: "rgba(153,167,255,.25)",
                            }}
                          />
                        )}
                      </Box>
                    ))}
                  </Stack>

                  <Box
                    sx={{
                      mt: 2.5,
                      p: 2,
                      borderRadius: 3,
                      background:
                        "linear-gradient(120deg, rgba(52,120,246,.13), rgba(152,88,239,.13))",
                      border: "1px solid rgba(153,130,255,.16)",
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <BoltRounded
                        sx={{ color: "#B9A9FF", fontSize: 27 }}
                      />
                      <Typography
                        sx={{
                          color: "#D7DDF0",
                          fontSize: 12,
                          lineHeight: 1.7,
                        }}
                      >
                        One connected journey, with clear escalation paths
                        when human support is needed.
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box
        component="section"
        id="automation-services"
        sx={sectionSx}
      >
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
              WHAT WE AUTOMATE
            </Typography>
            <Typography
              component="h2"
              sx={{
                ...headingSx,
                textAlign: "center",
                maxWidth: 820,
              }}
            >
              Practical automation for everyday business tasks
            </Typography>
            <Typography
              sx={{
                maxWidth: 720,
                color: "#A7B0C5",
                textAlign: "center",
                lineHeight: 1.9,
              }}
            >
              Bring conversations, customer enquiries, and repetitive
              processes into workflows that are easier to manage.
            </Typography>
          </Stack>

          <Grid container spacing={2.5}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.number}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
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

      {/* BUSINESS BENEFITS */}
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
                BUILT AROUND YOUR BUSINESS
              </Typography>

              <Typography component="h2" sx={{ ...headingSx, mt: 2 }}>
                Automate the routine. Keep people in control.
              </Typography>

              <Typography
                sx={{ mt: 2.5, color: "#A7B0C5", lineHeight: 1.9 }}
              >
                Good automation is more than sending automatic replies. It
                connects the right information, actions, and people while
                preserving a clear path to human assistance.
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
                Plan your workflow
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                {[
                  {
                    title: "Respond more consistently",
                    text: "Use approved information and structured responses for common enquiries.",
                    icon: <ForumRounded />,
                  },
                  {
                    title: "Organize incoming leads",
                    text: "Capture relevant details and direct requests to the appropriate team.",
                    icon: <HubRounded />,
                  },
                  {
                    title: "Connect existing tools",
                    text: "Reduce manual handoffs by integrating supported business systems.",
                    icon: <SyncAltRounded />,
                  },
                  {
                    title: "Escalate when necessary",
                    text: "Provide a human handoff for complex, uncertain, or sensitive requests.",
                    icon: <SupportAgentRounded />,
                  },
                ].map((item) => (
                  <Box
                    key={item.title}
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
                        minWidth: 46,
                        height: 46,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 2.5,
                        color: "#C3B7FF",
                        bgcolor: "rgba(126,104,255,.13)",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: 17, fontWeight: 750 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.8,
                          color: "#A7B0C5",
                          lineHeight: 1.8,
                          fontSize: 14,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* IMPLEMENTATION PROCESS */}
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
              From idea to connected workflow
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
            Learn how AI and messaging automation can fit your business.
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
                sx={{
                  px: 2.5,
                  pb: 3,
                  color: "#A7B0C5",
                  lineHeight: 1.9,
                }}
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
              Ready to make your business work smarter?
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
              Tell us about your customer journey and repetitive tasks.
              Let's explore an AI and WhatsApp automation solution suited to
              your business needs.
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
              Let's Discuss Your Project
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
