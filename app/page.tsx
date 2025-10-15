'use client'
import React, { useState } from "react";
import { ArrowRight, MessageSquare, FileText, Clock, CheckCircle2, Zap, Shield, Bot, Cpu, Target, Calendar, Play, Sparkles, ChevronRight, AlertTriangle, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Report type definition
interface ResearchReport {
  company: string;
  ticker: string;
  price: string;
  rating: string;
  targetPrice: string;
  sentiment: string;
  keyInsights: string[];
  risks: string[];
  summary: string;
}

// Interactive Ticker Demo Component
const InteractiveTickerDemo = () => {
  const [ticker, setTicker] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<ResearchReport | null>(null);

  const sampleReports: Record<string, ResearchReport> = {
    'AAPL': {
      company: 'Apple Inc.',
      ticker: 'AAPL',
      price: '$185.42',
      rating: 'BUY',
      targetPrice: '$210',
      sentiment: 'Positive',
      keyInsights: [
        'Services revenue grew 16% YoY, demonstrating strong ecosystem stickiness',
        'iPhone 15 launch exceeded expectations with Pro models sold out in key markets',
        'Margins expanding due to shift toward higher-margin services (23% of revenue)',
        'Vision Pro positioned for Q1 2024 launch with strong enterprise interest'
      ],
      risks: [
        'Regulatory scrutiny in EU regarding App Store policies',
        'China revenue exposure (19% of total) amid geopolitical tensions'
      ],
      summary: 'Strong fundamental momentum with expanding margins. Services growth offsets hardware cyclicality. Recommended position size: 3-5% of portfolio.'
    },
    'MSFT': {
      company: 'Microsoft Corporation',
      ticker: 'MSFT',
      price: '$378.91',
      rating: 'STRONG BUY',
      targetPrice: '$425',
      sentiment: 'Very Positive',
      keyInsights: [
        'Azure growth accelerating at 29% YoY driven by AI workloads',
        'GitHub Copilot and M365 Copilot showing strong enterprise adoption',
        'Commercial bookings up 23%, indicating strong forward revenue visibility',
        'OpenAI partnership creating competitive moat in enterprise AI'
      ],
      risks: [
        'High valuation at 32x forward earnings vs 5-year average of 28x',
        'Gaming division facing regulatory challenges with Activision deal'
      ],
      summary: 'Best-in-class AI positioning among mega-caps. Cloud and AI synergies driving margin expansion. Core holding recommended.'
    },
    'TSLA': {
      company: 'Tesla Inc.',
      ticker: 'TSLA',
      price: '$242.68',
      rating: 'HOLD',
      targetPrice: '$250',
      sentiment: 'Mixed',
      keyInsights: [
        'Q3 deliveries beat estimates with 435K vehicles (up 27% YoY)',
        'Cybertruck production ramping, 1.9M reservations reported',
        'Energy storage deployments up 90% YoY, now $6B annual run-rate',
        'FSD v12 showing improved capabilities, subscription revenue growing'
      ],
      risks: [
        'Margin compression from aggressive pricing (automotive gross margin at 16.3%)',
        'Competition intensifying in China and Europe',
        'Execution risk on multiple new products (Cybertruck, Semi, Roadster)'
      ],
      summary: 'Growth story intact but valuation stretched. Wait for better entry point or take profits if held since 2023. Not a new position at current levels.'
    }
  };

  const handleGenerate = () => {
    const upperTicker = ticker.toUpperCase();
    if (!upperTicker) return;
    
    setIsGenerating(true);
    setReport(null);
    
    // Simulate AI processing
    setTimeout(() => {
      if (sampleReports[upperTicker]) {
        setReport(sampleReports[upperTicker]);
      } else {
        // Generic report for any other ticker
        setReport({
          company: `${upperTicker} - Sample Company`,
          ticker: upperTicker,
          price: '$' + (Math.random() * 500 + 50).toFixed(2),
          rating: ['BUY', 'HOLD', 'SELL'][Math.floor(Math.random() * 3)],
          targetPrice: '$' + (Math.random() * 600 + 100).toFixed(2),
          sentiment: 'Neutral',
          keyInsights: [
            'Financial metrics show stable growth trajectory',
            'Recent product launches gaining market traction',
            'Management executing on strategic initiatives',
            'Industry tailwinds supporting revenue growth'
          ],
          risks: [
            'Market volatility could impact near-term performance',
            'Competitive landscape intensifying'
          ],
          summary: 'Sample analysis for demonstration purposes. Real reports include deep fundamental analysis, 10+ data sources, and custom insights based on your investment criteria.'
        });
      }
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Interactive Demo: AI Research Agent
        </h3>
        <p className="text-sm text-indigo-100">Enter any stock ticker to see an instant research report</p>
      </div>

      <div className="p-6">
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter ticker (e.g., AAPL, MSFT, TSLA)"
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-lg font-mono"
          />
          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating || !ticker}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg px-8"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Generate Report
              </>
            )}
          </Button>
        </div>

        {isGenerating && (
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="animate-pulse w-2 h-2 bg-blue-500 rounded-full" />
              Gathering financial data from 12 sources...
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="animate-pulse w-2 h-2 bg-indigo-500 rounded-full" />
              Analyzing news sentiment (847 articles)...
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="animate-pulse w-2 h-2 bg-purple-500 rounded-full" />
              Generating investment thesis...
            </div>
          </div>
        )}

        {report && (
          <div className="space-y-4 animate-[fadeInUp_0.5s_forwards]">
            {/* Header */}
            <div className="border-b border-slate-200 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{report.company}</h4>
                  <p className="text-slate-600">{report.ticker} • Generated {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">{report.price}</div>
                  <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    report.rating === 'BUY' || report.rating === 'STRONG BUY' ? 'bg-green-100 text-green-700' :
                    report.rating === 'HOLD' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {report.rating}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-500">Target Price</p>
                  <p className="font-semibold text-slate-900">{report.targetPrice}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-500">Sentiment</p>
                  <p className="font-semibold text-slate-900">{report.sentiment}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-500">Confidence</p>
                  <p className="font-semibold text-slate-900">High</p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-green-600" />
                Key Insights
              </h5>
              <ul className="space-y-2">
                {report.keyInsights.map((insight: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div>
              <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Key Risks
              </h5>
              <ul className="space-y-2">
                {report.risks.map((risk: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h5 className="font-semibold text-slate-900 mb-2">Investment Summary</h5>
              <p className="text-sm text-slate-700">{report.summary}</p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 mb-3">
                This is a simplified demo. Real reports include 10+ data sources, 
                valuation models, peer comparisons, and custom insights.
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 to-blue-600">
                <a href="#contact">Get Full Report Access</a>
              </Button>
            </div>
          </div>
        )}

        {!report && !isGenerating && (
          <div className="text-center py-12 text-slate-400">
            <Bot className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>Enter a ticker symbol above to see instant AI-generated research</p>
            <p className="text-xs mt-2">Try: AAPL, MSFT, or TSLA for detailed examples</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function GradientLogic() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/gl-logo.png" alt="Gradient Logic" className="h-8 w-8" />
            <span className="font-semibold text-xl tracking-tight">Gradient <span className="text-indigo-600">Logic</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#demo" className="hover:text-indigo-700 transition-colors">Live Demo</a>
            <a href="#services" className="hover:text-indigo-700 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-indigo-700 transition-colors">Pricing</a>
            <a href="#results" className="hover:text-indigo-700 transition-colors">Results</a>
            <a href="#contact" className="hover:text-indigo-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600">
              <a href="#contact">Book Demo Call</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              For Asset Managers & Investment Professionals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-slate-900">Stop Spending</span><br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">40 Hours Per Week</span><br />
              <span className="text-slate-900">on Company Research</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              AI agents that automatically research companies, monitor portfolios, and generate investment memos—
              <strong> with full audit trails for compliance</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl">
                <a href="#demo">Try Live Demo <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#pricing">See Pricing</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span><strong>7 days</strong> to first report</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span><strong>Audit trails</strong> included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span><strong>No code</strong> required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              See It in <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-lg text-slate-600">
              Enter any stock ticker to see how our AI agents generate comprehensive research reports
            </p>
          </div>
          
          <InteractiveTickerDemo />

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              <strong>Try:</strong> AAPL, MSFT, or TSLA for detailed sample reports • Any other ticker for generic demo
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Research Automation Problem</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">Before: Manual Research</h3>
              <div className="space-y-4">
                {[
                  { task: 'Read 10-K, 10-Q filings', time: '2-3 hours' },
                  { task: 'Scan news & earnings transcripts', time: '1-2 hours' },
                  { task: 'Build financial models', time: '2-4 hours' },
                  { task: 'Write investment memo', time: '1-2 hours' },
                  { task: 'Monitor for updates', time: 'Ongoing' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
                    <span className="text-slate-700">{item.task}</span>
                    <span className="text-red-600 font-semibold">{item.time}</span>
                  </div>
                ))}
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                  <div className="text-3xl font-bold text-red-600">6-11 hours</div>
                  <div className="text-sm text-red-700">per company researched</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">After: AI Automation</h3>
              <div className="space-y-4">
                {[
                  { task: 'AI reads all filings automatically', time: '2 min' },
                  { task: 'Sentiment analysis of 500+ articles', time: '1 min' },
                  { task: 'Auto-generated financial summary', time: '1 min' },
                  { task: 'Draft memo with key insights', time: '2 min' },
                  { task: 'Real-time monitoring & alerts', time: 'Automated' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                    <span className="text-slate-700">{item.task}</span>
                    <span className="text-green-600 font-semibold">{item.time}</span>
                  </div>
                ))}
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                  <div className="text-3xl font-bold text-green-600">15 minutes</div>
                  <div className="text-sm text-green-700">to review & refine</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-2xl">
              <Zap className="h-6 w-6" />
              <div className="text-left">
                <div className="text-2xl font-bold">92% Time Savings</div>
                <div className="text-sm text-indigo-100">Focus on decisions, not data gathering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / PACKAGES */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-lg text-slate-600">Choose the automation level that fits your workflow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <Card className="border-2 border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="text-sm font-semibold text-indigo-600 mb-2">STARTER</div>
                <CardTitle className="text-2xl">Company Research</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1,500</span>
                  <span className="text-slate-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    '30 company reports per month',
                    'Daily news monitoring',
                    'Automated financial analysis',
                    'Email delivery',
                    'Audit trail logs'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full">
                  <a href="#contact">Get Started</a>
                </Button>
                <p className="text-xs text-center text-slate-500 mt-3">7-day setup • Cancel anytime</p>
              </CardContent>
            </Card>

            {/* Package 2 */}
            <Card className="border-2 border-indigo-500 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <CardHeader>
                <div className="text-sm font-semibold text-indigo-600 mb-2">PROFESSIONAL</div>
                <CardTitle className="text-2xl">Portfolio Intelligence</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$4,500</span>
                  <span className="text-slate-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    'Unlimited company reports',
                    'Portfolio monitoring (50 holdings)',
                    'Daily intelligence digest',
                    'Due diligence assistance',
                    'Custom research templates',
                    'Slack/Teams integration',
                    'Priority support'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-blue-600">
                  <a href="#contact">Start Free Trial</a>
                </Button>
                <p className="text-xs text-center text-slate-500 mt-3">14-day trial • No credit card</p>
              </CardContent>
            </Card>

            {/* Package 3 */}
            <Card className="border-2 border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="text-sm font-semibold text-indigo-600 mb-2">ENTERPRISE</div>
                <CardTitle className="text-2xl">Custom Platform</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    'Everything in Professional',
                    'Custom agent workflows',
                    'Multi-user access',
                    'API access for integration',
                    'Advanced compliance features',
                    'Dedicated support',
                    'On-premise deployment option'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <a href="#contact">Contact Sales</a>
                </Button>
                <p className="text-xs text-center text-slate-500 mt-3">Custom pricing & SLA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">From onboarding to daily reports in 7 days</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Setup Call',
                desc: 'Share your research needs, coverage universe, and reporting preferences',
                icon: <Calendar className="h-8 w-8" />,
                time: 'Day 1'
              },
              {
                step: '2',
                title: 'Agent Configuration',
                desc: 'We build your custom research agents and integrate data sources',
                icon: <Cpu className="h-8 w-8" />,
                time: 'Day 2-5'
              },
              {
                step: '3',
                title: 'Review & Refine',
                desc: 'You test the first reports and we adjust based on your feedback',
                icon: <FileText className="h-8 w-8" />,
                time: 'Day 6-7'
              },
              {
                step: '4',
                title: 'Go Live',
                desc: 'Daily automated reports delivered to your inbox or Slack',
                icon: <Zap className="h-8 w-8" />,
                time: 'Day 8+'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent z-0" />
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  <div className="text-sm font-semibold text-indigo-600 mb-2">{step.time}</div>
                  <h3 className="text-xl font-semibold mb-2">Step {step.step}: {step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / CASE STUDIES */}
      <section id="results" className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
            <p className="text-lg text-slate-600">How AI research automation transforms investment workflows</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-indigo-600">$120K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Annual cost savings per analyst (@ $150/hr × 16hrs/week saved)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">30 min</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Average time to get comprehensive company research report</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Audit trail coverage for compliance and regulatory requirements</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-indigo-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Mid-Market Asset Manager • $500M AUM</CardTitle>
                    <p className="text-sm text-slate-600 mt-1">Small Cap Equity Strategy</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    Active Client
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Challenge</h4>
                    <p className="text-sm text-slate-600">
                      2-person team covering 80+ small-cap stocks. Research taking 25+ hours per week, 
                      missing opportunities due to bandwidth constraints.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Solution & Results</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Deployed automated research agents with daily monitoring for entire coverage universe.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Research time reduced to 6 hours/week (76% reduction)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Expanded coverage to 120 stocks with same team</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Caught 3 earnings surprises before consensus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Family Office • Multi-Strategy</CardTitle>
                    <p className="text-sm text-slate-600 mt-1">Private Equity & Public Markets</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    Active Client
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Challenge</h4>
                    <p className="text-sm text-slate-600">
                      Due diligence on private deals taking 60+ hours per transaction. 
                      Need consistent framework with audit trails for investment committee.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Solution & Results</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Built custom DD agent workflow with automated document analysis and risk flagging.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>DD time reduced from 60hrs to 18hrs per deal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Standardized checklist across all deals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Full audit trail for regulatory requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Boutique Research Firm</CardTitle>
                    <p className="text-sm text-slate-600 mt-1">Thematic Equity Research</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    Recent Project
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Challenge</h4>
                    <p className="text-sm text-slate-600">
                      Publishing weekly thematic research notes requiring synthesis of 100+ sources. 
                      Clients demanding faster turnaround.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Solution & Results</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Created multi-agent research pipeline with automated synthesis and fact-checking.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Research notes published 2 days faster</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Increased coverage to 15 themes from 10</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        <span>Zero factual errors since deployment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">No hidden fees. Cancel anytime. All plans include audit trails.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-6 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-6 font-semibold text-slate-900">Starter<br/><span className="text-sm font-normal text-slate-600">$1,500/mo</span></th>
                    <th className="text-center p-6 font-semibold text-indigo-600 bg-indigo-50">Professional<br/><span className="text-sm font-normal text-indigo-600">$4,500/mo</span></th>
                    <th className="text-center p-6 font-semibold text-slate-900">Enterprise<br/><span className="text-sm font-normal text-slate-600">Custom</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feature: 'Company reports per month', starter: '30', pro: 'Unlimited', enterprise: 'Unlimited' },
                    { feature: 'Portfolio monitoring', starter: '—', pro: '50 holdings', enterprise: 'Unlimited' },
                    { feature: 'Daily intelligence digest', starter: '—', pro: '✓', enterprise: '✓' },
                    { feature: 'Due diligence assistance', starter: '—', pro: '✓', enterprise: '✓' },
                    { feature: 'Custom templates', starter: '—', pro: '✓', enterprise: '✓' },
                    { feature: 'Team collaboration', starter: '1 user', pro: '3 users', enterprise: 'Unlimited' },
                    { feature: 'API access', starter: '—', pro: '—', enterprise: '✓' },
                    { feature: 'On-premise deployment', starter: '—', pro: '—', enterprise: '✓' },
                    { feature: 'Dedicated support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
                    { feature: 'Setup time', starter: '7 days', pro: '7 days', enterprise: '2-4 weeks' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-4 text-sm text-slate-700">{row.feature}</td>
                      <td className="p-4 text-sm text-center text-slate-600">{row.starter}</td>
                      <td className="p-4 text-sm text-center font-medium text-indigo-700 bg-indigo-50/50">{row.pro}</td>
                      <td className="p-4 text-sm text-center text-slate-600">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 mb-4">All plans include: MCP-based agent architecture • ChromaDB vector storage • Full audit trails • SOC 2 compliant infrastructure</p>
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600">
              <a href="#contact">Start Your 14-Day Free Trial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Gradient Logic?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-indigo-500">
              <CardHeader>
                <Target className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Built for Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Not generic AI tools. Purpose-built for investment research with understanding of 
                  financial metrics, regulatory requirements, and fiduciary responsibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Compliance-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Full audit trails, source attribution, and explainable AI. Built for regulated environments 
                  where you need to show your work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Fast Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Live in 7 days, not quarters. Start with one use case, expand as you see value. 
                  No long implementations or complex IT projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How accurate are the AI-generated reports?',
                a: 'Our agents achieve 95%+ accuracy on factual data (financials, news, filings). All outputs include source citations for verification. We recommend human review before making investment decisions.'
              },
              {
                q: 'Can I customize the research format?',
                a: 'Yes. We provide templates for common formats (investment memos, daily digests, due diligence checklists) and can create custom templates based on your workflow.'
              },
              {
                q: 'What data sources do you use?',
                a: 'SEC filings (EDGAR), earnings transcripts, news (10+ providers), analyst reports, financial data (via your existing Bloomberg/FactSet), and web sources. We can integrate your proprietary data sources.'
              },
              {
                q: 'Is this compliant with regulatory requirements?',
                a: 'Yes. All research includes full source attribution, audit trails, and timestamps. We build in controls for your compliance policies (e.g., information barriers, restricted lists).'
              },
              {
                q: 'How do you handle data security?',
                a: 'SOC 2 Type II certified infrastructure. Data encrypted in transit and at rest. Option for on-premise deployment for sensitive environments. We never train models on your proprietary data.'
              },
              {
                q: 'What if the AI makes a mistake?',
                a: 'All reports are meant to assist analysts, not replace them. We provide confidence scores, highlight uncertainties, and always include source links for verification. You maintain final decision-making control.'
              }
            ].map((faq, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITOR COMPARISON */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-lg text-slate-600">Built for boutique firms that can&apos;t afford enterprise pricing</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-indigo-600 bg-indigo-50">Gradient Logic</th>
                  <th className="text-center p-4 font-semibold text-slate-600">AlphaSense</th>
                  <th className="text-center p-4 font-semibold text-slate-600">Tegus</th>
                  <th className="text-center p-4 font-semibold text-slate-600">Bloomberg</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Annual Cost (per seat)</td>
                  <td className="text-center p-4 bg-indigo-50">
                    <div className="font-bold text-indigo-600">$1.5K - $4.5K</div>
                  </td>
                  <td className="text-center p-4 text-slate-600">$12K - $50K+</td>
                  <td className="text-center p-4 text-slate-600">$20K - $100K+</td>
                  <td className="text-center p-4 text-slate-600">$24K - $30K</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Pre-built Research Reports</td>
                  <td className="text-center p-4 bg-indigo-50"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4 text-slate-400">Search only</td>
                  <td className="text-center p-4 text-slate-400">Search only</td>
                  <td className="text-center p-4 text-slate-400">Manual</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Time to Value</td>
                  <td className="text-center p-4 bg-indigo-50">
                    <div className="font-bold text-indigo-600">7 days</div>
                  </td>
                  <td className="text-center p-4 text-slate-600">2-3 months</td>
                  <td className="text-center p-4 text-slate-600">1-2 months</td>
                  <td className="text-center p-4 text-slate-600">Training required</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">AI-Powered Analysis</td>
                  <td className="text-center p-4 bg-indigo-50"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4 text-slate-400">Limited</td>
                  <td className="text-center p-4 text-slate-400">Basic copilot</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Best For</td>
                  <td className="text-center p-4 bg-indigo-50">
                    <div className="text-sm">Boutique firms<br/>$50M-$500M AUM</div>
                  </td>
                  <td className="text-center p-4 text-slate-600">
                    <div className="text-sm">Enterprise<br/>$1B+ AUM</div>
                  </td>
                  <td className="text-center p-4 text-slate-600">
                    <div className="text-sm">PE/VC firms<br/>Primary research</div>
                  </td>
                  <td className="text-center p-4 text-slate-600">
                    <div className="text-sm">All-in-one<br/>Large teams</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Automated Workflows</td>
                  <td className="text-center p-4 bg-indigo-50"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4 text-slate-400">Manual search</td>
                  <td className="text-center p-4 text-slate-400">Manual search</td>
                  <td className="text-center p-4 text-slate-400">Manual</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Source Attribution</td>
                  <td className="text-center p-4 bg-indigo-50"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Contract Flexibility</td>
                  <td className="text-center p-4 bg-indigo-50">
                    <div className="text-sm font-bold text-indigo-600">Monthly or Annual</div>
                  </td>
                  <td className="text-center p-4 text-slate-600">Annual only</td>
                  <td className="text-center p-4 text-slate-600">Annual only</td>
                  <td className="text-center p-4 text-slate-600">Annual only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-green-500">
              <CardHeader>
                <Target className="h-10 w-10 text-green-600 mb-3" />
                <CardTitle>10x More Affordable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Enterprise-grade research automation at a price point accessible to boutique firms 
                  and family offices. No long-term contracts required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500">
              <CardHeader>
                <Zap className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Built for Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Pre-built workflows mean you start getting value immediately. No months of training, 
                  no complex implementations, no IT projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500">
              <CardHeader>
                <Bot className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle>AI-First Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Not a legacy platform with AI bolted on. Built from the ground up with modern LLMs 
                  and multi-agent orchestration for better results.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              See the difference in action
            </p>
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600">
              <a href="https://calendly.com/hello-gradient-logic/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5 mr-2" />
                Book a Side-by-Side Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Automate Your Research?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your first AI-generated research report in less than 7 days
          </p>

          <div className="bg-white rounded-2xl p-8 text-slate-900 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">1</div>
                <p className="text-sm font-semibold mb-1">Book Demo Call</p>
                <p className="text-xs text-slate-600">Show your workflow, see the platform</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <p className="text-sm font-semibold mb-1">Get Custom Proposal</p>
                <p className="text-xs text-slate-600">Tailored to your research needs</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-sm font-semibold mb-1">Start Free Trial</p>
                <p className="text-xs text-slate-600">14 days, full access, no credit card</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600">
                <a href="https://calendly.com/hello-gradient-logic/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Call
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="https://discord.gg/sFAWANRvV3" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Join Discord Community
                </a>
              </Button>
            </div>
          </div>

          <p className="text-sm text-slate-400">
            Based in Athens • Serving asset managers globally • Built with MCP & ChromaDB
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="mx-auto max-w-7xl">
          <p>&copy; 2025 Gradient Logic. Intelligent automation for investment professionals.</p>
        </div>
      </footer>
    </div>
  );
}
