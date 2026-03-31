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
  'Payments',
  'NLP / BERT',
  'Risk & Compliance',
  'CyberSource',
  'Cross-functional Lead',
]

const metrics = [
  { value: '96%', label: 'Model Confidence', sub: 'Matured from 84% at launch' },
  { value: '10,000+', label: 'Decline Messages Classified', sub: 'Across all acquirer/processor connections' },
  { value: 'Pre-deadline', label: 'Delivery', sub: 'Shipped before Visa SIF enforcement' },
]

const categories = [
  {
    id: '01',
    title: 'Issuer Will Never Approve',
    badge: 'No retries permitted \u2014 immediate SIF surcharge',
    examples:
      'Duplicate transaction, Lost/Stolen/Pickup card, Invalid account (PAN validity check), Invalid transaction, No such issuer, Revocation of authorization, Stop payment, Closed account, Transaction not permitted',
    border: 'border-red-500/40',
    bg: 'bg-red-500/[0.06]',
    badgeBg: 'bg-red-500/[0.12] text-red-400',
    accent: 'text-red-400',
  },
  {
    id: '02',
    title: "Issuer Can't Approve With Current Details",
    badge: 'Retryable with corrections',
    examples:
      'Call issuer, Cannot verify PIN, Exceeds amount, Insufficient funds, Invalid merchant, Processor error, Restricted card, Suspected fraud, System problem, Timeout',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/[0.06]',
    badgeBg: 'bg-amber-500/[0.12] text-amber-400',
    accent: 'text-amber-400',
  },
  {
    id: '03',
    title: 'Issuer Cannot Approve At This Time',
    badge: 'Retryable after conditions change',
    examples:
      'Address verification failure, CVV failure, Expired card, Invalid amount, Invalid card type, Invalid PIN, SCA required, Invalid currency, Invalid data',
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/[0.06]',
    badgeBg: 'bg-blue-500/[0.12] text-blue-400',
    accent: 'text-blue-400',
  },
  {
    id: '04',
    title: 'Generic Error',
    badge: 'Max 15 retries / 30 days',
    examples: 'Do Not Honor, General Decline, Issuer Generated Error',
    border: 'border-slate-500/40',
    bg: 'bg-slate-500/[0.06]',
    badgeBg: 'bg-slate-500/[0.12] text-slate-400',
    accent: 'text-slate-400',
  },
]

const rulesItems = [
  'Brittle across acquirer formats',
  'Breaks on undocumented or novel codes',
  'Requires constant manual maintenance',
  "Can't generalize to new processor messages",
  'Performance ceiling: ~84% accuracy',
]

const bertItems = [
  'Reads raw response message + full transaction payload',
  'Normalizes to reason group regardless of acquirer format',
  'Adapts to new messages without rule updates',
  'Trained on 10,000+ real decline messages',
  'Achieved 96% confidence at maturity',
]

const roles = [
  {
    title: 'Engineering',
    body: 'Drove the case for BERT over rules-based mapping. Defined training data requirements, model evaluation criteria (precision over recall to minimize false suppression of legitimate retries), and the integration spec for surfacing auth_insights_response_category and auth_insights_response_category_code in the CyberSource Auth API response.',
  },
  {
    title: 'Data Science',
    body: 'Defined the precision vs. recall tradeoff. Set 95%+ confidence as the launch bar. Worked with DS to structure the 10,000-message training corpus and establish reason group normalization logic (e.g. "Call AE" \u2192 normalized to "Call").',
  },
  {
    title: 'Operations',
    body: 'Built a review queue for low-confidence classifications. Ops reviewed edge cases to generate labeled training data for continuous model improvement and catch undocumented processor codes as they appeared.',
  },
  {
    title: 'Compliance & Merchant Teams',
    body: 'Translated Visa\u2019s SIF policy rules into model training labels and rollout criteria. Managed the phased rollout: pilot merchants in staging \u2192 merchant config flag \u2192 production deploy via Delphinus feature toggle \u2192 full production enablement.',
  },
]

const rolloutSteps = [
  'Push merchant config DB ticket (staging)',
  'Deploy payments code + enable Delphinus feature toggle',
  'Enable pilot merchants in staging via merchant config flag',
  'Push merchant config DB to production',
  'Deploy payments code to production',
  'Enable pilot merchants in production \u2014 monitor SIF fee exposure',
]

