import { motion } from 'framer-motion'
import { useInView } from './useInView'

/* ------------------------------------------------------------------ */
/*  Reusable scroll-reveal wrapper                                     */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const heroTags = [
  'ML / Payments',
  'Smart Routing',
  'CyberSource',
  'VisaNet APIs',
  'Payment Optimization',
]

const metrics = [
  { value: '2000x', label: 'Revenue Growth', sub: '$500/week to $1M/week recovery' },
  { value: '$1M', label: 'Weekly Recovery', sub: 'Across 900+ merchants' },
  { value: '27 BPS', label: 'Approval Lift (2024)', sub: 'Up from 10 BPS in 2023' },
]

const pillars = [
  {
    title: 'Dynamic Smart Routing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    items: ['Load Balancer', 'BIN Based', 'Approval Based'],
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/[0.06]',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/[0.15]',
  },
  {
    title: 'Data Enrichment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    items: ['CV', 'Decimal Currencies & Others'],
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/[0.06]',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/[0.15]',
  },
  {
    title: 'Dynamic Filtering',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    items: ['100% Decline', 'Velocity Counter Based'],
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/[0.06]',
    accent: 'text-amber-400',
    iconBg: 'bg-amber-500/[0.15]',
  },
  {
    title: 'Dynamic Retry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
      </svg>
    ),
    items: [
      'Failed NT \u2192 PAN',
      'Failed 3DS \u2192 Non-3DS',
      'False Declines with AP',
      'Timeout Issues',
      'Insufficient Fund',
    ],
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/[0.06]',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/[0.15]',
  },
  {
    title: 'Insights in Response Message',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    items: ['Normalized Response Reasons', 'Alternative Recs', 'Suitable Time for Retry'],
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/[0.06]',
    accent: 'text-cyan-400',
    iconBg: 'bg-cyan-500/[0.15]',
  },
]

const painPoints = [
  'False decline transactions influence customer experiences when shopping online resulting in abandonment of items in cart',
  'High maintenance to deal with multiple parties',
  'Lack of insights into decline codes and not enough data',
  'Wrong actions may lead to loss in sales or higher fees for merchant',
]

