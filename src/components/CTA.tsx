'use client'

import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function CTA() {
  return (
    <section className="section-padding border-t border-zinc-800/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 neural-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[300px] bg-neural-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Give your AI
            <br />
            <span className="gradient-text">a real brain</span>
          </h2>

          <p className="max-w-xl mx-auto text-lg text-zinc-400 mb-10">
            Not just storage — actual neural architecture. Neurons fire and decay, 
            synapses form through learning, memories consolidate during sleep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#features" className="btn-primary text-base !px-8 !py-3.5 group">
              Explore the architecture
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/qubicDB/qubicdb" className="btn-secondary text-base !px-8 !py-3.5">
              View on GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-zinc-600">
            Open source &middot; MIT License &middot; Built with neuroscience principles
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
