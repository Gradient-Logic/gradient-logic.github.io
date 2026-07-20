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
      headline:
        "Σχεδιάζουμε και χτίζουμε συστήματα AI που πραγματικά φτάνουν σε παραγωγή.",
      sub: "Από στρατηγική AI σε οργανισμούς μέχρι έτοιμα προϊόντα. Από την ιδέα στο live σύστημα σε εβδομάδες, όχι σε τρίμηνα.",
      ctaPrimary: "Κλείστε ραντεβού",
      ctaSecondary: "Δείτε το StoreMate AI",
      location:
        "Με έδρα την Αθήνα · Οδηγούμε τον μετασχηματισμό AI σε παγκόσμια βιομηχανική εταιρεία",
    },
    bring: {
      title: "Τι φέρνουμε",
      items: [
        "Στρατηγική και αρχιτεκτονική AI για οργανισμούς που θέλουν να περάσουν από τα πιλοτικά στην παραγωγή",
        "Agents, RAG και copilots μέχρι την παραγωγή, με αξιολογήσεις και παρακολούθηση",
        "Specs για hardware και υποδομή on-prem για τοπικά LLMs",
        "Ασφάλεια από την πρώτη μέρα: GDPR, guardrails, διακυβέρνηση και έλεγχος πρόσβασης",
        "StoreMate AI: έτοιμος βοηθός για φυσικά καταστήματα",
      ],
    },
    services: {
      title: "Τι κάνουμε",
      sub: "Δύο τρόποι συνεργασίας: συμβουλευτική για οργανισμούς και έτοιμο προϊόν για φυσικά καταστήματα.",
      items: [
        {
          title: "AI Strategy & Architecture",
          desc: "Βρίσκουμε use cases, μοντελοποιούμε το ROI, επιλέγουμε τεχνολογία και σχεδιάζουμε οδικό χάρτη. Συμπεριλαμβάνει specs για on-prem hosting τοπικών LLMs. Για οργανισμούς που ξεκινούν ή κλιμακώνουν το AI.",
          bullets: [
            "Προτεραιοποίηση use cases",
            "Αρχιτεκτονική σε επίπεδο οργανισμού",
            "Specs hardware για τοπικά LLMs",
            "Αξιολόγηση vendors και μοντέλων",
            "Εκπαίδευση ομάδας",
          ],
        },
        {
          title: "Implementation & Integration",
          desc: "Χτίζουμε agents, RAG, MCP και copilots: από πρωτότυπο μέχρι παραγωγή, με αξιολογήσεις, ασφάλεια και παρακολούθηση.",
          bullets: [
            "Agentic workflows και MCP servers",
            "RAG και πλατφόρμες γνώσης",
            "On-prem / τοπικό inference όπου χρειάζεται",
            "Αξιολογήσεις, guardrails και διακυβέρνηση",
            "CI/CD και observability",
          ],
        },
        {
          title: "StoreMate AI",
          desc: "Έτοιμος βοηθός AI για φυσικά καταστήματα. Σαρώνει το site, χτίζει βάση γνώσης και ανεβάζει chatbot για τους πελάτες.",
          bullets: [
            "Αυτόματο web crawling",
            "Εξαγωγή μενού και τιμών",
            "Πολύγλωσσο chat",
            "Εγκατάσταση χωρίς τεχνική ομάδα",
          ],
        },
      ],
    },
    work: {
      title: "Τρέχουσα δουλειά",
      eyebrow: "/01 · work",
      enterpriseTag: "Συνεργασία με οργανισμό",
      enterpriseTitle:
        "Μετασχηματισμός AI σε παγκόσμια βιομηχανική εταιρεία",
      enterpriseDesc:
        "Σχεδιάζουμε και υλοποιούμε την εταιρική προσέγγιση AI για πολυεθνική με παρουσία σε πάνω από 50 χώρες: από στρατηγική και αρχιτεκτονική αναφοράς μέχρι πλατφόρμες agents, MCP, RAG και διακυβέρνηση.",
      role: "Ρόλος",
      roleValue: "AI Strategy Lead (μέσω συμβουλευτικής συνεργασίας)",
      scope: "Εύρος",
      scopeValue:
        "Αρχιτεκτονική AI σε όλο τον οργανισμό, agent frameworks, εργαλεία MCP, προτεραιοποίηση use cases ανά μονάδα, ασφάλεια και διακυβέρνηση",
      deliverables: "Παραδοτέα",
      deliverablesValue:
        "Εταιρική στρατηγική AI, αρχιτεκτονική αναφοράς, πιλοτικές υλοποιήσεις, πλατφόρμες γνώσης, πρόγραμμα εκπαίδευσης ομάδων",
      storemateTitle: "StoreMate AI",
      storemateDesc:
        "Το προϊόν μας: βοηθός AI για εστιατόρια, καφέ και λιανική. Αυτόματο crawling, βάση γνώσης και πολύγλωσσο chat για πελάτες.",
      details: "Λεπτομέρειες",
      infraTag: "Σε εξέλιξη",
      infraTitle: "On-prem hosting για τοπικά LLMs",
      infraDesc:
        "Specs για hardware και υποδομή ώστε μεγάλος οργανισμός να τρέχει τοπικά LLMs on-prem: διαστασιολόγηση GPU, inference stack, χωρητικότητα και απαιτήσεις ιδιωτικότητας.",
      previousTitle: "Επιλεγμένα έργα",
      previous: [
        {
          title: "Wholesale operations intelligence",
          desc: "Dashboards πωλήσεων και αποθεμάτων πάνω σε δεδομένα ERP: από συγχρονισμό CSV/API σε KPIs που αξιοποιεί η διοίκηση.",
        },
        {
          title: "Industrial technical knowledge assistant",
          desc: "RAG πάνω σε ιδιωτική τεχνική βιβλιοθήκη (PDF, διαγράμματα) με RBAC, παραπομπές και audit trail.",
        },
        {
          title: "B2B commerce sales assistant",
          desc: "Βοηθός πωλήσεων για χονδρική: κατανόηση SKU, διαθεσιμότητα, συστάσεις προϊόντων (ΕΛ + EN).",
        },
        {
          title: "Transfer Service Copilot",
          desc: "Διαλογή leads και κατασκευή δρομολογίων. 60% ταχύτερη απόκριση, +18% conversion.",
        },
        {
          title: "B2B SaaS Knowledge RAG",
          desc: "Ενοποίηση docs προϊόντος και ticket υποστήριξης. Αναζήτηση από λεπτά σε δευτερόλεπτα.",
        },
      ],
    },
    storemate: {
      badge: "Προϊόν",
      title: "StoreMate AI",
      sub: "Βοηθός AI για πελάτες σε εστιατόρια, καφέ και λιανική. Βάζετε ένα URL. Σε λίγα λεπτά έχετε εκπαιδευμένο chatbot.",
      features: [
        {
          title: "Αυτόματο crawling",
          desc: "Σαρώνει το site του καταστήματος, βρίσκει PDF μενού και εξάγει κάθε προϊόν με την τιμή του.",
        },
        {
          title: "Βάση γνώσης",
          desc: "Όλα σε δομημένη βάση: μενού, ωράριο, τοποθεσία, κριτικές, συχνές ερωτήσεις.",
        },
        {
          title: "Πολύγλωσσο chat",
          desc: "Οι πελάτες ρωτούν σε όποια γλώσσα θέλουν. Απαντήσεις μόνο από τη βάση γνώσης, χωρίς παραισθήσεις.",
        },
      ],
      cta: "Ζητήστε επίδειξη",
      howTitle: "Πώς λειτουργεί",
      steps: [
        {
          label: "Βάζετε URL",
          desc: "Οποιοδήποτε site καταστήματος. Προαιρετικά και σύνδεσμοι PDF.",
        },
        {
          label: "Crawl & Extract",
          desc: "Το AI βρίσκει σελίδες, PDF και μενού. Εξάγει προϊόντα, τιμές και λεπτομέρειες.",
        },
        {
          label: "Review KB",
          desc: "Βλέπετε τη δομημένη βάση. Διορθώνετε, συμπληρώνετε, ξαναχτίζετε το ευρετήριο.",
        },
        {
          label: "Chat",
          desc: "Οι πελάτες ρωτούν. Το AI απαντά από τη βάση γνώσης σε οποιαδήποτε γλώσσα.",
        },
      ],
    },
    approach: {
      title: "Πώς δουλεύουμε",
      expandHint: "Πατήστε για λεπτομέρειες",
      collapseHint: "Πατήστε για κλείσιμο",
      outputLabel: "Παραδοτέο",
      fromWorkLabel: "Από πραγματικές συνεργασίες",
      steps: [
        {
          title: "Discovery",
          desc: "Χαρτογραφούμε προβλήματα, δεδομένα και γρήγορες νίκες. Ορίζουμε μετρήσιμα αποτελέσματα. Φεύγετε με backlog κατά προτεραιότητα και μετρήσεις επιτυχίας, όχι με παρουσίαση workshop.",
          output:
            "Backlog κατά προτεραιότητα και μετρήσεις επιτυχίας ανά επιχειρησιακή μονάδα",
          focus: [
            "Προτεραιοποίηση use cases σε παγκόσμιο βιομηχανικό οργανισμό (50+ χώρες)",
            "Τοπίο δεδομένων: ERP (CSV/API), ιδιωτικές τεχνικές βιβλιοθήκες, docs προϊόντος και ticket υποστήριξης",
            "Σήματα γρήγορης νίκης από wholesale ops, B2B sales assist και triage σε transfer service",
            "Μετρήσιμα αποτελέσματα από την αρχή (χρόνος απόκρισης, conversion, καθυστέρηση αναζήτησης)",
          ],
        },
        {
          title: "Design",
          desc: "Αρχιτεκτονική, guardrails, πλάνο αξιολόγησης. Ασφάλεια και συμμόρφωση από την πρώτη μέρα. Διεπαφές και τρόποι αποτυχίας πριν γραφτεί κώδικας παραγωγής.",
          output:
            "Αρχιτεκτονική αναφοράς, guardrails και πλάνο αξιολόγησης",
          focus: [
            "Αρχιτεκτονική AI σε επίπεδο οργανισμού: πλατφόρμες agents, εργαλεία MCP, συστήματα γνώσης",
            "Specs hardware και υποδομής για on-prem hosting τοπικών LLMs",
            "Μοντέλο ασφαλείας: RBAC, παραπομπές, audit trail (βιομηχανικό τεχνικό RAG)",
            "Πρότυπα privacy-first / GDPR για βοηθούς πελατών και εσωτερικές εφαρμογές",
            "Πλάνο αξιολόγησης και τρόποι αποτυχίας πριν το πρώτο production deploy",
          ],
        },
        {
          title: "Build",
          desc: "Πρωτότυπο σε μέρες, επανάληψη μέχρι την παραγωγή με αξιολογήσεις και παρακολούθηση. Κάθε κύκλος σφίγγει τα ποιοτικά κριτήρια μέχρι το σύστημα να είναι ασφαλές για παράδοση.",
          output:
            "Σύστημα σε παραγωγή με αξιολογήσεις, παρακολούθηση και ποιοτικά κριτήρια",
          focus: [
            "Από πιλοτικά σε παραγωγή: τεχνικό knowledge RAG, B2B sales assistant, πλατφόρμες γνώσης SaaS",
            "Κύκλος προϊόντος όπως το StoreMate: crawl → βάση γνώσης → πολύγλωσσο chat δεμένο στη βάση",
            "Μετρημένα αποτελέσματα: ~60% ταχύτερη απόκριση, +18% conversion, αναζήτηση από λεπτά σε δευτερόλεπτα",
            "Αξιολογήσεις που τρέχουν στο CI και observability, όχι εφάπαξ demos",
          ],
        },
        {
          title: "Scale",
          desc: "Παράδοση, εκπαίδευση ομάδας και οδικός χάρτης για επέκταση του ROI. Playbooks και ιδιοκτησία ώστε τα επόμενα use cases να μην ξεκινούν από μηδέν.",
          output:
            "Πρόγραμμα εκπαίδευσης, μοντέλο ιδιοκτησίας και οδικός χάρτης επέκτασης",
          focus: [
            "Εταιρική στρατηγική AI και αρχιτεκτονική αναφοράς σε πολλές επιχειρησιακές μονάδες",
            "Εκπαίδευση ομάδων ώστε να τρέχουν το επόμενο use case χωρίς επανεκκίνηση",
            "Επαναχρησιμοποιήσιμα playbooks για agents, RAG και διακυβέρνηση σε νέες γεωγραφίες",
            "Παράδοση με μετρήσιμο μονοπάτι ROI, όχι slide deck στο τέλος",
          ],
        },
      ],
    },
    about: {
      title: "Σχετικά",
      p1: "Η Gradient Logic είναι boutique συμβουλευτική AI με επικεφαλής τον Pavlos Polydoras, με έδρα την Αθήνα. Συνδυάζουμε πρακτική μηχανική με στρατηγική συμβουλευτική για να παραδίδουμε συστήματα AI με πραγματική επιχειρηματική αξία, όχι απλώς εντυπωσιακά demos.",
      p2: "Αυτή τη στιγμή έχουμε τον ρόλο του AI Strategy Lead σε παγκόσμια βιομηχανική εταιρεία: σχεδιάζουμε και υλοποιούμε την εταιρική προσέγγιση AI σε πολλές μονάδες και γεωγραφίες, με πλατφόρμες agents, MCP servers, συστήματα γνώσης και διακυβέρνηση. Παράλληλα σχεδιάζουμε specs για on-prem υποδομή τοπικών LLMs σε οργανισμό μεγάλης κλίμακας.",
      bullets: [
        "Βαθιά εμπειρία σε RAG, agentic workflows, MCP και αξιολογήσεις LLM",
        "Συστήματα σε παραγωγή με Claude, GPT-5.6, Gemini και open-source μοντέλα",
        "Specs για hardware και on-prem hosting τοπικών LLMs",
        "Αρχιτεκτονικές με προτεραιότητα στην ιδιωτικότητα, ευθυγραμμισμένες με GDPR",
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
          value: "Vercel, Cloudflare, AWS, GCP, on-prem GPU / local inference",
        },
      ],
    },
    contact: {
      title: "Ας μιλήσουμε",
      sub: "Πείτε μας τους στόχους σας. Θα προτείνουμε ένα συγκεκριμένο πρώτο βήμα.",
      getInTouch: "Επικοινωνία",
      bookCall: "Κλείστε κλήση 30 λεπτών",
      emailUs: "Στείλτε email",
      goodFit: "Ταιριάζουμε αν χρειάζεστε",
      fits: [
        "Στρατηγική AI για τον οργανισμό σας: από πού να ξεκινήσετε και τι να χτίσετε",
        "Agents, RAG, MCP ή copilots μέχρι την παραγωγή",
        "Specs για hardware και on-prem hosting τοπικών LLMs",
        "Βοηθό AI για το κατάστημα, το εστιατόριο ή το καφέ σας",
        "Τεχνικό σύμβουλο που έχει παραδώσει πραγματικά συστήματα AI σε κλίμακα οργανισμού",
      ],
      start: "Ξεκινήστε συνομιλία",
    },
    footer: {
      rights: "Με την επιφύλαξη παντός δικαιώματος.",
      serving: "Με έδρα την Αθήνα · Συνεργασίες παγκοσμίως",
      agentChannel: "agent channel · ready",
      eggToast: "Βρήκες το minimum. Ωραία κατάβαση.",
      eggDismiss: "OK",
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
        "Hardware and infra specs for hosting local LLMs on-prem",
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
          desc: "Use-case discovery, ROI modeling, technology selection and roadmap design. Includes specs for on-prem hosting of local LLMs. For organizations starting or scaling their AI journey.",
          bullets: [
            "Use-case prioritization",
            "Enterprise architecture",
            "Hardware specs for local LLMs",
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
            "On-prem / local inference where it is required",
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
      infraTag: "In progress",
      infraTitle: "On-prem hosting for local LLMs",
      infraDesc:
        "Hardware and infrastructure specs so a large organization can run local LLMs on-prem: GPU sizing, inference stack, capacity planning and privacy requirements.",
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
            "Hardware and infra specs for on-prem hosting of local LLMs",
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
      p2: "Currently serving as AI Strategy Lead for a global engineering enterprise, designing and implementing their corporate-wide AI approach across multiple business units and geographies, including agent platforms, MCP servers, knowledge systems and governance. In parallel, we are shaping hardware and infra specs for on-prem local LLM hosting at a large organization.",
      bullets: [
        "Deep experience with RAG, agentic workflows, MCP and LLM evaluations",
        "Production systems with Claude, GPT-5.6, Gemini and open-source models",
        "Hardware specs and on-prem hosting for local LLMs",
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
          value: "Vercel, Cloudflare, AWS, GCP, on-prem GPU / local inference",
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
        "Hardware specs and on-prem hosting for local LLMs",
        "An AI customer assistant for your store, restaurant, or cafe",
        "A technical advisor who has shipped real AI systems at enterprise scale",
      ],
      start: "Start a conversation",
    },
    footer: {
      rights: "All rights reserved.",
      serving: "Based in Athens · Serving clients globally",
      agentChannel: "agent channel · ready",
      eggToast: "Minimum reached. Nice descent.",
      eggDismiss: "OK",
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];
