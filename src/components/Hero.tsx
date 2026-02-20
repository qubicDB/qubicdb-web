'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import NeuralBackground from './NeuralBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Animation Background */}
      <NeuralBackground />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-neural-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/5 text-sm text-brand-300 hover:bg-brand-500/10 transition-colors mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing qubicDB v1.0</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-white">Brain-like</span>
          <br />
          <span className="gradient-text">LLM Recursive</span>
          <br />
          <span className="text-white">Database</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 text-balance"
        >
          Neurons fire and decay. Synapses form through Hebbian learning. 
          Memories consolidate during sleep. A database that actually thinks like your brain.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#features" className="btn-primary text-base !px-8 !py-3.5 group">
            Explore the architecture
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com/qubicDB/qubicdb" className="btn-secondary text-base !px-8 !py-3.5">
            View on GitHub
          </a>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-neural-500/20 to-brand-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            
            {/* Terminal */}
            <div className="relative code-block rounded-2xl">
              {/* Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-zinc-500 ml-2">terminal</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 text-left text-sm md:text-base leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-neural-400">//</span>
                  <span className="text-zinc-500">Neuron fires when accessed</span>
                </div>
                <div className="mt-2 text-zinc-300">
                  <p>neuron.Fire()</p>
                  <p className="text-zinc-500 mt-1">&#10003; Energy: 0.7 → 1.0</p>
                  <p className="text-zinc-500">&#10003; LastFiredAt: now</p>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="text-neural-400">//</span>
                  <span className="text-zinc-500">Hebbian learning kicks in</span>
                </div>
                <div className="mt-2 text-zinc-300">
                  <p>hebbian.OnNeuronFired(neuronID)</p>
                  <p className="text-zinc-500 mt-1">&#10003; Co-activation detected: 3 neurons</p>
                  <p className="text-zinc-500">&#10003; Synapse n-42:n-17 strengthened → 0.84</p>
                  <p className="text-zinc-500">&#10003; New synapse formed: n-42:n-89</p>
                </div>
                <div className="mt-4 text-brand-400/80">
                  &#9889; Fire together, wire together
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
