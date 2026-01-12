"use client";
import React, { useEffect, useState } from "react";
import { Fab, Zoom, useMediaQuery } from "@mui/material";
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        onClick={handleClick}
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          bottom: isMobile ? 150 : 90,
          right: 20,
          background: "linear-gradient(90deg, #0871da, #0cc6e9)",
          color: "white",
          zIndex: 1500,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          "&:hover": {
            background: "linear-gradient(90deg, #0871da, #a855f7)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
