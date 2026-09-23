"use client";

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function FloatingAuditCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.8,
      }}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1300,
      }}
    >
      <Button
        variant="contained"
        startIcon={<CampaignIcon />}
        href="https://wa.me/919209652754?text=Hi%20I%20want%20a%20free%20local%20visibility%20audit%20for%20my%20business"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get a free local visibility audit"
        sx={{
          background:
            "linear-gradient(135deg, #0871da, #0cc6e9)",

          color: "#ffffff",

          fontWeight: 700,
          fontSize: "0.9rem",

          textTransform: "none",

          px: 2.5,
          py: 1.35,

          borderRadius: "999px",

          boxShadow:
            "0 10px 30px rgba(8,113,218,0.30)",

          transition: "all 0.3s ease",

          "&:hover": {
            background:
              "linear-gradient(135deg, #065bb5, #0aa6c4)",

            transform: "translateY(-3px)",

            boxShadow:
              "0 14px 36px rgba(12,198,233,0.35)",
          },

          "&:active": {
            transform: "translateY(-1px)",
          },

          // Better size on smaller screens
          "@media (max-width: 600px)": {
            px: 1.8,
            py: 1.15,
            fontSize: "0.82rem",

            "& .MuiButton-startIcon": {
              marginRight: 0.5,
            },
          },
        }}
      >
        Get Free Consulting
      </Button>
    </motion.div>
  );
}