import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hwah.net";
  return [
    "",
    "/services",
    "/services/automation",
    "/services/iot",
    "/services/analytics",
    "/services/lab",
    "/solutions",
    "/solutions/energy-logistics",
    "/solutions/industrial",
    "/solutions/backoffice",
    "/case-studies",
    "/about",
    "/approach",
    "/pricing",
    "/blog",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/dpa",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}


