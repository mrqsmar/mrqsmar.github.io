import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { experienceData } from '../data/experience'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 bg-navy-800">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white text-center mb-14 section-title-bar">
          Experience
        </h2>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 to-navy-600" />

          {experienceData.map((role, i) => (
            <motion.div
              key={role.dates}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-2 w-4 h-4 rounded-full bg-navy-800 border-[3px] border-blue-500 z-10" />

              <div className="bg-navy-700 border border-navy-600 rounded-xl p-7 hover:border-blue-500/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{role.title}</h3>
                  <span className="text-sm font-semibold text-blue-400 mr-3">
                    {role.company}
                  </span>
                  <span className="text-sm text-slate-500">{role.location}</span>
                  <span className="text-sm text-slate-500 ml-3">{role.dates}</span>
                </div>
                <ul className="space-y-2.5">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-[0.95rem] text-slate-400 leading-relaxed before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-500"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
