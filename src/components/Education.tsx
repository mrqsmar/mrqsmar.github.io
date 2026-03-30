import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { educationData } from '../data/education'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white text-center mb-14 section-title-bar">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-navy-700 border border-navy-600 rounded-xl p-7 hover:border-blue-500/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                  <span className="text-sm text-slate-500">{edu.location}</span>
                </div>
                <svg
                  className="w-8 h-8 text-blue-400/50 flex-shrink-0 ml-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                </svg>
              </div>
              <p className="text-sm font-medium text-blue-400 mb-1">{edu.degree}</p>
              <p className="text-sm text-slate-500 mb-3">{edu.graduated}</p>
              {edu.details && (
                <ul className="space-y-1.5">
                  {edu.details.map((d, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-sm text-slate-400 before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-500"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
