'use client'

import { useEffect, useRef } from 'react'

interface Neuron {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
  pulseSpeed: number
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let neurons: Neuron[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initNeurons = () => {
      const count = Math.min(Math.floor(window.innerWidth / 25), 60)
      neurons = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      }))
    }

    const drawSynapse = (n1: Neuron, n2: Neuron, distance: number, maxDist: number) => {
      const opacity = (1 - distance / maxDist) * 0.15
      const gradient = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y)
      gradient.addColorStop(0, `rgba(62, 207, 142, ${opacity})`)
      gradient.addColorStop(0.5, `rgba(48, 164, 108, ${opacity * 1.2})`)
      gradient.addColorStop(1, `rgba(62, 207, 142, ${opacity})`)
      ctx.beginPath()
      ctx.moveTo(n1.x, n1.y)
      ctx.lineTo(n2.x, n2.y)
      ctx.strokeStyle = gradient
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const maxDist = 180

      for (const neuron of neurons) {
        neuron.x += neuron.vx
        neuron.y += neuron.vy
        neuron.pulsePhase += neuron.pulseSpeed

        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1
      }

      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x
          const dy = neurons[i].y - neurons[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            drawSynapse(neurons[i], neurons[j], dist, maxDist)
          }
        }
      }

      for (const neuron of neurons) {
        const pulse = Math.sin(neuron.pulsePhase) * 0.5 + 0.5
        const r = neuron.radius + pulse * 1.5

        const glow = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, r * 4
        )
        glow.addColorStop(0, `rgba(62, 207, 142, ${0.2 + pulse * 0.15})`)
        glow.addColorStop(0.5, `rgba(48, 164, 108, ${0.08 + pulse * 0.04})`)
        glow.addColorStop(1, 'rgba(62, 207, 142, 0)')

        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, r * 4, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 230, 200, ${0.4 + pulse * 0.25})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initNeurons()
    animate(0)

    window.addEventListener('resize', () => {
      resize()
      initNeurons()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}
