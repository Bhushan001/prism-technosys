// Mirrors the planned Sanity `service` document type (was `product`).
// Images are CC0 stock photos from openverse.org, stored in public/images/.

export type Service = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  image: string;
};

export const heroSlides = [
  {
    eyebrow: "Web Development",
    title: "Websites Built to Convert",
    copy: "Fast, responsive, SEO-ready websites crafted around your business goals.",
    image: "/images/hero-web-development.jpg",
  },
  {
    eyebrow: "UI/UX Design",
    title: "Design That Feels Effortless",
    copy: "Interfaces your users understand instantly and enjoy using every time.",
    image: "/images/hero-ui-ux-design.jpg",
  },
  {
    eyebrow: "Custom Software",
    title: "Software Shaped Around Your Workflow",
    copy: "Bespoke applications that fit how your business actually works, not the other way around.",
    image: "/images/hero-custom-software.jpg",
  },
  {
    eyebrow: "CMS & E-Commerce",
    title: "Content You Control, Growth You Can Measure",
    copy: "CMS-powered platforms your team can update without waiting on a developer.",
    image: "/images/hero-cms-ecommerce.jpg",
  },
  {
    eyebrow: "Digital Transformation",
    title: "Catalyzing Change, Sculpting Futures",
    copy: "Your partner in the journey of digital transformation — from strategy to launch and beyond.",
    image: "/images/hero-digital-transformation.jpg",
  },
] as const;

export const serviceValueProps = [
  {
    title: "Strategy First",
    body: "Every engagement starts with understanding your users and business goals — not a template.",
  },
  {
    title: "Built to Scale",
    body: "Modern, maintainable architecture on Next.js, React and cloud-native infrastructure.",
  },
  {
    title: "Real Ownership",
    body: "Source code, documentation and CMS access — you own what we build, always.",
  },
] as const;

export const servicesHero = {
  title: "A complete range of digital services, engineered around your goals.",
  copy: "Every engagement is scoped to your business, not a one-size-fits-all package.",
  image: "/images/services-hero.jpg",
};

export const servicesCta = {
  eyebrow: "Start a Project",
  title: "Have a website or product that needs building right?",
  body: "Share your requirements or an existing site to migrate — we'll come back with a proposal and timeline.",
  image: "/images/capability-launch.jpg",
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary:
      "Marketing sites, corporate portals and web apps built on modern, fast, SEO-friendly frameworks.",
    tags: ["Next.js & React", "Headless CMS", "SEO Foundations"],
    image: "/images/hero-web-development.jpg",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    summary:
      "Research-driven design systems and interfaces that make complex products feel simple.",
    tags: ["Design Systems", "Prototyping", "Usability Testing"],
    image: "/images/hero-ui-ux-design.jpg",
  },
  {
    slug: "custom-software",
    name: "Custom Software & Apps",
    summary:
      "Web and mobile applications tailored to your workflows, from MVP to enterprise scale.",
    tags: ["Web Apps", "Mobile Apps", "API Integrations"],
    image: "/images/hero-custom-software.jpg",
  },
  {
    slug: "cms-ecommerce",
    name: "CMS & E-Commerce",
    summary:
      "Content- and commerce-ready platforms your team can manage without developer support.",
    tags: ["Headless CMS", "E-Commerce", "Content Migration"],
    image: "/images/hero-cms-ecommerce.jpg",
  },
];
