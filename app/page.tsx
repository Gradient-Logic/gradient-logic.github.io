import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Brain, LineChart, Shield, Calendar, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// NOTE:
// - This is a single-file React landing page you can drop into a Next.js or Vite app.
// - Uses Tailwind classes and shadcn/ui components. Ensure Tailwind + shadcn are installed.
// - Replace placeholder links, images, and IDs as needed.
// - Add Plausible script tag in your app root (e.g., _app.tsx or index.html) with your domain.
//   <script defer data-domain="gradient-logic.com" src="https://plausible.io/js/script.js"></script>

export default function GradientLogic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl tracking-tight">Gradient <span className="text-indigo-600">Logic</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="#work" className="hover:text-indigo-700">Work</a>
            <a href="#approach" className="hover:text-indigo-700">Approach</a>
            <a href="#about" className="hover:text-indigo-700">About</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#contact"><MessageSquare className="h-4 w-4 mr-2"/>Let's talk</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl/tight md:text-6xl/tight font-extrabold">
              GenAI Consulting to <span className="text-indigo-600">ship value</span>, not demos.
            </motion.h1>
            <p className="mt-5 max-w-2xl text-slate-600">We help teams design, prototype, and productionize AI copilots, RAG search, and automations. From use‑case discovery to secure deployment and analytics, we get your first win in weeks — not quarters.</p>
            <div className="mt-7 flex gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#contact">Book intro <ArrowRight className="h-4 w-4 ml-2"/></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href="#work">See case studies</a>
              </Button>
            </div>
            <div className="mt-8 text-xs text-slate-500">Based in Athens • Serving EU/UK/US • Privacy-first</div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-100/60 blur-3xl rounded-full"/>
              <Card className="relative border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What we typically deliver in 30–45 days</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2"><Brain className="h-4 w-4 mt-0.5 text-indigo-600"/>Use‑case mapping workshop & ROI model</li>
                    <li className="flex items-start gap-2"><Shield className="h-4 w-4 mt-0.5 text-indigo-600"/>Secure architecture (PII, GDPR, SOC2‑friendly)</li>
                    <li className="flex items-start gap-2"><LineChart className="h-4 w-4 mt-0.5 text-indigo-600"/>Prototype to production with analytics</li>
                    <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5 text-indigo-600"/>Playbooks: data prep, evaluation, rollout</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-4xl font-bold">What we do</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:"GenAI Copilots",desc:"Assistants for ops, sales, and support. UI in web or Slack/Teams.", bullets:["Task automation","Guardrails & evals","Human‑in‑the‑loop"]},
              {title:"RAG & Search",desc:"Bring order to docs, wikis, tickets, and data warehouses.", bullets:["Hybrid retrieval","Structured & unstructured","Freshness & access control"]},
              {title:"Agentic Workflows",desc:"Multi‑tool chains for complex processes.", bullets:["Orchestration","Tooling & eval","Observability"]},
              {title:"Data & MLOps",desc:"Pipelines, vector stores, feature stores, monitoring.", bullets:["ETL/ELT","Prompt/version mgmt","Quality gates"]},
              {title:"Security & Compliance",desc:"GDPR‑first designs, key mgmt, red‑team & logging.", bullets:["PII minimization","Auditability","Role‑based access"]},
              {title:"Enablement",desc:"Training, playbooks, and hiring support.", bullets:["Workshops","Templates","Onboarding"]},
            ].map((s, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                    {s.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold">Selected work</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[{
            name:"Athens Airport Transfer Copilot",
            summary:"Lead triage & itinerary builder that cut response time by 60% and raised conversion by 18%.",
            link:"#",
          },{
            name:"B2B SaaS Knowledge RAG",
            summary:"Unified product docs + support tickets; reduced search time from minutes to seconds.",
            link:"#",
          }].map((w,idx)=> (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{w.name}</span>
                  <a className="text-indigo-600 text-sm inline-flex items-center gap-1" href={w.link}>Read more <ExternalLink className="h-4 w-4"/></a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{w.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-4xl font-bold">How we work</h2>
          <div className="mt-8 grid lg:grid-cols-4 gap-6">
            {[
              {step:"1",title:"Discovery",desc:"Map your pains, data, and quick wins; define measurable outcomes."},
              {step:"2",title:"Design",desc:"Architecture, guardrails, and evaluation plan — security first."},
              {step:"3",title:"Build",desc:"Prototype in days; iterate to production with analytics."},
              {step:"4",title:"Scale",desc:"Handover, enablement, and roadmap to expand ROI."},
            ].map((a, idx)=>(
              <Card key={idx} className="relative">
                <CardHeader>
                  <div className="text-indigo-600 font-semibold">Step {a.step}</div>
                  <CardTitle>{a.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 text-slate-700 space-y-4">
            <p>Gradient Logic is a boutique GenAI consultancy led by Pavlos Polydoras in Athens, serving clients across Europe and beyond. We bring hands‑on data engineering and product experience to ship real outcomes — not just slideware.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Deep experience with RAG, agentic workflows, and evals</li>
              <li>Cloudflare Pages, Vercel, and on‑prem friendly architectures</li>
              <li>Privacy‑first approach aligned with GDPR best practices</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Credentials</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>• Built and shipped data-intensive apps in production</p>
              <p>• Tooling: Next.js, Python, LangChain/LlamaIndex, Postgres/SQLite, Cloudflare/Vercel</p>
              <p>• Industries: travel, SaaS, operations, support</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-4xl font-bold">Let’s talk</h2>
          <p className="mt-2 text-slate-600">Tell us about your goals and we’ll suggest a focused starting point.</p>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600"/> <a className="underline" href="mailto:pavlos.polydoras@gradient-logic.com">pavlos.polydoras@gradient-logic.com</a></p>
                <p className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-indigo-600"/> <a className="underline" href="#">LinkedIn</a></p>
                <p className="flex items-center gap-2"><Github className="h-4 w-4 text-indigo-600"/> <a className="underline" href="#">GitHub</a></p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project fit checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                  <li>Clear problem and target KPI</li>
                  <li>Access to relevant data & systems</li>
                  <li>Stakeholder to own rollout</li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="rounded-2xl w-full md:w-auto">
                    <a href="mailto:pavlos.polydoras@gradient-logic.com?subject=Project%20inquiry%20from%20website">Start a conversation</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Gradient Logic. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-indigo-700">Privacy</a>
            <a href="#terms" className="hover:text-indigo-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
