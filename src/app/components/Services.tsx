"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Public";
import MobileIcon from "@mui/icons-material/PhoneIphone";
import SoftwareIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Storage";
import PlaceIcon from '@mui/icons-material/Place';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const services = [
  {
    icon: WebIcon,
    title: "Web Development",
    description:
      "Modern, responsive websites and\nweb applications built with\ncutting-edge technologies for your\nbusiness growth.",
    features: [
      "React/Next.js",
      "SEO Optimized",
      "Fast Loading",
      "E-commerce Ready",
    ],
  },
  {
    icon: MobileIcon,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile\napplications for iOS and Android\nwith stunning user experiences.",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Ready"],
  },
  {
    icon: SoftwareIcon,
    title: "Custom Software",
    description:
      "Tailor-made software solutions\ndesigned specifically for your\nbusiness requirements and\nworkflows.",
    features: [
      "Custom Development",
      "API Integration",
      "Database Design",
      "Scalable Architecture",
    ],
  },
  {
    icon: CloudIcon,
    title: "Hosting & Support",
    description:
      "Reliable hosting solutions with 24/7\nsupport and maintenance to keep\nyour applications running\nsmoothly.",
    features: [
      "Cloud Hosting",
      "24/7 Support",
      "Regular Backups",
      "Performance Monitoring",
    ],
  },
];



const digitalservices = [
  {
    icon: PlaceIcon,
    title: "Google Business Profile",
    description:
      "Get found on Google Maps when customers search for services near you.",
    features: [
      "Profile setup & optimization",
      "Local visibility",
      "Reviews & map ranking"
    ],
  },
  {
    icon: MonochromePhotosIcon,
    title: "Instagram Marketing",
    description:
      "Build local brand awareness and trust through consistent Instagram posts.",
    features: ["Business posts & reels", "Local audience reach", "Engagement growth"],
  },
  {
    icon: GroupsIcon,
    title: "Facebook Marketing",
    description:
      "Reach nearby customers with targeted Facebook posts and ads.",
    features: [
      "Local targeting", "Lead-focused ads", "Business visibility",
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing to generate enquiries and grow your business.",
    features: [
      "SEO",
      "Social media marketing",
      "Lead generation",
    ],
  },
];

export default function Services() {
  return (
    <><Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700} align="center">
            Our{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Comprehensive IT solutions tailored to drive your business forward in
            the digital age
          </Typography>
        </motion.div>

        {/* Responsive Grid Cards */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={3}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    textAlign: "center",
                    py: 4,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.09)",
                    transition: "0.3s",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardHeader sx={{ textAlign: "center", pb: 1 }} />

                  {/* Animated Icon */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <Box
                      sx={{
                        mx: "auto",
                        mb: 3,
                        p: 2,
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        background: "linear-gradient(135deg,#0871da,#0cc6e9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 20px rgba(8,113,218,0.3)",
                      }}
                    >
                      <service.icon fontSize="large" sx={{ color: "#fff" }} />
                    </Box>
                  </motion.div>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      "&:hover": {
                        background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Content */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <Box
                          key={featureIndex}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.85rem",
                            color: "rgba(0,0,0,0.7)",
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              mr: 1.5,
                              background: "linear-gradient(135deg,#0871da,#0cc6e9)",
                            }} />
                          {feature}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box><Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" fontWeight={700} align="center">
              Digital Growth{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
            >
              Helping local businesses get discovered, generate enquiries, and grow online.
            </Typography>
          </motion.div>

          {/* Responsive Grid Cards */}
          <Grid container spacing={4}>
            {digitalservices.map((digitalservice, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={3}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      textAlign: "center",
                      py: 4,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.09)",
                      transition: "0.3s",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardHeader sx={{ textAlign: "center", pb: 1 }} />

                    {/* Animated Icon */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <Box
                        sx={{
                          mx: "auto",
                          mb: 3,
                          p: 2,
                          width: 64,
                          height: 64,
                          borderRadius: 3,
                          background: "linear-gradient(135deg,#0871da,#0cc6e9)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 6px 20px rgba(8,113,218,0.3)",
                        }}
                      >
                        <digitalservice.icon fontSize="large" sx={{ color: "#fff" }} />
                      </Box>
                    </motion.div>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{
                        "&:hover": {
                          background: "linear-gradient(90deg,#0871da,#0cc6e9)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        },
                      }}
                    >
                      {digitalservice.title}
                    </Typography>

                    {/* Content */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Description */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {digitalservice.description}
                      </Typography>

                      {/* Features */}
                      <Box
                        sx={{
                          mt: "auto",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        {digitalservice.features.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "0.85rem",
                              color: "rgba(0,0,0,0.7)",
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                mr: 1.5,
                                background: "linear-gradient(135deg,#0871da,#0cc6e9)",
                              }} />
                            {feature}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box></>
  );
}
