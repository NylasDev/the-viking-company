// Central content for the site. Editing copy/links here keeps the section
// components purely presentational.

export type Expertise = {
  num: string;
  title: string;
  body: string;
  tags: string[];
};

export const expertise: Expertise[] = [
  {
    num: "01",
    title: "AI Agents & Automation",
    body: "Autonomous agents that plan, call tools, and finish multi-step work. Built to run unattended, recover from failure, and report what they did.",
    tags: ["Planning", "Tool use", "Long-running"],
  },
  {
    num: "02",
    title: "Skills & Tooling",
    body: "Custom skills and tool integrations that extend what an agent can reach — bespoke APIs, browser and filesystem control, internal systems.",
    tags: ["MCP", "Function calling", "Integrations"],
  },
  {
    num: "03",
    title: "RAG & Retrieval",
    body: "Retrieval-augmented generation done properly: chunking, embeddings, hybrid search, rerankers, and evals that keep answers grounded in your data.",
    tags: ["Embeddings", "Hybrid search", "Evals"],
  },
  {
    num: "04",
    title: "LLM Integration",
    body: "Wiring frontier models — Claude, GPT, and open weights — into products with clean APIs, structured outputs, streaming, and guardrails.",
    tags: ["Claude", "Structured output", "Guardrails"],
  },
  {
    num: "05",
    title: "Mission-Critical Web",
    body: "A decade of front- and back-end craft — from national public-sector platforms to e-commerce. Angular, React, Next.js, Node.js, WordPress.",
    tags: ["Next.js", "Angular", "Node.js"],
  },
  {
    num: "06",
    title: "Deployment & Ops",
    body: "GitLab CI/CD pipelines, hosting, and observability — release automation, monitoring, and the unglamorous work that keeps high-stakes systems alive in production.",
    tags: ["GitLab CI/CD", "Pipelines", "Uptime"],
  },
];

export type ProjectCategory = "public" | "client" | "oss";

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; note: string }
> = {
  public: {
    label: "Public-Sector & High-Stakes Systems",
    note: "Full-stack delivery — UI/UX design, front-end, back-end, and GitLab CI/CD — on systems where downtime and error are not options.",
  },
  client: {
    label: "Client Platforms & Products",
    note: "Brand, commerce, and lead engines shipped for clients across Europe.",
  },
  oss: {
    label: "Open Source & Experiments",
    note: "Automations, modules, and things built to learn something new.",
  },
};

export type Project = {
  name: string;
  year: string;
  kind: string;
  blurb: string;
  category: ProjectCategory;
  href?: string; // omitted = confidential / internal
  code?: boolean; // true = links to a GitHub repo
};

