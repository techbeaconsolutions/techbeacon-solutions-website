
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const COLORS = {
  primary: "#0871da",
  cyan: "#0cc6e9",
  navy: "#0b1120",
  white: "#ffffff",
  textMuted: "rgba(255,255,255,0.72)",
};

const serviceLinks = [
  { label: "All Services", href: "/services/" },
  { label: "Website Development", href: "/website-development/" },
  { label: "Software Development", href: "/software-development/" },
  { label: "Digital Marketing", href: "/digital-marketing/" },
  { label: "SEO Services", href: "/seo-services/" },
  { label: "AI & WhatsApp Automation", href: "/ai-automation/" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] =
    useState<HTMLElement | null>(null);

  // Detect header scroll position.
  if (typeof window !== "undefined") {
    // Scroll state is updated by the effect below.
  }

  // Use a scroll listener for the existing glass-header effect.
  // This effect is declared below using React.useEffect.
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesAnchor(null);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  const isServicesActive = serviceLinks.some((link) =>
    isActive(link.href)
  );

  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 40);

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(11,17,32,0.92)"
            : "rgba(11,17,32,0.72)",
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
              gap: 2,
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            {/* Brand */}
            <Box
              component={Link}
              href="/"
              onClick={closeMenus}
              aria-label="TechBeacon Solutions home"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                flexShrink: 0,
                textDecoration: "none",
                color: COLORS.white,
              }}
            >
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
                  boxShadow: "0 0 18px rgba(12,198,233,0.25)",
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>

              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  fontWeight: 800,
                  letterSpacing: "0.3px",
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

            {/* Desktop navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: { md: 1.5, lg: 2.5 },
                flex: 1,
              }}
            >
              {navLinks.slice(0, 2).map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: isActive(link.href)
                      ? COLORS.cyan
                      : COLORS.textMuted,
                    textTransform: "none",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    "&:hover": { color: COLORS.cyan },
                  }}
                >
                  {link.label}
                </Button>
              ))}

              <Button
                onClick={(event) =>
                  setServicesAnchor(event.currentTarget)
                }
                endIcon={<KeyboardArrowDownIcon />}
                aria-haspopup="true"
                aria-expanded={Boolean(servicesAnchor)}
                sx={{
                  color: isServicesActive
                    ? COLORS.cyan
                    : COLORS.textMuted,
                  textTransform: "none",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  "&:hover": { color: COLORS.cyan },
                }}
              >
                Services
              </Button>

              <Menu
                anchorEl={servicesAnchor}
                open={Boolean(servicesAnchor)}
                onClose={() => setServicesAnchor(null)}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1,
                      minWidth: 240,
                      background: "#0b1120",
                      color: "#fff",
                      border: "1px solid rgba(12,198,233,0.2)",
                      borderRadius: 2,
                    },
                  },
                }}
              >
                {serviceLinks.map((service) => (
                  <MenuItem
                    key={service.href}
                    component={Link}
                    href={service.href}
                    selected={isActive(service.href)}
                    onClick={() => setServicesAnchor(null)}
                    sx={{
                      py: 1.2,
                      "&:hover, &.Mui-selected": {
                        backgroundColor: "rgba(12,198,233,0.1)",
                        color: COLORS.cyan,
                      },
                    }}
                  >
                    {service.label}
                  </MenuItem>
                ))}
              </Menu>

              {navLinks.slice(2).map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: isActive(link.href)
                      ? COLORS.cyan
                      : COLORS.textMuted,
                    textTransform: "none",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    "&:hover": { color: COLORS.cyan },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Desktop CTA */}
            <Button
              component={Link}
              href="/contact/"
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                flexShrink: 0,
                background:
                  "linear-gradient(90deg, #0871da, #0cc6e9)",
                color: "#fff",
                borderRadius: "40px",
                px: 2.5,
                py: 1,
                fontWeight: 700,
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #065bb5, #0aa6c4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Started
            </Button>

            {/* Mobile menu button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                display: { xs: "flex", md: "none" },
                color: COLORS.white,
                border: "1px solid rgba(12,198,233,0.2)",
                borderRadius: "10px",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background:
              "linear-gradient(180deg, #0b1120 0%, #0a1324 100%)",
            borderLeft: "1px solid rgba(12,198,233,0.15)",
            color: COLORS.white,
          },
        }}
      >
        <Box sx={{ px: 3, pt: 4, pb: 3 }}>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, mb: 2 }}>
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
            {navLinks.slice(0, 2).map((link) => (
              <ListItemButton
                key={link.href}
                component={Link}
                href={link.href}
                selected={isActive(link.href)}
                onClick={closeMenus}
                sx={mobileItemStyles}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}

            <Typography
              sx={{
                px: 2,
                pt: 2,
                pb: 1,
                color: COLORS.cyan,
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Services
            </Typography>

            {serviceLinks.map((service) => (
              <ListItemButton
                key={service.href}
                component={Link}
                href={service.href}
                selected={isActive(service.href)}
                onClick={closeMenus}
                sx={{ ...mobileItemStyles, pl: 3 }}
              >
                <ListItemText
                  primary={service.label}
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
              </ListItemButton>
            ))}

            {navLinks.slice(2).map((link) => (
              <ListItemButton
                key={link.href}
                component={Link}
                href={link.href}
                selected={isActive(link.href)}
                onClick={closeMenus}
                sx={mobileItemStyles}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>

          <Button
            component={Link}
            href="/contact/"
            fullWidth
            variant="contained"
            onClick={closeMenus}
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 700,
              background:
                "linear-gradient(90deg, #0871da, #0cc6e9)",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

const mobileItemStyles = {
  borderRadius: "10px",
  mb: 0.5,
  color: "rgba(255,255,255,0.78)",
  "&:hover, &.Mui-selected": {
    backgroundColor: "rgba(12,198,233,0.08)",
    color: "#0cc6e9",
  },
};

// Keep the scroll listener separate so it can clean up correctly.


function requireReactHooks() {
  return { useEffect: requireEffect };
}

import { useEffect as requireEffect } from "react";
