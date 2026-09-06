// Mirrors the planned Sanity `project` document type.
// Placeholder entries — replace with real case studies via the CMS.

export type Project = {
  slug: string;
  title: string;
  industry: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "corporate-website-revamp",
    title: "Corporate Website Revamp",
    industry: "Manufacturing & Engineering",
    outcome: "Migrated a legacy site to a modern, CMS-driven platform with a 40% faster load time.",
  },
  {
    slug: "patient-booking-portal",
    title: "Patient Booking Portal",
    industry: "Healthcare & Life Sciences",
    outcome: "Designed and built an online appointment system that cut phone-in bookings by half.",
  },
  {
    slug: "d2c-storefront-launch",
    title: "D2C Storefront Launch",
    industry: "Retail & E-Commerce",
    outcome: "Launched a headless commerce storefront from concept to go-live in under 8 weeks.",
  },
  {
    slug: "loan-origination-dashboard",
    title: "Loan Origination Dashboard",
    industry: "BFSI & FinTech",
    outcome: "Built an internal dashboard that replaced three spreadsheets with one consolidated workflow.",
  },
  {
    slug: "brand-website-cms",
    title: "Brand Website & CMS",
    industry: "Manufacturing & Engineering",
    outcome: "Delivered a fully responsive, CMS-editable corporate site with enquiry-form integration.",
  },
  {
    slug: "membership-platform",
    title: "Membership Platform",
    industry: "Retail & E-Commerce",
    outcome: "Built a subscription management portal integrated with payment gateways and email automation.",
  },
];
