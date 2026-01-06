"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  /** Smooth scroll handler */
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#0A66C2", color: "white" }}>
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
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Techbeacon
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                Your trusted digital growth partner for websites, mobile apps, and custom software solutions.
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
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Quick Links
              </Typography>

              {quickLinks.map((item, i) => (
                <Typography key={i} variant="body2" sx={{ my: 0.5 }}>
                  {item.href.startsWith("#") ? (
                    <Link
                      component="button"
                      underline="none"
                      color="inherit"
                      onClick={() => handleScroll(item.href)}
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "#0cc6e9" },
                      }}
                      aria-label={`Scroll to ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      underline="none"
                      color="inherit"
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "#0cc6e9" },
                      }}
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </Typography>
              ))}
            </motion.div>
          </Grid>

          {/* Contact Info + CTA */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Contact
              </Typography>

              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <EmailIcon sx={{ mr: 1, fontSize: 18 }} />

                <Link
                  href="mailto:hello@techbeacon.com"
                  underline="none"
                  color="inherit"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#0cc6e9" },
                  }}
                  aria-label="Send email to Techbeacon"
                >
                  hello@techbeacon.com
                </Link>
              </Typography>


              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <PhoneIcon sx={{ mr: 1, fontSize: 18 }} />

                <Link
                  href="tel:+919209652754"
                  underline="none"
                  color="inherit"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#0cc6e9" },
                  }}
                  aria-label="Call Techbeacon"
                >
                  +91-9209652754
                </Link>
              </Typography>


              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 3 }}
              >
                <LocationOnIcon sx={{ mr: 1, fontSize: 18 }} />
                Pune, Maharashtra, India
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            borderTop: "1px solid rgba(255,255,255,0.25)",
            pt: 3,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Techbeacon. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
