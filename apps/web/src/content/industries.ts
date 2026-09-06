// Mirrors the planned Sanity `industry` document type.

export type Industry = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    description:
      "Corporate and product-showcase websites for manufacturers who need to present technical capability clearly online.",
    tags: ["Corporate Websites", "Product Catalogs", "B2B Lead Gen"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    description:
      "Patient-friendly, accessible websites and portals for clinics, diagnostics and healthcare providers.",
    tags: ["Patient Portals", "Appointment Booking", "Accessibility"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    description:
      "Storefronts and catalog platforms built to convert browsers into buyers, on any device.",
    tags: ["E-Commerce", "Catalog Management", "Payments"],
  },
  {
    slug: "bfsi-fintech",
    name: "BFSI & FinTech",
    description:
      "Secure, compliance-aware digital experiences for banking, insurance and financial services businesses.",
    tags: ["Security First", "Compliance-Aware", "Dashboards"],
  },
];
