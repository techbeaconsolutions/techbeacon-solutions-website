
"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowOutward,
  CheckCircleOutline,
  EmailOutlined,
  LanguageOutlined,
  LocationOnOutlined,
  PhoneOutlined,
  SendRounded,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const contactDetails = [
  {
    icon: <EmailOutlined />,
    title: "Email us",
    value: "Let's discuss your project",
    link: "mailto:hello@techbeaconsolutions.com",
    action: "Send an email",
  },
  {
    icon: <PhoneOutlined />,
    title: "Call or WhatsApp",
    value: "Let's talk about your goals",
    link: "https://wa.me/919209652754?text=Hi%20TechBeacon%20Solutions!%20I'd%20like%20to%20know%20how%20you%20can%20help%20my%20business%20grow%20through%20website%20development%2C%20digital%20marketing%2C%20SEO%2C%20or%20AI%20automation.%20Could%20we%20discuss%20my%20requirements?",
    action: "Start a conversation",
  },
  {
    icon: <LanguageOutlined />,
    title: "Our website",
    value: "Explore TechBeacon Solutions",
    link: "https://techbeaconsolutions.com/",
    action: "Visit website",
  },
];

const services = [
  "Website Development",
  "Custom Software Development",
  "Mobile App Development",
  "Digital Marketing",
  "SEO & Local SEO",
  "Google Business Profile",
  "AI & Business Automation",
  "Branding & Design",
  "Other",
];

