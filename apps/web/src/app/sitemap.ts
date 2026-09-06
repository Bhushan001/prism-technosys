import type { MetadataRoute } from "next";
import { nav } from "@/content/site";

// Required for static export: metadata routes must be forced static.
export const dynamic = "force-static";

// TODO: confirm the production domain before deploy.
const BASE_URL = "https://www.prismtechnosys.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${BASE_URL}${item.href}`,
    lastModified: new Date(),
  }));
}
