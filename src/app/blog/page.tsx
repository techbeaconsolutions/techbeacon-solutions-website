
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { blogs } from "../lib/blogs";

const categories = [
  "All",
  "Website Development",
  "SEO",
  "AI & Automation",
  "Digital Marketing",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featuredBlog = blogs.find((blog) => blog.featured);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch &&
        blog.slug !== featuredBlog?.slug
      );
    });
  }, [activeCategory, search, featuredBlog?.slug]);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 0%, rgba(49,46,129,0.3), transparent 40%), #080814",
        color: "#fff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">

        {/* HERO */}
        <Stack
          alignItems="center"
          textAlign="center"
          spacing={2}
          mb={{ xs: 7, md: 10 }}
        >
          <Typography
            sx={{
              color: "#A78BFA",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
            }}
          >
            TECHBEACON INSIGHTS
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              lineHeight: 1.12,
              maxWidth: 850,
              background:
                "linear-gradient(90deg, #FFFFFF, #C4B5FD)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ideas That Move Businesses Forward.
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              maxWidth: 680,
              lineHeight: 1.9,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Insights, strategies and practical guides to help
            your business grow in the digital world.
          </Typography>

          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            size="medium"
            sx={{
              mt: 2,
              width: "100%",
              maxWidth: 500,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                borderRadius: "50px",
                backgroundColor: "rgba(30,27,75,0.45)",
                "& fieldset": {
                  borderColor: "rgba(167,139,250,0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "#A78BFA",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#A78BFA",
                },
              },
              "& input::placeholder": {
                color: "#94A3B8",
                opacity: 1,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#A78BFA" }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        {/* FEATURED BLOG */}
        {featuredBlog && (
          <Box
            sx={{
              mb: 10,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1.1fr 1fr",
              },
              overflow: "hidden",
              borderRadius: 4,
              border: "1px solid rgba(167,139,250,0.2)",
              background:
                "linear-gradient(145deg, rgba(30,27,75,0.65), rgba(15,23,42,0.75))",
            }}
          >
            <Box
              component="img"
              src={featuredBlog.image}
              alt={featuredBlog.title}
              sx={{
                width: "100%",
                height: { xs: 240, md: "100%" },
                minHeight: { md: 370 },
                objectFit: "cover",
              }}
            />

            <Stack
              spacing={2.5}
              justifyContent="center"
              sx={{ p: { xs: 3, md: 5 } }}
            >
              <Typography
                sx={{
                  color: "#A78BFA",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                }}
              >
                FEATURED ARTICLE
              </Typography>

              <Chip
                label={featuredBlog.category}
                size="small"
                sx={{
                  width: "fit-content",
                  color: "#C4B5FD",
                  backgroundColor: "rgba(167,139,250,0.12)",
                }}
              />

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "1.6rem", md: "2.3rem" },
                  fontWeight: 800,
                  lineHeight: 1.25,
                }}
              >
                {featuredBlog.title}
              </Typography>

              <Typography sx={{ color: "#94A3B8", lineHeight: 1.8 }}>
                {featuredBlog.description}
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <AccessTimeIcon sx={{ color: "#A78BFA", fontSize: 18 }} />
                <Typography sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                  {featuredBlog.readTime}
                </Typography>
              </Stack>

              <Button
                component={Link}
                href={`/blog/${featuredBlog.slug}`}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  alignSelf: "flex-start",
                  color: "#C4B5FD",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(167,139,250,0.08)",
                  },
                }}
              >
                Read Article
              </Button>
            </Stack>
          </Box>
        )}

        {/* LATEST BLOGS */}
        <Stack spacing={3} mb={4}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Latest Insights
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                onClick={() => setActiveCategory(category)}
                sx={{
                  color:
                    activeCategory === category ? "#fff" : "#94A3B8",
                  backgroundColor:
                    activeCategory === category
                      ? "rgba(124,58,237,0.3)"
                      : "rgba(30,27,75,0.35)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  "&:hover": {
                    backgroundColor: "rgba(124,58,237,0.25)",
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {filteredBlogs.map((blog) => (
            <Box
              key={blog.slug}
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                border: "1px solid rgba(148,163,184,0.16)",
                background:
                  "linear-gradient(145deg, rgba(30,27,75,0.45), rgba(15,23,42,0.65))",
                transition: "transform 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(167,139,250,0.6)",
                },
              }}
            >
              <Box
                component="img"
                src={blog.image}
                alt={blog.title}
                sx={{
                  width: "100%",
                  height: 210,
                  objectFit: "cover",
                }}
              />

              <Box sx={{ p: 3 }}>
                <Chip
                  label={blog.category}
                  size="small"
                  sx={{
                    mb: 2,
                    color: "#C4B5FD",
                    backgroundColor: "rgba(167,139,250,0.12)",
                  }}
                />

                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    lineHeight: 1.5,
                    mb: 1.5,
                  }}
                >
                  {blog.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  {blog.description}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                  <AccessTimeIcon sx={{ color: "#A78BFA", fontSize: 16 }} />
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem" }}>
                    {blog.readTime}
                  </Typography>
                </Stack>

                <Button
                  component={Link}
                  href={`/blog/${blog.slug}`}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 0,
                    color: "#A78BFA",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#C4B5FD",
                    },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {filteredBlogs.length === 0 && (
          <Typography
            textAlign="center"
            sx={{ color: "#94A3B8", py: 8 }}
          >
            No articles found. Try another search or category.
          </Typography>
        )}

        {/* CONTACT CTA */}
        <Box
          sx={{
            mt: 12,
            p: { xs: 4, md: 7 },
            borderRadius: 4,
            textAlign: "center",
            border: "1px solid rgba(167,139,250,0.25)",
            background:
              "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 70%), #111126",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.7rem" },
              mb: 2,
            }}
          >
            Ready to Grow Your Business?
          </Typography>

          <Typography sx={{ color: "#94A3B8", mb: 3, lineHeight: 1.8 }}>
            Let's build a stronger digital presence for your business.
          </Typography>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              px: 4,
              py: 1.4,
              borderRadius: "50px",
              fontWeight: 700,
              textTransform: "none",
              background: "linear-gradient(90deg, #6D28D9, #8B5CF6)",
              "&:hover": {
                background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
              },
            }}
          >
            Let's Talk
          </Button>
        </Box>

      </Container>
    </Box>
  );
}
