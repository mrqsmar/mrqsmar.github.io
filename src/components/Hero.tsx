import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  opacity: number
}

function useParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    const init = () => {
      resize()
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const count = Math.floor((w * h) / 12000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`
        ctx.fill()
      }

      // Draw lines between nearby particles
      const maxDist = 120
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / maxDist)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', init)
    }
  }, [])

  return ref
}

export default function Hero() {
  const canvasRef = useParticleCanvas()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-20"
    >
      {/* Animated particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(34,211,238,0.06)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <img
            src="/profile-picture.jpg"
            alt="Marques Mar"
            className="w-56 h-72 md:w-64 md:h-80 object-cover object-top rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-navy-600"
          />
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.p
            {...fadeUp(0)}
            className="text-sm font-medium text-blue-400 tracking-[2px] uppercase mb-4"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            {...fadeUp(0.15)}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4"
          >
            Marques Mar
          </motion.h1>
          <motion.p
            {...fadeUp(0.3)}
            className="text-[clamp(1rem,2.5vw,1.25rem)] font-medium text-slate-400 mb-6"
          >
            Technical PM&nbsp;&nbsp;|&nbsp;&nbsp;ML Payments &amp; AI Products
          </motion.p>
          <motion.p
            {...fadeUp(0.45)}
            className="text-lg text-slate-500 max-w-[560px] mb-10 leading-relaxed"
          >
            Building ML-driven payment optimization &amp; AI products at Visa that move billions in
            transaction volume.
          </motion.p>
          <motion.div {...fadeUp(0.6)} className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="#case-studies"
              className="inline-flex items-center px-8 py-3.5 rounded-lg text-sm font-semibold bg-blue-500 text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:bg-blue-600 hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-lg text-sm font-semibold border border-navy-500 text-slate-200 hover:border-blue-500 hover:text-blue-400 hover:-translate-y-0.5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-arrow" />
      </motion.div>
    </section>
  )
}
