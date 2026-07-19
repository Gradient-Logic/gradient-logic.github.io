export type Locale = "el" | "en";

export const SITE = {
  name: "Gradient Logic",
  email: "pavlos.polydoras@gradient-logic.com",
  calendly: "https://calendly.com/hello-gradient-logic/30min",
  linkedin: "https://www.linkedin.com/in/pavlospolydoras/",
  github: "https://github.com/gradient-logic",
  gaId: "G-MQTH1GW250",
} as const;

export const copy = {
  el: {
    nav: {
      services: "Υπηρεσίες",
      work: "Έργα",
      storemate: "StoreMate AI",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      cta: "Ας μιλήσουμε",
    },
    hero: {
      brand: "Gradient Logic",
      headline: "Σχεδιάζουμε και χτίζουμε συστήματα AI που πραγματικά φτάνουν σε παραγωγή.",
      sub: "Από στρατηγική AI σε επιχειρήσεις μέχρι έτοιμα προϊόντα. Από την ιδέα στο deployed σύστημα σε εβδομάδες, όχι σε τρίμηνα.",
      ctaPrimary: "Κλείστε κλήση",
      ctaSecondary: "Δείτε το StoreMate AI",
      location:
        "Βάση στην Αθήνα · Ηγούμαστε AI transformation σε παγκόσμια engineering επιχείρηση",
    },
    bring: {
      title: "Τι φέρνουμε",
      items: [
        "Στρατηγική & αρχιτεκτονική AI για οργανισμούς που κλιμακώνουν",
        "Agents, RAG και copilots μέχρι production με evals και monitoring",
        "Security-first: GDPR, guardrails, governance και access control",
        "StoreMate AI: έτοιμος βοηθός για φυσικά καταστήματα",
      ],
    },
    services: {
      title: "Τι κάνουμε",
      sub: "Δύο τρόποι συνεργασίας: consulting για οργανισμούς, και έτοιμο προϊόν για φυσικά καταστήματα.",
      items: [
        {
          title: "AI Strategy & Architecture",
          desc: "Ανακάλυψη use cases, ROI, επιλογή τεχνολογίας και roadmap. Για οργανισμούς που ξεκινούν ή κλιμακώνουν το AI.",
          bullets: [
            "Προτεραιοποίηση use cases",
            "Enterprise architecture",
            "Αξιολόγηση vendors & μοντέλων",
            "Εκπαίδευση ομάδας",
          ],
        },
        {
          title: "Implementation & Integration",
          desc: "Agents, RAG, MCP και copilots από prototype έως production, με evaluations, security και monitoring.",
          bullets: [
            "Agentic workflows & MCP servers",
            "RAG & knowledge platforms",
            "Evals, guardrails & governance",
            "CI/CD & observability",
          ],
        },
        {
          title: "StoreMate AI",
          desc: "Έτοιμος AI βοηθός για φυσικά καταστήματα. Crawl το site, χτίσε knowledge base, ανέβασε chatbot για πελάτες.",
          bullets: [
            "Αυτόματο web crawling",
            "Εξαγωγή μενού & τιμών",
            "Πολύγλωσσο chat",
            "Self-service setup",
          ],
        },
      ],
    },
    work: {
      title: "Τρέχουσα δουλειά",
      eyebrow: "/01 · work",
      enterpriseTag: "Enterprise Engagement",
      enterpriseTitle:
        "AI Transformation για παγκόσμια engineering επιχείρηση",
      enterpriseDesc:
        "Σχεδιασμός και υλοποίηση της εταιρικής AI προσέγγισης για πολυεθνική με παρουσία σε 50+ χώρες: από strategy και reference architecture έως agent platforms, MCP, RAG και governance.",
      role: "Ρόλος",
      roleValue: "AI Strategy Lead (via consulting engagement)",
      scope: "Scope",
      scopeValue:
        "Enterprise AI architecture, agent frameworks, MCP tooling, use-case prioritization ανά business unit, security & governance",
      deliverables: "Παραδοτέα",
      deliverablesValue:
        "Corporate AI strategy, reference architecture, pilot implementations, knowledge platforms, πρόγραμμα enablement",
      storemateTitle: "StoreMate AI",
      storemateDesc:
        "Το δικό μας προϊόν: AI βοηθός για εστιατόρια, καφέ και retail. Αυτόματο crawling, knowledge base και πολύγλωσσο chat.",
      details: "Λεπτομέρειες",
      previousTitle: "Επιλεγμένα έργα",
      previous: [
        {
          title: "Wholesale operations intelligence",
          desc: "Dashboards πωλήσεων & αποθεμάτων πάνω σε ERP δεδομένα: από CSV/API sync σε actionable KPIs για τη διοίκηση.",
        },
        {
          title: "Industrial technical knowledge assistant",
          desc: "RAG πάνω σε ιδιωτική τεχνική βιβλιοθήκη (PDF, διαγράμματα) με RBAC, citations και audit trail.",
        },
        {
          title: "B2B commerce sales assistant",
          desc: "Βοηθός πωλήσεων για χονδρική: κατανόηση SKU, διαθεσιμότητα, συστάσεις προϊόντων (GR + EN).",
        },
        {
          title: "Transfer Service Copilot",
          desc: "Lead triage & itinerary builder. 60% ταχύτερη απόκριση, +18% conversion.",
        },
        {
          title: "B2B SaaS Knowledge RAG",
          desc: "Ενοποίηση docs + support tickets. Αναζήτηση από λεπτά σε δευτερόλεπτα.",
        },
      ],
    },
    storemate: {
      badge: "Προϊόν",
      title: "StoreMate AI",
      sub: "AI βοηθός πελατών για εστιατόρια, καφέ και retail. Βάλτε ένα URL. Έτοιμο chatbot σε λίγα λεπτά.",
      features: [
        {
          title: "Αυτόματο Crawling",
          desc: "Σαρώνει το site, βρίσκει PDF μενού, εξάγει κάθε προϊόν με τιμή.",
        },
        {
          title: "Knowledge Base",
          desc: "Δομημένη βάση: μενού, ώρες, τοποθεσία, reviews, FAQs.",
        },
        {
          title: "Πολύγλωσσο Chat",
          desc: "Οι πελάτες ρωτούν σε οποιαδήποτε γλώσσα. Απαντήσεις μόνο από το KB, χωρίς hallucinations.",
        },
      ],
      cta: "Ζητήστε demo",
      howTitle: "Πώς λειτουργεί",
      steps: [
        {
          label: "Εισάγετε URL",
          desc: "Οποιοδήποτε site καταστήματος. Προαιρετικά και PDF links.",
        },
        {
          label: "Crawl & Extract",
          desc: "Το AI βρίσκει σελίδες, PDFs, μενού. Εξάγει προϊόντα, τιμές, λεπτομέρειες.",
        },
        {
          label: "Review KB",
          desc: "Δείτε τη δομημένη βάση. Επεξεργαστείτε, συμπληρώστε, re-index.",
        },
        {
          label: "Chat",
          desc: "Οι πελάτες ρωτούν. Το AI απαντά από το KB σε οποιαδήποτε γλώσσα.",
        },
      ],
    },
    approach: {
      title: "Πώς δουλεύουμε",
      expandHint: "Κλικ για λεπτομέρειες",
      collapseHint: "Κλικ για σύμπτυξη",
      outputLabel: "Παραδοτέο",
      fromWorkLabel: "Από πραγματικές συνεργασίες",
      steps: [
        {
          title: "Discovery",
          desc: "Χαρτογραφούμε προβλήματα, δεδομένα και quick wins. Ορίζουμε μετρήσιμα αποτελέσματα. Φεύγουμε με ranked backlog και success metrics, όχι με workshop deck.",
          output: "Ranked backlog + success metrics ανά business unit",
          focus: [
            "Use-case prioritization σε πολυεθνικό engineering οργανισμό (50+ χώρες)",
            "Data landscape: ERP (CSV/API), ιδιωτικές τεχνικές βιβλιοθήκες, product docs + support tickets",
            "Quick-win signals από wholesale ops, B2B sales assist και transfer-service triage",
            "Μετρήσιμα outcomes από την αρχή (response time, conversion, search latency)",
          ],
        },
        {
          title: "Design",
          desc: "Architecture, guardrails, evaluation plan. Security και compliance από την πρώτη μέρα. Interfaces και failure modes πριν γραφτεί production code.",
          output: "Reference architecture + guardrails + evaluation plan",
          focus: [
            "Enterprise AI architecture: agent platforms, MCP tooling, knowledge systems",
            "Security model: RBAC, citations, audit trail (industrial technical RAG)",
            "Privacy-first / GDPR patterns για customer και internal assistants",
            "Eval plan και failure modes πριν το πρώτο production deploy",
          ],
        },
        {
          title: "Build",
          desc: "Prototype σε μέρες, επανάληψη έως production με evals και monitoring. Κάθε loop σφίγγει τα quality gates μέχρι το σύστημα να είναι ασφαλές για ship.",
          output: "Production system με evals, monitoring και quality gates",
          focus: [
            "Pilots → production: technical knowledge RAG, B2B sales assistant, SaaS knowledge platforms",
            "Product loop όπως το StoreMate: crawl → KB → multilingual chat grounded στο KB",
            "Observed lifts: ~60% ταχύτερη απόκριση, +18% conversion, search από λεπτά σε δευτερόλεπτα",
            "CI-friendly evals και observability αντί για one-off demos",
          ],
        },
        {
          title: "Scale",
          desc: "Handover, enablement ομάδας και roadmap για επέκταση ROI. Playbooks και ownership ώστε τα επόμενα use cases να μην ξεκινούν από μηδέν.",
          output: "Enablement program + ownership model + expansion roadmap",
          focus: [
            "Corporate AI strategy και reference architecture σε πολλά business units",
            "Team enablement ώστε οι ομάδες να τρέχουν το επόμενο use case χωρίς να ξαναρχίζουν",
            "Playbooks για agents, RAG και governance reusable σε νέες γεωγραφίες",
            "Handover με μετρήσιμο ROI path, όχι slide deck στο τέλος",
          ],
        },
      ],
    },
    about: {
      title: "Σχετικά",
      p1: "Η Gradient Logic είναι boutique AI consultancy με επικεφαλής τον Pavlos Polydoras, με βάση την Αθήνα. Συνδυάζουμε hands-on engineering με στρατηγική συμβουλευτική για να παραδίδουμε συστήματα AI με πραγματική επιχειρηματική αξία, όχι απλώς εντυπωσιακά demos.",
      p2: "Αυτή τη στιγμή υπηρετούμε ως AI Strategy Lead για παγκόσμια engineering επιχείρηση, σχεδιάζοντας και υλοποιώντας την εταιρική AI προσέγγιση σε πολλά business units και γεωγραφίες, συμπεριλαμβανομένων agent platforms, MCP servers, knowledge systems και governance.",
      bullets: [
        "Βαθιά εμπειρία σε RAG, agentic workflows, MCP και LLM evaluations",
        "Production συστήματα με Claude, GPT-5.6, Gemini και open-source μοντέλα",
        "Privacy-first αρχιτεκτονικές ευθυγραμμισμένες με GDPR",
        "Full-stack: Next.js, Python, TypeScript, Postgres, vector databases",
      ],
      techTitle: "Τεχνολογίες",
      tech: [
        {
          label: "LLMs",
          value:
            "Claude, GPT-5.6, Gemini · open-source: GLM-5.2, Mistral, Llama, Phi",
        },
        {
          label: "Frameworks",
          value: "LangChain, LlamaIndex, MCP, custom agents",
        },
        {
          label: "Infra",
          value: "Next.js, Python, Postgres, ChromaDB, Pinecone, Qdrant",
        },
        {
          label: "Platforms",
          value: "Vercel, Cloudflare, AWS, GCP, on-prem",
        },
      ],
    },
    contact: {
      title: "Ας μιλήσουμε",
      sub: "Πείτε μας τους στόχους σας. Θα προτείνουμε ένα ξεκάθαρο πρώτο βήμα.",
      getInTouch: "Επικοινωνία",
      bookCall: "Κλείστε κλήση 30 λεπτών",
      emailUs: "Στείλτε email",
      goodFit: "Καλή εφαρμογή αν χρειάζεστε",
      fits: [
        "AI strategy για τον οργανισμό σας: από πού να ξεκινήσετε",
        "Agents, RAG, MCP ή copilots σε production",
        "AI βοηθό πελατών για κατάστημα, εστιατόριο ή καφέ",
        "Τεχνικό σύμβουλο που έχει παραδώσει πραγματικά AI συστήματα σε enterprise κλίμακα",
      ],
      start: "Ξεκινήστε συνομιλία",
    },
    footer: {
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      serving: "Βάση στην Αθήνα · Συνεργασίες παγκοσμίως",
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      storemate: "StoreMate AI",
      about: "About",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      brand: "Gradient Logic",
      headline: "We design and build AI systems that actually ship.",
      sub: "From enterprise AI strategy to production-ready products. Idea to deployed AI in weeks, not quarters.",
      ctaPrimary: "Book a call",
      ctaSecondary: "See StoreMate AI",
      location:
        "Based in Athens · Leading AI transformation for a global engineering enterprise",
    },
    bring: {
      title: "What we bring",
      items: [
        "AI strategy & architecture for organizations scaling beyond pilots",
        "Agents, RAG and copilots to production with evals and monitoring",
        "Security-first: GDPR, guardrails, governance and access control",
        "StoreMate AI: a turnkey assistant for physical stores",
      ],
    },
    services: {
      title: "What we do",
      sub: "Two modes: hands-on consulting for enterprises and a turnkey product for brick-and-mortar stores.",
      items: [
        {
          title: "AI Strategy & Architecture",
          desc: "Use-case discovery, ROI modeling, technology selection and roadmap design. For organizations starting or scaling their AI journey.",
          bullets: [
            "Use-case prioritization",
            "Enterprise architecture",
            "Vendor & model evaluation",
            "Team enablement",
          ],
        },
        {
          title: "Implementation & Integration",
          desc: "Building agents, RAG systems, MCP tooling and copilots. From prototype to production with evaluations, security and monitoring.",
          bullets: [
            "Agentic workflows & MCP servers",
            "RAG & knowledge platforms",
            "Evals, guardrails & governance",
            "CI/CD & observability",
          ],
        },
        {
          title: "StoreMate AI",
          desc: "Turnkey AI assistant for physical stores. Crawl any website, build a knowledge base, deploy a customer-facing chatbot.",
          bullets: [
            "Automated web crawling",
            "Menu & price extraction",
            "Multilingual chat",
            "Self-service setup",
          ],
        },
      ],
    },
    work: {
      title: "Current work",
      eyebrow: "/01 · work",
      enterpriseTag: "Enterprise Engagement",
      enterpriseTitle:
        "Leading AI transformation for a global engineering enterprise",
      enterpriseDesc:
        "Designing and leading the corporate AI approach for a multinational engineering company with operations across 50+ countries: from strategy and reference architecture through agent platforms, MCP, RAG and governance.",
      role: "Role",
      roleValue: "AI Strategy Lead (via consulting engagement)",
      scope: "Scope",
      scopeValue:
        "Enterprise-wide AI architecture, agent frameworks, MCP tooling, use-case prioritization across business units, security & governance",
      deliverables: "Deliverables",
      deliverablesValue:
        "Corporate AI strategy, reference architecture, pilot implementations, knowledge platforms, team enablement program",
      storemateTitle: "StoreMate AI",
      storemateDesc:
        "Our product: AI assistant for restaurants, cafes and retail. Automated crawling, knowledge base and multilingual customer chat.",
      details: "Details",
      previousTitle: "Selected work",
      previous: [
        {
          title: "Wholesale operations intelligence",
          desc: "Sales & inventory dashboards on ERP data: CSV/API sync to actionable KPIs for leadership.",
        },
        {
          title: "Industrial technical knowledge assistant",
          desc: "RAG over a private technical library (PDFs, diagrams) with RBAC, citations and an audit trail.",
        },
        {
          title: "B2B commerce sales assistant",
          desc: "Wholesale sales assistant: SKU understanding, availability, product recommendations (GR + EN).",
        },
        {
          title: "Transfer Service Copilot",
          desc: "Lead triage & itinerary builder. 60% faster response, 18% conversion lift.",
        },
        {
          title: "B2B SaaS Knowledge RAG",
          desc: "Unified product docs + support tickets. Search time: minutes to seconds.",
        },
      ],
    },
    storemate: {
      badge: "Product",
      title: "StoreMate AI",
      sub: "An AI customer assistant for restaurants, cafes and retail. Paste a URL, get a trained chatbot in minutes.",
      features: [
        {
          title: "Automated Crawling",
          desc: "Scans the store's website, finds PDF menus, extracts every item with prices.",
        },
        {
          title: "Knowledge Base Generation",
          desc: "Structures everything into a clean KB: menu, hours, location, reviews, FAQs.",
        },
        {
          title: "Multilingual Chat",
          desc: "Customers chat in any language. Answers from the KB only, with no hallucinations.",
        },
      ],
      cta: "Request a demo",
      howTitle: "How it works",
      steps: [
        {
          label: "Paste URL",
          desc: "Enter any store website. Add extra PDF links if needed.",
        },
        {
          label: "Crawl & Extract",
          desc: "AI discovers pages, PDFs, menus. Extracts every item, price and detail.",
        },
        {
          label: "Review KB",
          desc: "See the structured knowledge base. Edit, add missing info, re-index.",
        },
        {
          label: "Chat",
          desc: "Customers ask questions. The AI answers from the KB in any language.",
        },
      ],
    },
    approach: {
      title: "How we work",
      expandHint: "Click to expand",
      collapseHint: "Click to collapse",
      outputLabel: "Output",
      fromWorkLabel: "Drawn from real engagements",
      steps: [
        {
          title: "Discovery",
          desc: "Map your pains, data landscape and quick wins. Define measurable outcomes. We leave with a ranked backlog and success metrics, not a workshop deck.",
          output: "Ranked backlog + success metrics per business unit",
          focus: [
            "Use-case prioritization inside a global engineering enterprise (50+ countries)",
            "Data landscape: ERP feeds (CSV/API), private technical libraries, product docs + support tickets",
            "Quick-win signals from wholesale ops, B2B sales assist and transfer-service triage",
            "Outcomes set early: response time, conversion, search latency",
          ],
        },
        {
          title: "Design",
          desc: "Architecture, guardrails, evaluation plan. Security and compliance from day one. Interfaces and failure modes are explicit before production code.",
          output: "Reference architecture + guardrails + evaluation plan",
          focus: [
            "Enterprise AI architecture: agent platforms, MCP tooling, knowledge systems",
            "Security model: RBAC, citations, audit trail (industrial technical RAG)",
            "Privacy-first / GDPR patterns for customer and internal assistants",
            "Eval plan and failure modes before the first production deploy",
          ],
        },
        {
          title: "Build",
          desc: "Prototype in days, iterate to production with evals and monitoring. Each loop tightens quality gates until the system is safe to ship.",
          output: "Production system with evals, monitoring and quality gates",
          focus: [
            "Pilots to production: technical knowledge RAG, B2B sales assistant, SaaS knowledge platforms",
            "Product loop as in StoreMate: crawl → KB → multilingual chat grounded on the KB",
            "Observed lifts: ~60% faster response, +18% conversion, search from minutes to seconds",
            "CI-friendly evals and observability instead of one-off demos",
          ],
        },
        {
          title: "Scale",
          desc: "Handover, team enablement and roadmap to expand ROI across the organization. Playbooks and ownership so the next use cases do not restart from zero.",
          output: "Enablement program + ownership model + expansion roadmap",
          focus: [
            "Corporate AI strategy and reference architecture across multiple business units",
            "Team enablement so internal teams can run the next use case without a reboot",
            "Reusable playbooks for agents, RAG and governance across geographies",
            "Handover with a measurable ROI path, not a closing slide deck",
          ],
        },
      ],
    },
    about: {
      title: "About",
      p1: "Gradient Logic is a boutique AI consultancy led by Pavlos Polydoras, based in Athens. We combine hands-on engineering with strategic advisory to ship AI systems that create real business value, not just impressive demos.",
      p2: "Currently serving as AI Strategy Lead for a global engineering enterprise, designing and implementing their corporate-wide AI approach across multiple business units and geographies, including agent platforms, MCP servers, knowledge systems and governance.",
      bullets: [
        "Deep experience with RAG, agentic workflows, MCP and LLM evaluations",
        "Production systems with Claude, GPT-5.6, Gemini and open-source models",
        "Privacy-first architectures aligned with GDPR best practices",
        "Full-stack: Next.js, Python, TypeScript, Postgres, vector databases",
      ],
      techTitle: "Tech we work with",
      tech: [
        {
          label: "LLMs",
          value:
            "Claude, GPT-5.6, Gemini · open-source: GLM-5.2, Mistral, Llama, Phi",
        },
        {
          label: "Frameworks",
          value: "LangChain, LlamaIndex, MCP, custom agents",
        },
        {
          label: "Infra",
          value: "Next.js, Python, Postgres, ChromaDB, Pinecone, Qdrant",
        },
        {
          label: "Platforms",
          value: "Vercel, Cloudflare, AWS, GCP, on-prem",
        },
      ],
    },
    contact: {
      title: "Let's talk",
      sub: "Tell us about your goals and we'll suggest a focused starting point.",
      getInTouch: "Get in touch",
      bookCall: "Book a 30-minute call",
      emailUs: "Email us",
      goodFit: "Good fit if you need",
      fits: [
        "AI strategy for your organization: where to start, what to build",
        "Agents, RAG, MCP, or copilots built and deployed to production",
        "An AI customer assistant for your store, restaurant, or cafe",
        "A technical advisor who has shipped real AI systems at enterprise scale",
      ],
      start: "Start a conversation",
    },
    footer: {
      rights: "All rights reserved.",
      serving: "Based in Athens · Serving clients globally",
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];
