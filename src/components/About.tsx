import { motion } from 'framer-motion'
import { useInView } from './useInView'

const highlights = [
  { value: '$1M', label: 'Weekly Revenue Recovery', color: 'text-emerald-400', hoverBorder: 'hover:border-emerald-500', hoverShadow: 'hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]' },
  { value: 'LLM', label: 'AI Assistant Shipped', color: 'text-violet-400', hoverBorder: 'hover:border-violet-500', hoverShadow: 'hover:shadow-[0_0_24px_rgba(139,92,246,0.15)]' },
  { value: '24', label: 'Age as Manager', color: 'text-amber-400', hoverBorder: 'hover:border-amber-500', hoverShadow: 'hover:shadow-[0_0_24px_rgba(245,158,11,0.15)]' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white text-center mb-14 section-title-bar">
          About Me
        </h2>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-slate-400 leading-relaxed">
              I'm a Technical Product Manager at <strong className="text-white">Visa</strong>, where
              I sit at the intersection of{' '}
              <strong className="text-white">Machine Learning, Payments Infrastructure, and AI</strong>.
              I specialize in translating complex ML capabilities into products that drive measurable
              business impact — from optimizing payment routing decisions across VisaNet to shipping
              conversational AI assistants to production.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With hands-on experience across the full product lifecycle — from discovery and data
              analysis to API design and go-to-market — I bring a technical depth that enables me to
              partner closely with engineering and data science teams. I thrive in high-stakes fintech
              environments where precision, scale, and speed matter.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At 24, I've already mentored fellow APMs and interns, grown merchant revenue recovery
              from <strong className="text-white">$500/week to $1M/week</strong>, and shipped an
              LLM-powered banking assistant to production. I'm driven by a simple belief: the best PMs
              don't just manage products — they deeply understand the technology that powers them.
            </p>
          </motion.div>

          <div className="flex md:flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`flex-1 bg-navy-700 border border-navy-600 rounded-xl p-6 text-center ${h.hoverBorder} ${h.hoverShadow} transition-all`}
              >
                <span className={`block text-[1.75rem] font-bold ${h.color} mb-1`}>
                  {h.value}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
