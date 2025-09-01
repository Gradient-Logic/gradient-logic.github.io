'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Brain, Shield, Calendar, Mail, Search, Lightbulb, Wrench, Rocket, Network, Bot, Workflow, Cpu, Database, Zap, Activity, CheckCircle2, TrendingUp, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      {/* Animated Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// Live Monitoring Dashboard Component
const LiveMonitoringDashboard = () => {
  const [metrics, setMetrics] = useState({
    agents: 12,
    requests: 1247,
    success: 99.2,
    latency: 42
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        agents: prev.agents + Math.floor(Math.random() * 3 - 1),
        requests: prev.requests + Math.floor(Math.random() * 10),
        success: Math.min(100, Math.max(95, prev.success + (Math.random() - 0.5))),
        latency: Math.max(20, Math.min(60, prev.latency + Math.floor(Math.random() * 10 - 5)))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5 text-green-400" />
          Live Agent Monitoring
        </h3>
        <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">ACTIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800/50 rounded-lg p-3">
          <p className="text-xs text-slate-400">Active Agents</p>
          <p className="text-2xl font-bold text-indigo-400">{metrics.agents}</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <p className="text-xs text-slate-400">Requests/min</p>
          <p className="text-2xl font-bold text-blue-400">{metrics.requests}</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <p className="text-xs text-slate-400">Success Rate</p>
          <p className="text-2xl font-bold text-green-400">{metrics.success.toFixed(1)}%</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <p className="text-xs text-slate-400">Avg Latency</p>
          <p className="text-2xl font-bold text-yellow-400">{metrics.latency}ms</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <CheckCircle2 className="h-3 w-3 text-green-400" />
          <span className="text-slate-400">All systems operational</span>
        </div>
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-green-400 to-blue-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

// Animated Code Terminal Component
const CodeTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const codeLines = [
      "$ mcp init multi-agent-system",
      "✓ Initializing MCP server...",
      "✓ Loading agent configurations...",
      "✓ Establishing secure connections...",
      "",
      "$ mcp deploy --agents 3 --orchestrator langraph",
      "→ Agent[research]: Ready",
      "→ Agent[analysis]: Ready", 
      "→ Agent[synthesis]: Ready",
      "✓ Multi-agent system deployed",
      "",
      "$ mcp monitor --real-time",
      "[INFO] Orchestrator active",
      "[INFO] Processing request #1247",
      "[SUCCESS] Task completed in 42ms"
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeLines.length) {
        setLines(prev => [...prev, codeLines[index]]);
        index++;
      } else {
        setLines([]);
        index = 0;
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm shadow-2xl border border-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-500 text-xs">terminal</span>
      </div>
      <div className="space-y-1 min-h-[300px]">
        <AnimatePresence>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                line.startsWith('$') ? 'text-green-400' :
                line.startsWith('✓') ? 'text-blue-400' :
                line.startsWith('→') ? 'text-purple-400' :
                line.startsWith('[INFO]') ? 'text-cyan-400' :
                line.startsWith('[SUCCESS]') ? 'text-green-400' :
                'text-slate-400'
              }`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.span
          className="inline-block w-2 h-4 bg-green-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

// Agent Flow Visualization
const AgentFlowVisualization = () => {
  return (
    <div className="relative h-64">
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection Lines */}
        <motion.path
          d="M 100 50 Q 200 100 300 50"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M 100 150 Q 200 100 300 150"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient2">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Agent Nodes */}
      <motion.div 
        className="absolute left-10 top-8 bg-white rounded-xl p-3 shadow-lg border border-slate-200"
        whileHover={{ scale: 1.05 }}
      >
        <Bot className="h-6 w-6 text-indigo-600" />
        <p className="text-xs mt-1">Research</p>
      </motion.div>
      
      <motion.div 
        className="absolute left-1/2 top-20 -translate-x-1/2 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-xl p-3 shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Cpu className="h-6 w-6" />
        <p className="text-xs mt-1">Orchestrator</p>
      </motion.div>
      
      <motion.div 
        className="absolute right-10 top-8 bg-white rounded-xl p-3 shadow-lg border border-slate-200"
        whileHover={{ scale: 1.05 }}
      >
        <Brain className="h-6 w-6 text-blue-600" />
        <p className="text-xs mt-1">Analysis</p>
      </motion.div>
      
      <motion.div 
        className="absolute left-10 bottom-8 bg-white rounded-xl p-3 shadow-lg border border-slate-200"
        whileHover={{ scale: 1.05 }}
      >
        <FileCode2 className="h-6 w-6 text-purple-600" />
        <p className="text-xs mt-1">Synthesis</p>
      </motion.div>
      
      <motion.div 
        className="absolute right-10 bottom-8 bg-white rounded-xl p-3 shadow-lg border border-slate-200"
        whileHover={{ scale: 1.05 }}
      >
        <Database className="h-6 w-6 text-cyan-600" />
        <p className="text-xs mt-1">Storage</p>
      </motion.div>
    </div>
  );
};

export default function GradientLogic() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      <AnimatedBackground />
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/gl-logo.png" alt="GradientLogic" className="h-8 w-8" />
            <span className="font-semibold text-xl tracking-tight">Gradient <span className="text-indigo-600">Logic</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-700 transition-colors">Services</a>
            <a href="#work" className="hover:text-indigo-700 transition-colors">Work</a>
            <a href="#approach" className="hover:text-indigo-700 transition-colors">Approach</a>
            <a href="#about" className="hover:text-indigo-700 transition-colors">About</a>
            <a href="#contact" className="hover:text-indigo-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg transition-all">
              <a href="#contact"><MessageSquare className="h-4 w-4 mr-2"/>Let&apos;s talk</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO with Animated Elements */}
      <section id="home" className="relative py-24 px-4 overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Multi-Agent Orchestration Experts
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Build </span>
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Autonomous AI</span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">That Ships</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We architect and deploy production-ready multi-agent systems with MCP, 
              turning complex AI orchestration into reliable business outcomes.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl transition-all">
                <a href="#contact">Start Building <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full hover:shadow-lg transition-all">
                <a href="#work">See Live Demos</a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Visualization Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <LiveMonitoringDashboard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <CodeTerminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AGENT FLOW SECTION */}
      <section className="py-20 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Intelligent Agent Orchestration
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-time coordination between specialized AI agents, working together to solve complex problems
            </p>
          </motion.div>
          
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-slate-200">
            <AgentFlowVisualization />
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Services with Hover Effects */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-slate-600">Enterprise-grade AI systems that scale</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Network className="h-6 w-6" />,
                title: "Multi-Agent Systems",
                description: "Production-ready orchestration with MCP protocol",
                features: ["MCP server & client implementation", "LangGraph & CrewAI orchestration", "Agent swarm coordination", "Autonomous decision-making"],
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Bot className="h-6 w-6" />,
                title: "Agentic AI Platforms",
                description: "Complete autonomous AI solutions",
                features: ["Tool use & function calling", "Memory & context management", "RAG with vector databases", "Custom agent frameworks"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Workflow className="h-6 w-6" />,
                title: "Process Automation",
                description: "End-to-end workflow automation",
                features: ["Complex task decomposition", "Multi-step reasoning chains", "Human-in-the-loop systems", "Parallel agent execution"],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Governance & Security",
                description: "Enterprise compliance and monitoring",
                features: ["Agent behavior monitoring", "Security & access control", "Audit trails & compliance", "Performance analytics"],
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Data Integration",
                description: "Seamless enterprise connectivity",
                features: ["API & database connectors", "Real-time data pipelines", "Schema validation", "Caching & optimization"],
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Performance & Scale",
                description: "Built for enterprise demands",
                features: ["Distributed processing", "Load balancing", "Auto-scaling agents", "Sub-second latency"],
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-slate-200 overflow-hidden group">
                  <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                        {service.icon}
                      </div>
                      <span className="text-lg">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "AI Agents Deployed", value: "500+", icon: <Bot /> },
              { label: "Requests Processed", value: "10M+", icon: <Activity /> },
              { label: "Uptime", value: "99.9%", icon: <TrendingUp /> },
              { label: "Avg Response Time", value: "<50ms", icon: <Zap /> }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-white/10 mb-4">
                  {React.cloneElement(metric.icon, { className: "h-6 w-6" })}
                </div>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK with Icons */}
      <section id="approach" className="py-20 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-slate-600">From concept to production in weeks, not months</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                description: "Map your workflows and identify automation opportunities",
                icon: <Search className="h-8 w-8" />,
                color: "indigo"
              },
              {
                step: "02",
                title: "Design",
                description: "Architect multi-agent systems tailored to your needs",
                icon: <Lightbulb className="h-8 w-8" />,
                color: "blue"
              },
              {
                step: "03",
                title: "Build",
                description: "Develop and integrate with your existing infrastructure",
                icon: <Wrench className="h-8 w-8" />,
                color: "purple"
              },
              {
                step: "04",
                title: "Deploy",
                description: "Launch, monitor, and continuously optimize",
                icon: <Rocket className="h-8 w-8" />,
                color: "green"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent" />
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center text-white mb-4`}>
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-300 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section id="work" className="py-20 px-4 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We&apos;re Building</h2>
            <p className="text-lg text-slate-600">Live projects powered by cutting-edge AI orchestration</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Autonomous Research Platform",
                description: "Multi-agent system that conducts comprehensive research, analysis, and synthesis across domains",
                tech: ["MCP Protocol", "LangGraph", "GPT-4", "Claude", "Vector DB"],
                status: "In Production",
                metrics: { agents: 5, requests: "10K/day", latency: "200ms" }
              },
              {
                title: "Enterprise Support Orchestrator",
                description: "AI agents handling customer queries with automatic escalation and knowledge base updates",
                tech: ["CrewAI", "Function Calling", "RAG", "Slack API"],
                status: "Beta Testing",
                metrics: { agents: 8, requests: "5K/day", latency: "150ms" }
              },
              {
                title: "Code Generation Pipeline",
                description: "Automated development workflow from requirements to tested, deployable code",
                tech: ["AutoGen", "GitHub API", "Docker", "CI/CD"],
                status: "Development",
                metrics: { agents: 12, requests: "1K/day", latency: "500ms" }
              },
              {
                title: "Financial Analysis Swarm",
                description: "Parallel agent processing for real-time market analysis and reporting",
                tech: ["MCP", "Streaming", "WebSockets", "TimescaleDB"],
                status: "In Production",
                metrics: { agents: 20, requests: "50K/day", latency: "50ms" }
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === 'In Production' ? 'bg-green-100 text-green-700' :
                    project.status === 'Beta Testing' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500">Agents</p>
                    <p className="text-sm font-semibold">{project.metrics.agents}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Volume</p>
                    <p className="text-sm font-semibold">{project.metrics.requests}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Latency</p>
                    <p className="text-sm font-semibold">{project.metrics.latency}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering the Future of
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"> Autonomous AI</span>
              </h2>
              <p className="text-slate-600 mb-4">
                We&apos;re a team of AI engineers, researchers, and system architects who believe the future belongs to multi-agent systems. 
                Our expertise in MCP, agent orchestration, and distributed AI helps enterprises build the autonomous systems of tomorrow.
              </p>
              <p className="text-slate-600 mb-6">
                From Silicon Valley startups to Fortune 500 enterprises, we&apos;ve deployed agent swarms that handle millions of requests, 
                automate complex workflows, and unlock new possibilities in AI-driven automation.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-slate-600">Projects Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-slate-600">Agent Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl p-8">
                <AgentFlowVisualization />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20" />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Extraordinary?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Let&apos;s discuss how multi-agent AI can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                <a href="mailto:hello@gradient-logic.com">
                  <Mail className="h-5 w-5 mr-2" />
                  hello@gradient-logic.com
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                <a href="https://discord.gg/sFAWANRvV3" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Join our Discord
                </a>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Calendar className="h-4 w-4" />
              <span>Typically respond within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="mx-auto max-w-7xl">
          <p>&copy; 2025 Gradient Logic. Building the autonomous future.</p>
        </div>
      </footer>
    </div>
  );
}