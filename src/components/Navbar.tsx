'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Github, Brain } from 'lucide-react'

const navLinks = [
  {
    label: 'Architecture',
    children: [
      { label: 'Neurons & Synapses', href: '#features', desc: 'Living memory units with energy, decay, Hebbian learning' },
      { label: 'Matrix Space', href: '#features', desc: 'N-dimensional organic space, fractal clustering' },
      { label: 'Spreading Activation', href: '#features', desc: 'Recursive associative recall through synaptic graph' },
      { label: 'Brain States', href: '#features', desc: 'Active → Idle → Sleeping → Dormant lifecycle' },
      { label: 'Hybrid Search', href: '#features', desc: 'Lexical + vector (MiniLM-L6-v2) + sentiment scoring' },
      { label: 'Sentiment Layer', href: '#features', desc: 'VADER-based emotion analysis, 6 Ekman emotions' },
    ],
  },
  {
    label: 'Developers',
    children: [
      { label: 'API Reference', href: 'https://github.com/denizumutdereli/qubicdb/blob/main/docs/API.md', desc: 'Full REST + MCP + config documentation' },
      { label: 'OpenAPI Spec', href: 'https://github.com/denizumutdereli/qubicdb/blob/main/openapi.yaml', desc: 'Machine-readable API contract' },
      { label: 'CLI (qubicdb-cli)', href: 'https://github.com/denizumutdereli/qubicdb/tree/main/cmd/qubicdb-cli', desc: 'Interactive REPL — psql/redis-cli style' },
      { label: 'Methodology', href: '#methodology', desc: 'Engram neurons, Hebbian learning, fractal clustering, emotional mapping' },
      { label: 'SDKs', href: '#opensource', desc: 'TypeScript, JavaScript, Python, Go' },
      { label: 'Benchmarks', href: '#benchmarks', desc: 'Real numbers on Apple M3 arm64' },
    ],
  },
  {
    label: 'Use Cases',
    children: [
      { label: 'AI Agent Memory', href: '#features', desc: 'Persistent long-term recall for LLM agents' },
      { label: 'Associative Recall', href: '#features', desc: 'Find related memories through synaptic traversal' },
      { label: 'MCP Integration', href: '#features', desc: 'Streamable HTTP MCP for Claude, GPT, etc.' },
      { label: 'Self-hosting', href: '#opensource', desc: 'Docker or binary — no cloud dependency' },
    ],
  },
]

const directLinks = [
  { label: 'API Docs', href: 'https://github.com/denizumutdereli/qubicdb/blob/main/docs/API.md' },
  { label: 'GitHub', href: 'https://github.com/denizumutdereli/qubicdb' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-500/20 rounded-lg blur-sm group-hover:bg-brand-500/30 transition-all" />
            <Brain className="w-5 h-5 text-brand-400 relative z-10" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            qubic<span className="text-brand-400">DB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
                {link.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-surface-100 border border-zinc-800 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    <div className="p-2">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-surface-200 transition-colors group"
                        >
                          <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                            {child.label}
                          </span>
                          <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                            {child.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {directLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/denizumutdereli/qubicdb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-white border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a href="#opensource" className="text-sm text-zinc-300 hover:text-white transition-colors px-3 py-2">
            Open source
          </a>
          <a
            href="https://github.com/denizumutdereli/qubicdb#quickstart"
            className="btn-primary text-sm !px-4 !py-2"
          >
            Get started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-100 border-t border-zinc-800 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{link.label}</p>
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-surface-200 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ))}
              <div className="border-t border-zinc-800 pt-4 flex flex-col gap-2">
                <a href="/docs" className="btn-primary text-sm justify-center">
                  Run locally
                </a>
                <a href="#opensource" className="btn-secondary text-sm justify-center">
                  Open source
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
