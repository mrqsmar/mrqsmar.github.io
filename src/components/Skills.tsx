import { motion } from 'framer-motion'
import { useInView } from './useInView'

const groups = [
  {
    title: 'PM Skills',
    accent: 'text-blue-400 border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/30',
    dot: 'before:bg-blue-400',
    items: [
      'Product Strategy & Roadmapping',
      'Agile / Scrum',
      'Stakeholder Management',
      'PRDs & User Stories',
      'A/B Testing & Experimentation',
      'Mentorship & Leadership',
    ],
  },
  {
    title: 'Payments Domain',
    accent: 'text-emerald-400 border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/30',
    dot: 'before:bg-emerald-400',
    items: [
      'VisaNet Platform & APIs',
      'Payment Routing & Optimization',
      'Transaction Authorization',
      'Merchant Services',
      'Revenue Recovery',
      'Service Orchestration',
    ],
  },
  {
    title: 'Data & Analytics',
    accent: 'text-amber-400 border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/30',
    dot: 'before:bg-amber-400',
    items: [
      'Tableau',
      'SQL & Data Pipelines',
      'KPI Frameworks',
      'A/B Testing Analysis',
      'Funnel & Cohort Analysis',
      'Data-Driven Decisioning',
    ],
  },
  {
    title: 'AI / ML',
    accent: 'text-violet-400 border-violet-500/20',
    hoverBorder: 'hover:border-violet-500/30',
    dot: 'before:bg-violet-400',
    items: [
      'ML Product Ownership',
      'LLM / ChatGPT Architecture',
      'Prompt Engineering',
      'Model Evaluation & Iteration',
      'AI Safety & Guardrails',
      'Conversational AI Design',
    ],
  },
]

const tools = ['Jira', 'Figma', 'Tableau', 'Postman', 'SQL', 'Python', 'Git', 'Confluence']

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 bg-navy-800">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-white text-center mb-14 section-title-bar">
          Skills &amp; Toolkit
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`bg-navy-700 border border-navy-600 rounded-xl p-7 ${g.hoverBorder} transition-all`}
            >
              <h3 className={`text-xs font-semibold uppercase tracking-[1.5px] ${g.accent} mb-5 pb-3 border-b border-navy-600`}>
                {g.title}
              </h3>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm text-slate-400 pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full ${g.dot}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="px-6 py-2.5 rounded-lg bg-navy-700 border border-navy-600 text-sm font-medium text-slate-400 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)] transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-navy-600/60"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[1.5px] text-slate-500 mb-4">How I Work</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Built a personal n8n automation pipeline that monitors Series A–C funding announcements across TechCrunch, VentureBeat, and Google News — surfaces hiring signals before job postings go live.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
