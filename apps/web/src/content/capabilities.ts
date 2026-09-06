// Images are CC0 stock photos from openverse.org, stored in public/images/.

export const capabilitiesHero = {
  image: "/images/capabilities-hero.jpg",
};

export const lifecycleSteps = [
  {
    title: "Discovery & Strategy",
    body: "Understanding your users, goals and constraints before a single wireframe is drawn.",
    image: "/images/capability-discovery.jpg",
  },
  {
    title: "Design",
    body: "Wireframes, UI design and prototyping validated with real users before development starts.",
    image: "/images/capability-design.jpg",
  },
  {
    title: "Development & QA",
    body: "Clean, tested code built in the open with regular check-ins, not a black box.",
    image: "/images/capability-development.jpg",
  },
  {
    title: "Launch & Support",
    body: "Deployment, training and ongoing support so the site keeps working long after go-live.",
    image: "/images/capability-launch.jpg",
  },
] as const;

export const facilityStats = [
  { value: "6-8 Weeks", label: "Typical Project Timeline" },
  { value: "100%", label: "Source Code Ownership" },
];