/* ------------------------------------------------------------------ */
/*  Flowchart step                                                     */
/* ------------------------------------------------------------------ */
function FlowStep({
  step,
  question,
  yes,
  no,
  last,
}: {
  step: number
  question: string
  yes: string
  no: string
  last?: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Node */}
      <div className="w-full max-w-lg bg-navy-800 border border-navy-600 rounded-xl p-5">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          Step {step}
        </p>
        <p className="text-sm text-slate-200 font-medium mb-4">{question}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-lg p-3">
            <span className="block text-[0.65rem] font-bold text-emerald-400 uppercase tracking-wider mb-1">
              Yes
            </span>
            <span className="text-xs text-slate-300">{yes}</span>
          </div>
          <div className="bg-slate-500/[0.08] border border-slate-500/20 rounded-lg p-3">
            <span className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-1">
              No
            </span>
            <span className="text-xs text-slate-300">{no}</span>
          </div>
        </div>
      </div>
      {/* Connector */}
      {!last && (
        <div className="flex flex-col items-center">
          <div className="w-px h-8 bg-gradient-to-b from-indigo-500/40 to-indigo-500/10" />
          <div className="w-2 h-2 rounded-full bg-indigo-500/60" />
        </div>
      )}
    </div>
  )
}

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
export default function CaseStudyVisa() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            ML-Powered Retry Classification to Avoid Visa System Integrity Fees
          </h1>
          <p className="text-base text-slate-400 mb-6">
            Cross-functional Product Lead &mdash; Engineering, Data Science, Operations, Compliance
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {heroTags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-indigo-500/[0.12] text-indigo-300 border border-indigo-500/20"
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
                <span className="block text-2xl md:text-3xl font-bold text-indigo-400">{m.value}</span>
                <span className="block text-sm font-medium text-white mt-1">{m.label}</span>
                <span className="block text-xs text-slate-500 mt-1">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ====== S1: THE PROBLEM ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Visa&rsquo;s System Integrity Fee created a hard compliance clock</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                Visa&rsquo;s System Integrity Fee (SIF) mandate penalizes acquirers whose merchants excessively
                retry declined transactions. Around 60% of declined transactions were being reattempted &mdash;
                many of them repeatedly &mdash; adding significant stress to payment platforms and increasing
                operational costs. Merchants retrying 30&ndash;50 transactions created compounding overhead on
                the authorization system.
              </p>
              <p>
                The mandate required acquirers to enforce retry limits: a maximum of 15 retries over 30 days
                for retryable declines, and zero retries for &ldquo;Issuer Will Never Approve&rdquo;
                transactions &mdash; which triggered an immediate SIF surcharge on the first retry.
              </p>
              <p>
                The core challenge: each acquirer and processor connection returned its own proprietary response
                messages with varying formats and codes. Without a reliable way to classify WHY a transaction
                was declined, merchants had no way to know which transactions to retry and which to block &mdash;
                exposing them to acquirer-level SIF penalties.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ====== S2: 4 DECLINE BUCKETS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>
              Visa defined 4 response categories. Our system had to map every message to one.
            </SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              The SIF policy required issuers to return descriptive decline values mapped to 4 API
              categories. These became our model&rsquo;s classification targets.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`${cat.bg} border ${cat.border} rounded-xl p-5`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold ${cat.accent}`}>Category {cat.id}</span>
                    <span className="text-xs text-slate-500">&mdash;</span>
                    <span className={`text-xs font-semibold ${cat.accent}`}>{cat.title}</span>
                  </div>
                  <span className={`inline-block text-[0.65rem] font-semibold px-2 py-0.5 rounded ${cat.badgeBg} mb-3`}>
                    {cat.badge}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-medium text-slate-400">Examples: </span>
                    {cat.examples}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S3: WHY BERT ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>The key decision &mdash; BERT vs. 1:1 processor mapping</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                The naive approach was a 1:1 lookup table: map each processor response code to a decline
                category. Engineering initially favored this. I pushed back.
              </p>
              <p>
                <strong className="text-slate-200">The problem with rules:</strong> each acquirer and
                processor returns its own response message format. A rules-based mapping would require
                constant manual maintenance as processors updated codes, and would fail entirely on novel
                or undocumented messages.
              </p>
              <p>
                <strong className="text-slate-200">The BERT approach:</strong> rather than mapping 1:1, a
                fine-tuned BERT model reads the full raw response message &mdash; normalized to a reason
                group &mdash; and classifies it into one of the 4 SIF categories. The model was trained on
                10,000+ decline messages across all processor connections and the full transaction payload
                was used as model input to determine the correct category.
              </p>
            </div>

            {/* Decision comparison */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Rules (rejected) */}
              <div className="bg-red-500/[0.04] border border-red-500/20 rounded-xl p-6">
                <span className="inline-block text-[0.65rem] font-bold text-red-400 uppercase tracking-wider mb-1">
                  Rejected
                </span>
                <h3 className="text-lg font-semibold text-white mb-4">Rules-based 1:1 mapping</h3>
                <ul className="space-y-2">
                  {rulesItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* BERT (chosen) */}
              <div className="bg-emerald-500/[0.04] border border-emerald-500/20 rounded-xl p-6">
                <span className="inline-block text-[0.65rem] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  Chosen
                </span>
                <h3 className="text-lg font-semibold text-white mb-4">BERT NLP classifier</h3>
                <ul className="space-y-2">
                  {bertItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-emerald-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-indigo-500 pl-5 py-2">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Rather than a 1:1 processor mapping, BERT categorizes 10,000+ messages into 6 reason
                groups &mdash; and matures over time to adopt any new messages processors introduce.&rdquo;
              </p>
            </blockquote>
          </section>
        </Reveal>

        {/* ====== S4: LOOKUP FLOWCHART ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Three-step classification logic</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              The system didn&rsquo;t call the model blindly on every transaction. A priority lookup
              cascaded through available signals:
            </p>

            <div className="flex flex-col items-center gap-0 mb-8">
              <FlowStep
                step={1}
                question="Does the transaction have a Merchant Advice Code (MAC)?"
                yes="Use MAC to define decline category (primary source for Mastercard)"
                no="Go to Step 2"
              />
              <FlowStep
                step={2}
                question="Does the transaction have an Issuer Response Code?"
                yes="Define decline category from IRC"
                no="Go to Step 3"
              />
              <FlowStep
                step={3}
                question="Does the transaction have a raw response message (rmsg)?"
                yes="Run BERT model \u2192 output decline category code"
                no="Unclassified"
                last
              />
            </div>

            <div className="bg-navy-800 border border-navy-600 rounded-xl p-5">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Note: </span>
                We prioritized MAC over raw response codes because MAC is better aligned with network
                documentation. Raw codes contained many undocumented values that didn&rsquo;t reflect
                reality. MAC is now applied only for Mastercard &mdash; a bug fix from the initial rollout
                where MAC was incorrectly used as primary source for all card brands.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ====== S5: PERFORMANCE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>From 84% to 96% &mdash; what drove the improvement</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                Initial accuracy at launch was 84% for VPC transactions and 11% for Non-VPC. After
                enhancements: 85% VPC, 18% Non-VPC &mdash; with the model continuing to mature toward the
                96% confidence target.
              </p>
              <p>Two key bugs fixed during rollout:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>MAC 99 was negatively affecting model performance &mdash; removed from the input feature set</li>
                <li>
                  MAC was incorrectly applied as primary source for all card brands &mdash; corrected to
                  Mastercard only
                </li>
              </ol>
            </div>

            {/* Before / After table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-navy-600 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-navy-800 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600" />
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">Before</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">After</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-navy-600">
                    <td className="px-5 py-3 font-medium text-slate-300">VPC accuracy</td>
                    <td className="px-5 py-3">84%</td>
                    <td className="px-5 py-3 text-emerald-400">85%</td>
                  </tr>
                  <tr className="border-b border-navy-600">
                    <td className="px-5 py-3 font-medium text-slate-300">Non-VPC accuracy</td>
                    <td className="px-5 py-3">11%</td>
                    <td className="px-5 py-3 text-emerald-400">18%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-medium text-slate-300">Confidence target</td>
                    <td className="px-5 py-3">&mdash;</td>
                    <td className="px-5 py-3 text-indigo-400">96% (matured)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* ====== S6: CROSS-FUNCTIONAL ROLE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>My Cross-functional Role</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {roles.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S7: ROLLOUT PLAN ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Phased production rollout</SectionTitle>
            <div className="relative pl-8 space-y-6">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-indigo-500/60 to-indigo-500/10" />
              {rolloutSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-navy-800 border-2 border-indigo-500/60 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-indigo-400">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S8: WHAT I'D DO DIFFERENTLY ====== */}
        <Reveal>
          <section className="mb-8">
            <SectionTitle>Earlier dataset investment and bug detection</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                The biggest constraint early on was labeled training data volume &mdash; specifically for
                Non-VPC transactions where initial accuracy was only 11%. Starting the labeling process
                earlier, particularly for edge-case processor messages, would have materially improved
                initial Non-VPC performance.
              </p>
              <p>
                The MAC 99 bug and the all-card-brand MAC misapplication both surfaced post-launch. Earlier
                cross-functional review with the network rules team &mdash; before the model was trained
                &mdash; would have caught both issues in the spec phase rather than requiring post-launch
                fixes.
              </p>
              <p className="text-slate-300 font-medium">
                Lesson: on future ML initiatives, treat dataset curation and network rule validation as
                sprint-zero deliverables, not prerequisites that block later sprints.
              </p>
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
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              &larr; Back to portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
