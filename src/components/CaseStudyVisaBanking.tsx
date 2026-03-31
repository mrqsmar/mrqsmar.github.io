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
/*  Section heading helper                                             */
/* ------------------------------------------------------------------ */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{children}</h2>
  )
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const heroTags = [
  'Generative AI',
  'LLM / ChatGPT',
  'Voice Assistant',
  'RAG',
  'PCI DSS Compliance',
  'Product Strategy',
]

const metrics = [
  { value: '25%', label: 'Friction Reduction', sub: 'Measured across key banking tasks' },
  { value: '<10B', label: 'Target Bank AUM', sub: 'Community & regional banks' },
  { value: 'Prod', label: 'Shipped to Production', sub: 'Enterprise-grade deployment' },
]

const competitorFeatures = [
  {
    bank: 'Chase',
    assistant: 'Virtual Assistant',
    features: 'Bill pay, balance inquiries, transaction search, branch locator',
    ux: 'Chat-first with guided prompts',
  },
  {
    bank: 'Capital One',
    assistant: 'Eno',
    features: 'Fraud alerts, card lock/unlock, spending insights, bill reminders',
    ux: 'Proactive notifications + conversational',
  },
  {
    bank: 'Citi',
    assistant: 'Citi Bot',
    features: 'Account info, payment scheduling, rewards lookup',
    ux: 'Menu-driven with natural language fallback',
  },
  {
    bank: 'Bank of America',
    assistant: 'Erica',
    features: 'Spending analysis, credit monitoring, bill reminders, refund status',
    ux: 'Voice + text with proactive insights',
  },
]

const mvpFeatures = [
  {
    id: '01',
    title: 'Card Lock / Unlock',
    desc: 'Enabled customers to instantly lock or unlock their debit and credit cards via voice command. Identified as the highest-value, lowest-complexity feature during competitive analysis — offered by every major bank assistant and straightforward to integrate with existing card management APIs.',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/[0.06]',
    accent: 'text-violet-400',
    badgeBg: 'bg-violet-500/[0.12] text-violet-400',
    badge: 'Must Have',
  },
  {
    id: '02',
    title: 'Stop Payments on Duplicate Charges',
    desc: 'Allowed customers to flag and stop payments on merchants that double-charged them. The system detected duplicate merchant charges within a configurable time window and initiated the stop payment workflow, removing the need for a phone call to a service representative.',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/[0.06]',
    accent: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/[0.12] text-emerald-400',
    badge: 'Must Have',
  },
  {
    id: '03',
    title: 'Merchant Spending Analysis (RAG)',
    desc: 'Used Retrieval-Augmented Generation to answer questions like "How much did I spend at DoorDash this month?" The system retrieved relevant transaction data and fed it through the LLM to generate natural-language spending summaries — turning raw data into conversational insights.',
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/[0.06]',
    accent: 'text-blue-400',
    badgeBg: 'bg-blue-500/[0.12] text-blue-400',
    badge: 'Must Have',
  },
  {
    id: '04',
    title: 'Invoice Retrieval',
    desc: 'Enabled customers to request and receive invoice details for past transactions via voice. The assistant pulled structured invoice data from the bank\'s transaction system and presented it in a clear, readable format — eliminating the need to navigate online banking portals.',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/[0.06]',
    accent: 'text-amber-400',
    badgeBg: 'bg-amber-500/[0.12] text-amber-400',
    badge: 'Must Have',
  },
]

const uiRequirements = [
  {
    title: 'On-Screen Keyboard',
    desc: 'Full keyboard input as a fallback for voice, ensuring accessibility and quiet-environment usability.',
  },
  {
    title: 'Persistent Launch Button',
    desc: 'A clearly visible button on the main banking screen that launches the voice assistant — reducing discovery friction to zero.',
  },
  {
    title: 'Bank-Branded Theming',
    desc: 'Colors, logos, and typography matched to each partner bank\'s brand guidelines, so the assistant felt native rather than third-party.',
  },
]

const dagSteps = [
  {
    step: 1,
    label: 'User Voice Input',
    desc: 'Customer speaks a request (e.g., "How much did I spend at DoorDash?")',
  },
  {
    step: 2,
    label: 'Intent Classification',
    desc: 'The DAG routes the input to the correct node based on detected intent (lock card, stop payment, spending query, invoice)',
  },
  {
    step: 3,
    label: 'Data Retrieval (RAG)',
    desc: 'For spending queries, the system retrieves relevant transaction records from the bank\'s data layer',
  },
  {
    step: 4,
    label: 'LLM Response Generation',
    desc: 'Transaction data is fed into the ChatGPT-based model, which generates a natural-language response grounded in the retrieved data',
  },
  {
    step: 5,
    label: 'Guardrail Validation',
    desc: 'Response passes through hallucination checks and PCI DSS compliance filters before delivery',
  },
  {
    step: 6,
    label: 'Voice Output',
    desc: 'Validated response is delivered back to the customer via text-to-speech',
  },
]

