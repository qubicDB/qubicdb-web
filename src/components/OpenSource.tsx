'use client'

import AnimatedSection from './AnimatedSection'
import { Github, Package, Terminal, BookOpen, Code2 } from 'lucide-react'

const repos = [
  {
    name: 'qubicdb/qubicdb',
    desc: 'Core server — Go, REST API, MCP, CLI, persistence, daemons',
    href: 'https://github.com/denizumutdereli/qubicdb',
    lang: 'Go',
    langColor: 'bg-sky-400',
  },
  {
    name: 'qubicdb/qubicdb-ui',
    desc: 'Admin dashboard — React + Vite + TailwindCSS',
    href: 'https://github.com/denizumutdereli/qubicdb',
    lang: 'TypeScript',
    langColor: 'bg-blue-400',
  },
]

const sdks = [
  { name: 'TypeScript', pkg: 'qubicdb', href: 'https://github.com/denizumutdereli/qubicdb/tree/main/sdks/typescript' },
  { name: 'JavaScript', pkg: 'qubicdb-js', href: 'https://github.com/denizumutdereli/qubicdb/tree/main/sdks/javascript' },
  { name: 'Python', pkg: 'qubicdb', href: 'https://github.com/denizumutdereli/qubicdb/tree/main/sdks/python' },
  { name: 'Go', pkg: 'qubicdb-go', href: 'https://github.com/denizumutdereli/qubicdb/tree/main/sdks/golang' },
]

const quickstart = `# Pull and run
docker run -p 6060:6060 \\
  -e QUBICDB_ADMIN_ENABLED=true \\
  -e QUBICDB_ADMIN_PASSWORD=secret \\
  qubicdb/qubicdb

# Or build from source
git clone https://github.com/denizumutdereli/qubicdb
cd qubicdb && go build ./cmd/qubicdb/`

export default function OpenSource() {
  return (
    <section id="opensource" className="section-padding border-t border-zinc-800/50 relative">
      <div className="absolute inset-0 neural-grid pointer-events-none" />

      <div className="container-custom relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 mb-6">
            <Github className="w-3.5 h-3.5" />
            Open Source · MIT License
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything is open.
            <br />
            <span className="gradient-text">Self-host anywhere.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            REST API, MCP endpoint, persistence layer, lifecycle daemons, admin UI, CLI, and all SDKs —
            fully open source under MIT license. No cloud lock-in.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Repos */}
          <AnimatedSection direction="left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-5">
                <Code2 className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-semibold text-zinc-300">Repositories</span>
              </div>
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface-50 border border-zinc-800/80 rounded-xl p-4 hover:border-zinc-700 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Github className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                        <span className="text-sm font-mono font-medium text-brand-400 group-hover:text-brand-300 truncate">{repo.name}</span>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">{repo.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                      <span className="text-xs text-zinc-500">{repo.lang}</span>
                    </div>
                  </div>
                </a>
              ))}

              {/* SDKs */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-4 h-4 text-neural-400" />
                  <span className="text-sm font-semibold text-zinc-300">SDKs</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {sdks.map((sdk) => (
                    <a
                      key={sdk.name}
                      href={sdk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col p-3 bg-surface-50 border border-zinc-800/60 rounded-lg hover:border-zinc-700 transition-all"
                    >
                      <span className="text-xs font-semibold text-white mb-0.5">{sdk.name}</span>
                      <span className="text-[10px] text-zinc-600 font-mono truncate">{sdk.pkg}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Quickstart */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-5">
                <Terminal className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-semibold text-zinc-300">Quickstart</span>
              </div>
              <div className="bg-surface-50 border border-zinc-800/80 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-zinc-500 ml-2">terminal</span>
                </div>
                <pre className="p-5 text-xs text-zinc-300 overflow-x-auto leading-relaxed font-mono">{quickstart}</pre>
              </div>

              <div className="bg-surface-50 border border-zinc-800/80 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-neural-400" />
                  <span className="text-sm font-semibold text-zinc-300">Resources</span>
                </div>
                {[
                  { label: 'API Reference', href: 'https://github.com/denizumutdereli/qubicdb/blob/main/docs/API.md', desc: 'Full REST + MCP + config docs' },
                  { label: 'OpenAPI Spec', href: 'https://github.com/denizumutdereli/qubicdb/blob/main/openapi.yaml', desc: 'Machine-readable API contract' },
                  { label: 'Benchmarks', href: 'https://github.com/denizumutdereli/qubicdb/tree/main/benchmarks', desc: 'Biology, reasoning, memory suites' },
                  { label: 'Contributing', href: 'https://github.com/denizumutdereli/qubicdb/blob/main/CONTRIBUTING.md', desc: 'How to contribute' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-sm text-brand-400 group-hover:text-brand-300 transition-colors">{link.label}</span>
                      <p className="text-xs text-zinc-600">{link.desc}</p>
                    </div>
                    <svg className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              <a
                href="https://github.com/denizumutdereli/qubicdb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
