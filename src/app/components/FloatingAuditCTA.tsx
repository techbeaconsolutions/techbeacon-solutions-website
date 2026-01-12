"use client";

import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function FloatingAuditCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
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
        aria-label="Get Free Local Consulting"
        sx={{
                      background: "linear-gradient(90deg,#0871da,#0cc6e9)",
          fontWeight: 700,
          textTransform: "none",
          px: 2.5,
          py: 1.5,
          borderRadius: "999px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          "&:hover": {
            background: "linear-gradient(90deg, #0871da, #a855f7)",
            boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
          },
        }}
      >
        Get Free Consulting      </Button>
    </motion.div>
  );
}
