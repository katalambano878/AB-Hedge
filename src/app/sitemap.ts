import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/site";

const base = getSiteOrigin();

const routes = [
  "/",
  "/about",
  "/projects",
  "/industries",
  "/insights",
  "/contact",
  "/services",
  "/careers",
  "/ab-hedge",
  "/sapalon",
  "/sapalon/services",
  "/country-wide",
  "/country-wide/solutions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
