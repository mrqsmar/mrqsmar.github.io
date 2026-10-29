import { Reveal } from './ui'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{children}</h2>
  )
}

const heroTags = [
  'Agentic AI',
  'Claude API',
  'Tool Calling',
  'Python',
  'DuckDB',
  'Parquet',
  'Streamlit',
  'Altair',
  'Pytest',
]

const metrics = [
  { value: '22 / 22', label: 'Tool Checks Passed', sub: 'Planted cause found in every scenario' },
  { value: '6', label: 'Investigation Scenarios', sub: 'Control, obvious, and subtle incidents' },
  { value: '0', label: 'Model-Written Numbers', sub: 'Every figure traced to a tested tool' },
]

const problemPoints = [
  {
    icon: '🔍',
    title: 'Root-causing is manual',
    body: 'When approval rate moves, an analyst slices transactions by decline code, channel, MCC, token status and time by hand to find what changed.',
  },
  {
    icon: '📉',
    title: 'Noise looks like failure',
    body: 'Holiday volume, payday timing and merchant retry storms all move the headline rate without anything being broken. Telling mix apart from real problems takes experience.',
  },
  {
    icon: '💵',
    title: 'Impact is hard to size',
    body: 'Leadership wants to know what a drop is worth: declined spend, what retries recovered, what is still recoverable, and the interchange at stake.',
  },
  {
    icon: '🤖',
    title: 'Generic AI makes up numbers',
    body: 'A chatbot over transaction data will happily invent a figure. In payments, a confident wrong number is worse than no answer at all.',
  },
]

const workflow = [
  { step: '1', label: 'Ask', detail: 'A PM types a plain-English question, such as "Why did our debit approval rate fall the week of Oct 20?"' },
  { step: '2', label: 'Interpret', detail: 'Claude maps the question to a metric, current period, baseline period and filters, and states its assumptions when the question is ambiguous.' },
  { step: '3', label: 'Validate', detail: 'Deterministic tools check that both periods are complete, look for volume shifts, and test whether the change is statistically significant.' },
  { step: '4', label: 'Decompose', detail: 'The change in decline rate is split by decline category, so the copilot knows which reasons actually drove it.' },
  { step: '5', label: 'Drill down', detail: 'Claude picks up to three follow-up cuts (segment, merchant, wallet/token, cross-border, time) and the tools separate mix effects from rate effects.' },
  { step: '6', label: 'Size impact', detail: 'Declined spend, spend recovered by retry, potentially recoverable spend, and estimated interchange using configured Reg II assumptions.' },
  { step: '7', label: 'Verify and answer', detail: 'Claude writes the answer from tool outputs only. A verifier rejects any number it cannot trace to a tool result, and facts are kept apart from hypotheses.' },
]

const scenarios = [
  { name: 'A quiet week', type: 'Control', tests: 'Restraint: the right answer is "nothing to see"' },
  { name: 'Token-service outage', type: 'Obvious', tests: 'A 40-hour outage hiding inside a weekly average' },
  { name: 'Over-tight fraud rule', type: 'Obvious', tests: 'Digital-goods purchases blocked when made without 3DS' },
  { name: 'Thanksgiving week', type: 'Subtle', tests: 'Holiday volume and payday timing look like a failure; they are mix' },
  { name: 'Merchant retry storm', type: 'Subtle', tests: 'Attempts dip while purchases stay flat' },
  { name: 'Cross-border 3DS outage', type: 'Subtle', tests: 'A 3-day outage disguised by a payday-calendar trap' },
]

const decisions = [
  {
    title: 'The model picks what to look at; code computes the numbers',
    body: 'Every figure comes from tested, deterministic tools. Claude decides which cuts to investigate and explains the findings, but never produces a number itself.',
  },
  {
    title: 'Attempt-level approval rate is the headline',
    body: 'Purchase-level approval rate is shown alongside it. The gap between the two exposes retry inflation that a single number hides.',
  },
  {
    title: 'Reg II interchange by default',
    body: 'Always labelled as an estimate. It makes a key insight visible: the interchange lost is small, while the customer impact is large.',
  },
  {
    title: 'No model-written SQL in V1',
    body: 'Reliability first. Text-to-SQL waits until there is an eval set to measure it against.',
  },
  {
    title: 'A fixed playbook plus at most three drill-downs',
    body: 'Bounded tool calls keep the copilot evaluable and predictable in cost and latency.',
  },
  {
    title: 'Decline what the data cannot answer',
    body: 'Questions about churn or chargebacks are declined rather than guessed, because the dataset cannot support them.',
  },
]

const techStack = [
  { layer: 'LLM', tech: 'Anthropic Claude', detail: 'Interprets the question, chooses drill-downs through tool calling, and writes the structured answer from tool results.' },
  { layer: 'Orchestration', tech: 'Python', detail: 'Interpret, investigate, answer and verify stages, with a follow-up budget, fallbacks and a hard spend cap.' },
  { layer: 'Analytics', tech: 'DuckDB over Parquet', detail: 'Hand-written, tested SQL tools: decline decomposition, segment concentration, mix-versus-rate splits and impact sizing.' },
  { layer: 'Data', tech: 'Synthetic generator', detail: 'Configurable issuer portfolio with planted incidents and a known answer key, so quality is measurable rather than a matter of opinion.' },
  { layer: 'UI', tech: 'Streamlit + Altair', detail: 'Live copilot, saved example investigations, a deterministic mode with no LLM, and a scorecard page.' },
  { layer: 'Evaluation', tech: 'Pytest + eval scripts', detail: 'Tool evaluation across all six scenarios and an AI evaluation graded against the answer key, run across multiple seeds.' },
]

