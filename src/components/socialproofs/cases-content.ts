// Organized by audience pain point categories
export const painPointCategories = [
    {
      id: "adoption",
      label: "User Adoption",
      description: "Solutions for products struggling with early traction and user engagement"
    },
    {
      id: "discoverability",
      label: "Discoverability",
      description: "Strategies for products lost in crowded markets needing visibility"
    },
    {
      id: "documentation",
      label: "Developer Experience",
      description: "Improvements for technical products with friction in the developer journey"
    },
    {
      id: "conversion",
      label: "Conversion",
      description: "Tactics for products with traffic but struggling to convert users"
    }
  ];
  
  // Enhanced case studies with the requested additions
  export const caseStudies = [
      {
        logo: "/images/companies-light/pullflow.svg",
        alt: "pullflow",
        title: "0 to PMF with a Dev-first GTM strategy",
        tags: ["Devtools", "AI", "B2B SaaS"],
        painPointCategory: "adoption", // Maps to painPointCategories
        snapshot: {
          "Signups": "+43%",
          "Activation": "+27%",
          "Engagement": "+24%",
        },
        // Narrative Framework: Challenge → Approach → Results → Learning
        challenge: "Low early adoption, unclear onboarding journey for a complex developer workflow tool",
        approach: "Led GTM, onboarding strategy, analytics infra with focus on developer experience",
        action: "Created persona-based funnels, tracked behavior with PostHog + Retool, built investor narrative",
        results: "Improved user activation by 27%, increased engagement metrics, and secured additional funding based on clear product-market fit indicators",
        learning: "Developer tools require hyper-specific onboarding paths based on existing workflows, not generic product tours",
        testimonial: {
          quote: "The persona-based approach completely changed how we think about our product. We're now seeing much better engagement from day one.",
          author: "Zak Mandhro",
          role: "CEO @PullFlow"
        },
        howDetails: [
          "Conducted 27 user interviews to identify personas and pain points",
          "Implemented custom event tracking to identify friction points in the onboarding flow",
          "Created targeted content for each user segment based on their technical background",
          "Built and tested multiple onboarding pathways using feature flags"
        ],
        ctaLink: "https://oceanic-fireman-8fc.notion.site/Pullflow-From-pre-GTM-to-steady-traction-Rabia-Ahmed-8171faba2e394fa099e512c40cfc1f63",
      },
      {
        logo: "/images/companies-light/xord.svg",
        alt: "xord",
        title: "SEO‑led growth for a Web3 R&D studio",
        tags: ["Web3", "SEO", "Content"],
        painPointCategory: "discoverability",
        snapshot: {
          "Organic traffic": "+110%",
          "MQLs": "+35%",
          "CAC": "↓ 23%",
        },
        challenge: "Crowded crypto SERPs, paid CAC climbing 35% QoQ, making customer acquisition unsustainable",
        approach: "SEO & Growth Lead, managed a 5‑person squad focused on organic acquisition",
        action: "Engineered schema, pillar‑cluster strategy, & community‑driven link‑building via Discord",
        results: "Doubled organic traffic within 6 months, increased qualified leads by 35%, while reducing overall customer acquisition costs by 23%",
        learning: "In Web3, technical credibility is a prerequisite - community-driven content performs best when backed by demonstrable expertise",
        testimonial: {
          quote: "Our content is finally reaching the right people. The structured approach to SEO is transforming our marketing ROI.",
          author: "Arham Tariq",
          role: "Marketing Director @Xord"
        },
        howDetails: [
          "Conducted SERP analysis across 150+ crypto and blockchain-related topics",
          "Developed an internal wiki of technical terminology and educational resources",
          "Created a Discord reward system for community contributions to content",
          "Implemented schema markup across all technical documentation"
        ],
        ctaLink: "https://xord.com",
      },
      {
        logo: "/images/companies-light/alchemy.svg",
        alt: "alchemy",
        title: "Dev‑docs SEO & content‑ops overhaul",
        tags: ["Developer Docs", "SEO", "Webflow"],
        painPointCategory: "documentation",
        snapshot: {
          "Doc Traffic": "↑ 62%",
          "Top Keywords": "+20",
          "Velocity": "2x",
        },
        challenge: "Developer docs buried in sub‑folders, weak indexing, and a bottlenecked publishing flow hampering developer adoption",
        approach: "Fractional PMM & Webflow builder focused on technical documentation improvements",
        action: "Audited doc structure, mapped keyword clusters, set canonical and schema markup, migrated 200+ pages into Webflow CMS",
        results: "Increased documentation traffic by 62%, improved search visibility for 20 high-intent keywords, and doubled content publishing velocity",
        learning: "Technical documentation is often an overlooked but high-leverage marketing asset that directly impacts product adoption",
        testimonial: {
          quote: "The documentation is now actually helping us close deals. Prospects are finding answers themselves and moving through the funnel faster.",
          author: "Brady O. Werkheiser",
          role: "Growth @Alchemy"
        },
        howDetails: [
          "Performed comprehensive SEO audit focusing on technical documentation architecture",
          "Created templates and style guides for consistent documentation format",
          "Trained the engineering team on documentation best practices",
          "Implemented a new publishing workflow to reduce bottlenecks"
        ],
        ctaLink: "https://alchemy.com",
      },
      {
        logo: "/images/companies-light/expedite.svg",
        alt: "expedite",
        title: "Landing‑page CRO for a Web3 game launcher",
        tags: ["Web3", "CRO", "Funnel"],
        painPointCategory: "conversion",
        snapshot: {
          "Signup Conv.": "+37%",
          "Bounce Rate": "↓ 28%",
          "Traffic": "↑ 45%",
        },
        challenge: "High bounce rate on pre‑sale pages, weak story alignment causing poor conversion despite good traffic",
        approach: "SEO + Web Lead, owned copy, UX, and funnel testing to improve conversion metrics",
        action: "Wrote 25 intent‑driven pages, ran iterative A/B tests, introduced trust badges & demo GIFs",
        results: "Improved signup conversion by 37%, reduced bounce rate by 28%, and increased overall traffic quality and quantity",
        learning: "For Web3 products, addressing both technical credibility and user-friendly explanations simultaneously is critical for conversion",
        testimonial: {
          quote: "The way our story is now presented speaks directly to our users. The improved metrics are great, but the clarity of our message is the real win.",
          author: "Sara Riaz",
          role: "Product Manager @ExpediteStudio"
        },
        howDetails: [
          "Analyzed heatmaps and user recordings to identify drop-off points",
          "Created and tested multiple value proposition statements",
          "Implemented progressive disclosure of technical details based on user engagement signals",
          "Developed and A/B tested trust-building elements specific to the Web3 audience"
        ],
        ctaLink: "https://expeditestudio.com",
      },
    ];