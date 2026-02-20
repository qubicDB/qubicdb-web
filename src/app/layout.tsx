import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'qubicDB — Brain-like LLM Recursive Database',
  description: 'A brain-inspired database engine built on neural principles. Neurons, synapses, and organic lifecycles power recursive intelligence at scale.',
  keywords: ['database', 'LLM', 'neural', 'recursive', 'brain-like', 'AI', 'qubicDB'],
  openGraph: {
    title: 'qubicDB — Brain-like LLM Recursive Database',
    description: 'A brain-inspired database engine built on neural principles.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-surface antialiased">
        {children}
      </body>
    </html>
  )
}
