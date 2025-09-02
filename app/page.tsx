'use client'
import React, { useState, useEffect } from "react";
import { ArrowRight, MessageSquare, Brain, Shield, Mail, Search, Lightbulb, Wrench, Rocket, Network, Bot, Workflow, Cpu, Database, Zap, Activity, CheckCircle2, TrendingUp, FileCode2, Timer, Award, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Animated Background Component
const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
      {/* Simple animated orbs without framer-motion */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
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
          <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Animated Code Terminal Component
const CodeTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
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
        const line = codeLines[index];
        if (line !== undefined) {
          setLines(prev => [...prev, line]);
        }
        index++;
      } else {
        setLines([]);
        index = 0;
      }
    }, 300);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm shadow-2xl border border-slate-800 h-[400px] overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-500 text-xs">terminal</span>
      </div>
      <div className="space-y-1 h-[320px] overflow-y-auto">
        {lines && lines.length > 0 && lines.map((line, i) => {
          if (!line || typeof line !== 'string') return null;
          return (
            <div
              key={i}
              className={`${
                line.startsWith('$') ? 'text-green-400' :
                line.startsWith('✓') ? 'text-blue-400' :
                line.startsWith('→') ? 'text-purple-400' :
                line.startsWith('[INFO]') ? 'text-cyan-400' :
                line.startsWith('[SUCCESS]') ? 'text-green-400' :
                'text-slate-400'
              } transition-opacity duration-200`}
            >
              {line}
            </div>
          );
        })}
        <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
      </div>
    </div>
  );
};