const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not decided yet",
];

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.035)",
    color: "#F5F7FF",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.13)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(139,124,255,0.65)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8B7CFF",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#9DA8C3",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#B5ABFF",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#8490AC",
    opacity: 1,
  },
  "& .MuiSelect-icon": {
    color: "#AEB8D0",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: "2px",
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "The contact form is not configured yet. Please email us directly while we set it up.",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service,
          budget: formData.budget || "Not specified",
          message: formData.message,
          reply_to: formData.email,
        },
        { publicKey },
      );

      setStatus({
        type: "success",
        message:
          "Thank you for contacting TechBeacon Solutions! Your inquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus({
        type: "error",
        message:
          "We couldn't submit your inquiry right now. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        color: "#F5F7FF",
        background:
          "radial-gradient(ellipse at 8% 5%, rgba(76,60,180,0.18), transparent 38%), radial-gradient(ellipse at 95% 35%, rgba(34,113,219,0.13), transparent 35%), #080B16",
      }}
    >
      {/* Hero section */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 9, md: 14 },
          pb: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ maxWidth: 850, mx: "auto", textAlign: "center" }}
          >
            <Chip
              icon={<SupportAgentOutlined sx={{ fontSize: 17 }} />}
              label="LET'S BUILD SOMETHING GREAT"
              sx={{
                mb: 3,
                px: 1,
                color: "#C3BBFF",
                border: "1px solid rgba(139,124,255,0.28)",
                backgroundColor: "rgba(139,124,255,0.09)",
                fontWeight: 700,
                letterSpacing: "1.2px",
                fontSize: 11,
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.7rem", sm: "3.8rem", md: "5rem" },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-2.5px",
              }}
            >
              Have an idea?
              <Box
                component="span"
                sx={{
                  display: "block",
                  mt: 1,
                  background:
                    "linear-gradient(100deg, #9E91FF 10%, #5EB8FF 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's make it real.
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                mx: "auto",
                mt: 3,
                color: "#A4ADC4",
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.9,
              }}
            >
              Tell us what you're looking to build or improve. Whether it's a
              website, software solution, or digital marketing strategy, we're
              ready to explore how we can help your business grow.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact details and inquiry form */}
      <Container maxWidth="lg" sx={{ pb: { xs: 9, md: 14 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* Left column */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  color: "#A99DFF",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "2px",
                  mb: 1.5,
                }}
              >
                GET IN TOUCH
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  lineHeight: 1.2,
                  fontWeight: 750,
                  letterSpacing: "-1px",
                  mb: 2,
                }}
              >
                Let's start a conversation.
              </Typography>

              <Typography
                sx={{
                  color: "#9DA8C0",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                Share your goals with us. We'll understand your requirements
                and help you identify the right next steps for your project.
              </Typography>

              <Stack spacing={2}>
                {contactDetails.map((detail) => (
                  <Paper
                    key={detail.title}
                    component="a"
                    href={detail.link}
                    target={
                      detail.link.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      detail.link.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    elevation={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2.2,
                      textDecoration: "none",
                      color: "inherit",
                      backgroundColor: "rgba(255,255,255,0.035)",
                      border: "1px solid rgba(255,255,255,0.085)",
                      borderRadius: "16px",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "rgba(139,124,255,0.5)",
                        backgroundColor: "rgba(139,124,255,0.065)",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "13px",
                        color: "#B6AAFF",
                        backgroundColor: "rgba(139,124,255,0.13)",
                        "& svg": { fontSize: 24 },
                      }}
                    >
                      {detail.icon}
                    </Box>

                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.96rem",
                          mb: 0.4,
                        }}
                      >
                        {detail.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#9DA8C0",
                          fontSize: "0.85rem",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {detail.value}
                      </Typography>
                    </Box>

                    <ArrowOutward
                      sx={{ color: "#8D83DC", fontSize: 20, flexShrink: 0 }}
                    />
                  </Paper>
                ))}
              </Stack>

              <Paper
                elevation={0}
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: "16px",
                  border: "1px solid rgba(105,178,255,0.18)",
                  background:
                    "linear-gradient(135deg, rgba(51,105,190,0.13), rgba(117,83,218,0.10))",
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <LocationOnOutlined
                    sx={{ color: "#7DBBFF", mt: 0.2 }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                      Serving businesses across India
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4ADC4",
                        fontSize: "0.88rem",
                        lineHeight: 1.8,
                      }}
                    >
                      We work with businesses to build digital experiences and
                      practical technology solutions for their needs.
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>

          {/* Right column: inquiry form */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 4, md: 4.5 },
                  borderRadius: { xs: "20px", md: "24px" },
                  border: "1px solid rgba(255,255,255,0.11)",
                  background:
                    "linear-gradient(145deg, rgba(21,27,47,0.96), rgba(13,17,31,0.98))",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontWeight: 750,
                    fontSize: { xs: "1.65rem", md: "2rem" },
                    letterSpacing: "-0.7px",
                    mb: 1,
                  }}
                >
                  Tell us about your project
                </Typography>

                <Typography
                  sx={{
                    color: "#9DA8C0",
                    fontSize: "0.93rem",
                    lineHeight: 1.8,
                    mb: 3.5,
                  }}
                >
                  Fill in the details below and we'll have the information
                  needed to understand your requirements.
                </Typography>

                {status && (
                  <Alert
                    severity={status.type}
                    sx={{
                      mb: 3,
                      borderRadius: "12px",
                      overflowWrap: "anywhere",
                    }}
                    onClose={() => setStatus(null)}
                  >
                    {status.message}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        sx={inputStyles}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        sx={inputStyles}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your contact number"
                        autoComplete="tel"
                        inputProps={{ maxLength: 20 }}
                        sx={inputStyles}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        select
                        label="Service you're interested in"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        sx={inputStyles}
                      >
                        {services.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        label="Estimated project budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        sx={inputStyles}
                      >
                        {budgets.map((budget) => (
                          <MenuItem key={budget} value={budget}>
                            {budget}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        label="Tell us about your project"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What would you like to build? What goals are you trying to achieve?"
                        inputProps={{ maxLength: 3000 }}
                        helperText={`${formData.message.length}/3000 characters`}
                        sx={inputStyles}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading}
                        endIcon={
                          loading ? (
                            <CircularProgress
                              size={18}
                              color="inherit"
                            />
                          ) : (
                            <SendRounded />
                          )
                        }
                        sx={{
                          py: 1.7,
                          mt: 0.5,
                          borderRadius: "12px",
                          textTransform: "none",
                          fontSize: "1rem",
                          fontWeight: 750,
                          color: "#FFFFFF",
                          background:
                            "linear-gradient(100deg, #635BDB, #347DE0)",
                          boxShadow: "0 8px 26px rgba(76,90,220,0.22)",
                          "&:hover": {
                            background:
                              "linear-gradient(100deg, #756CEB, #4891F1)",
                            boxShadow:
                              "0 12px 32px rgba(76,90,220,0.32)",
                          },
                          "&.Mui-disabled": {
                            color: "rgba(255,255,255,0.7)",
                            background: "rgba(99,91,219,0.45)",
                          },
                        }}
                      >
                        {loading ? "Submitting your inquiry..." : "Send project inquiry"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                  sx={{ mt: 2.5 }}
                >
                  <CheckCircleOutline
                    sx={{
                      fontSize: 18,
                      color: "#8E9BB8",
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#8E9BB8",
                      fontSize: "0.78rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Your information will be used to respond to your inquiry
                    and discuss your project requirements.
                  </Typography>
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