export const projects: Project[] = [
  // ---- Public-sector / high-stakes ----
  {
    name: "e-Licitație (SEAP / SICAP)",
    year: "Gov",
    kind: "Public Sector · Procurement",
    blurb:
      "Full-stack engineering on specific modules and business flows of Romania's national electronic public-procurement platform — UI/UX design through to back-end services, with the front-end functionality those workflows demand. Built for uptime, data integrity, and audit at national scale.",
    category: "public",
    href: "https://www.e-licitatie.ro/pub",
  },
  {
    name: "e-Tarif Giurgiu",
    year: "Gov",
    kind: "Public Sector · Tolling",
    blurb:
      "End-to-end delivery of modules for the Giurgiu Danube-bridge toll-and-tariff system — UI/UX design and responsive front-end over the back-end business logic — collecting public revenue reliably, right at the border.",
    category: "public",
    href: "https://e-tarifgiurgiu.ro/etgp-mobile/",
  },
  {
    name: "Internal Taxation Systems",
    year: "—",
    kind: "Public Sector · Fiscal",
    blurb:
      "Confidential fiscal back-office systems — specific taxation modules and business flows built front-end to back-end, plus the GitLab CI/CD pipelines and release automation behind them. Engineered for accuracy, auditability, and uptime.",
    category: "public",
  },

  // ---- Client platforms ----
  {
    name: "Bavaria Yachts Romania",
    year: "2024",
    kind: "E-commerce · Web",
    blurb:
      "Digital storefront and catalogue for the Romanian division of Bavaria Yachts — sailing and motor yachts, built mobile-first with payment and lead capture.",
    category: "client",
    href: "https://bavariayachts.ro/",
  },
  {
    name: "Yacht One",
    year: "Web",
    kind: "Charter · Brokerage",
    blurb:
      "Digital showroom and inquiry engine for a luxury yacht-charter brokerage — “Capture the Dream”: a curated fleet gallery, destinations, and a booking funnel.",
    category: "client",
    href: "https://yacht-one.com/",
  },
  {
    name: "Viking Bazar",
    year: "Web",
    kind: "E-commerce · Web",
    blurb:
      "Online store for recreational boats and marine gear — SeaStorm single-mould boats and accessories — with catalogue, pricing, and a clean checkout.",
    category: "client",
    href: "https://vikingbazar.ro/",
  },
  {
    name: "Wheelmarket",
    year: "2024",
    kind: "E-commerce · Web",
    blurb:
      "Specialised marketplace for automotive wheels and accessories in Romania — product discovery, fitment search, and a checkout tuned for conversion.",
    category: "client",
    href: "https://wheelmarket.ro/",
  },

  // ---- Open source / experiments ----
  {
    name: "yacht-scraper",
    year: "2024",
    kind: "Automation · Puppeteer",
    blurb:
      "Headless Puppeteer pipeline that scrapes, normalises, and de-duplicates boat listings across sources — the data layer behind a yacht marketplace.",
    category: "oss",
    href: "https://github.com/nylasdev/yacht-scraper",
    code: true,
  },
  {
    name: "pdf-scraper-web",
    year: "2024",
    kind: "Automation · Data",
    blurb:
      "Service that crawls a target site, harvests linked PDFs, and extracts their text — feedstock for downstream RAG indexing and analysis.",
    category: "oss",
    href: "https://github.com/nylasdev/pdf-scraper-web",
    code: true,
  },
  {
    name: "Narrative Health States",
    year: "2023",
    kind: "Module · JavaScript",
    blurb:
      "A Foundry VTT module that swaps raw hit-point numbers for narrative health descriptors when players hover an enemy token — published to the community.",
    category: "oss",
    href: "https://github.com/nylasdev/narrative-health-states-by-nylasdev",
    code: true,
  },
  {
    name: "DeepLearning FlappyBird",
    year: "2022",
    kind: "ML · Reinforcement Learning",
    blurb:
      "An agent that learns to play Flappy Bird from raw pixels using Deep Q-learning — an early dive into reinforcement learning and reward shaping.",
    category: "oss",
    href: "https://github.com/nylasdev/DeepLearningFlappyBird",
    code: true,
  },
];

// A project of a different kind — where the engineering started.
export const soulProject = {
  name: "NERVA Orbital",
  kind: "Soul project · Politehnica Bucharest",
  blurb:
    "Where it started. NERVA was a government-funded Romanian R&D program developing a homegrown platform to launch satellites into orbit — a decommissioned rocket vehicle re-engineered toward horizontal orbital flight at 160 km, proven by live test-stand firings. I built telemetry modules for the vehicle: my first real lesson in systems where the data has to be exactly right.",
  video: "https://www.youtube.com/watch?v=d3_Z7hstI3g",
  site: "https://www.addastronautica.ro",
};

export const social = {
  github: "https://github.com/nylasdev",
  linkedin: "https://www.linkedin.com/in/sergiu-vataman-b18259162/",
  // Discord handle — included per the security note: a username alone exposes
  // nothing sensitive; worst case is an unsolicited DM.
  discord: "nylas_",
  email: "sales@thevikingcompany.eu",
  devSite: "https://theviking.dev",
  youtube: "https://www.youtube.com/channel/UCibBEZniv-x51deDpKWFfqA",
};