// Agent Flow Visualization
const AgentFlowVisualization = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  const [activeConnection, setActiveConnection] = useState(0);
  
  useEffect(() => {
    // Rotate active agent
    const agentInterval = setInterval(() => {
      setActiveAgent(prev => (prev + 1) % 5);
    }, 2000);
    
    // Rotate active connection
    const connectionInterval = setInterval(() => {
      setActiveConnection(prev => (prev + 1) % 4);
    }, 500);
    
    return () => {
      clearInterval(agentInterval);
      clearInterval(connectionInterval);
    };
  }, []);

  const agents = [
    { id: 'research', x: 100, y: 100, icon: Bot, color: 'indigo', label: 'Research' },
    { id: 'analysis', x: 500, y: 100, icon: Brain, color: 'blue', label: 'Analysis' },
    { id: 'orchestrator', x: 300, y: 250, icon: Cpu, color: 'purple', label: 'Orchestrator', main: true },
    { id: 'synthesis', x: 100, y: 400, icon: FileCode2, color: 'emerald', label: 'Synthesis' },
    { id: 'storage', x: 500, y: 400, icon: Database, color: 'cyan', label: 'Storage' }
  ];

  const connections = [
    { from: agents[0], to: agents[2], color: '#6366f1' }, // Research to Orchestrator
    { from: agents[1], to: agents[2], color: '#3b82f6' }, // Analysis to Orchestrator
    { from: agents[3], to: agents[2], color: '#10b981' }, // Synthesis to Orchestrator
    { from: agents[4], to: agents[2], color: '#06b6d4' }  // Storage to Orchestrator
  ];

  return (
    <div className="relative w-full mx-auto" style={{ maxWidth: '600px', height: '500px' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 rounded-3xl overflow-hidden shadow-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* SVG for connections */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 600 500" 
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 1 }}
        >
          <defs>
            {/* Arrow marker */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#6366f1"
                opacity="0.6"
              />
            </marker>
            
            {/* Gradient definitions */}
            <linearGradient id="gradient-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="gradient-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Connection lines */}
          {connections.map((conn, index) => {
            const isActive = activeConnection === index;
            const x1 = conn.from.x;
            const y1 = conn.from.y;
            const x2 = conn.to.x;
            const y2 = conn.to.y;
            
            // Calculate control point for curved path
            const cx = (x1 + x2) / 2;
            const cy = (y1 + y2) / 2 - 30;
            
            return (
              <g key={index}>
                {/* Main path */}
                <path
                  d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                  stroke={conn.color}
                  strokeWidth={isActive ? "3" : "2"}
                  fill="none"
                  opacity={isActive ? "1" : "0.4"}
                  strokeDasharray={isActive ? "10 5" : "none"}
                  markerEnd="url(#arrowhead)"
                >
                  {isActive && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-15"
                      dur="0.5s"
                      repeatCount="indefinite"
                    />
                  )}
                </path>
                
                {/* Animated dot on active connection */}
                {isActive && (
                  <circle r="6" fill={conn.color}>
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Agent Nodes */}
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          const isActive = activeAgent === index;
          const isMain = agent.main;
          
          return (
            <div
              key={agent.id}
              className="absolute"
              style={{ 
                left: `${agent.x}px`, 
                top: `${agent.y}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: isMain ? 20 : 10
              }}
            >
              {/* Glow effect for active agent */}
              {isActive && (
                <div 
                  className="absolute inset-0 rounded-2xl animate-pulse"
                  style={{
                    background: `radial-gradient(circle, ${isMain ? '#8b5cf6' : '#6366f1'}40, transparent)`,
                    filter: 'blur(20px)',
                    transform: 'scale(2)'
                  }}
                />
              )}
              
              {/* Agent card */}
              <div className={`
                relative rounded-2xl p-4 shadow-lg transition-all duration-300
                ${isMain 
                  ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white scale-110' 
                  : 'bg-white hover:shadow-xl'
                }
                ${isActive && !isMain ? 'ring-2 ring-indigo-400 shadow-xl scale-105' : ''}
                ${!isActive && !isMain ? 'hover:scale-105' : ''}
              `}>
                
                {/* Status indicator */}
                <div className={`
                  absolute -top-1 -right-1 w-3 h-3 rounded-full
                  ${isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}
                `} />
                
                {/* Icon and label */}
                <div className="flex flex-col items-center gap-2">
                  <Icon className={`h-6 w-6 ${isMain ? 'text-white' : 'text-indigo-600'}`} />
                  <p className={`text-xs font-medium ${isMain ? 'text-white' : 'text-gray-700'}`}>
                    {agent.label}
                  </p>
                  
                  {/* Activity dots for active agent */}
                  {isActive && (
                    <div className="flex gap-1 mt-1">
                      <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Activity indicator */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg" style={{ zIndex: 30 }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-gray-700">Active Flow</span>
          </div>
          <div className="text-xs text-gray-600">
            {activeAgent === 0 && 'Gathering research data...'}
            {activeAgent === 1 && 'Analyzing patterns...'}
            {activeAgent === 2 && 'Orchestrating agents...'}
            {activeAgent === 3 && 'Synthesizing results...'}
            {activeAgent === 4 && 'Storing insights...'}
          </div>
        </div>

        {/* Performance metrics */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg" style={{ zIndex: 30 }}>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-gray-500">Throughput</p>
              <p className="font-bold text-gray-900">1.2K/s</p>
            </div>
            <div>
              <p className="text-gray-500">Latency</p>
              <p className="font-bold text-green-600">42ms</p>
            </div>
          </div>
        </div>
      </div>
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
          <div className="text-center mb-12 opacity-0 animate-[fadeIn_0.6s_forwards]">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full hover:scale-105 transition-transform">
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Multi-Agent Orchestration Experts
              </span>
            </div>
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
          </div>

          {/* Hero Visualization Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="opacity-0 animate-[slideInLeft_0.5s_0.3s_forwards]">
              <LiveMonitoringDashboard />
            </div>
            <div className="opacity-0 animate-[slideInRight_0.5s_0.4s_forwards]">
              <CodeTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">Proven patterns across regulated and performance-critical domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all border border-slate-200">
              <div className="inline-flex p-3 rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Government</h3>
              <p className="text-sm text-slate-600">Secure, auditable agent workflows and policy-driven governance.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all border border-slate-200">
              <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-4">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Telecommunications</h3>
              <p className="text-sm text-slate-600">Network operations, customer automation, and real-time agent routing.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all border border-slate-200">
              <div className="inline-flex p-3 rounded-xl bg-purple-50 text-purple-600 mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">IT / Software</h3>
              <p className="text-sm text-slate-600">DevOps copilots, RAG platforms, and multi-agent delivery pipelines.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all border border-slate-200">
              <div className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Asset Management</h3>
              <p className="text-sm text-slate-600">Research automation, risk signals, and compliance-aware agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GARTNER INSIGHTS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-indigo-50 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full shadow-md">
              <Award className="h-5 w-5 text-indigo-600" />
              <span className="text-sm font-semibold text-slate-700">Industry Recognition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future is <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Agentic AI</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              According to Gartner, by 2028, 33% of enterprise software applications will include agentic AI, 
              up from less than 1% in 2024. This represents one of the most significant shifts in enterprise technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-indigo-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart className="h-8 w-8 text-indigo-600" />
                  <CardTitle className="text-lg">Strategic Technology Trend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">
                  Gartner identifies agentic AI as a top strategic technology trend for 2025, 
                  predicting it will fundamentally change how businesses operate.
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-3xl font-bold text-indigo-600">15%</div>
                  <p className="text-xs text-slate-500">of decisions will be made autonomously by 2028</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-lg">Exponential Growth</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">
                  The agentic AI market is experiencing unprecedented growth, with enterprises 
                  rapidly adopting multi-agent systems for complex automation.
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-3xl font-bold text-blue-600">33x</div>
                  <p className="text-xs text-slate-500">growth in enterprise adoption by 2028</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-lg">Competitive Advantage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">
                  Early adopters of agentic AI are seeing 40% improvement in operational efficiency 
                  and 25% reduction in decision-making time.
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-3xl font-bold text-purple-600">40%</div>
                  <p className="text-xs text-slate-500">efficiency gains for early adopters</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 italic">
              &ldquo;Agentic AI will be the defining technology of the next decade&rdquo; - Industry Analysts
            </p>
          </div>
        </div>
      </section>

      {/* AGENT FLOW SECTION */}
      <section className="py-20 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Intelligent Agent Orchestration
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-time coordination between specialized AI agents, working together to solve complex problems
            </p>
          </div>
          
          <AgentFlowVisualization />
        </div>
      </section>

      {/* WHAT WE DO - Services with Hover Effects */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-slate-600">Enterprise-grade AI systems that scale</p>
          </div>

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
              <div
                key={index}
                className="opacity-0 animate-[fadeInUp_0.5s_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-slate-200 overflow-hidden group hover:-translate-y-1">
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
                      {service.features && service.features.map((feature, i) => (
                        feature ? (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ) : null
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
              <div
                key={index}
                className="text-center opacity-0 animate-[scaleIn_0.5s_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-full bg-white/10 mb-4">
                  {React.cloneElement(metric.icon, { className: "h-6 w-6" })}
                </div>
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK with PoC Timeline */}
      <section id="approach" className="py-20 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-slate-600 mb-6">From concept to production in weeks, not months</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
              <Timer className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-green-800">Proof of Concept delivered in just 1 week</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                description: "Map your workflows and identify automation opportunities",
                icon: <Search className="h-8 w-8" />,
                color: "indigo",
                timeline: "Day 1-2"
              },
              {
                step: "02",
                title: "Design & PoC",
                description: "Architect multi-agent systems and deliver working proof of concept",
                icon: <Lightbulb className="h-8 w-8" />,
                color: "blue",
                timeline: "Day 3-7",
                highlight: true
              },
              {
                step: "03",
                title: "Build",
                description: "Develop and integrate with your existing infrastructure",
                icon: <Wrench className="h-8 w-8" />,
                color: "purple",
                timeline: "Week 2-3"
              },
              {
                step: "04",
                title: "Deploy",
                description: "Launch, monitor, and continuously optimize",
                icon: <Rocket className="h-8 w-8" />,
                color: "green",
                timeline: "Week 4"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-[fadeInUp_0.5s_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent" />
                )}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border ${step.highlight ? 'border-green-400 ring-2 ring-green-100' : 'border-slate-200'}`}>
                  {step.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        PoC Ready
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center text-white mb-4`}>
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-300 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-indigo-600">{step.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Why Our Approach Works</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-4">
                <Timer className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold mb-1">Rapid Validation</h4>
                <p className="text-sm text-slate-600">See real results in 1 week with a working PoC tailored to your use case</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <Bot className="h-6 w-6 text-blue-600 mb-2" />
                <h4 className="font-semibold mb-1">Production-Ready</h4>
                <p className="text-sm text-slate-600">Our PoCs are built on the same foundation as production systems</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <Shield className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold mb-1">Risk-Free</h4>
                <p className="text-sm text-slate-600">Test the value before full commitment with minimal investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section id="work" className="py-20 px-4 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We&apos;re Building</h2>
            <p className="text-lg text-slate-600">Current projects across Government, Telecommunications, IT, and Asset Management</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Autonomous Research Platform",
                description: "Multi-agent system that conducts comprehensive research, analysis, and synthesis across domains",
                tech: ["MCP Protocol", "LangGraph", "GPT-4", "Claude", "ChromaDB"],
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
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-200 hover:-translate-y-1 opacity-0 animate-[fadeInUp_0.5s_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  {project.tech && project.tech.map((tech, i) => (
                    tech ? (
                      <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-lg">
                        {tech}
                      </span>
                    ) : null
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                  <div className="text-3xl font-bold text-indigo-600">10+</div>
                  <div className="text-sm text-slate-600">Projects Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-slate-600">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">SLA-based</div>
                  <div className="text-sm text-slate-600">Availability</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <AgentFlowVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20" />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="opacity-0 animate-[fadeIn_0.5s_forwards]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Extraordinary?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Let&apos;s discuss how multi-agent AI can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                <a href="mailto:hello@gradient-logic.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                <a href="https://discord.gg/sFAWANRvV3" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Join our Discord
                </a>
              </Button>
            </div>


          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="mx-auto max-w-7xl">
          <p>&copy; 2025 Gradient Logic. Building the autonomous future.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes flowAnimation {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -15; }
        }
        @-webkit-keyframes flowAnimation {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -15; }
        }
        @-moz-keyframes flowAnimation {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -15; }
        }
      `}</style>
    </div>
  );
}