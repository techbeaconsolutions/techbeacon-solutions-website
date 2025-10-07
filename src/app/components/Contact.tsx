"use client";

import { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Alert,
  Fab,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setOpen(true);
          formRef.current?.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
        }
      );
  };

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: "#f9fbfd" }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700} align="center">
            Get In{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </Box>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Ready to transform your business with cutting-edge technology? Let’s
            discuss your project and create something amazing together.
          </Typography>
        </motion.div>

        {/* Info Cards */}
        <Grid container spacing={4} mb={6}>
          {[
            {
              icon: <EmailIcon fontSize="large" sx={{ color: "#0871da" }} />,
              title: "Email Us",
              value: (
                <Typography
                  component="a"
                  href="mailto:techbeacon.solutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#0871da",
                      textDecoration: "underline",
                    },
                  }}
                >
                  inquiry@techbeacon.com
                </Typography>
              ),
              subtitle: "We’ll respond within 24 hours",
            },
            {
              icon: <WhatsAppIcon fontSize="large" sx={{ color: "#06c3e0" }} />,
              title: "WhatsApp",
              value: (
                <Button
                  component="a"
                  href="https://api.whatsapp.com/send?phone=919209652754&text=Hi%20Techbeacon%20Team,%20I%20want%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    backgroundColor: "#25D366",
                    "&:hover": { backgroundColor: "#1ebe57" },
                    mt: 2,
                  }}
                >
                  Quick Connect
                </Button>
              ),
              subtitle:
                "Get instant responses to your queries. Chat with our team directly on WhatsApp.",
            },
            {
              icon: <LocationOnIcon fontSize="large" sx={{ color: "#0871da" }} />,
              title: "Visit Us",
              value: (
                <Typography
                  component="a"
                  href="https://www.google.com/maps/place/Pune,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#0871da",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Pune, Maharashtra
                </Typography>
              ),
              subtitle: "IT Hub of India",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>
                <Box sx={{ my: 1 }}>{item.value}</Box>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 6,
              borderRadius: 3,
              mx: "auto",
              mb: 6,
              bgcolor: "#fcfdfd",
              maxWidth: 600,
            }}
          >
            <Typography variant="h5" fontWeight={700} align="center" gutterBottom>
              Start Your{" "}
              <Box component="span" sx={{ color: "#06c3e0" }}>
                Project
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mb: 5 }}
            >
              Fill out the form below and we&apos;ll get back to you shortly
            </Typography>

            {/* ✅ FORM START */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField name="name" label="Name" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="email" label="Email" type="email" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="phone" label="Phone" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="company" label="Company" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="title" label="Subject / Title" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Project Details"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                </Grid>

                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.4,
                      borderRadius: 2,
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                      background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
            {/* ✅ FORM END */}
          </Paper>
        </motion.div>

        {/* Snackbar Notifications */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Message sent successfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Failed to send message. Try again later.
          </Alert>
        </Snackbar>

        {/* ✅ Floating WhatsApp Button (Mobile Only) */}
        {isMobile && (
          <Fab
            component="a"
            href="https://api.whatsapp.com/send?phone=919209652754&text=Hi%20techbeacon%20Team,%20I%20want%20to%20discuss%20a%20new%20project." target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              backgroundColor: "#25D366",
              color: "white",
              zIndex: 2000,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              animation: "pulse 1.5s infinite",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.08)" },
                "100%": { transform: "scale(1)" },
              },
              "&:hover": {
                backgroundColor: "#1ebe57",
                boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 28 }} />
          </Fab>
        )}
      </Container>
    </Box>
  );
}
