'use client'

import AnimatedSection from './AnimatedSection'

const stack = [
  { name: 'Go', desc: 'Core runtime', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  { name: 'MiniLM-L6-v2', desc: 'GGUF embedding model (384-dim)', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
  { name: 'llama.cpp', desc: 'GGUF inference via purego', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { name: 'SIMD', desc: 'arm64/amd64 cosine similarity', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { name: 'VADER', desc: 'Sentiment analysis (govader)', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { name: 'msgpack', desc: 'Binary serialization (.nrdb)', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { name: 'MCP', desc: 'Streamable HTTP tool protocol', color: 'text-brand-400', bg: 'bg-brand-500/10 border-brand-500/20' },
  { name: 'MIT License', desc: 'Fully open source', color: 'text-zinc-300', bg: 'bg-zinc-800/60 border-zinc-700/40' },
]

export default function TechStack() {
  return (
    <section className="relative py-16 border-t border-zinc-800/50">
      <div className="container-custom">
        <AnimatedSection>
          <p className="text-center text-sm text-zinc-500 uppercase tracking-widest font-medium mb-10">
            Built on proven open-source foundations
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {stack.map((item) => (
              <div
                key={item.name}
                className={`flex flex-col items-center text-center p-3 rounded-xl border ${item.bg} transition-all hover:scale-105`}
              >
                <span className={`text-sm font-bold ${item.color} mb-1`}>{item.name}</span>
                <span className="text-[10px] text-zinc-500 leading-tight">{item.desc}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
