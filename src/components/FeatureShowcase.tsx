'use client'

import { Brain, Cpu, Network, Workflow } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const showcases = [
  {
    badge: 'Neurons',
    title: 'Memories that live and breathe',
    description: 'Each memory is a neuron with its own energy level, activation state, and position in N-dimensional space. Neurons fire when accessed, boosting their energy. Over time, unused neurons decay — just like biological memory.',
    icon: Brain,
    color: 'brand',
    code: `// Neuron — the fundamental memory unit
type Neuron struct {
    ID          NeuronID
    Content     string
    
    // Spatial position in N-dimensional matrix
    Position    []float64
    
    // Activation dynamics
    Energy      float64   // Current activation (0.0 - 1.0)
    BaseEnergy  float64   // Resting energy level
    
    // Depth in memory hierarchy
    // 0 = surface/hot, higher = deeper/consolidated
    Depth       int
    
    // Temporal markers
    CreatedAt   time.Time
    LastFiredAt time.Time
    AccessCount uint64
}

// Fire activates the neuron, boosting its energy
func (n *Neuron) Fire() {
    n.Energy = min(1.0, n.Energy + 0.3)
    n.LastFiredAt = time.Now()
    n.AccessCount++
}

// Decay reduces energy based on time elapsed
func (n *Neuron) Decay(rate float64) {
    elapsed := time.Since(n.LastFiredAt).Seconds()
    n.Energy = max(n.BaseEnergy, n.Energy - rate*elapsed/3600)
}`,
    features: [
      'Energy-based activation',
      'Time-based decay',
      'Depth consolidation',
      'N-dimensional positioning',
    ],
  },
  {
    badge: 'Synapses',
    title: 'Fire together, wire together',
    description: 'Hebbian learning creates and strengthens connections automatically. When neurons fire within the same time window, a synapse forms between them. The more they co-activate, the stronger the connection becomes.',
    icon: Network,
    color: 'neural',
    code: `// HebbianEngine — "Neurons that fire together, wire together"
type HebbianEngine struct {
    matrix             *Matrix
    recentFires        map[NeuronID]time.Time
    coActivationWindow time.Duration  // 5 seconds
    learningRate       float64
    forgettingRate     float64
}

// OnNeuronFired — called whenever a neuron fires
func (h *HebbianEngine) OnNeuronFired(neuronID NeuronID) {
    now := time.Now()
    
    // Find co-activated neurons (fired within window)
    for id, firedAt := range h.recentFires {
        if now.Sub(firedAt) <= h.coActivationWindow {
            // Strengthen or create synapse
            h.strengthenOrCreate(neuronID, id)
        }
    }
    
    h.recentFires[neuronID] = now
}

// Synapses strengthen with use, weaken without it
func (s *Synapse) Strengthen(delta float64) {
    s.Weight = min(1.0, s.Weight + delta)
    s.CoFireCount++
}`,
    features: [
      'Automatic synapse formation',
      'Co-activation detection',
      'Weight strengthening/weakening',
      'Spatial clustering',
    ],
  },
  {
    badge: 'Spreading Activation',
    title: 'Recursive associative recall',
    description: 'Query one memory and activation spreads through synaptic connections. The search traverses the neural graph recursively, finding related memories you didn\'t explicitly search for — true associative intelligence.',
    icon: Workflow,
    color: 'brand',
    code: `// Search with spreading activation
func (e *Engine) Search(query string, depth int, limit int) []*Neuron {
    // Start with lexical/vector matches
    seeds := e.findSeeds(query)
    
    // Spread activation through synaptic connections
    activated := make(map[NeuronID]float64)
    for _, seed := range seeds {
        e.spreadActivation(seed.ID, seed.Energy, depth, activated)
    }
    
    // Collect and rank by accumulated activation
    results := e.collectByActivation(activated, limit)
    
    // Fire all accessed neurons (Hebbian reinforcement)
    for _, n := range results {
        n.Fire()
        e.hebbian.OnNeuronFired(n.ID)
    }
    
    return results
}

// Recursive traversal through neural graph
func (e *Engine) spreadActivation(
    id NeuronID, 
    energy float64, 
    depth int, 
    acc map[NeuronID]float64,
) {
    if depth <= 0 || energy < 0.01 { return }
    
    acc[id] += energy
    
    // Spread to connected neurons via synapses
    for _, neighborID := range e.matrix.Adjacency[id] {
        synapse := e.getSynapse(id, neighborID)
        e.spreadActivation(neighborID, energy*synapse.Weight*0.7, depth-1, acc)
    }
}`,
    features: [
      'Recursive graph traversal',
      'Energy propagation',
      'Synaptic weight influence',
      'Automatic Hebbian reinforcement',
    ],
  },
  {
    badge: 'Organic Lifecycle',
    title: 'The brain maintains itself',
    description: 'Background daemons run continuously: Decay reduces unused neuron energy. Consolidation moves important memories deeper. Pruning removes dead synapses. The brain reorganizes itself — no manual maintenance required.',
    icon: Cpu,
    color: 'neural',
    code: `// Brain states — like biological sleep cycles
type BrainState int
const (
    StateActive   BrainState = iota  // Recently used
    StateIdle                         // No recent activity
    StateSleeping                     // Consolidation happening
    StateDormant                      // Ready for eviction
)

// Consolidation happens during "sleep"
func (dm *DaemonManager) consolidateDaemon() {
    for dm.waitInterval(dm.consolidateInterval) {
        // Only consolidate sleeping brains
        sleeping := dm.lifecycle.GetSleepingUsers()
        for _, indexID := range sleeping {
            worker := dm.pool.Get(indexID)
            worker.Submit(&Operation{Type: OpConsolidate})
            // 🌙 Index abc: consolidated 47 neurons
        }
    }
}

// Decay daemon reduces energy of unused memories
// Prune daemon removes dead synapses
// Reorg daemon optimizes spatial locality
// Persist daemon flushes to durable storage`,
    features: [
      'Active → Idle → Sleeping → Dormant',
      'Sleep consolidation',
      'Automatic decay & pruning',
      'Self-reorganizing matrix',
    ],
  },
]

export default function FeatureShowcase() {
  return (
    <section className="relative">
      {showcases.map((showcase, index) => (
        <div
          key={showcase.badge}
          className={`section-padding border-t border-zinc-800/50 ${
            index % 2 === 0 ? '' : 'bg-surface-50/30'
          }`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Text Content */}
              <AnimatedSection direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                    showcase.color === 'brand'
                      ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                      : 'bg-neural-500/10 text-neural-400 border border-neural-500/20'
                  }`}>
                    <showcase.icon className="w-3.5 h-3.5" />
                    {showcase.badge}
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                    {showcase.title}
                  </h3>

                  <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                    {showcase.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {showcase.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          showcase.color === 'brand' ? 'bg-brand-400' : 'bg-neural-400'
                        }`} />
                        <span className="text-sm text-zinc-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Code Block */}
              <AnimatedSection direction={index % 2 === 0 ? 'right' : 'left'} delay={0.15}>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity ${
                      showcase.color === 'brand'
                        ? 'bg-gradient-to-r from-brand-500/20 to-neural-500/20'
                        : 'bg-gradient-to-r from-neural-500/20 to-brand-500/20'
                    }`} />
                    <div className="relative code-block rounded-2xl">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                          </div>
                          <span className="text-xs text-zinc-500 ml-2">index.ts</span>
                        </div>
                        <button className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
                          Copy
                        </button>
                      </div>
                      <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed">
                        <code className="text-zinc-300">{showcase.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
