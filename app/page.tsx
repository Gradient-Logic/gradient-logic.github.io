'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Brain, LineChart, Shield, Calendar, Mail, Search, Lightbulb, Wrench, Rocket, Network, Bot, Workflow, GitBranch, Cpu, Eye, Database, Server, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GradientLogic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            {/* Logo will be added here once provided as file */}
            <span className="font-semibold text-xl tracking-tight">Gradient <span className="text-indigo-600">Logic</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="#work" className="hover:text-indigo-700">Work</a>
            <a href="#approach" className="hover:text-indigo-700">Approach</a>
            <a href="#about" className="hover:text-indigo-700">About</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#contact"><MessageSquare className="h-4 w-4 mr-2"/>Let&apos;s talk</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl/tight md:text-6xl/tight font-extrabold">
              Multi-Agent Systems to <span className="text-indigo-600">ship value</span>, not demos.
            </motion.h1>
            <p className="mt-5 max-w-2xl text-slate-600">We architect and deploy <strong>multi-agent systems</strong>, <strong>MCP-powered copilots</strong>, and <strong>agentic workflows</strong> that actually ship to production. From use‑case discovery to secure deployment with real-time observability, we get your first autonomous win in weeks — not quarters.</p>
            <div className="mt-7 flex gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#contact">Book intro <ArrowRight className="h-4 w-4 ml-2"/></a>
              </Button>
                          <Button asChild size="lg" variant="outline" className="rounded-2xl">
              <a href="#work">See what we&apos;re building</a>
              </Button>
            </div>
            <div className="mt-8 text-xs text-slate-500">Based in Athens • Serving EU/UK/US • MCP Protocol Experts • Multi-Agent Architecture</div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-100/60 blur-3xl rounded-full"></div>
              <Card className="relative">
                <CardHeader>
                  <CardTitle>What we typically deliver in 30–45 days</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700">
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
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5 text-indigo-600" />Agentic AI Systems</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 text-slate-700">
                <p className="text-sm text-slate-600">Production-ready multi-agent orchestration with MCP (Model Context Protocol).</p>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  <li>MCP server & client implementation</li>
                  <li>Multi-agent coordination & communication</li>
                  <li>Tool use & function calling</li>
                  <li>Autonomous decision-making with guardrails</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2"><Network className="h-5 w-5 text-indigo-600" />RAG & Semantic Search</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 text-slate-700">
                <p className="text-sm text-slate-600">Enterprise knowledge graphs with agentic retrieval and reasoning.</p>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  <li>Graph RAG & hierarchical indexing</li>
                  <li>Agentic query planning & routing</li>
                  <li>Self-correcting retrieval loops</li>
                  <li>Real-time knowledge updates</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2"><Workflow className="h-5 w-5 text-indigo-600" />Autonomous Workflows</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 text-slate-700">
                <p className="text-sm text-slate-600">Self-improving agent swarms with real-time coordination.</p>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  <li>LangGraph & CrewAI orchestration</li>
                  <li>Agent-to-agent negotiation protocols</li>
                  <li>Distributed reasoning & consensus</li>
                  <li>Emergent behavior management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2"><Database className="h-5 w-5 text-indigo-600" />Data & MLOps</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 text-slate-700">
                <p className="text-sm text-slate-600">Pipelines, vector stores, and observability for agent systems.</p>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  <li>Real-time agent telemetry</li>
                  <li>Prompt versioning & A/B testing</li>
                  <li>Cost optimization & caching</li>
                  <li>Performance monitoring</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-indigo-600" />Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 text-slate-700">
                <p className="text-sm text-slate-600">GDPR‑first designs with agent safety mechanisms.</p>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  <li>Agent jailbreak prevention</li>
                  <li>PII minimization & encryption</li>
                  <li>Audit trails & explainability</li>
                  <li>Role-based agent permissions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2"><Eye className="h-5 w-5 text-indigo-600" />Governance & Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 text-slate-700">
                <p className="text-sm text-slate-600">Enterprise-grade oversight for autonomous systems.</p>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  <li>Agent behavior auditing & compliance</li>
                  <li>Decision explainability frameworks</li>
                  <li>Cost optimization & resource governance</li>
                  <li>Human-in-the-loop checkpoints</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold">What we&apos;re building</h2>
        <p className="mt-4 text-slate-600">Active projects pushing the boundaries of autonomous AI</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Cpu className="h-5 w-5 text-indigo-600"/>Multi-Agent Customer Success Platform</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-sm text-slate-600">Autonomous agent swarm handling support tickets with specialized agents for technical issues, billing, and feature requests. Built on MCP with inter-agent communication protocols.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">MCP Protocol</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">LangGraph</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Multi-Agent</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2"><GitBranch className="h-5 w-5 text-indigo-600"/>Autonomous Code Review System</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-sm text-slate-600">Self-organizing agent collective that reviews PRs, suggests improvements, and automatically fixes common issues. Learns from team patterns and enforces evolving best practices.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">CrewAI</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Tool Use</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Self-Improving</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Server className="h-5 w-5 text-indigo-600"/>Agentic Data Pipeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-sm text-slate-600">Self-healing ETL system with agents that detect schema changes, fix data quality issues, and optimize transformations autonomously. Zero-downtime migrations.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">AutoGen</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Self-Healing</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Observability</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Cloud className="h-5 w-5 text-indigo-600"/>Agent-as-a-Service Platform</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-sm text-slate-600">Serverless infrastructure for deploying, scaling, and monitoring agent swarms. One-click agent deployment with built-in MCP integration and cost controls.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Infrastructure</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">MCP Native</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Serverless</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-4xl font-bold">How we work</h2>
          <div className="mt-8 grid lg:grid-cols-4 gap-6">
            {ApproachSteps()}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 text-slate-700 space-y-4">
            <p>Gradient Logic is a boutique AI consultancy specializing in multi-agent systems and autonomous workflows. We bring deep expertise in MCP (Model Context Protocol), agent orchestration frameworks, and production deployment of self-improving AI systems.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pioneers in MCP implementation and multi-agent communication protocols</li>
              <li>Production experience with LangGraph, CrewAI, AutoGen, and custom agent frameworks</li>
              <li>Privacy-first approach with on-premise and hybrid cloud deployments</li>
              <li>Active contributors to open-source agent tooling ecosystem</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Credentials</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>• Built and shipped autonomous agent systems in production</p>
              <p>• Expertise: MCP, LangGraph, CrewAI, AutoGen, LlamaIndex</p>
              <p>• Industries: FinTech, Healthcare, E-commerce, Developer Tools</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-4xl font-bold">Let&apos;s talk</h2>
          <p className="mt-2 text-slate-600">Tell us about your automation goals and we&apos;ll design your first autonomous agent.</p>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600"/> <a className="underline" href="mailto:hello@gradient-logic.com">hello@gradient-logic.com</a></p>
                <p className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-indigo-600"/> 
                  <a className="underline" href="https://discord.gg/sFAWANRvV3" target="_blank" rel="noopener noreferrer">Join our Discord</a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project fit checklist</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                  <li>Clear automation opportunity with measurable ROI</li>
                  <li>Access to relevant data & systems</li>
                  <li>Stakeholder buy-in for autonomous operations</li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="w-full md:w-auto rounded-2xl">
                    <a href="mailto:hello@gradient-logic.com?subject=Multi-agent%20project%20inquiry">Start a conversation</a>
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

function ApproachSteps() {
  const steps = [
    {
      title: "Discovery", 
      desc: "Deep dive into your workflows to identify high-impact automation opportunities. We map agent capabilities to business processes and define clear success metrics.",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Design", 
      desc: "Architect multi-agent systems with MCP integration points, tool interfaces, and inter-agent communication protocols. Security and governance built in from day one.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Build", 
      desc: "Rapid prototyping with production-ready agent frameworks. Continuous evaluation loops ensure agents meet performance and safety thresholds before deployment.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Scale", 
      desc: "Progressive autonomy expansion with monitoring dashboards, cost optimization, and continuous learning pipelines. Your team owns the system.",
      icon: <Rocket className="h-6 w-6" />
    },
  ]
  return steps.map((step, i) => (
    <Card key={i} className="relative">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between mb-2">
          <div className="text-indigo-600 font-semibold">Step {i+1}</div>
          <div className="text-indigo-600">
            {step.icon}
          </div>
        </div>
        <CardTitle>{step.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700">
        <p className="text-sm text-slate-600">{step.desc}</p>
      </CardContent>
    </Card>
  ))
}