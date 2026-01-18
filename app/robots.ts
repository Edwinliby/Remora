import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.remorahealth.com/sitemap.xml",
    host: "https://www.remorahealth.com",
  };
}
