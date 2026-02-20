'use client'

import { Brain } from 'lucide-react'

const footerSections = [
  {
    title: 'Architecture',
    links: [
      { label: 'Neurons', href: '#features' },
      { label: 'Synapses', href: '#features' },
      { label: 'Matrix Space', href: '#features' },
      { label: 'Spreading Activation', href: '#features' },
      { label: 'Organic Lifecycle', href: '#features' },
      { label: 'Brain States', href: '#features' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'AI Agent Memory', href: '#features' },
      { label: 'Associative Recall', href: '#features' },
      { label: 'Contextual Intelligence', href: '#features' },
      { label: 'Self-hosting', href: '#opensource' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: 'https://github.com/qubicDB/docs/blob/main/API.md' },
      { label: 'OpenAPI Spec', href: 'https://github.com/qubicDB/qubicdb/blob/main/openapi.yaml' },
      { label: 'CLI (qubicdb-cli)', href: 'https://github.com/qubicDB/qubicdb/tree/main/cmd/qubicdb-cli' },
      { label: 'SDKs', href: 'https://github.com/qubicDB/qubicdb/tree/main/sdks' },
      { label: 'Contributing', href: 'https://github.com/qubicDB/qubicdb/blob/main/CONTRIBUTING.md' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com/qubicDB/qubicdb' },
      { label: 'Issues', href: 'https://github.com/qubicDB/qubicdb/issues' },
      { label: 'Discussions', href: 'https://github.com/qubicDB/qubicdb/discussions' },
      { label: 'License (MIT)', href: 'https://github.com/qubicDB/qubicdb/blob/main/LICENSE' },
    ],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/qubicDB/qubicdb', icon: 'GH' },
  { label: 'Issues', href: 'https://github.com/qubicDB/qubicdb/issues', icon: '!' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-surface-50/30">
      <div className="container-custom py-16 md:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-500/20 rounded-lg blur-sm" />
                <Brain className="w-5 h-5 text-brand-400 relative z-10" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                qubic<span className="text-brand-400">DB</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Brain-like LLM recursive database. Built on neural principles for the next generation of intelligent applications.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-200 border border-zinc-800/50 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h6 className="text-sm font-semibold text-zinc-300 mb-4">{section.title}</h6>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} qubicDB — Open source under MIT License
            {' · '}Developed by <a href="https://github.com/denizumutdereli" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Deniz Umut Dereli</a>
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Self-hosted
            </span>
            <a href="https://github.com/qubicDB/qubicdb/blob/main/LICENSE" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">MIT License</a>
            <a href="https://github.com/qubicDB/qubicdb" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Contribute</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
