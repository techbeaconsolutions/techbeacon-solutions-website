"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Analytics Dashboard",
    image: "/images/dashboard.jpg",
    alt: "Business analytics dashboard web application",
    description: "Custom analytics dashboards for business insights.",
  },
  {
    title: "E-commerce Platform",
    image: "/images/ecommerce.jpg",
    alt: "E-commerce website development project",
    description: "Modern online stores with payment integration.",
  },
  {
    title: "Mobile Banking App",
    image: "/images/banking.jpg",
    alt: "Banking and finance software dashboard",
    description: "Secure mobile apps for financial services.",
  },
  {
    title: "Corporate Website",
    image: "/images/website.jpg",
    alt: "Corporate website design and development",
    description: "Professional websites for corporate presence.",
  },
  {
    title: "SaaS Platform",
    image: "/images/saas.jpg",
    alt: "SaaS product user interface design",
    description: "Cloud-based SaaS applications with scalability.",
  },
  {
    title: "Restaurant Management",
    image: "/images/restaurant.jpg",
    alt: "Restaurant management software system",
    description: "Complete restaurant POS & management systems.",
  },
];

export default function Portfolio() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700} align="center">
            Our Portfolio
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Showcasing our latest projects and successful digital transformations
            across industries.
          </Typography>
        </motion.div>

        {/* Grid Cards */}
        <Grid container spacing={4}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
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
