import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(34,211,238,0.06)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 text-center max-w-[1100px] mx-auto px-6">
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
          className="text-lg text-slate-500 max-w-[560px] mx-auto mb-10 leading-relaxed"
        >
          Building ML-driven payment optimization &amp; AI products at Visa that move billions in
          transaction volume.
        </motion.p>
        <motion.div {...fadeUp(0.6)} className="flex gap-4 justify-center flex-wrap">
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
