"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const COLORS = {
  primary: "#0871da",
  cyan: "#0cc6e9",
  navy: "#0b1120",
  white: "#ffffff",
  textMuted: "rgba(255,255,255,0.72)",
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll + active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      const scrollPosition = scrollY + 140;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const yOffset = -80;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActive(id);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(11,17,32,0.82)"
            : "rgba(11,17,32,0.18)",

          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",

          borderBottom: scrolled
            ? "1px solid rgba(12,198,233,0.12)"
            : "1px solid transparent",

          boxShadow: scrolled
            ? "0 8px 30px rgba(0,0,0,0.25)"
            : "none",

          transition: "all 0.35s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 68, md: 76 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            {/* LOGO */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                onClick={() => handleScrollTo("home")}
                sx={{
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  userSelect: "none",
                }}
              >
                {/* Logo Mark */}
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "9px",
                    background:
                      "linear-gradient(135deg, #0871da, #0cc6e9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      "0 0 18px rgba(12,198,233,0.25)",
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      opacity: 0.95,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    fontWeight: 800,
                    letterSpacing: "0.3px",
                    color: COLORS.white,
                  }}
                >
                  Tech
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(90deg, #0871da, #0cc6e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Beacon
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* DESKTOP NAVIGATION */}
            <Box
              sx={{
                flex: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
                gap: { md: 2.5, lg: 3.5 },
              }}
            >
              {navLinks.map((link) => {
                const isActive = active === link.id;

                return (
                  <Box
                    key={link.id}
                    component="button"
                    onClick={() => handleScrollTo(link.id)}
                    sx={{
                      position: "relative",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",

                      px: 0.5,
                      py: 1,

                      fontSize: "0.92rem",
                      fontWeight: isActive ? 600 : 500,

                      color: isActive
                        ? COLORS.cyan
                        : COLORS.textMuted,

                      transition: "all 0.25s ease",

                      "&:hover": {
                        color: COLORS.cyan,
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        bottom: 2,

                        width: isActive ? "70%" : "0%",
                        height: "2px",

                        transform: "translateX(-50%)",

                        borderRadius: "10px",

                        background:
                          "linear-gradient(90deg, #0871da, #0cc6e9)",

                        boxShadow:
                          "0 0 8px rgba(12,198,233,0.45)",

                        transition:
                          "width 0.3s ease",
                      },

                      "&:hover::after": {
                        width: "70%",
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                );
              })}
            </Box>

            {/* DESKTOP CTA */}
            <Box
              sx={{
                flex: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleScrollTo("contact")}
                sx={{
                  background:
                    "linear-gradient(90deg, #0871da, #0cc6e9)",

                  color: "#ffffff",

                  borderRadius: "40px",

                  px: 2.8,
                  py: 1,

                  fontSize: "0.9rem",
                  fontWeight: 700,

                  textTransform: "none",

                  boxShadow:
                    "0 8px 24px rgba(8,113,218,0.25)",

                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #065bb5, #0aa6c4)",

                    transform: "translateY(-2px)",

                    boxShadow:
                      "0 12px 28px rgba(8,113,218,0.35)",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* MOBILE MENU BUTTON */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: COLORS.white,

                border: "1px solid rgba(12,198,233,0.2)",

                borderRadius: "10px",

                "&:hover": {
                  backgroundColor:
                    "rgba(12,198,233,0.08)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,

            background:
              "linear-gradient(180deg, #0b1120 0%, #0a1324 100%)",

            borderLeft:
              "1px solid rgba(12,198,233,0.15)",

            color: COLORS.white,
          },
        }}
      >
        <Box
          sx={{
            px: 3,
            pt: 4,
            pb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 800,
              mb: 3,
            }}
          >
            Tech
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #0871da, #0cc6e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beacon
            </Box>
          </Typography>

          <List disablePadding>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                sx={{
                  borderRadius: "10px",
                  mb: 0.5,

                  color:
                    active === link.id
                      ? COLORS.cyan
                      : COLORS.textMuted,

                  backgroundColor:
                    active === link.id
                      ? "rgba(12,198,233,0.08)"
                      : "transparent",

                  "&:hover": {
                    backgroundColor:
                      "rgba(12,198,233,0.08)",
                    color: COLORS.cyan,
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight:
                      active === link.id
                        ? 600
                        : 500,
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            onClick={() => handleScrollTo("contact")}
            sx={{
              mt: 3,

              py: 1.2,

              borderRadius: "30px",

              textTransform: "none",

              fontWeight: 700,

              background:
                "linear-gradient(90deg, #0871da, #0cc6e9)",

              "&:hover": {
                background:
                  "linear-gradient(90deg, #065bb5, #0aa6c4)",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;