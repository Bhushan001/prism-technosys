// Site-wide settings. Shape mirrors the planned Sanity `siteSettings` singleton
// document (see docs/content-model.md) so this module can be swapped for a
// live CMS fetch later without changing any component.

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

// Contact details below are placeholders — replace with Prism Technosys's
// real phone/email/address before launch.
export const siteSettings = {
  name: "Prism Technosys",
  establishedLine: "DIGITAL PRODUCT STUDIO",
  tagline: "Catalyzing Change, Sculpting Futures",
  phone: "+91 20 6640 7890",
  phoneHref: "tel:+912066407890",
  email: "hello@prismtechnosys.com",
  address: {
    line1: "Business Bay,",
    line2: "Pune, Maharashtra, India",
  },
  hours: "Mon – Sat · 9:30 – 18:30 IST",
  certifications: ["Agile Delivery", "Dedicated Support", "Transparent Pricing", "On-Time Delivery"],
  footerBlurb:
    "A digital product studio helping businesses design, build and launch websites and software that actually work for their users.",
};

// Placeholder figures — replace with real numbers once available.
export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "10+", label: "Technologies Mastered" },
  { value: "24/7", label: "Support Availability" },
];
