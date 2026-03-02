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
  const isMobile = useMediaQuery("(max-width:768px)");
const [loading, setLoading] = useState(false); // 👈 ADD THIS

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || loading) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setOpen(true);
          formRef.current?.reset();
          setLoading(false);
        },
        () => {
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 70%)",
      }}
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            sx={{ color: "white" }}
          >
            Let’s Build Something{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Powerful
            </Box>
          </Typography>

          <Typography
            align="center"
            sx={{
              mt: 2,
              mb: 8,
              maxWidth: 700,
              mx: "auto",
              color: "rgba(255,255,255,0.75)",
              fontSize: 16,
            }}
          >
            Have an idea? A startup? Or need to scale your business digitally?
            Let’s discuss your project and turn your vision into reality.
          </Typography>
        </motion.div>

        {/* Info Cards */}
        <Grid container spacing={4} mb={8}>
          {[
            {
              icon: <EmailIcon sx={{ fontSize: 40, color: "#0cc6e9" }} />,
              title: "Email Us",
              value: "inquiry@techbeacon.com",
              link: "mailto:inquiry@techbeacon.com",
              subtitle: "We respond within 24 hours",
            },
            {
              icon: <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />,
              title: "WhatsApp",
              value: "Quick Connect",
              link:
                "https://api.whatsapp.com/send?phone=919209652754&text=Hi%20Techbeacon%20Team,%20I%20want%20to%20discuss%20a%20new%20project.",
              subtitle: "Instant discussion & faster response",
            },
            {
              icon: <LocationOnIcon sx={{ fontSize: 40, color: "#a855f7" }} />,
              title: "Location",
              value: "Pune, Maharashtra",
              link:
                "https://www.google.com/maps/place/Pune,+Maharashtra",
              subtitle: "Serving clients across India",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  textDecoration: "none",
                  background: "#161738",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <Box mb={2}>{item.icon}</Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "white" }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 500,
                    color: "#0cc6e9",
                  }}
                >
                  {item.value}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "rgba(255,255,255,0.6)" }}
                >
                  {item.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            sx={{
              p: 6,
              borderRadius: 4,
              mx: "auto",
              maxWidth: 650,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              align="center"
              sx={{ color: "white", mb: 2 }}
            >
              Get Free Consultation
            </Typography>

            <Typography
              align="center"
              sx={{ color: "rgba(255,255,255,0.7)", mb: 5 }}
            >
              Fill in your details and our team will contact you shortly.
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {["Name", "Email", "Phone", "Company"].map((label, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <TextField
                      name={label.toLowerCase()}
                      label={label}
                      type={label === "Email" ? "email" : "text"}
                      fullWidth
                      required={label === "Name" || label === "Email"}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          background: "rgba(255,255,255,0.05)",
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255,255,255,0.7)",
                        },
                        "& input": {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Project Details"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "rgba(255,255,255,0.7)", // default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#0cc6e9", // color when focused (optional highlight)
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        background: "rgba(255,255,255,0.05)",
                        "& fieldset": {
                          borderColor: "rgba(255,255,255,0.3)",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgba(255,255,255,0.6)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#0cc6e9",
                        },
                      },
                      "& textarea": {
                        color: "white", // text color
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      color: "white",
                      fontSize: "1rem",
                      transition: "all 0.2s ease",
                      background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                      "&:hover": {
                        background: "linear-gradient(90deg,#065bb5,#0aa6c4)",
                        transform: "translateY(-2px)",
                      },
                      "&:active": {
                        transform: "scale(0.97)",
                      },
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>

        {/* Snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success">Message sent successfully!</Alert>
        </Snackbar>

        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
        >
          <Alert severity="error">
            Failed to send message. Try again later.
          </Alert>
        </Snackbar>

        {/* Floating WhatsApp Button */}
        {isMobile && (
          <Fab
            component="a"
            href="https://api.whatsapp.com/send?phone=919209652754"
            target="_blank"
            sx={{
              position: "fixed",
              bottom: 80,
              right: 20,
              backgroundColor: "#25D366",
              color: "white",
              zIndex: 2000,
              boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "#1ebe57" },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 28 }} />
          </Fab>
        )}
      </Container>
    </Box>
  );
}