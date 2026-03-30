import { motion } from 'framer-motion'
import { useInView } from './useInView'

interface CaseStudy {
  icon: React.ReactNode
  tag: string
  title: string
  desc: string
  metrics: { value: string; label: string }[]
  tags: string[]
}

const cases: CaseStudy[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tag: 'ML / Payments',
    title: 'Service Orchestration ML Engine',
    desc: 'Optimized payment routing through ML-driven decisioning on VisaNet, growing merchant revenue recovery from $500/week to $1M/week by iterating on model features, data pipelines, and API orchestration logic.',
    metrics: [
      { value: '2000x', label: 'Revenue Growth' },
      { value: '$1M', label: 'Weekly Recovery' },
    ],
    tags: ['ML Models', 'VisaNet APIs', 'Payment Routing'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    tag: 'AI / LLM',
    title: 'Visa Banking Assistant LLM Launch',
    desc: 'Shipped a production-grade conversational AI assistant for banking partners using LLM/ChatGPT architecture. Defined prompt engineering strategies, safety guardrails, and API integration patterns for enterprise deployment.',
    metrics: [
      { value: 'Prod', label: 'Deployed' },
      { value: 'LLM', label: 'Architecture' },
    ],
    tags: ['LLM/ChatGPT', 'Prompt Engineering', 'Enterprise AI'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    tag: 'Product Launch',
    title: 'GRS — Fastest Launch in History',
    desc: "Delivered the fastest product launch in GRS history by driving cross-functional alignment, streamlining UAT, and building real-time Tableau dashboards that gave stakeholders instant visibility into launch readiness.",
    metrics: [
      { value: '#1', label: 'Fastest Launch' },
      { value: 'E2E', label: 'Ownership' },
    ],
    tags: ['Go-to-Market', 'Tableau', 'Cross-functional'],
  },
]

export default function CaseStudies() {
  const [ref, inView] = useInView()

  return (
    <section id="case-studies" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white text-center mb-14 section-title-bar">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative bg-navy-800 border border-navy-600 rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all before:absolute before:top-0 before:inset-x-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 before:opacity-0 before:transition-opacity hover:before:opacity-100"
            >
              <div className="w-12 h-12 bg-blue-500/[0.15] rounded-xl flex items-center justify-center mb-5">
                <div className="w-6 h-6 text-blue-400">{c.icon}</div>
              </div>
              <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-cyan-400 mb-3">
                {c.tag}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3 leading-snug">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{c.desc}</p>
              <div className="flex gap-6 mb-5 pt-5 border-t border-navy-600">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="block text-2xl font-bold text-blue-400">{m.value}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-navy-700 text-slate-400 border border-navy-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
