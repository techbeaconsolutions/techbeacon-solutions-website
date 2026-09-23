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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
        position: "relative",
        overflow: "hidden",

        py: {
          xs: 10,
          md: 14,
        },

        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 70%)",
      }}
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW - TOP LEFT */}
      {/* ================================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 430,
          height: 430,

          borderRadius: "50%",

          top: -190,
          left: -180,

          background:
            "radial-gradient(circle, rgba(8,113,218,0.18), transparent 70%)",

          filter: "blur(35px)",

          pointerEvents: "none",

          animation:
            "contactGlowLeft 10s ease-in-out infinite",

          "@keyframes contactGlowLeft": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },

            "50%": {
              transform: "translate(90px, 70px)",
            },
          },
        }}
      />

      {/* ================================================= */}
      {/* BACKGROUND GLOW - BOTTOM RIGHT */}
      {/* ================================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 500,
          height: 500,

          borderRadius: "50%",

          bottom: -240,
          right: -220,

          background:
            "radial-gradient(circle, rgba(12,198,233,0.13), transparent 70%)",

          filter: "blur(40px)",

          pointerEvents: "none",

          animation:
            "contactGlowRight 12s ease-in-out infinite",

          "@keyframes contactGlowRight": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },

            "50%": {
              transform: "translate(-80px, -60px)",
            },
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: {
                xs: 6,
                md: 8,
              },
            }}
          >
            {/* Small Label */}

            <Typography
              sx={{
                display: "inline-block",

                mb: 2,

                fontSize: "0.8rem",
                fontWeight: 700,

                letterSpacing: "0.16em",

                textTransform: "uppercase",

                color: "#0cc6e9",
              }}
            >
              Get In Touch
            </Typography>

            {/* Heading */}

            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "2.2rem",
                  sm: "2.8rem",
                  md: "3.4rem",
                },

                fontWeight: 800,

                lineHeight: 1.1,

                color: "#ffffff",
              }}
            >
              Let's Build Something{" "}

              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #0871da, #0cc6e9, #0871da)",

                  backgroundSize:
                    "200% auto",

                  WebkitBackgroundClip:
                    "text",

                  WebkitTextFillColor:
                    "transparent",

                  animation:
                    "contactGradient 6s linear infinite",

                  "@keyframes contactGradient": {
                    "0%": {
                      backgroundPosition:
                        "0% center",
                    },

                    "100%": {
                      backgroundPosition:
                        "200% center",
                    },
                  },
                }}
              >
                Powerful
              </Box>
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                mt: 2,

                mx: "auto",

                maxWidth: 700,

                color:
                  "rgba(255,255,255,0.68)",

                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },

                lineHeight: 1.8,
              }}
            >
              Have an idea? A startup? Or need to scale your business
              digitally? Let's discuss your project and turn your vision
              into reality.
            </Typography>
          </Box>
        </motion.div>

        {/* ================================================= */}
        {/* CONTACT INFO CARDS */}
        {/* ================================================= */}

        <Grid
          container
          spacing={3}
          sx={{
            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          {[
            {
              icon: (
                <EmailIcon
                  sx={{
                    fontSize: 38,
                    color: "#0cc6e9",
                  }}
                />
              ),

              title: "Email Us",

              value: "inquiry@techbeacon.com",

              link: "mailto:inquiry@techbeacon.com",

              subtitle:
                "We respond to your enquiry as soon as possible",
            },

            {
              icon: (
                <WhatsAppIcon
                  sx={{
                    fontSize: 38,
                    color: "#25D366",
                  }}
                />
              ),

              title: "WhatsApp",

              value: "Quick Connect",

              link:
                "https://api.whatsapp.com/send?phone=919209652754&text=Hi%20Techbeacon%20Team,%20I%20want%20to%20discuss%20a%20new%20project.",

              subtitle:
                "Quick way to discuss your project",
            },

            {
              icon: (
                <LocationOnIcon
                  sx={{
                    fontSize: 38,
                    color: "#0cc6e9",
                  }}
                />
              ),

              title: "Location",

              value: "Pune, Maharashtra",

              link:
                "https://www.google.com/maps/place/Pune,+Maharashtra",

              subtitle:
                "Serving businesses across India",
            },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                style={{
                  height: "100%",
                }}
              >
                <Paper
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    height: "100%",

                    minHeight: 190,

                    p: {
                      xs: 3,
                      md: 3.5,
                    },

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    textAlign: "center",

                    borderRadius: 4,

                    textDecoration: "none",

                    background:
                      "linear-gradient(145deg, rgba(8,113,218,0.10), rgba(12,198,233,0.035))",

                    border:
                      "1px solid rgba(12,198,233,0.15)",

                    backdropFilter:
                      "blur(14px)",

                    WebkitBackdropFilter:
                      "blur(14px)",

                    transition:
                      "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",

                    "&:hover": {
                      transform:
                        "translateY(-7px)",

                      borderColor:
                        "rgba(12,198,233,0.42)",

                      boxShadow:
                        "0 18px 45px rgba(8,113,218,0.18)",
                    },
                  }}
                >
                  {/* Icon */}

                  <Box
                    sx={{
                      width: 64,
                      height: 64,

                      borderRadius: "18px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      mb: 2,

                      background:
                        "linear-gradient(135deg, rgba(8,113,218,0.16), rgba(12,198,233,0.10))",

                      border:
                        "1px solid rgba(12,198,233,0.16)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Title */}

                  <Typography
                    sx={{
                      fontSize: "1.1rem",

                      fontWeight: 700,

                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Value */}

                  <Typography
                    sx={{
                      mt: 0.8,

                      fontWeight: 600,

                      color: "#0cc6e9",

                      fontSize: "0.95rem",
                    }}
                  >
                    {item.value}
                  </Typography>

                  {/* Subtitle */}

                  <Typography
                    sx={{
                      mt: 0.8,

                      color:
                        "rgba(255,255,255,0.58)",

                      fontSize: "0.8rem",

                      lineHeight: 1.5,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* ================================================= */}
        {/* CONTACT FORM */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <Paper
            sx={{
              p: {
                xs: 3,
                sm: 4,
                md: 5,
              },

              borderRadius: 5,

              mx: "auto",

              maxWidth: 760,

              background:
                "linear-gradient(145deg, rgba(8,113,218,0.09), rgba(12,198,233,0.035))",

              border:
                "1px solid rgba(12,198,233,0.16)",

              backdropFilter:
                "blur(15px)",

              WebkitBackdropFilter:
                "blur(15px)",

              boxShadow:
                "0 20px 60px rgba(0,0,0,0.18)",
            }}
          >
            {/* Form Heading */}

            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,

                textAlign: "center",

                color: "#ffffff",

                mb: 1.5,
              }}
            >
              Get Free Consultation
            </Typography>

            <Typography
              align="center"
              sx={{
                color:
                  "rgba(255,255,255,0.65)",

                mb: 4,

                fontSize: "0.95rem",
              }}
            >
              Tell us a little about your project and we'll get back to you.
            </Typography>

            {/* Form */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Grid
                container
                spacing={2.5}
              >
                {/* Name / Email / Phone / Company */}

                {[
                  "Name",
                  "Email",
                  "Phone",
                  "Company",
                ].map((label) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={label}
                  >
                    <TextField
                      name={label.toLowerCase()}
                      label={label}
                      type={
                        label === "Email"
                          ? "email"
                          : "text"
                      }
                      fullWidth
                      required={
                        label === "Name" ||
                        label === "Email"
                      }
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root":
                          {
                            borderRadius: 2.5,

                            background:
                              "rgba(255,255,255,0.045)",

                            color: "#ffffff",

                            transition:
                              "all 0.25s ease",

                            "& fieldset": {
                              borderColor:
                                "rgba(255,255,255,0.18)",
                            },

                            "&:hover fieldset":
                              {
                                borderColor:
                                  "rgba(12,198,233,0.45)",
                              },

                            "&.Mui-focused fieldset":
                              {
                                borderColor:
                                  "#0cc6e9",

                                borderWidth: 1,
                              },
                          },

                        "& .MuiInputLabel-root":
                          {
                            color:
                              "rgba(255,255,255,0.65)",
                          },

                        "& .MuiInputLabel-root.Mui-focused":
                          {
                            color:
                              "#0cc6e9",
                          },

                        "& input": {
                          color: "#ffffff",
                        },

                        "& input::placeholder":
                          {
                            color:
                              "rgba(255,255,255,0.4)",
                          },
                      }}
                    />
                  </Grid>
                ))}

                {/* Project Details */}

                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Project Details"
                    multiline
                    rows={5}
                    fullWidth
                    required
                    sx={{
                      "& .MuiInputLabel-root":
                        {
                          color:
                            "rgba(255,255,255,0.65)",
                        },

                      "& .MuiInputLabel-root.Mui-focused":
                        {
                          color:
                            "#0cc6e9",
                        },

                      "& .MuiOutlinedInput-root":
                        {
                          borderRadius: 2.5,

                          background:
                            "rgba(255,255,255,0.045)",

                          "& fieldset": {
                            borderColor:
                              "rgba(255,255,255,0.18)",
                          },

                          "&:hover fieldset":
                            {
                              borderColor:
                                "rgba(12,198,233,0.45)",
                            },

                          "&.Mui-focused fieldset":
                            {
                              borderColor:
                                "#0cc6e9",
                            },
                        },

                      "& textarea": {
                        color: "#ffffff",
                      },
                    }}
                  />
                </Grid>

                {/* Submit Button */}

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
                    disabled={loading}
                    endIcon={
                      !loading ? (
                        <ArrowForwardIcon />
                      ) : undefined
                    }
                    sx={{
                      py: 1.6,

                      borderRadius: 3,

                      fontWeight: 700,

                      color: "#ffffff",

                      fontSize: "1rem",

                      textTransform: "none",

                      background:
                        "linear-gradient(90deg, #0871da, #0cc6e9)",

                      boxShadow:
                        "0 10px 30px rgba(8,113,218,0.22)",

                      transition:
                        "all 0.3s ease",

                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #065bb5, #0aa6c4)",

                        transform:
                          "translateY(-2px)",

                        boxShadow:
                          "0 14px 35px rgba(8,113,218,0.32)",
                      },

                      "&:active": {
                        transform:
                          "scale(0.98)",
                      },

                      "&.Mui-disabled": {
                        color:
                          "rgba(255,255,255,0.7)",

                        background:
                          "linear-gradient(90deg, #075eaf, #089eb5)",
                      },
                    }}
                  >
                    {loading
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>

        {/* ================================================= */}
        {/* SUCCESS SNACKBAR */}
        {/* ================================================= */}

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            severity="success"
            onClose={() => setOpen(false)}
            variant="filled"
          >
            Message sent successfully!
          </Alert>
        </Snackbar>

        {/* ================================================= */}
        {/* ERROR SNACKBAR */}
        {/* ================================================= */}

        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            severity="error"
            onClose={() => setError(false)}
            variant="filled"
          >
            Failed to send message. Try again later.
          </Alert>
        </Snackbar>

        {/* ================================================= */}
        {/* MOBILE WHATSAPP BUTTON */}
        {/* ================================================= */}

        {isMobile && (
          <Fab
            component="a"
            href="https://api.whatsapp.com/send?phone=919209652754"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact TechBeacon on WhatsApp"
            sx={{
              position: "fixed",

              bottom: 80,
              right: 20,

              width: 56,
              height: 56,

              backgroundColor:
                "#25D366",

              color: "#ffffff",

              zIndex: 2000,

              boxShadow:
                "0 8px 25px rgba(0,0,0,0.35)",

              transition:
                "all 0.3s ease",

              "&:hover": {
                backgroundColor:
                  "#1ebe57",

                transform:
                  "translateY(-3px) scale(1.04)",

                boxShadow:
                  "0 12px 30px rgba(37,211,102,0.3)",
              },
            }}
          >
            <WhatsAppIcon
              sx={{
                fontSize: 28,
              }}
            />
          </Fab>
        )}
      </Container>
    </Box>
  );
}