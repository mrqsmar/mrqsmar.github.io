import { motion } from 'framer-motion'
import { useInView } from './useInView'

interface Product {
  icon: React.ReactNode
  tag: string
  title: string
  desc: string
  metrics: { value: string; label: string }[]
  tags: string[]
  accent: { tag: string; metric: string; icon: string; gradient: string }
  href?: string
}

const products: Product[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    tag: 'PLACEHOLDER',
    title: 'Project Title',
    desc: 'A short description of the product, what it does, and the problem it solves.',
    metrics: [
      { value: '—', label: 'Metric One' },
      { value: '—', label: 'Metric Two' },
    ],
    tags: ['Tech 1', 'Tech 2', 'Tech 3'],
    accent: { tag: 'text-sky-400', metric: 'text-sky-400', icon: 'bg-sky-500/[0.15] text-sky-400', gradient: 'before:from-sky-500 before:to-cyan-400' },
  },
]

export default function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white/80 text-center mb-14 section-title-bar">
          Products I Built
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`relative bg-navy-800/70 border border-navy-600/70 rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all before:absolute before:top-0 before:inset-x-0 before:h-[2px] before:bg-gradient-to-r ${p.accent.gradient} before:opacity-0 before:transition-opacity hover:before:opacity-100 ${p.href ? 'cursor-pointer' : ''}`}
              onClick={p.href ? () => {
                window.history.pushState({}, '', p.href!)
                window.dispatchEvent(new PopStateEvent('popstate'))
                window.scrollTo(0, 0)
              } : undefined}
            >
              <div className={`w-10 h-10 ${p.accent.icon} rounded-xl flex items-center justify-center mb-5`}>
                <div className="w-5 h-5">{p.icon}</div>
              </div>
              <span className={`inline-block text-[0.65rem] font-semibold uppercase tracking-[1.5px] ${p.accent.tag} mb-3 opacity-80`}>
                {p.tag}
              </span>
              <h3 className="text-lg font-semibold text-white/90 mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-500/80 leading-relaxed mb-6">{p.desc}</p>
              <div className="flex gap-6 mb-5 pt-5 border-t border-navy-600/60">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <span className={`block text-xl font-bold ${p.accent.metric} opacity-90`}>{m.value}</span>
                    <span className="text-xs text-slate-500/70 uppercase tracking-wide">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-navy-700/70 text-slate-400/80 border border-navy-600/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.href ? (
                <span className={`inline-block mt-4 text-xs font-medium ${p.accent.tag} opacity-80 group-hover:underline`}>
                  View project &rarr;
                </span>
              ) : (
                <span className="inline-block mt-4 text-xs font-medium text-slate-500/60">
                  View project &rarr;
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