/* ------------------------------------------------------------------ */
/*  Section heading helper                                             */
/* ------------------------------------------------------------------ */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{children}</h2>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function CaseStudyOrchestration() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Service Orchestration ML Engine
          </h1>
          <p className="text-base text-slate-400 mb-6">
            Optimizing payment routing through ML-driven decisioning to maximize authorization approval rates
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {heroTags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-emerald-500/[0.12] text-emerald-300 border border-emerald-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ====== METRICS ROW ====== */}
        <Reveal>
          <div className="grid sm:grid-cols-3 gap-4 mb-20">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center"
              >
                <span className="block text-2xl md:text-3xl font-bold text-emerald-400">{m.value}</span>
                <span className="block text-sm font-medium text-white mt-1">{m.label}</span>
                <span className="block text-xs text-slate-500 mt-1">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ====== S1: WHAT IS SERVICE ORCHESTRATION ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>What is Service Orchestration?</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                Formerly known as Payment Orchestration, Service Orchestration (SO) is a CyberSource product
                that automatically optimizes payment transactions in real time with the goal of increasing
                authorization approval rates. The SO platform analyzes payment data from different dimensions
                &mdash; currency, country, card brand, transaction type &mdash; to make intelligent routing
                decisions.
              </p>
              <p>
                Cybersource Optimization helps intelligently route transactions to the best payment processors
                based on transaction data, which leads to higher transaction success.
              </p>
              <p>
                In 2021, $443B in purchase volume was lost due to false declines in Card-Not-Present (CNP)
                transactions &mdash; which is <span className="text-emerald-400 font-semibold">70x higher</span> than
                the projected CNP fraud rate.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ====== S2: MISSION ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Mission: Deliver Card Present Approval Rates in CNP Space</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                Started in 2022, the mission was clear: achieve card-present-level approval rates for
                card-not-present transactions through intelligent orchestration.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-400">10 BPS</span>
                <span className="block text-sm font-medium text-white mt-1">Approval Lift in 2023</span>
              </div>
              <div className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-400">27 BPS</span>
                <span className="block text-sm font-medium text-white mt-1">Approval Lift in 2024</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ====== S3: PROBLEM STATEMENT ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>The Problem</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                5.6B transactions result in 947M declines with an approval rate of 83%.
                SO&rsquo;s deduped model eliminates duplicates for both customer types, resulting in a
                92.6% approval rate. However, 7% of data still results in $35B in annual purchase volume lost.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-500/[0.06] border border-red-500/30 rounded-xl p-5 text-center">
                <span className="block text-2xl font-bold text-red-400">947M</span>
                <span className="block text-xs text-slate-400 mt-1">Declines from 5.6B Transactions</span>
              </div>
              <div className="bg-amber-500/[0.06] border border-amber-500/30 rounded-xl p-5 text-center">
                <span className="block text-2xl font-bold text-amber-400">83%</span>
                <span className="block text-xs text-slate-400 mt-1">Raw Approval Rate</span>
              </div>
              <div className="bg-emerald-500/[0.06] border border-emerald-500/30 rounded-xl p-5 text-center">
                <span className="block text-2xl font-bold text-emerald-400">92.6%</span>
                <span className="block text-xs text-slate-400 mt-1">Deduped Approval Rate</span>
              </div>
            </div>

            {/* Pain points */}
            <div className="bg-navy-800 border border-navy-600 rounded-xl p-6">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Key Pain Points</h3>
              <ul className="space-y-3">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* ====== S4: 5 PILLAR STRATEGY ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>5 Solution Categories with Multiple ML Models</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              Service Orchestration uses a 5-pillar strategy &mdash; Smart Routing, Dynamic Retry,
              Data Enrichment, Dynamic Filter, and Payment Insights &mdash; each powered by specialized
              ML models to optimize different aspects of the payment lifecycle.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`${pillar.bg} border ${pillar.border} rounded-xl p-5`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 ${pillar.iconBg} ${pillar.accent} rounded-lg flex items-center justify-center`}>
                      {pillar.icon}
                    </div>
                    <h3 className={`text-sm font-bold ${pillar.accent}`}>{pillar.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full ${pillar.accent.replace('text-', 'bg-')}/60 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S5: RETRY IMPACT ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Retry Solutions &mdash; $1M Weekly Impact</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                Through our retry solutions &mdash; retrying a failed Network Token to PAN (Personal Account
                Number), a failed transaction on one processor to another processor &mdash; Service
                Orchestration was able to save our 900 merchants <span className="text-emerald-400 font-semibold">$1M weekly</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-navy-800 border border-navy-600 rounded-xl p-6">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">
                  Retry Strategies
                </h3>
                <ul className="space-y-2">
                  {[
                    'Failed Network Token \u2192 PAN fallback',
                    'Failed 3DS \u2192 Non-3DS retry',
                    'False Declines with Alternative Processor',
                    'Timeout Issue recovery',
                    'Insufficient Fund handling',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-emerald-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-500/[0.04] border border-emerald-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <span className="block text-4xl md:text-5xl font-bold text-emerald-400 mb-2">$1M</span>
                <span className="block text-sm font-medium text-white">Weekly Revenue Recovered</span>
                <span className="block text-xs text-slate-500 mt-1">Across 900+ merchants</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ====== EXTERNAL LINK ====== */}
        <Reveal>
          <section className="mb-8">
            <div className="bg-navy-800 border border-emerald-500/30 rounded-xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-4">
                Discover more about Visa&rsquo;s Service Orchestration solution
              </p>
              <a
                href="https://www.visaacceptance.com/en-us/solutions/datasheets/service-orchestration.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/[0.15] text-emerald-400 border border-emerald-500/30 text-sm font-medium hover:bg-emerald-500/[0.25] transition-colors"
              >
                Learn More on VisaAcceptance.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </section>
        </Reveal>

        {/* Back link */}
        <Reveal>
          <div className="pt-10 border-t border-navy-600">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.history.pushState({}, '', '/')
                window.dispatchEvent(new PopStateEvent('popstate'))
              }}
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              &larr; Back to portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
