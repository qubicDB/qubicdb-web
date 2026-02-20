'use client'

import AnimatedSection from './AnimatedSection'
import { Activity, Database, Users, Zap, TrendingUp, Clock } from 'lucide-react'

const stats = [
  { label: 'Neurons', value: '2.1M', icon: Zap, change: 'alive' },
  { label: 'Synapses', value: '8.4M', icon: Activity, change: 'connected' },
  { label: 'Avg Energy', value: '0.67', icon: Database, change: 'healthy' },
  { label: 'Brain State', value: 'Active', icon: Users, change: '●' },
]

const tableRows = [
  { id: 'n-a7f3e2', type: 'Surface', strength: 98, connections: 47, status: 'firing' },
  { id: 'n-b2c4d1', type: 'Surface', strength: 84, connections: 23, status: 'active' },
  { id: 'n-c8e9f0', type: 'Consolidated', strength: 72, connections: 15, status: 'stable' },
  { id: 'n-d3a1b5', type: 'Deep', strength: 91, connections: 38, status: 'dormant' },
  { id: 'n-e6f2c7', type: 'Surface', strength: 45, connections: 11, status: 'decaying' },
]

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
            
            <div className="relative bg-surface-100 border border-zinc-800/80 rounded-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500/70 animate-pulse" />
                  <span className="text-sm font-medium text-zinc-300">Neural Cortex — Production</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Last 24 hours</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-zinc-800/80">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`p-5 ${i < 3 ? 'border-r border-zinc-800/80' : ''} ${i < 2 ? 'md:border-r' : i === 2 ? 'border-r' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{stat.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-green-400 flex items-center gap-0.5">
                        <TrendingUp className="w-3 h-3" />
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Neural Activity Graph Placeholder */}
              <div className="px-6 py-5 border-b border-zinc-800/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-zinc-300">Neural Activity</span>
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-400" /> Queries</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-neural-400" /> Connections</span>
                  </div>
                </div>
                {/* Simulated Graph */}
                <div className="h-32 flex items-end gap-1">
                  {Array.from({ length: 48 }, (_, i) => {
                    const h1 = 20 + Math.sin(i * 0.3) * 30 + Math.random() * 20
                    const h2 = 15 + Math.cos(i * 0.4) * 20 + Math.random() * 15
                    return (
                      <div key={i} className="flex-1 flex flex-col gap-0.5 items-stretch">
                        <div
                          className="bg-brand-500/40 rounded-t-sm"
                          style={{ height: `${h1}%` }}
                        />
                        <div
                          className="bg-neural-500/30 rounded-b-sm"
                          style={{ height: `${h2}%` }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-zinc-500 border-b border-zinc-800/80">
                      <th className="px-6 py-3 font-medium">Neuron ID</th>
                      <th className="px-6 py-3 font-medium">Depth</th>
                      <th className="px-6 py-3 font-medium">Energy</th>
                      <th className="px-6 py-3 font-medium">Synapses</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.id} className="border-b border-zinc-800/40 hover:bg-surface-200/30 transition-colors">
                        <td className="px-6 py-3 font-mono text-brand-400">{row.id}</td>
                        <td className="px-6 py-3 text-zinc-300">{row.type}</td>
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-brand-500 to-neural-400 rounded-full"
                                style={{ width: `${row.strength}%` }}
                              />
                            </div>
                            <span className="text-zinc-400 text-xs">{row.strength}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-zinc-400">{row.connections}</td>
                        <td className="px-6 py-3">
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs ${
                            row.status === 'active' ? 'bg-green-500/10 text-green-400' :
                            row.status === 'consolidating' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-red-500/10 text-red-400'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              row.status === 'active' ? 'bg-green-400' :
                              row.status === 'consolidating' ? 'bg-yellow-400' :
                              'bg-red-400'
                            }`} />
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
