'use client'

import AnimatedSection from './AnimatedSection'

export default function DashboardPreview() {
  return (
    <section className="section-padding border-t border-zinc-800/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neural-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-neural-400 mb-4 uppercase tracking-widest">Neural Dashboard</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Watch your brain
            <br />
            <span className="gradient-text-alt">think in real-time</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Monitor neuron energy levels, observe synapse formation, track consolidation 
            during sleep cycles, and watch the matrix reorganize itself.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/10 via-neural-500/10 to-brand-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="ui.png"
                alt="QubicDB Console — Brain Inspector"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
