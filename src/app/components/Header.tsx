"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Blur navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with offset
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80; // navbar height offset
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? "rgba(11,17,32,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1.5,
          }}
        >
          {/* LEFT - Logo */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              onClick={() => handleScrollTo("home")}
              sx={{
                fontWeight: 700,
                letterSpacing: "0.5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Techbbeacon
            </Typography>
          </Box>

          {/* CENTER - Navigation */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 4,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.id}
                component="button"
                onClick={() => handleScrollTo(link.id)}
                sx={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  position: "relative",
                  color:
                    active === link.id
                      ? "#6366F1"
                      : "#E5E7EB",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#6366F1",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width:
                      active === link.id ? "100%" : "0%",
                    height: "2px",
                    bottom: "-4px",
                    left: 0,
                    backgroundColor: "#6366F1",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* RIGHT - CTA */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleScrollTo("contact")}
              sx={{
                backgroundColor: "#6366F1",
                borderRadius: "40px",
                px: 3,
                py: 0.8,
                fontWeight: 600,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#4F46E5",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Book Call
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;