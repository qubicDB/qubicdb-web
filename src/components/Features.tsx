'use client'

import { Database, Shield, Zap, Radio, HardDrive, Brain } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const features = [
  {
    icon: Brain,
    title: 'Neurons — Living Memory Units',
    description: 'Each memory is a neuron with energy, activation level, and depth. Neurons fire when accessed, decay over time, and consolidate into long-term storage — just like biological memory.',
    color: 'brand',
    gradient: 'from-brand-500/20 to-brand-500/5',
  },
  {
    icon: Zap,
    title: 'Synapses — Hebbian Learning',
    description: '"Neurons that fire together, wire together." Synapses form automatically between co-activated neurons, strengthen with use, and weaken without it. Pure associative memory.',
    color: 'neural',
    gradient: 'from-neural-500/20 to-neural-500/5',
  },
  {
    icon: Database,
    title: 'Matrix — N-Dimensional Space',
    description: 'Neurons exist in an organic, growing matrix. Related neurons pull closer together over time. The matrix reorganizes itself based on actual usage patterns.',
    color: 'brand',
    gradient: 'from-brand-500/20 to-neural-500/5',
  },
  {
    icon: Radio,
    title: 'Spreading Activation',
    description: 'Query one neuron and activation spreads through synaptic connections. Recursive traversal finds related memories you didn\'t explicitly search for — true associative recall.',
    color: 'neural',
    gradient: 'from-neural-500/20 to-brand-500/5',
  },
  {
    icon: HardDrive,
    title: 'Organic Lifecycle',
    description: 'Decay reduces unused memory energy. Consolidation moves important memories deeper. Pruning removes dead connections. The brain maintains itself automatically.',
    color: 'brand',
    gradient: 'from-brand-500/20 to-brand-500/5',
  },
  {
    icon: Shield,
    title: 'Brain States',
    description: 'Each brain transitions through Active → Idle → Sleeping → Dormant states. Consolidation happens during "sleep" — mirroring how biological memory actually works.',
    color: 'neural',
    gradient: 'from-neural-500/20 to-neural-500/5',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-brand-400 mb-4 uppercase tracking-widest">Architecture</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            A database that thinks
            <br />
            <span className="gradient-text">like your brain</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Not another key-value store. QubicDB implements actual neuroscience principles — 
            neurons, synapses, Hebbian learning, and organic memory lifecycle.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="group relative h-full bg-surface-50 border border-zinc-800/80 rounded-2xl p-7 card-hover overflow-hidden">
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 ${
                    feature.color === 'brand' 
                      ? 'bg-brand-500/10 text-brand-400' 
                      : 'bg-neural-500/10 text-neural-400'
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2.5">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>

                  {/* Learn more link */}
                  <a href="/docs" className={`inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors ${
                    feature.color === 'brand'
                      ? 'text-brand-400 hover:text-brand-300'
                      : 'text-neural-400 hover:text-neural-300'
                  }`}>
                    View docs
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
