"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/techbeaconsolutions/",
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/techbeaconsolutions",
      icon: <FacebookIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/techbeacon-solutions/",
      icon: <LinkedInIcon />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/message/TVELYTTOQ6PEA1",
      icon: <WhatsAppIcon />,
    },
  ];

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",

        pt: {
          xs: 9,
          md: 11,
        },

        pb: 4,

        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 70%)",

        color: "#ffffff",
      }}
    >
      {/* ================================================= */}
      {/* TOP GLOW */}
      {/* ================================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 450,
          height: 450,

          borderRadius: "50%",

          top: -300,
          left: "50%",

          transform: "translateX(-50%)",

          background:
            "radial-gradient(circle, rgba(8,113,218,0.16), transparent 70%)",

          filter: "blur(35px)",

          pointerEvents: "none",

          animation:
            "footerGlow 10s ease-in-out infinite",

          "@keyframes footerGlow": {
            "0%, 100%": {
              transform:
                "translateX(-50%) scale(1)",
            },

            "50%": {
              transform:
                "translateX(-50%) scale(1.15)",
            },
          },
        }}
      />

      {/* ================================================= */}
      {/* BOTTOM CYAN GLOW */}
      {/* ================================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 400,
          height: 300,

          borderRadius: "50%",

          bottom: -220,
          right: -150,

          background:
            "radial-gradient(circle, rgba(12,198,233,0.10), transparent 70%)",

          filter: "blur(40px)",

          pointerEvents: "none",
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
        {/* MAIN FOOTER */}
        {/* ================================================= */}

        <Grid
          container
          spacing={{
            xs: 5,
            md: 6,
          }}
        >
          {/* ================================================= */}
          {/* COMPANY INFO */}
          {/* ================================================= */}

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              {/* Logo */}

              <Box
                sx={{
                  mb: 2.5,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/favicon.png"
                  alt="TechBeacon Solutions Logo"
                  sx={{
                    height: 52,
                    width: "auto",
                    display: "block",
                  }}
                />
              </Box>

              {/* Company name */}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 1.5,
                  color: "#ffffff",
                }}
              >
                TechBeacon Solutions
              </Typography>

              {/* Description */}

              <Typography
                variant="body2"
                sx={{
                  color:
                    "rgba(255,255,255,0.62)",

                  lineHeight: 1.8,

                  maxWidth: 300,
                }}
              >
                Your digital growth partner for websites, mobile apps,
                custom software, AI automation, SEO, and digital marketing.
              </Typography>

              {/* Small accent */}

              <Box
                sx={{
                  mt: 3,

                  width: 55,
                  height: 3,

                  borderRadius: 10,

                  background:
                    "linear-gradient(90deg, #0871da, #0cc6e9)",
                }}
              />
            </motion.div>
          </Grid>

          {/* ================================================= */}
          {/* QUICK LINKS */}
          {/* ================================================= */}

          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#ffffff",
                }}
              >
                Quick Links
              </Typography>

              <Box>
                {quickLinks.map((item, index) => (
                  <Box
                    key={item.label}
                    sx={{
                      mb: 1.4,
                    }}
                  >
                    {item.href.startsWith("#") ? (
                      <Link
                        component="button"
                        underline="none"
                        onClick={() =>
                          handleScroll(item.href)
                        }
                        sx={{
                          color:
                            "rgba(255,255,255,0.62)",

                          transition:
                            "all 0.25s ease",

                          cursor: "pointer",

                          background: "none",

                          border: 0,

                          padding: 0,

                          fontSize: "0.9rem",

                          fontFamily: "inherit",

                          "&:hover": {
                            color: "#0cc6e9",

                            transform:
                              "translateX(5px)",
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        underline="none"
                        sx={{
                          color:
                            "rgba(255,255,255,0.62)",

                          transition:
                            "all 0.25s ease",

                          fontSize: "0.9rem",

                          "&:hover": {
                            color: "#0cc6e9",

                            transform:
                              "translateX(5px)",
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* ================================================= */}
          {/* CONTACT */}
          {/* ================================================= */}

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#ffffff",
                }}
              >
                Contact
              </Typography>

              {/* Email */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 2.2,
                }}
              >
                <EmailIcon
                  sx={{
                    mr: 1.3,
                    mt: 0.1,
                    color: "#0cc6e9",
                    fontSize: 20,
                  }}
                />

                <Link
                  href="mailto:hello@techbeacon.com"
                  underline="none"
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    fontSize: "0.88rem",

                    lineHeight: 1.5,

                    transition: "0.25s",

                    "&:hover": {
                      color: "#0cc6e9",
                    },
                  }}
                >
                  hello@techbeacon.com
                </Link>
              </Box>

              {/* Phone */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2.2,
                }}
              >
                <PhoneIcon
                  sx={{
                    mr: 1.3,
                    color: "#0cc6e9",
                    fontSize: 20,
                  }}
                />

                <Link
                  href="tel:+919209652754"
                  underline="none"
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    fontSize: "0.88rem",

                    transition: "0.25s",

                    "&:hover": {
                      color: "#0cc6e9",
                    },
                  }}
                >
                  +91-9209652754
                </Link>
              </Box>

              {/* Location */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <LocationOnIcon
                  sx={{
                    mr: 1.3,
                    color: "#0cc6e9",
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    fontSize: "0.88rem",

                    lineHeight: 1.5,
                  }}
                >
                  Pune, Maharashtra, India
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* ================================================= */}
          {/* SOCIAL MEDIA */}
          {/* ================================================= */}

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#ffffff",
                }}
              >
                Follow Us
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color:
                    "rgba(255,255,255,0.62)",

                  lineHeight: 1.7,

                  mb: 2.5,

                  maxWidth: 300,
                }}
              >
                Connect with TechBeacon Solutions on social media for
                updates, projects and digital growth tips.
              </Typography>

              {/* Social Icons */}

              <Box
                sx={{
                  display: "flex",
                  gap: 1,

                  flexWrap: "wrap",
                }}
              >
                {socialLinks.map(
                  (social) => (
                    <IconButton
                      key={social.label}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        width: 44,
                        height: 44,

                        color:
                          "rgba(255,255,255,0.7)",

                        backgroundColor:
                          "rgba(255,255,255,0.045)",

                        border:
                          "1px solid rgba(255,255,255,0.09)",

                        borderRadius: 2.5,

                        transition:
                          "all 0.3s ease",

                        "&:hover": {
                          color: "#ffffff",

                          background:
                            "linear-gradient(135deg, #0871da, #0cc6e9)",

                          borderColor:
                            "#0cc6e9",

                          transform:
                            "translateY(-4px)",

                          boxShadow:
                            "0 8px 20px rgba(8,113,218,0.25)",
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  )
                )}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  display: "block",

                  mt: 2,

                  color:
                    "rgba(255,255,255,0.42)",

                  lineHeight: 1.6,
                }}
              >
                Follow us for updates, projects & digital growth tips.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 9,
            },

            height: "1px",

            background:
              "linear-gradient(90deg, transparent, rgba(12,198,233,0.25), transparent)",
          }}
        />

        {/* ================================================= */}
        {/* BOTTOM BAR */}
        {/* ================================================= */}

        <Box
          sx={{
            pt: 3,

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color:
                "rgba(255,255,255,0.48)",

              fontSize: "0.8rem",
            }}
          >
            © {new Date().getFullYear()} TechBeacon Solutions. All rights
            reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color:
                  "rgba(255,255,255,0.38)",

                fontSize: "0.78rem",
              }}
            >
              Digital Solutions
            </Typography>

            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "#0cc6e9",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color:
                  "rgba(255,255,255,0.38)",

                fontSize: "0.78rem",
              }}
            >
              Web
            </Typography>

            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "#0cc6e9",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color:
                  "rgba(255,255,255,0.38)",

                fontSize: "0.78rem",
              }}
            >
              Apps
            </Typography>

            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "#0cc6e9",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color:
                  "rgba(255,255,255,0.38)",

                fontSize: "0.78rem",
              }}
            >
              AI
            </Typography>
          </Box>

          {/* Back to Top */}

          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              width: 38,
              height: 38,

              color: "#0cc6e9",

              border:
                "1px solid rgba(12,198,233,0.2)",

              background:
                "rgba(12,198,233,0.05)",

              transition:
                "all 0.3s ease",

              "&:hover": {
                color: "#ffffff",

                background:
                  "linear-gradient(135deg, #0871da, #0cc6e9)",

                borderColor:
                  "#0cc6e9",

                transform:
                  "translateY(-3px)",
              },
            }}
          >
            <ArrowUpwardIcon
              sx={{
                fontSize: 18,
              }}
            />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}