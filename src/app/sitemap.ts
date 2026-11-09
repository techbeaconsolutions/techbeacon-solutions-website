
import type { MetadataRoute } from "next";

const BASE_URL = "https://techbeaconsolutions.com";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/website-development", priority: 0.9 },
  { path: "/software-development", priority: 0.8 },
  { path: "/digital-marketing", priority: 0.8 },
  { path: "/seo-services", priority: 0.9 },
  { path: "/ai-automation", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/blog", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
