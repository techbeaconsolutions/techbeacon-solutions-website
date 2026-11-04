"use client";

import { Box, Container, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Bronze",
    price: "₹25,000",
    features: [
      "Static Website (5 Pages)",
      "Hosting + SSL (1 Year)",
      "Free Email Setup",
    ],
    buttonText: "Choose Bronze",
    highlight: false,
  },
  {
    title: "Silver",
    price: "₹75,000",
    features: [
      "Dynamic Website OR Basic App",
      "Admin Panel",
      "Hosting + SSL (1 Year)",
      "3 Months Free Maintenance",
    ],
    buttonText: "Choose Silver",
    highlight: false,
  },
  {
    title: "Gold",
    price: "₹1.5L+",
    features: [
      "Custom Software OR Website + App Combo",
      "Hosting + SSL (1 Year)",
      "6 Months Free Maintenance",
      "AMC Plan Discount",
    ],
    buttonText: "Choose Gold",
    highlight: true,
  },
];

export default function Packages() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700}  align="center">
            Our Packages
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Choose the perfect package for your business needs. All packages include hosting & support.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {packages.map((pkg, index) => (
            <Grid key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    border: pkg.highlight ? "2px solid #00B4D8" : "1px solid #ddd",
                    boxShadow: pkg.highlight ? 6 : 2,
                    transform: pkg.highlight ? "scale(1.05)" : "scale(1)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.07)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" fontWeight={700} >
                      {pkg.title}
                    </Typography>
                    <Typography variant="h4" color="primary" >
                      {pkg.price}
                    </Typography>

                    {pkg.features.map((feature, i) => (
                      <Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        ✅ {feature}
                      </Typography>
                    ))}

                    <Button
                      variant={pkg.highlight ? "contained" : "outlined"}
                      color={pkg.highlight ? "secondary" : "primary"}
                      sx={{ mt: 3 }}
                      fullWidth
                    >
                      {pkg.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
