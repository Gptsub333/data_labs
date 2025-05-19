"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "rgba(119, 75, 183, 0.2)") // #774bb7 with opacity
    gradient.addColorStop(0.5, "rgba(119, 75, 183, 0.05)")
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    // Animation variables
    let time = 0
    const speed = 0.002
    const amplitude = 50
    const frequency = 0.005

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update time
      time += speed

      // Draw gradient background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw animated wave
      ctx.beginPath()

      for (let x = 0; x < width; x += 5) {
        const y = Math.sin(x * frequency + time) * amplitude + height / 2
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      ctx.fillStyle = "rgba(119, 75, 183, 0.05)"
      ctx.fill()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full -z-10 ${className}`} />
}
