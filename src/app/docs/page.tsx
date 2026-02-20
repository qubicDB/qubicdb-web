'use client'

import { Brain, Database, Shield, Zap, Radio, HardDrive, Search, ArrowRight, BookOpen, Code, Terminal, Package } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const gettingStartedFrameworks = [
  { name: 'Neurons', icon: '🧠', href: '#products' },
  { name: 'Synapses', icon: '⚡', href: '#products' },
  { name: 'Matrix', icon: '◎', href: '#products' },
  { name: 'Lifecycle', icon: '🔄', href: '#products' },
  { name: 'States', icon: '💤', href: '#products' },
]

const products = [
  {
    icon: Brain,
    title: 'Neurons',
    description: 'Living memory units with energy, activation level, and N-dimensional position. They fire when accessed, decay over time, and consolidate into deeper layers.',
  },
  {
    icon: Zap,
    title: 'Synapses',
    description: 'Hebbian learning connections — neurons that fire together wire together. Synapses strengthen with use and weaken without, forming associative memory.',
  },
  {
    icon: Database,
    title: 'Matrix',
    description: 'N-dimensional organic space where neurons live. Related neurons cluster together. The matrix reorganizes based on actual usage patterns.',
  },
  {
    icon: Radio,
    title: 'Spreading Activation',
    description: 'Recursive graph traversal through synaptic connections. Query one neuron and activation spreads, finding related memories automatically.',
  },
  {
    icon: HardDrive,
    title: 'Organic Lifecycle',
    description: 'Decay, consolidation, pruning, and reorganization run automatically. The brain maintains itself — no manual garbage collection needed.',
  },
]

const navItems = [
  { label: 'Start', href: '/docs' },
  { label: 'Products', href: '/docs#products' },
  { label: 'Build', href: '/docs#build' },
  { label: 'Manage', href: '/docs#manage' },
  { label: 'Reference', href: '/docs#reference' },
  { label: 'Resources', href: '/docs#resources' },
]

