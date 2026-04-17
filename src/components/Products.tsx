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
  badge?: string
}

const products: Product[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    tag: 'VOICE AI / EDTECH',
    title: 'Digital Protege',
    desc: 'Voice AI coaching platform making professional coaching accessible to everyone. Built during internship at Expert Scale (Apex Replicant). Contributed to the Protégé product — capturing user voice input through VAPI, processing through LLM, and returning natural voice responses cloned from real coaches via ElevenLabs.',
    metrics: [
      { value: '$75–200/hr', label: 'Problem Solved' },
      { value: '3', label: 'Person Team' },
    ],
    tags: ['VAPI', 'ElevenLabs', 'n8n', 'Anthropic API', 'Supabase', 'Flask', 'React'],
    accent: { tag: 'text-sky-400', metric: 'text-sky-400', icon: 'bg-sky-500/[0.15] text-sky-400', gradient: 'before:from-sky-500 before:to-cyan-400' },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    tag: 'MOBILE / HEALTH',
    title: 'Medicine Cabinet',
    desc: 'Started as a Figma prototype for a Usability Engineering class. Built the full app using Claude Code for my two aunties who are managing multiple medications for dialysis and memory loss. Designed for elderly non-technical users with large text, missed dose tracking, refill alerts, and one-tap pharmacy calling.',
    metrics: [
      { value: '2', label: 'Active Users' },
      { value: '1 Week', label: 'Time to Ship' },
    ],
    tags: ['Expo', 'React Native', 'Python', 'Claude Code'],
    accent: { tag: 'text-emerald-400', metric: 'text-emerald-400', icon: 'bg-emerald-500/[0.15] text-emerald-400', gradient: 'before:from-emerald-500 before:to-teal-400' },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8l6 6" />
        <path d="M4 14l6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="M22 22l-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    ),
    tag: 'MOBILE / AI',
    title: 'Chinese Translation Chatbot',
    desc: 'Situational speech-to-text and text-to-speech translation app built for real-world Mandarin conversations. Currently conducting field research in China to validate use cases and improve translation accuracy for context-specific scenarios.',
    metrics: [
      { value: 'STT + TTS', label: 'Core Features' },
      { value: 'Field Research', label: 'In Progress' },
    ],
    tags: ['Expo', 'React Native', 'FastAPI', 'Gemini API', 'Render'],
    accent: { tag: 'text-violet-400', metric: 'text-violet-400', icon: 'bg-violet-500/[0.15] text-violet-400', gradient: 'before:from-violet-500 before:to-purple-400' },
    badge: 'Coming Soon',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    tag: 'FINTECH / SAAS',
    title: 'PayPath',
    desc: 'Pre-collections BNPL SaaS for dental clinics and SMBs. Businesses upload unpaid invoices via CSV — PayPath automatically sends customized payment requests via email and SMS, offering customers flexible pay-over-time options before accounts go to collections. Built full codebase solo including Stripe payment integration, hosted checkout pages, and admin dashboard.',
    metrics: [
      { value: '30%+', label: 'Revenue Recovered' },
      { value: 'Solo', label: 'Full Stack Engineer' },
    ],
    tags: ['React', 'Flask', 'Postgres', 'Stripe API', 'SendGrid', 'Twilio'],
    accent: { tag: 'text-indigo-400', metric: 'text-indigo-400', icon: 'bg-indigo-500/[0.15] text-indigo-400', gradient: 'before:from-indigo-500 before:to-blue-400' },
    badge: 'Coming Soon',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    tag: 'WEB / AI',
    title: 'Job Search Copilot',
    desc: 'AI-powered job application agent that generates a fully tailored application package in under 3 minutes. Paste a job description and receive a matched resume, cover letter, and interview prep — built to eliminate application chaos and decision fatigue for PM and technical roles.',
    metrics: [
      { value: '<3 Min', label: 'Application Package' },
      { value: '0→1', label: 'Currently Building' },
    ],
    tags: ['Claude API', 'Anthropic', 'React', 'Python'],
    accent: { tag: 'text-orange-400', metric: 'text-orange-400', icon: 'bg-orange-500/[0.15] text-orange-400', gradient: 'before:from-orange-500 before:to-amber-400' },
    badge: 'Coming Soon',
  },
]

export default function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products-i-built" className="py-24">
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
              {p.badge && (
                <span className="absolute top-4 right-4 text-[0.6rem] font-semibold uppercase tracking-[1px] px-2.5 py-1 rounded-full bg-amber-500/[0.15] text-amber-400 border border-amber-500/30">
                  {p.badge}
                </span>
              )}
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
              ) : p.badge ? (
                <span className="inline-block mt-4 text-xs font-medium text-slate-500/60">
                  {p.badge}
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
