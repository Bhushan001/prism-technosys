// Mirrors the planned Sanity `project` document type.
// Placeholder entries — the proposal calls out a "Projects" section explicitly;
// the client should replace these with real case studies via the CMS.

export type Project = {
  slug: string;
  title: string;
  industry: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "cryogenic-test-facility",
    title: "Cryogenic Test Facility Vessels",
    industry: "Space Industry",
    outcome: "12 vacuum-jacketed vessels delivered and commissioned on schedule for a national space research programme.",
  },
  {
    slug: "heavy-water-plant-exchangers",
    title: "Heavy Water Plant Heat Exchangers",
    industry: "Nuclear & Defence",
    outcome: "Titanium shell & tube exchangers fabricated to QA Level 1 with full radiographic traceability.",
  },
  {
    slug: "distillation-column-revamp",
    title: "Distillation Column Revamp",
    industry: "Chemical & Process",
    outcome: "Tray internals redesigned and re-fabricated, lifting throughput 18% without a shell change.",
  },
  {
    slug: "sugar-mill-evaporator-body",
    title: "Multi-Effect Evaporator Body",
    industry: "Sugar & Agro-Processing",
    outcome: "Shop-fabricated evaporator body shipped in modular sections for fast field erection ahead of crush season.",
  },
  {
    slug: "reactor-vessel-clad-steel",
    title: "Clad-Steel Reactor Vessel",
    industry: "Chemical & Process",
    outcome: "Duplex-clad reactor built to ASME Section VIII Div. 2 for a corrosive process duty.",
  },
  {
    slug: "propellant-feed-skid",
    title: "Propellant Feed System Skid",
    industry: "Space Industry",
    outcome: "Fully tested skid package covering piping, instrumentation and controls, shipped ready to commission.",
  },
];