export default function DocsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Docs sub-nav */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-surface/90 backdrop-blur-lg border-b border-zinc-800/50">
        <div className="container-custom flex items-center gap-1 h-11 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap rounded-md hover:bg-surface-200/50"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-auto flex items-center">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-200 border border-zinc-800/60 rounded-lg text-sm text-zinc-500 cursor-pointer hover:border-zinc-700 transition-colors">
              <Search className="w-3.5 h-3.5" />
              <span>Search docs...</span>
              <kbd className="hidden sm:inline text-xs bg-surface-100 px-1.5 py-0.5 rounded border border-zinc-700/50 text-zinc-600 ml-4">⌘K</kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Main docs content */}
      <div className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Left: Title */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">qubicDB Documentation</h1>
                  </div>
                </div>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Understand the brain-like architecture: neurons, synapses, Hebbian learning, 
                  spreading activation, and organic memory lifecycle.
                </p>
              </div>

              {/* Right: Getting Started card */}
              <div className="bg-surface-50 border border-zinc-800/80 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Getting Started</h3>
                </div>
                <p className="text-sm text-zinc-400 mb-5">
                  Set up and connect a neural database in just a few minutes.
                </p>

                {/* Framework icons grid */}
                <div className="grid grid-cols-5 gap-2 mb-5">
                  {gettingStartedFrameworks.map((fw) => (
                    <a
                      key={fw.name}
                      href={fw.href}
                      className="flex items-center justify-center w-full aspect-square rounded-xl bg-surface-200 border border-zinc-800/60 text-lg hover:border-brand-500/30 hover:bg-surface-300 transition-all group"
                      title={fw.name}
                    >
                      <span className="group-hover:scale-110 transition-transform">{fw.icon}</span>
                    </a>
                  ))}
                </div>

                <a
                  href="https://github.com/denizumutdereli/qubicdb/blob/main/docs/API.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>Full API Reference →</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Products section */}
          <AnimatedSection delay={0.1}>
            <div id="products" className="scroll-mt-32">
              <h2 className="text-xl font-semibold text-white mb-6">Core Concepts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => (
                  <a
                    key={product.title}
                    href="#products"
                    className="group bg-surface-50 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700/80 transition-all card-hover"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-200 border border-zinc-800/60 flex items-center justify-center flex-shrink-0 group-hover:border-brand-500/20 transition-colors">
                        <product.icon className="w-4 h-4 text-zinc-400 group-hover:text-brand-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">{product.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick links */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <a href="https://github.com/denizumutdereli/qubicdb/blob/main/docs/API.md" target="_blank" rel="noopener noreferrer" className="group bg-surface-50 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700/80 transition-all card-hover">
                <BookOpen className="w-5 h-5 text-zinc-500 mb-3 group-hover:text-brand-400 transition-colors" />
                <h3 className="text-sm font-semibold text-white mb-1">API Reference</h3>
                <p className="text-xs text-zinc-500">Full REST + MCP + config docs — all endpoints, parameters, error codes.</p>
              </a>
              <a href="https://github.com/denizumutdereli/qubicdb/blob/main/openapi.yaml" target="_blank" rel="noopener noreferrer" className="group bg-surface-50 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700/80 transition-all card-hover">
                <Code className="w-5 h-5 text-zinc-500 mb-3 group-hover:text-brand-400 transition-colors" />
                <h3 className="text-sm font-semibold text-white mb-1">OpenAPI Spec</h3>
                <p className="text-xs text-zinc-500">Machine-readable contract — import into Postman, Insomnia, or Swagger UI.</p>
              </a>
              <a href="https://github.com/denizumutdereli/qubicdb/tree/main/cmd/qubicdb-cli" target="_blank" rel="noopener noreferrer" className="group bg-surface-50 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700/80 transition-all card-hover">
                <Terminal className="w-5 h-5 text-zinc-500 mb-3 group-hover:text-brand-400 transition-colors" />
                <h3 className="text-sm font-semibold text-white mb-1">CLI (qubicdb-cli)</h3>
                <p className="text-xs text-zinc-500">Interactive REPL shell — psql/redis-cli style admin + brain ops.</p>
              </a>
            </div>
          </AnimatedSection>

          {/* Example code section */}
          <AnimatedSection delay={0.3}>
            <div id="build" className="scroll-mt-32 mt-16">
              <h2 className="text-xl font-semibold text-white mb-2">Quick Start</h2>
              <p className="text-sm text-zinc-500 mb-6">Get your first qubicDB project running in under 2 minutes.</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Run Server */}
                <div className="code-block rounded-xl">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-xs text-zinc-500">Run Server</span>
                    </div>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto">
                    <code className="text-zinc-300">
{`# Run with Docker
docker run -p 6060:6060 \\
  -e QUBICDB_ADMIN_ENABLED=true \\
  -e QUBICDB_ADMIN_PASSWORD=secret \\
  qubicdb/qubicdb

# Or build from source
git clone https://github.com/denizumutdereli/qubicdb
cd qubicdb/qubicdb
go build -o qubicdb ./cmd/qubicdb/
./qubicdb --admin --admin-password secret`}
                    </code>
                  </pre>
                </div>

                {/* Use the API */}
                <div className="code-block rounded-xl">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-xs text-zinc-500">Use the API</span>
                    </div>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto">
                    <code className="text-zinc-300">
{`# Write a memory (X-Index-ID header scopes to index)
curl -X POST localhost:6060/v1/write \\
  -H "Content-Type: application/json" \\
  -H "X-Index-ID: my-agent" \\
  -d '{"content":"User prefers dark mode",
       "metadata":{"role":"user"}}'

# Hybrid search (lexical + vector + sentiment)
curl -X POST localhost:6060/v1/search \\
  -H "X-Index-ID: my-agent" \\
  -d '{"query":"preferences","depth":2,"limit":10}'

# Assemble LLM context
curl -X POST localhost:6060/v1/context \\
  -H "X-Index-ID: my-agent" \\
  -d '{"cue":"user preferences","maxTokens":2000}'`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </main>
  )
}