const guardrails = [
  {
    title: 'PCI DSS Compliance',
    desc: 'All cardholder data was handled in accordance with PCI DSS procedures. Sensitive information like full card numbers was never stored in logs, passed through the LLM, or exposed in voice responses.',
    accent: 'text-red-400',
    bg: 'bg-red-500/[0.06]',
    border: 'border-red-500/40',
  },
  {
    title: 'Hallucination Prevention',
    desc: 'DAG guardrails constrained the LLM to only generate responses grounded in retrieved transaction data. The model could not fabricate account balances, transaction amounts, or merchant names — it could only reference data that was explicitly fetched.',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/[0.06]',
    border: 'border-amber-500/40',
  },
  {
    title: 'Scope Boundaries',
    desc: 'The Directed Acyclic Graph architecture enforced strict topic boundaries. The assistant could only perform actions within its defined capability set — it could not be prompted into providing financial advice, accessing other customers\' data, or performing unauthorized transactions.',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/[0.06]',
    border: 'border-blue-500/40',
  },
]

const roles = [
  {
    title: 'Product Strategy',
    body: 'Conducted market research to identify the gap in community and regional banking. Led competitive analysis of Chase, Capital One, Citi, and Bank of America virtual assistants to define the feature set and UX approach for the MVP.',
  },
  {
    title: 'Technical Architecture',
    body: 'Designed the ChatGPT-based Directed Acyclic Graph (DAG) architecture that routed user intents to the correct processing nodes. Defined the RAG pipeline for merchant spending analysis and the guardrail framework for hallucination prevention.',
  },
  {
    title: 'Compliance & Security',
    body: 'Ensured all features met PCI DSS requirements. Defined data handling procedures so sensitive cardholder information never flowed through the LLM or appeared in system logs. Built compliance into the architecture from day one.',
  },
  {
    title: 'UX & Design',
    body: 'Defined UI requirements including the on-screen keyboard, launch button placement, and bank-branded theming. Synthesized competitive UX patterns from major bank assistants into a design that balanced simplicity with functionality.',
  },
]

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function CaseStudyVisaBanking() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Visa Banking Assistant &mdash; Generative AI Voice Assistant for Community Banks
          </h1>
          <p className="text-base text-slate-400 mb-6">
            Product Lead &mdash; Strategy, Architecture, Compliance, UX
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {heroTags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-violet-500/[0.12] text-violet-300 border border-violet-500/20"
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
                <span className="block text-2xl md:text-3xl font-bold text-violet-400">{m.value}</span>
                <span className="block text-sm font-medium text-white mt-1">{m.label}</span>
                <span className="block text-xs text-slate-500 mt-1">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ====== S1: THE PROBLEM ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Community banks lacked the infrastructure for modern AI assistants</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                Community and regional banks — those with under $10 billion in assets under management — serve
                millions of customers but lack the engineering teams and technical infrastructure that large
                banks use to build virtual assistants. Without one, their customers had to call into staffed
                call centers during limited business hours, often waiting on hold for extended periods just to
                complete straightforward tasks like locking a lost card or checking a recent charge.
              </p>
              <p>
                This created a significant customer experience gap: the same banking tasks that Chase or Bank
                of America customers could complete in seconds through a virtual assistant required these
                customers to wait in a phone queue. The problem was clear — these banks needed a turnkey
                AI-powered voice assistant that could be deployed without requiring them to build or maintain
                the underlying AI infrastructure.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ====== S2: MARKET RESEARCH & COMPETITIVE ANALYSIS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Competitive analysis shaped the feature set and UX approach</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              I analyzed the virtual assistant offerings from the four largest U.S. banks to identify which
              features were table stakes, which UX patterns resonated most, and where the gaps existed for
              smaller institutions. This research directly informed the MVP feature prioritization and
              interaction design.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-navy-600 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-navy-800 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">Bank</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">Assistant</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">Key Features</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">UX Pattern</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {competitorFeatures.map((c, i) => (
                    <tr key={c.bank} className={i < competitorFeatures.length - 1 ? 'border-b border-navy-600' : ''}>
                      <td className="px-5 py-3 font-medium text-slate-300">{c.bank}</td>
                      <td className="px-5 py-3 text-violet-400">{c.assistant}</td>
                      <td className="px-5 py-3">{c.features}</td>
                      <td className="px-5 py-3">{c.ux}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-navy-800 border border-navy-600 rounded-xl p-5">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Key insight: </span>
                Card lock/unlock was universally offered and had the highest frequency of use. Spending
                analysis (offered by Erica and Eno) was a differentiator that smaller banks could leverage.
                Voice-first interaction was the clear direction for reducing friction.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ====== S3: MVP FEATURES ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>MVP feature set — scoped for maximum impact</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              I split the MVP definition into two tracks: features (what the assistant can do) and UI
              (how customers interact with it). Each feature was prioritized based on competitive coverage,
              implementation complexity, and customer impact.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {mvpFeatures.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`${f.bg} border ${f.border} rounded-xl p-5`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold ${f.accent}`}>Feature {f.id}</span>
                    <span className={`inline-block text-[0.65rem] font-semibold px-2 py-0.5 rounded ${f.badgeBg}`}>
                      {f.badge}
                    </span>
                  </div>
                  <h3 className={`text-base font-semibold text-white mb-2`}>{f.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S4: UI REQUIREMENTS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>UI requirements — designed for accessibility and brand alignment</SectionTitle>
            <div className="grid sm:grid-cols-3 gap-4">
              {uiRequirements.map((req, i) => (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-violet-400 uppercase tracking-wider mb-3">
                    {req.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{req.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S5: DAG ARCHITECTURE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>ChatGPT Directed Acyclic Graph — the system architecture</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 mb-8">
              <p>
                The assistant was built on a ChatGPT-based Directed Acyclic Graph (DAG) architecture. Each
                user request flowed through a structured pipeline: voice input was classified by intent,
                routed to the appropriate processing node, enriched with retrieved data where needed, and
                then passed through the LLM to generate a natural-language response. The DAG structure
                ensured deterministic routing — the model could not skip steps or jump between unrelated
                tasks.
              </p>
              <p>
                For merchant spending queries, the system used Retrieval-Augmented Generation (RAG):
                transaction data was retrieved from the bank&rsquo;s data layer and injected into the LLM
                prompt as context, so the model generated responses grounded in actual data rather than
                fabricated answers.
              </p>
            </div>

            {/* DAG Flow */}
            <div className="relative pl-8 space-y-6 mb-8">
              <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-violet-500/60 to-violet-500/10" />
              {dagSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-navy-800 border-2 border-violet-500/60 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-violet-400">{s.step}</span>
                  </div>
                  <p className="text-sm text-slate-200 font-medium">{s.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-2 border-violet-500 pl-5 py-2">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;The DAG architecture gave us the best of both worlds: the conversational fluency of
                an LLM with the deterministic safety guarantees of a structured pipeline. Every response
                was grounded in real data and validated before delivery.&rdquo;
              </p>
            </blockquote>
          </section>
        </Reveal>

        {/* ====== S6: GUARDRAILS & COMPLIANCE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Guardrails and compliance — built into the architecture</SectionTitle>
            <p className="text-sm text-slate-400 mb-8">
              Safety and compliance were not afterthoughts — they were architectural requirements from
              sprint zero. Every feature was designed with PCI DSS compliance and hallucination prevention
              as hard constraints.
            </p>
            <div className="space-y-4">
              {guardrails.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`${g.bg} border ${g.border} rounded-xl p-5`}
                >
                  <h3 className={`text-sm font-bold ${g.accent} uppercase tracking-wider mb-2`}>
                    {g.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{g.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S7: CROSS-FUNCTIONAL ROLE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>My role across the product lifecycle</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {roles.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-violet-400 uppercase tracking-wider mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S8: RESULTS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>25% friction reduction across key banking tasks</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                The assistant launched to production and delivered a measurable 25% reduction in customer
                friction across the core banking tasks it supported. Tasks that previously required a phone
                call, hold time, and agent interaction — locking a card, disputing a duplicate charge,
                checking merchant spending — were now completed in seconds through voice.
              </p>
              <p>
                For community and regional banks, this represented a step-function improvement in customer
                experience. Their customers now had access to the same self-service capabilities that were
                previously exclusive to the largest financial institutions — without requiring the bank to
                build or maintain any AI infrastructure.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-400">25%</span>
                <span className="block text-sm font-medium text-white mt-1">Friction Reduction</span>
                <span className="block text-xs text-slate-500 mt-1">Across supported tasks</span>
              </div>
              <div className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-400">Seconds</span>
                <span className="block text-sm font-medium text-white mt-1">Time to Resolution</span>
                <span className="block text-xs text-slate-500 mt-1">Down from minutes on hold</span>
              </div>
              <div className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-400">Zero</span>
                <span className="block text-sm font-medium text-white mt-1">Infrastructure Required</span>
                <span className="block text-xs text-slate-500 mt-1">Turnkey for partner banks</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ====== S9: LESSONS LEARNED ====== */}
        <Reveal>
          <section className="mb-8">
            <SectionTitle>Lessons learned — guardrails first, features second</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                The most important architectural decision was making the DAG guardrails a must-have in the
                MVP rather than a fast-follow. In financial services, a single hallucinated balance or
                fabricated transaction could erode customer trust and create regulatory exposure. By
                constraining the LLM within a structured pipeline from day one, we shipped with confidence
                that every response was grounded in real data.
              </p>
              <p>
                The competitive analysis phase proved equally valuable. Rather than guessing at features,
                studying how Chase, Capital One, Citi, and Bank of America approached their virtual
                assistants gave us a clear framework for what to build first, how to design the interaction
                model, and which capabilities would differentiate us in the community banking segment.
              </p>
              <p className="text-slate-300 font-medium">
                Takeaway: for LLM-powered products in regulated industries, treat safety architecture as
                a prerequisite — not a feature. The DAG + RAG pattern gave us both conversational quality
                and the deterministic guarantees that financial services demands.
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
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              &larr; Back to portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
