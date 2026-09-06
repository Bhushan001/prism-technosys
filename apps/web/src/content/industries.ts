// Mirrors the planned Sanity `industry` document type.

export type Industry = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
};

export const industries: Industry[] = [
  {
    slug: "space",
    name: "Space Industry",
    description:
      "Design and manufacture of vacuum chambers, propellant feed systems, and cryogenic equipment for space programs.",
    tags: ["Vacuum Chambers", "Cryogenic Systems", "Propellant Feed"],
  },
  {
    slug: "nuclear-defence",
    name: "Nuclear & Defence",
    description:
      "Code-critical fabrication for atomic energy and defence research establishments, held to the strictest quality and traceability standards.",
    tags: ["QA Level 1", "Full Traceability", "IBR Approved"],
  },
  {
    slug: "chemical-process",
    name: "Chemical & Process",
    description:
      "Reactors, columns and heat transfer equipment for heavy chemical, metallurgical and mineral processing lines worldwide.",
    tags: ["Reactors", "Distillation Columns", "Corrosive Duty Alloys"],
  },
  {
    slug: "sugar-agro",
    name: "Sugar & Agro-Processing",
    description:
      "Evaporators, juice heaters and process vessels engineered for the throughput and uptime demands of sugar and agro-processing plants.",
    tags: ["Evaporator Bodies", "Juice Heaters", "High Uptime Design"],
  },
];