export default function DebitCopilotDetail() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">

        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">
            Payments AI — Personal Project
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Debit Portfolio Intelligence Copilot
          </h1>
          <p className="text-base text-slate-400 mb-4 leading-relaxed">
            Approval rate moved. Why, who is affected, and what is it worth? An AI copilot for debit-card
            product managers and payments analysts: ask in plain English and get a verified investigation of
            what changed, which segments are affected, how much spend and estimated interchange is at stake,
            and what to check next.
          </p>
          <p className="text-xs text-slate-500 mb-6">
            Built on synthetic data only: no real card data or PII.
          </p>
          <a
            href="https://github.com/mrqsmar/payments-ai-analyst"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-lg text-sm font-semibold border border-teal-500/40 text-teal-300 hover:border-teal-400 hover:text-teal-200 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
            </svg>
            View on GitHub
          </a>
          <div className="flex flex-wrap gap-2 mb-12">
            {heroTags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-teal-500/[0.12] text-teal-300 border border-teal-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ====== METRICS ROW ====== */}
        <Reveal>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {metrics.map((m, i) => (
              <Reveal
                index={i}
                key={m.label}
                className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-center"
              >
                <span className="block text-2xl md:text-3xl font-bold text-teal-400">{m.value}</span>
                <span className="block text-sm font-medium text-white mt-1">{m.label}</span>
                <span className="block text-xs text-slate-500 mt-1">{m.sub}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ====== SCREENSHOT ====== */}
        <Reveal>
          <figure className="mb-20">
            <img
              src="/debit-copilot-token-outage.png"
              alt="A token-service outage investigation: technical declines drive the drop, and the hourly trend shows the 40-hour dip"
              className="w-full rounded-xl border border-navy-600 bg-white"
            />
            <figcaption className="text-xs text-slate-500 mt-3 text-center">
              A token-service outage: technical declines drive the drop, and the hourly trend shows the 40-hour dip.
            </figcaption>
          </figure>
        </Reveal>

        {/* ====== PROBLEM SPACE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>The problem — approval-rate investigations are slow and inconsistent</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Approval rate is one of the most watched numbers on a debit portfolio. When it moves, someone has
              to work out why, separate a real problem from noise, size the dollars, and write it up — usually
              by hand, and differently every time.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problemPoints.map((p, i) => (
                <Reveal
                  index={i}
                  key={p.title}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== HOW IT WORKS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>How it works — from question to verified answer</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              The copilot splits the work by what each side is good at:{' '}
              <span className="text-white font-medium">the model decides what to look at and explains it; code decides what the numbers are.</span>
            </p>
            <div className="relative pl-8 space-y-6">
              <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-teal-500/60 to-teal-500/10" />
              {workflow.map((s, i) => (
                <Reveal
                  index={i}
                  key={s.step}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-navy-800 border-2 border-teal-500/60 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-teal-400">{s.step}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{s.label}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== SCENARIOS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Six scenarios, each a different kind of problem</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              The data is synthetic with a known answer key, so quality is measured, not claimed. The
              deterministic tools find the planted cause in all six scenarios — 22 of 22 checks pass — including
              not raising a false alarm on the quiet week and not blaming insufficient funds in the payday-calendar trap.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-navy-600 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-navy-800 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600 w-1/3">Scenario</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600 w-1/6">Type</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">What it tests</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {scenarios.map((row, i) => (
                    <tr key={row.name} className={i < scenarios.length - 1 ? 'border-b border-navy-600' : ''}>
                      <td className="px-5 py-3 font-medium text-slate-300 align-top">{row.name}</td>
                      <td className="px-5 py-3 text-teal-400 font-medium align-top">{row.type}</td>
                      <td className="px-5 py-3 text-slate-400 leading-relaxed align-top">{row.tests}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* ====== PRODUCT DECISIONS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Product decisions</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {decisions.map((d, i) => (
                <Reveal
                  index={i}
                  key={d.title}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-teal-400 mb-2">{d.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
                </Reveal>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-6 leading-relaxed">
              <span className="text-white font-medium">Deliberately left out of V1:</span> real data, real-time
              alerting, forecasting, RAG and ML text classification — each is on the V2/V3 roadmap once the
              bounded loop is proven.
            </p>
          </section>
        </Reveal>

        {/* ====== TECH STACK ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Technology stack</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-navy-600 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-navy-800 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600 w-1/6">Layer</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600 w-1/4">Technology</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">Role in the system</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {techStack.map((row, i) => (
                    <tr key={row.layer} className={i < techStack.length - 1 ? 'border-b border-navy-600' : ''}>
                      <td className="px-5 py-3 font-medium text-slate-300 align-top">{row.layer}</td>
                      <td className="px-5 py-3 text-teal-400 font-medium align-top">{row.tech}</td>
                      <td className="px-5 py-3 text-slate-400 leading-relaxed align-top">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* ====== LIMITATIONS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Honest limitations</SectionTitle>
            <ul className="space-y-2.5">
              {[
                'Synthetic data: calibration targets are configurable assumptions, not industry benchmarks.',
                'Six scenarios so far, against a V1 target of ten.',
                'AI answers are graded by keyword matching, which can miss a correct answer phrased unusually; every answer is saved for manual review.',
                'Tools are not yet cross-checked against an independent reference notebook, and payments practitioners have not yet rated the answers.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 opacity-80 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              &larr; Back to portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
