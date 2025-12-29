"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#0A66C2", color: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
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
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Your trusted digital growth partner for websites, mobile apps,
                and custom software solutions.
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
                <Typography
                  key={i}
                  variant="body2"
                  component={Link}
                  href={item.href}
                  sx={{
                    display: "block",
                    cursor: "pointer",
                    my: 0.5,
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#0cc6e9" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={12} md={4}>
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
                href="mailto:techbeacon.solutions@gmail.com"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <EmailIcon sx={{ mr: 1, fontSize: 18 }} /> hello@techbeacon.com
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <PhoneIcon sx={{ mr: 1, fontSize: 18 }} /> +91-9209652754
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon sx={{ mr: 1, fontSize: 18 }} /> Pune, India
              </Typography>

              {/* Social Media Icons */}
              {/* <Box sx={{ mt: 2 }}>
                {[
                  { icon: <FacebookIcon />, href: "#" },
                  { icon: <LinkedInIcon />, href: "#" },
                  { icon: <TwitterIcon />, href: "#" },
                  { icon: <InstagramIcon />, href: "#" },
                ].map((item, i) => (
                  <IconButton
                    key={i}
                    color="inherit"
                    component={Link}
                    href={item.href}
                    sx={{
                      mx: 0.5,
                      "&:hover": { color: "#0cc6e9" },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box> */}
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            borderTop: "1px solid rgba(255,255,255,0.2)",
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
