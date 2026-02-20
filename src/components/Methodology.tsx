'use client'

import AnimatedSection from './AnimatedSection'
import { Brain, Zap, GitBranch, Heart, Layers, Activity, Target, Cpu } from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
    title: 'Engram Neurons',
    subtitle: 'Biologically-inspired memory units',
    body: `Each memory is a living neuron — not a static row. Neurons carry energy, activation level, N-dimensional spatial position, lifecycle state, and synaptic connections. They fire when accessed, strengthening associated pathways, and decay when unused — exactly like biological engrams.`,
    tags: ['Energy [0,1]', 'Activation level', 'Spatial position', 'Lifecycle state', 'Decay over time'],
  },
  {
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
    title: 'Hebbian Learning',
    subtitle: 'Neurons that fire together, wire together',
    body: `Synaptic connections form and strengthen automatically based on co-activation. When two neurons are accessed together, their synapse weight increases. Without reinforcement, weights decay. This creates genuine associative memory — not keyword indexes.`,
    tags: ['Auto-formed synapses', 'Weight strengthening', 'Weight decay', 'Co-activation tracking'],
  },
  {
    icon: GitBranch,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Spreading Activation',
    subtitle: 'Recursive associative recall',
    body: `A query activates seed neurons, then activation spreads recursively through synaptic graph — depth-first, weighted by synapse strength and neuron energy. Related memories surface automatically without explicit joins or graph queries. Configurable depth controls recall breadth.`,
    tags: ['Graph traversal', 'Configurable depth', 'Synapse-weighted', 'Energy-gated'],
  },
  {
    icon: Layers,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    title: 'Fractal Clustering',
    subtitle: 'Self-similar spatial topology',
    body: `Neurons organize into fractal clusters in N-dimensional space. Three-phase algorithm: pairwise attraction toward midpoints, centroid pull toward cluster center, repulsion of unconnected neurons. Dense cores → loose shells → separated clusters. The topology mirrors actual usage patterns.`,
    tags: ['Pairwise attraction', 'Centroid pull', 'Repulsion force', 'Self-organizing', 'Usage-driven'],
  },
  {
    icon: Heart,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
    title: 'Emotional Mapping',
    subtitle: 'VADER sentiment + Ekman emotion model',
    body: `Every memory is analyzed for emotional valence using VADER (govader). Six Ekman primary emotions are mapped: happiness, sadness, fear, anger, disgust, surprise. At search time, sentiment-matching memories receive a boost multiplier [0.8–1.2] — emotionally congruent recall, like human memory.`,
    tags: ['VADER analysis', '6 Ekman emotions', 'Sentiment boost ×1.2', 'Query-neuron matching', 'Compound scoring'],
  },
  {
    icon: Activity,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
    title: 'Organic Lifecycle',
    subtitle: 'Active → Idle → Sleeping → Dormant',
    body: `Background daemons continuously manage neuron health: Decay reduces energy over time (using LastDecayAt, not LastFiredAt), Consolidation moves low-energy neurons to deeper storage, Pruning removes dead synapses, Reorganization rebalances spatial positions. No manual garbage collection.`,
    tags: ['Decay daemon', 'Consolidation', 'Pruning', 'Reorganization', 'LastDecayAt tracking'],
  },
  {
    icon: Target,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    title: 'Hybrid Search Scoring',
    subtitle: 'α·vector + (1-α)·tanh(lexical/10) + sentiment',
    body: `Search combines three signals: vector cosine similarity via MiniLM-L6-v2 (384-dim, GGUF), lexical string matching normalized with tanh(x/10) for better score separation, and sentiment congruence boost. Alpha (default 0.6) controls vector vs lexical balance. Short queries are expanded and repeated (Springer et al. 2024).`,
    tags: ['MiniLM-L6-v2', 'α=0.6 default', 'tanh(x/10) norm', 'Query expansion', 'Sentiment boost'],
  },
  {
    icon: Cpu,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    title: 'Concurrency Model',
    subtitle: 'Per-index serialized worker goroutines',
    body: `Each index (user/agent) gets a dedicated BrainWorker goroutine with a serialized operation queue. No cross-index locking. Reads use RWMutex for parallelism; writes serialize through the worker. Background daemons run independently. Deadlock-free by design — repulsion reads under RLock, releases, then writes.`,
    tags: ['Per-index workers', 'Serialized op queue', 'RWMutex reads', 'Deadlock-free', 'Independent daemons'],
  },
]

