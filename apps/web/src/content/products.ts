// Mirrors the planned Sanity `product` document type.

export type Product = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
};

export const heroSlides = [
  {
    eyebrow: "Heat Exchangers",
    title: "High Performance Thermal Solutions",
    copy: "Shell & tube, plate, and specialty exchangers custom designed to your duty.",
  },
  {
    eyebrow: "Pressure Vessels",
    title: "Engineered to Hold the Line",
    copy: "Code-stamped vessels for the most demanding pressure and temperature duties.",
  },
  {
    eyebrow: "Columns & Towers",
    title: "Precision at Every Tray",
    copy: "Distillation, absorption and stripping columns fabricated to tight tolerances.",
  },
  {
    eyebrow: "Turnkey Systems",
    title: "From Skid to Site",
    copy: "Fully assembled, tested skid packages that arrive ready to commission.",
  },
  {
    eyebrow: "Capabilities",
    title: "End-to-End Capability, From Concept to Commissioning",
    copy: "A 120,000 sq. ft. facility, 300+ engineers and craftsmen, and a single-minded focus on getting complex equipment right.",
  },
] as const;

export const productValueProps = [
  {
    title: "Custom Engineered",
    body: "Every product is designed against your duty spec — no off-the-shelf compromises.",
  },
  {
    title: "Code Compliant",
    body: "ASME, DIN, EN and IS standards, with third-party inspection and documentation.",
  },
  {
    title: "Range of Materials",
    body: "Carbon steel, stainless, duplex, Inconel, titanium and clad constructions.",
  },
] as const;

export const productsHero = {
  title: "A complete range of engineered process equipment.",
  copy: "Every unit is custom designed and code-fabricated to your process specification.",
};

export const productsCta = {
  eyebrow: "Request a Quote",
  title: "Share your P&ID, duty specification or drawing.",
  body: "Our engineers will come back with a design proposal and budgetary quote.",
};

export const products: Product[] = [
  {
    slug: "pressure-vessels",
    name: "Pressure Vessels",
    summary:
      "ASME Section VIII and IS-coded vessels for storage, reaction and separation duties, in carbon steel through exotic clad construction.",
    tags: ["ASME U / U2", "Up to 500 mm thickness", "Carbon to exotic alloys"],
  },
  {
    slug: "heat-exchangers",
    name: "Heat Exchangers",
    summary:
      "Shell & tube, plate, and air-cooled exchangers custom designed to your thermal duty and fouling conditions.",
    tags: ["TEMA types", "Titanium & duplex", "Third-party inspected"],
  },
  {
    slug: "columns-towers",
    name: "Columns & Towers",
    summary:
      "Distillation, absorption and stripping columns fabricated and tray-fitted to tight tolerances for process guarantees.",
    tags: ["Tray & packed internals", "Field-erected or shop-built", "Up to 60m tall"],
  },
  {
    slug: "turnkey-systems",
    name: "Skid-Mounted & Turnkey Systems",
    summary:
      "Fully assembled, wired, piped and factory-acceptance-tested skid packages that arrive ready to commission.",
    tags: ["Single-point responsibility", "FAT before dispatch", "Global site support"],
  },
];
