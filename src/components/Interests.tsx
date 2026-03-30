import { motion } from 'framer-motion'
import { useInView } from './useInView'

const interests = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5 17h14M5 17a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2M5 17l-1.5 3M19 17l1.5 3" />
        <circle cx="7.5" cy="17" r="1.5" />
        <circle cx="16.5" cy="17" r="1.5" />
        <path d="M9 10l2 2 4-4" />
      </svg>
    ),
    title: 'Car Research',
    desc: 'Deep-diving into specs, performance data, and market trends across the automotive world.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l1 7h7l-5.5 4 2 7L12 16l-4.5 4 2-7L4 9h7z" />
      </svg>
    ),
    title: 'Fashion',
    desc: 'Curating style, following trends, and appreciating the intersection of design and self-expression.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Traveling & Points',
    desc: 'Based in Seattle. Traveled to 20 states, Japan, and South Korea — fueled by points optimization.',
  },
]

export default function Interests() {
  const [ref, inView] = useInView()

  return (
    <section id="interests" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white text-center mb-14 section-title-bar">
          Interests
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-navy-700 border border-navy-600 rounded-xl p-7 text-center hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500/[0.12] rounded-xl flex items-center justify-center mx-auto mb-5 text-blue-400 group-hover:text-cyan-400 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
