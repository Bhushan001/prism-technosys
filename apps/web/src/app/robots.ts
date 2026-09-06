import type { MetadataRoute } from "next";

// Required for static export: metadata routes must be forced static.
export const dynamic = "force-static";

const BASE_URL = "https://www.prismtechnosys.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
