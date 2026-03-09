"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Shield,
  Layers,
  Store,
  Search,
  Bot,
  CheckCircle2,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CALENDLY = "https://calendly.com/hello-gradient-logic/30min";
const EMAIL = "pavlos.polydoras@gradient-logic.com";

export default function GradientLogicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-40 border-b border-slate-200 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight"
          >
            Gradient <span className="text-indigo-600">Logic</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-indigo-700">
              Services
            </a>
            <a href="#work" className="hover:text-indigo-700">
              Work
            </a>
            <a href="#storemate" className="hover:text-indigo-700">
              StoreMate AI
            </a>
            <a href="#about" className="hover:text-indigo-700">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-700">
              Contact
            </a>
          </nav>
          <Button asChild className="rounded-2xl">
            <a href="#contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Let&apos;s talk
            </a>
          </Button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl/tight font-extrabold md:text-6xl/tight"
            >
              We design and build AI systems{" "}
              <span className="text-indigo-600">that actually ship.</span>
            </motion.h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              From enterprise AI strategy to production-ready products. We help
              organizations go from idea to deployed AI &mdash; in weeks, not
              quarters.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl"
              >
                <a href="#storemate">See StoreMate AI</a>
              </Button>
            </div>
            <p className="mt-8 text-xs text-slate-500">
              Based in Athens &middot; Currently leading AI transformation for a
              global engineering enterprise
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-indigo-100/60 blur-3xl" />
              <Card className="relative border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">
                    What we bring to the table
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Brain className="mt-0.5 h-4 w-4 text-indigo-600" />
                      Enterprise AI strategy &amp; architecture design
                    </li>
                    <li className="flex items-start gap-2">
                      <Layers className="mt-0.5 h-4 w-4 text-indigo-600" />
                      Agents, RAG systems, and copilots &mdash; built to
                      production
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-0.5 h-4 w-4 text-indigo-600" />
                      Security-first approach: GDPR, evals, guardrails
                    </li>
                    <li className="flex items-start gap-2">
                      <Store className="mt-0.5 h-4 w-4 text-indigo-600" />
                      StoreMate AI &mdash; our own product for physical stores
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-4xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Two modes: hands-on consulting for enterprises, and a turnkey
            product for brick-and-mortar stores.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI Strategy & Architecture",
                desc: "Use-case discovery, ROI modeling, technology selection, and roadmap design. For organizations starting or scaling their AI journey.",
                bullets: [
                  "Use-case prioritization",
                  "Enterprise architecture",
                  "Vendor & model evaluation",
                  "Team enablement",
                ],
              },
              {
                icon: Layers,
                title: "Implementation & Integration",
                desc: "Building agents, RAG systems, and copilots. From prototype to production with evaluations and monitoring.",
                bullets: [
                  "Agentic workflows",
                  "RAG & knowledge retrieval",
                  "Evals & guardrails",
                  "CI/CD & observability",
                ],
              },
              {
                icon: Store,
                title: "StoreMate AI (Product)",
                desc: "Turnkey AI assistant for physical stores. Crawl any website, build a knowledge base, deploy a customer-facing chatbot.",
                bullets: [
                  "Automated web crawling",
                  "Menu & price extraction",
                  "Multilingual chat",
                  "Self-service setup",
                ],
              },
            ].map((s, i) => (
              <Card key={i} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <s.icon className="mb-2 h-6 w-6 text-indigo-600" />
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                    {s.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE CASE STUDY ── */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold md:text-4xl">Current work</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-indigo-100 bg-indigo-50/30 shadow-md">
            <CardHeader>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                Enterprise Engagement
              </div>
              <CardTitle className="text-xl">
                Leading AI Transformation for a Global Engineering Enterprise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Designing and leading the implementation of the entire corporate
                AI approach for a multinational engineering company with
                operations across 50+ countries.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  {
                    label: "Role",
                    value:
                      "AI Strategy Lead (via consulting engagement)",
                  },
                  {
                    label: "Scope",
                    value:
                      "Enterprise-wide AI architecture, agent framework selection, use-case prioritization across business units",
                  },
                  {
                    label: "Deliverables",
                    value:
                      "Corporate AI strategy, reference architecture, pilot implementations, team enablement program",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-semibold text-slate-900">
                      {item.label}:
                    </span>{" "}
                    <span className="text-slate-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>StoreMate AI</span>
                  <a
                    href="#storemate"
                    className="inline-flex items-center gap-1 text-sm text-indigo-600"
                  >
                    Details <ExternalLink className="h-3 w-3" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Our own product: AI assistant for restaurants, cafes, and
                  retail stores. Automated crawling, knowledge base generation,
                  and multilingual customer chat.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Previous Work</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>
                      <strong>Transfer Service Copilot</strong> &mdash; Lead
                      triage &amp; itinerary builder. 60% faster response, 18%
                      conversion lift.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>
                      <strong>B2B SaaS Knowledge RAG</strong> &mdash; Unified
                      product docs + support tickets. Search time: minutes to
                      seconds.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── STOREMATE AI ── */}
      <section
        id="storemate"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                <Store className="h-3.5 w-3.5" /> Product
              </div>
              <h2 className="text-2xl font-bold md:text-4xl">
                StoreMate AI
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                An AI customer assistant for restaurants, cafes, and retail
                stores. Paste a URL, get a fully trained chatbot in minutes.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: Search,
                    title: "Automated Crawling",
                    desc: "Scans the store's website, finds PDF menus, extracts every item with prices.",
                  },
                  {
                    icon: Brain,
                    title: "Knowledge Base Generation",
                    desc: "Structures everything into a clean KB: menu, hours, location, reviews, FAQs.",
                  },
                  {
                    icon: Bot,
                    title: "Multilingual Chat",
                    desc: "Customers chat in any language. The AI answers from the KB only -- no hallucinations.",
                  },
                ].map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <f.icon className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                    <div>
                      <div className="text-sm font-semibold">{f.title}</div>
                      <div className="text-sm text-slate-600">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#contact">
                    Request a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-indigo-100/40 blur-2xl" />
              <Card className="relative shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base">How it works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        label: "Paste URL",
                        desc: "Enter any store website. Add extra PDF links if needed.",
                      },
                      {
                        step: "2",
                        label: "Crawl & Extract",
                        desc: "AI discovers pages, PDFs, menus. Extracts every item, price, and detail.",
                      },
                      {
                        step: "3",
                        label: "Review KB",
                        desc: "See the structured knowledge base. Edit, add missing info, re-index.",
                      },
                      {
                        step: "4",
                        label: "Chat",
                        desc: "Customers ask questions. The AI answers from the KB in any language.",
                      },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                          {s.step}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">
                            {s.label}
                          </div>
                          <div className="text-xs text-slate-500">
                            {s.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold md:text-4xl">How we work</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Discovery",
              desc: "Map your pains, data landscape, and quick wins. Define measurable outcomes.",
            },
            {
              step: "2",
              title: "Design",
              desc: "Architecture, guardrails, evaluation plan. Security and compliance from day one.",
            },
            {
              step: "3",
              title: "Build",
              desc: "Prototype in days, iterate to production with evals and monitoring.",
            },
            {
              step: "4",
              title: "Scale",
              desc: "Handover, team enablement, and roadmap to expand ROI across the organization.",
            },
          ].map((a, i) => (
            <Card key={i} className="relative">
              <CardHeader>
                <div className="font-semibold text-indigo-600">
                  Step {a.step}
                </div>
                <CardTitle>{a.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-4xl">About</h2>
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-3">
            <div className="space-y-4 text-slate-700 lg:col-span-2">
              <p>
                Gradient Logic is a boutique AI consultancy led by{" "}
                <strong>Pavlos Polydoras</strong>, based in Athens. We combine
                hands-on engineering with strategic advisory to ship AI systems
                that create real business value &mdash; not just impressive
                demos.
              </p>
              <p>
                Currently serving as AI Strategy Lead for a global engineering
                enterprise, designing and implementing their corporate-wide AI
                approach across multiple business units and geographies.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                <li>
                  Deep experience with RAG, agentic workflows, and LLM
                  evaluations
                </li>
                <li>
                  Production systems with Claude, GPT-4, and open-source models
                </li>
                <li>
                  Privacy-first architectures aligned with GDPR best practices
                </li>
                <li>
                  Full-stack: Next.js, Python, TypeScript, Postgres, vector
                  databases
                </li>
              </ul>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Tech we work with</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>
                  <strong>LLMs:</strong> Claude, GPT-4, Gemini, open-source
                </p>
                <p>
                  <strong>Frameworks:</strong> LangChain, LlamaIndex, MCP,
                  custom agents
                </p>
                <p>
                  <strong>Infra:</strong> Next.js, Python, Postgres, ChromaDB,
                  Pinecone
                </p>
                <p>
                  <strong>Platforms:</strong> Vercel, Cloudflare, AWS, on-prem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-4xl">Let&apos;s talk</h2>
          <p className="mt-2 text-slate-600">
            Tell us about your goals and we&apos;ll suggest a focused starting
            point.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <a className="underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-600" />
                  <a
                    className="underline"
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a 30-minute call
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-indigo-600" />
                  <a
                    className="underline"
                    href="https://www.linkedin.com/in/pavlospolydoras/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-indigo-600" />
                  <a
                    className="underline"
                    href="https://github.com/gradient-logic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Good fit if you need</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>
                    AI strategy for your organization &mdash; where to start,
                    what to build
                  </li>
                  <li>
                    Agents, RAG, or copilots built and deployed to production
                  </li>
                  <li>
                    An AI customer assistant for your store, restaurant, or cafe
                  </li>
                  <li>
                    A technical advisor who has shipped real AI systems at
                    enterprise scale
                  </li>
                </ul>
                <div className="mt-5">
                  <Button asChild className="w-full rounded-2xl md:w-auto">
                    <a
                      href={`mailto:${EMAIL}?subject=Project%20inquiry%20from%20website`}
                    >
                      Start a conversation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-200 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div>
            &copy; {new Date().getFullYear()} Gradient Logic. All rights
            reserved.
          </div>
          <div>Based in Athens &middot; Serving clients globally</div>
        </div>
      </footer>
    </div>
  );
}
