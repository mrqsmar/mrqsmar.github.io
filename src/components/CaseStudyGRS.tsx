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
  'Product Launch',
  'Go-to-Market',
  'FigmaMake',
  'Cross-functional',
  'UAT',
]

const metrics = [
  { value: '#1', label: 'Fastest Launch', sub: 'In team history' },
  { value: '26 min', label: 'Phase 1 Go-Live', sub: 'Happy & unhappy path UAT testing' },
  { value: 'E2E', label: 'Ownership', sub: 'Design through production launch' },
]

const valueItems = [
  'Platform enables a broad range of Visa products and platforms to offer services to new client segments',
  'Drive Fintech Enablement for entities like Venmo, Betterment, and others',
  'Enables VisaNet fleet discount & Commercial Choice Select Program',
  'Increased revenue from CORE, VAS, and new flows by expanding client base to processors, TPAs, fintechs, and merchants',
]

const issuerTpaFlowItems = [
  'As an Issuer/BIN Sponsor, report relationships with TPAs to Visa via GRS instead of legacy PRM systems',
  'As an Issuer/BIN Sponsor, grant consent to TPAs only for corresponding account ranges/RPINs previously reported',
  'As a TPA, receive information about accessible Visa platforms when an Issuer/BIN Sponsor grants consent',
  'As a Visa platform/product, query GRS via internal API to verify whether a TPA has issuer consent and the scope of the Issuer-Processor relationship',
]

const phase1Steps = [
  {
    title: 'Report Relationships',
    desc: 'Issuer/BIN Sponsor reports relationship with Processor to Visa, including scope (Account Ranges & RPINs)',
  },
  {
    title: 'Access GRS & Grant Consent',
    desc: 'Issuer/BIN Sponsor logs into VOL, accesses GRS, and grants consent for Processor to access Visa Products/Platforms. I/P relationship and scope are pulled from VCIS.',
  },
  {
    title: 'View Processor Relationships',
    desc: 'Issuer/BIN Sponsor sees a list of Processors they have existing relationships with, procured from licensing records',
  },
  {
    title: 'Browse Available Platforms',
    desc: 'Issuer/BIN Sponsor views list of integrated platforms/products available to grant Processor access to',
  },
  {
    title: 'Understand Platform Capabilities',
    desc: 'Issuer/BIN Sponsor sees descriptions of each platform/product and the actions enabled, helping them grant the right permissions',
  },
]

const futureMetrics = [
  { label: '# of active relationships', desc: 'Issuers/Processors onboarded and managing consent through GRS' },
  { label: '# of internal services calling GRS APIs', desc: 'Visa platforms integrated with GRS for consent verification' },
  { label: 'Incremental transaction volume enabled', desc: 'New flows unlocked through expanded client access' },
  { label: 'Latency', desc: 'API response times for consent lookups and relationship queries' },
  { label: 'Uptime', desc: 'Platform availability and reliability SLAs' },
  { label: 'Onboarding time reduction', desc: 'Time saved vs. legacy PRM-based relationship reporting' },
  { label: 'Support tickets reduced', desc: 'Decrease in manual support requests through self-service consent management' },
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
export default function CaseStudyGRS() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Visa GRS &mdash; Fastest Launch in History
          </h1>
          <p className="text-base text-slate-400 mb-3">
            Generalized Relationship Service (GRS) &mdash; Consent & Relationship Management Platform
          </p>
          <p className="text-base text-slate-400 mb-6">
            Cross-functional Product Lead &mdash; Design, UAT, Go-to-Market
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {heroTags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-amber-500/[0.12] text-amber-300 border border-amber-500/20"
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
                <span className="block text-2xl md:text-3xl font-bold text-amber-400">{m.value}</span>
                <span className="block text-sm font-medium text-white mt-1">{m.label}</span>
                <span className="block text-xs text-slate-500 mt-1">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ====== S1: THE PROBLEM ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>The growing demand to expand Visa&rsquo;s client ecosystem</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                Currently, Issuers and BIN Sponsors can access several Visa Products &amp; Platforms.
                However, there is a growing business demand for Processors (e.g. Stripe, PayPal),
                Third Party Agents (e.g. Skyfire, Nekuta), fintechs (e.g. Venmo, Betterment), and
                merchants to also access these products and platforms.
              </p>
              <p>
                Through GRS APIs, Issuers and BIN Sponsors can manage relationships with the entities
                they work with and grant consent so these entities can access Visa products &amp;
                platforms on behalf of the Issuer/BIN Sponsor.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ====== S2: VALUE TO VISA ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Value to Visa</SectionTitle>
            <div className="space-y-3">
              {valueItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-3 bg-amber-500/[0.04] border border-amber-500/20 rounded-xl p-4"
                >
                  <span className="mt-1 block w-2 h-2 rounded-full bg-amber-500/60 shrink-0" />
                  <p className="text-sm text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S3: MY WORK - ISSUER/TPA FLOW ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>What I built &mdash; the Issuer/TPA Flow</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              I designed and built the core Issuer/TPA consent flow, enabling Issuers and BIN Sponsors
              to manage TPA relationships and grant scoped platform access through GRS &mdash; replacing
              the legacy PRM system with a self-service, API-driven workflow.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {issuerTpaFlowItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Flow {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S4: PHASE 1 LAUNCH ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Phase 1 launch &mdash; 26 minutes to go-live</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                I launched Phase 1 (Issuer/Processor Flow) in just 26 minutes by creating comprehensive
                happy and unhappy path scenarios for UAT (User Acceptance Testing).
                This meticulous test preparation ensured all critical paths were validated upfront,
                enabling the fastest go-live in team history.
              </p>
            </div>

            <div className="relative pl-8 space-y-6">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-amber-500/60 to-amber-500/10" />
              {phase1Steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-navy-800 border-2 border-amber-500/60 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-amber-400">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{step.title}</p>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-amber-500 pl-5 py-2 mt-8">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Phase 1 launched in 26 minutes &mdash; the fastest go-live in team history &mdash;
                enabled by thorough UAT preparation covering every happy and unhappy path.&rdquo;
              </p>
            </blockquote>
          </section>
        </Reveal>

        {/* ====== S5: METRICS I WOULD TRACK ====== */}
        <Reveal>
          <section className="mb-8">
            <SectionTitle>How I would measure success post-launch</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              While I transitioned off the team after launch, these are the metrics I would track
              to measure GRS&rsquo;s impact and platform health over time.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {futureMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-amber-400 mb-2">{m.label}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
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
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              &larr; Back to portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
