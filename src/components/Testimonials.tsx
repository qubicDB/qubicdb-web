'use client'

import AnimatedSection from './AnimatedSection'

const benchmarks = [
  {
    suite: 'engine',
    name: 'AddNeuron',
    nsOp: '704,893',
    detail: 'Write + embed + Hebbian update',
    color: 'brand',
  },
  {
    suite: 'engine',
    name: 'Search (1K neurons)',
    nsOp: '2,277,576',
    detail: 'Hybrid lexical + vector + spread activation',
    color: 'neural',
  },
  {
    suite: 'engine',
    name: 'ParallelSearch',
    nsOp: '414,734',
    detail: 'Read-lock concurrent search (~5.5× faster)',
    color: 'brand',
  },
  {
    suite: 'concurrency',
    name: 'BrainWorker AddNeuron',
    nsOp: '1,394,905',
    detail: 'Full worker queue round-trip',
    color: 'neural',
  },
  {
    suite: 'concurrency',
    name: 'BrainWorker Search',
    nsOp: '1,759,222',
    detail: 'Worker queue + engine search',
    color: 'brand',
  },
  {
    suite: 'concurrency',
    name: 'Parallel Async Submit',
    nsOp: '80',
    detail: 'Queue submit only — near-zero overhead',
    color: 'neural',
    highlight: true,
  },
]

const reproCmd = `# Engine microbenchmarks (no model needed)
go test -run '^$' -bench 'BenchmarkMatrixEngine' \\
  -benchmem ./pkg/engine

# Worker/concurrency path
go test -run '^$' -bench 'BenchmarkBrainWorker' \\
  -benchmem ./pkg/concurrency

# Live vector benchmarks (requires GGUF model)
QUBICDB_VECTOR_MODEL_PATH=./dist/MiniLM-L6-v2.Q8_0.gguf \\
  go test -run '^$' -bench . -benchmem ./pkg/e2e`

export default function Benchmarks() {
  return (
    <section className="section-padding border-t border-zinc-800/50 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 mb-4 uppercase tracking-widest">Benchmarks</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Real numbers,
            <br />
            <span className="gradient-text">real hardware</span>
          </h2>
          <p className="text-zinc-500 text-sm">Apple M3 · darwin/arm64 · go test -benchmem</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {benchmarks.map((b, i) => (
            <AnimatedSection key={b.name} delay={i * 0.07}>
              <div className={`h-full rounded-2xl p-5 border card-hover ${
                b.highlight
                  ? 'bg-brand-500/10 border-brand-500/30'
                  : 'bg-surface-50 border-zinc-800/80'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    b.color === 'brand'
                      ? 'bg-brand-500/10 border-brand-500/20 text-brand-400'
                      : 'bg-neural-500/10 border-neural-500/20 text-neural-400'
                  }`}>{b.suite}</span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">{b.name}</p>
                <p className="text-xs text-zinc-500 mb-3">{b.detail}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-bold font-mono ${b.highlight ? 'text-brand-300' : 'text-white'}`}>
                    {b.nsOp}
                  </span>
                  <span className="text-xs text-zinc-500">ns/op</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-surface-50 border border-zinc-800/80 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-zinc-500 ml-2">Reproduce locally</span>
            </div>
            <pre className="p-5 text-xs text-zinc-300 overflow-x-auto leading-relaxed font-mono">{reproCmd}</pre>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
