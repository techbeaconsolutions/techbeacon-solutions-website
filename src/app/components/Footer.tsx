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

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
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

  return (
    <Box
      sx={{
        pt: 10,
        pb: 5,
        background:
          "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1120 70%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* ================= COMPANY INFO ================= */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box mb={2}>
                <img
                  src="/favicon.png"
                  alt="TechBeacon Solutions Logo"
                  style={{
                    height: 50,
                    width: "auto",
                  }}
                />
              </Box>

              <Typography variant="h6" fontWeight={700} mb={2}>
                TechBeacon Solutions
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                  maxWidth: 300,
                }}
              >
                Your trusted digital growth partner for websites, mobile apps,
                digital marketing, AI automation, and scalable custom software
                solutions.
              </Typography>
            </motion.div>
          </Grid>

          {/* ================= QUICK LINKS ================= */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={700} mb={3}>
                Quick Links
              </Typography>

              {quickLinks.map((item, i) => (
                <Typography key={i} sx={{ mb: 1.2 }}>
                  {item.href.startsWith("#") ? (
                    <Link
                      component="button"
                      underline="none"
                      onClick={() => handleScroll(item.href)}
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        transition: "0.3s",
                        cursor: "pointer",
                        background: "none",
                        border: 0,
                        padding: 0,
                        fontSize: "inherit",
                        "&:hover": {
                          color: "#0cc6e9",
                          transform: "translateX(4px)",
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
                        color: "rgba(255,255,255,0.7)",
                        transition: "0.3s",
                        "&:hover": {
                          color: "#0cc6e9",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </Typography>
              ))}
            </motion.div>
          </Grid>

          {/* ================= CONTACT ================= */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={700} mb={3}>
                Contact
              </Typography>

              {/* Email */}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EmailIcon
                  sx={{
                    mr: 1.2,
                    color: "#0cc6e9",
                    fontSize: 21,
                  }}
                />

                <Link
                  href="mailto:hello@techbeacon.com"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
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
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PhoneIcon
                  sx={{
                    mr: 1.2,
                    color: "#0cc6e9",
                    fontSize: 21,
                  }}
                />

                <Link
                  href="tel:+919209652754"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
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
                    mr: 1.2,
                    color: "#0cc6e9",
                    fontSize: 21,
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                  }}
                >
                  Pune, Maharashtra, India
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* ================= SOCIAL MEDIA ================= */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={700} mb={3}>
                Follow Us
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                Connect with TechBeacon Solutions on social media.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      width: 42,
                      height: 42,
                      color: "rgba(255,255,255,0.75)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        color: "#ffffff",
                        backgroundColor: "#0cc6e9",
                        borderColor: "#0cc6e9",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 2,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Follow us for updates, projects & digital growth tips.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* ================= BOTTOM BAR ================= */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            © {new Date().getFullYear()} TechBeacon Solutions. All rights
            reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Digital Solutions • Web • Apps • AI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}