import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hwah.net";
  return ["", "/holdings", "/industries", "/about", "/contact", "/legal/privacy", "/legal/terms", "/legal/dpa"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}


