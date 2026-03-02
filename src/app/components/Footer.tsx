"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box mb={2}>
                <img
                  src="/favicon.png"
                  alt="TechBeacon Logo"
                  style={{ height: 50 }}
                />
              </Box>

              <Typography variant="h6" fontWeight={700} mb={2}>
                TechBeacon Solutions
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}
              >
                Your trusted digital growth partner for websites, mobile apps,
                and scalable custom software solutions.
              </Typography>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
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
                <Typography key={i} sx={{ mb: 1 }}>
                  {item.href.startsWith("#") ? (
                    <Link
                      component="button"
                      underline="none"
                      onClick={() => handleScroll(item.href)}
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

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={700} mb={3}>
                Contact
              </Typography>

              <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ mr: 1, color: "#0cc6e9" }} />
                <Link
                  href="mailto:hello@techbeacon.com"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "#0cc6e9" },
                  }}
                >
                  hello@techbeacon.com
                </Link>
              </Box>

              <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <PhoneIcon sx={{ mr: 1, color: "#0cc6e9" }} />
                <Link
                  href="tel:+919209652754"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "#0cc6e9" },
                  }}
                >
                  +91-9209652754
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ mr: 1, color: "#0cc6e9" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Pune, Maharashtra, India
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.6)" }}
          >
            © {new Date().getFullYear()} TechBeacon Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}