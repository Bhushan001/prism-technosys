// Site-wide settings. Shape mirrors the planned Sanity `siteSettings` singleton
// document (see docs/content-model.md) so this module can be swapped for a
// live CMS fetch later without changing any component.

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const siteSettings = {
  name: "Crystal Engineers",
  establishedLine: "EST. 1990 · PUNE",
  phone: "+91 20 2712 5555",
  phoneHref: "tel:+912027125555",
  email: "info@crystalengineers.net",
  address: {
    line1: "Plot No. 15, MIDC Industrial Area,",
    line2: "Bhosari, Pune — 411026, India",
  },
  hours: "Mon – Sat · 9:00 – 18:00 IST",
  certifications: ["ISO 9001:2015", "ASME U / U2", "NB / R Stamp", "IBR Approved"],
  footerBlurb:
    "ISO 9001:2015 certified manufacturer of industrial process equipment. Engineering, fabrication and turnkey delivery for the world's most demanding industries.",
};

export const stats = [
  { value: "34+", label: "Years of Engineering Excellence" },
  { value: "500+", label: "Projects Delivered Globally" },
  { value: "40+", label: "Countries Reached" },
  { value: "120K", label: "Sq. Ft. Manufacturing Facility" },
];
