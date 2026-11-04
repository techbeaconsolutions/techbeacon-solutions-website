"use client";

import React, { useEffect, useState } from "react";
import {
  Fab,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Detect mobile screens
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={visible} timeout={300}>
      <Fab
        size={isMobile ? "medium" : "large"}
        onClick={handleClick}
        aria-label="Scroll back to top"
        sx={{
          position: "fixed",

          // Keep space for the WhatsApp button
          bottom: isMobile ? 150 : 90,
          right: { xs: 16, md: 20 },

          background:
            "linear-gradient(135deg, #0871da, #0cc6e9)",

          color: "#ffffff",

          zIndex: 1500,

          boxShadow:
            "0 8px 24px rgba(8,113,218,0.30)",

          transition: "all 0.3s ease",

          "&:hover": {
            background:
              "linear-gradient(135deg, #065bb5, #0aa6c4)",

            transform: "translateY(-3px)",

            boxShadow:
              "0 12px 30px rgba(12,198,233,0.35)",
          },

          "&:active": {
            transform: "translateY(-1px)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;