const accuracyPoints = [
  {
    metric: 'Recall precision',
    detail: 'Spreading activation surfaces semantically related memories that pure vector search misses — associative paths through synaptic graph.',
  },
  {
    metric: 'Temporal accuracy',
    detail: 'Decay uses actual elapsed time since last decay tick (LastDecayAt), not last access — preventing stale memories from persisting.',
  },
  {
    metric: 'Consolidation guard',
    detail: 'Energy < 0.5 criterion prevents active neurons from being consolidated — only truly dormant memories move to deep storage.',
  },
  {
    metric: 'Score separation',
    detail: 'tanh(x/10) normalization gives 0.031→0.143 spread across [0,15] range vs the old x/5 formula — better ranking differentiation.',
  },
  {
    metric: 'Emotional congruence',
    detail: 'Sentiment-matched memories score up to 20% higher — mirroring how humans recall emotionally congruent information more readily.',
  },
  {
    metric: 'Vector alignment',
    detail: 'Write and search paths both run CleanText before embedding — ensuring consistent tokenization and preventing embedding drift.',
  },
]

export default function Methodology() {
  return (
    <section id="methodology" className="section-padding border-t border-zinc-800/50 relative">
      <div className="absolute inset-0 neural-grid pointer-events-none opacity-30" />

      <div className="container-custom relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-6">
            <Brain className="w-3.5 h-3.5" />
            Neuroscience-Grounded Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Not a vector store.
            <br />
            <span className="gradient-text">A living brain.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            QubicDB is built on eight interlocking mechanisms derived from computational neuroscience.
            Each layer compounds the others — producing recall accuracy and contextual depth that
            flat vector databases cannot replicate.
          </p>
        </AnimatedSection>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className="h-full bg-surface-50 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${p.bg}`}>
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-0.5">{p.title}</h3>
                    <p className={`text-xs font-medium mb-3 ${p.color}`}>{p.subtitle}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.body}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] font-mono bg-zinc-800/60 text-zinc-400 rounded border border-zinc-700/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Accuracy section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-surface-50 border border-zinc-800/80 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Why Accuracy Matters Here</h3>
                <p className="text-sm text-zinc-500">Design decisions that directly improve recall quality</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {accuracyPoints.map((pt) => (
                <div key={pt.metric} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">{pt.metric}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pl-3.5">{pt.detail}</p>
                </div>
              ))}
            </div>

            {/* Formula callout */}
            <div className="mt-8 pt-6 border-t border-zinc-800/60">
              <p className="text-xs text-zinc-500 mb-3 font-medium uppercase tracking-wider">Hybrid Scoring Formula</p>
              <div className="bg-zinc-900/60 rounded-xl p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                <span className="text-violet-400">score</span>
                {' = '}
                <span className="text-yellow-400">α</span>
                {' × '}
                <span className="text-cyan-400">cosine(query_vec, neuron_vec)</span>
                {' + '}
                <span className="text-yellow-400">(1−α)</span>
                {' × '}
                <span className="text-emerald-400">tanh(lexical_score / 10)</span>
                {' × '}
                <span className="text-rose-400">sentiment_boost</span>
                <br />
                <span className="text-zinc-600 text-xs">{'// α=0.6 default · sentiment_boost ∈ [0.8, 1.2] · spreading activation applied post-score'}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
