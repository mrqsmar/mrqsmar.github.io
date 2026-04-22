import { motion } from 'framer-motion'
import { useInView } from './useInView'

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{children}</h2>
  )
}

const heroTags = [
  'React Native',
  'Expo',
  'Python',
  'Claude Code',
  'Mobile / Health',
  'UX Research',
]

const metrics = [
  { value: '2', label: 'Active Users', sub: 'Both aunties using it daily' },
  { value: '1 Week', label: 'Time to Ship', sub: 'Prototype → working app' },
  { value: '4', label: 'Core Features', sub: 'Validated through usability research' },
]

const problems = [
  {
    icon: '💊',
    title: 'Too many medications',
    body: 'Older adults managing chronic conditions often take 5–10+ daily medications. With dialysis, heart conditions, and memory loss in the mix, keeping track becomes genuinely dangerous.',
  },
  {
    icon: '🔄',
    title: 'Refill timing failures',
    body: "Patients forget to call ahead for refills and arrive at the pharmacy to find their medication on backorder — a recurring and avoidable crisis.",
  },
  {
    icon: '🤔',
    title: 'Pill confusion',
    body: 'Medications from pill organizers can look identical in shape and color. Without the original bottle, patients can\'t identify what they\'re holding.',
  },
  {
    icon: '📝',
    title: 'Lost prescription notes',
    body: 'Pharmacists give verbal or written custom instructions that patients lose, forget, or misread — particularly for complex dosing schedules.',
  },
]

const features = [
  {
    id: '01',
    title: 'Save & View Prescription Notes',
    userStory: 'A user received medication with custom instructions from their pharmacist and wants to save them digitally instead of relying on a paper printout.',
    how: 'Each prescription entry has a notes field. Users tap to add or edit plain-text notes attached to that medication — visible at a glance whenever they open the prescription.',
    technical: 'Notes are stored locally in AsyncStorage (React Native) and synced to a lightweight Python/Flask backend. Designed with large font sizes and high contrast so text is readable for low-vision users.',
    accent: 'emerald',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/[0.06]',
    badgeBg: 'bg-emerald-500/[0.12] text-emerald-400',
    tagColor: 'text-emerald-400',
  },
  {
    id: '02',
    title: 'Add a New Prescription',
    userStory: 'A user picks up a new medication and wants to log it in the app with dosage and frequency — so they stop relying on the pill bottle to remember.',
    how: 'A guided form captures medication name, dosage, frequency, and custom schedule (morning/afternoon/night). The app generates a daily checklist automatically from the frequency settings.',
    technical: 'Built using React Native\'s controlled form inputs with Expo\'s keyboard-aware ScrollView so the form doesn\'t get buried behind the keyboard — a detail that matters for users unfamiliar with mobile conventions.',
    accent: 'teal',
    border: 'border-teal-500/40',
    bg: 'bg-teal-500/[0.06]',
    badgeBg: 'bg-teal-500/[0.12] text-teal-400',
    tagColor: 'text-teal-400',
  },
  {
    id: '03',
    title: 'Identify Medication by Photo',
    userStory: 'A user empties their pill organizer and two pills look nearly identical. They take a photo to figure out which is which before taking them.',
    how: 'The camera opens directly from the medication screen. The image is sent to a Python backend that calls a vision model to identify the pill by shape, color, and imprint — returning the medication name and dosage in plain language.',
    technical: 'Uses Expo Camera to capture the image, uploads it via multipart form to a Flask endpoint, which queries a vision API. Response is displayed with large text and a confidence indicator. No image is stored after identification.',
    accent: 'cyan',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/[0.06]',
    badgeBg: 'bg-cyan-500/[0.12] text-cyan-400',
    tagColor: 'text-cyan-400',
  },
  {
    id: '04',
    title: 'Check Off Medications for the Day',
    userStory: 'A user who takes 7 medications in the morning can\'t remember if they took their blood pressure pill. They open the app to check — not to Google it.',
    how: 'The home screen shows today\'s medication checklist grouped by time of day. Each item has a large tap-target checkbox. Checked items move to a "Done" state with a visual strikethrough. The list resets at midnight.',
    technical: 'Daily state is maintained in AsyncStorage with a date key — no login required, no cloud dependency for the core daily flow. Missed doses are surfaced via local push notifications using Expo Notifications.',
    accent: 'green',
    border: 'border-green-500/40',
    bg: 'bg-green-500/[0.06]',
    badgeBg: 'bg-green-500/[0.12] text-green-400',
    tagColor: 'text-green-400',
  },
]

const techStack = [
  {
    layer: 'Frontend',
    tech: 'React Native + Expo',
    detail: 'Cross-platform mobile (iOS & Android) from a single codebase. Expo provides camera access, push notifications, and device storage APIs without needing native Xcode/Android Studio builds.',
  },
  {
    layer: 'Backend',
    tech: 'Python + Flask',
    detail: 'Lightweight REST API handling pill image identification. Receives image uploads, calls vision API, returns structured JSON response to the mobile app.',
  },
  {
    layer: 'AI Layer',
    tech: 'Vision API (Claude)',
    detail: 'Pill photo identification endpoint uses a vision model to read pill imprints, color, and shape — returning medication name and dosage in plain language the user can understand.',
  },
  {
    layer: 'Local Storage',
    tech: 'AsyncStorage',
    detail: "Prescription data and daily check-off state are stored on-device. Users don't need to create an account or connect to a server for the core daily medication flow.",
  },
  {
    layer: 'Notifications',
    tech: 'Expo Notifications',
    detail: 'Local push notifications remind users at scheduled medication times — no third-party notification service required for on-device scheduling.',
  },
  {
    layer: 'Build',
    tech: 'Claude Code',
    detail: 'The entire app was built using Claude Code as the primary development tool — writing components, debugging layout issues, and iterating on UX patterns in a single week.',
  },
]

const designPrinciples = [
  {
    title: 'Large tap targets everywhere',
    body: 'Every interactive element is at minimum 48px tall — well above iOS and Android accessibility guidelines. Elderly users with reduced motor precision can confidently tap without misfire.',
  },
  {
    title: 'No login on first use',
    body: 'The app opens directly to the medication list. No account creation, no password, no onboarding friction. The daily check-off works offline, day one.',
  },
  {
    title: 'High contrast text',
    body: 'All body text uses near-white on dark backgrounds at 16px minimum. Labels are never relying on color alone to convey meaning — critical for users with reduced contrast sensitivity.',
  },
  {
    title: 'One-tap pharmacy calling',
    body: 'The pharmacy phone number is stored per-prescription. A single tap dials directly — eliminating the need to remember or look up the number when it\'s time to refill.',
  },
]

const origin = [
  {
    phase: 'Research',
    label: 'Usability Engineering Class',
    detail: 'Conducted user research on the elderly demographic — interviewing adults 65+ about their daily medication routines, pain points with existing solutions (pill bottles, paper schedules, family reminders), and comfort with technology.',
  },
  {
    phase: 'Design',
    label: 'Figma Prototype',
    detail: 'Designed high-fidelity interactive screens covering the 4 core task flows. Ran usability tests with participants, collected feedback on navigation clarity and text legibility, and iterated on the prototype.',
  },
  {
    phase: 'Build',
    label: 'React Native App',
    detail: 'Translated the validated prototype directly into a working mobile app using Expo and React Native — keeping the same layouts, font sizes, and interaction patterns that tested well with real users.',
  },
  {
    phase: 'Deploy',
    label: 'Live with Real Users',
    detail: 'Installed on both aunties\' phones. Both are managing multiple daily medications — one for dialysis, one for memory loss. They use the checklist feature daily.',
  },
]

export default function MedicineCabinetDetail() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">

        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            Product Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Medicine Cabinet
          </h1>
          <p className="text-base text-slate-400 mb-4">
            A medication management app built for elderly users — started as a Figma prototype for
            a Usability Engineering class, shipped as a real working app in one week for two family
            members managing chronic conditions.
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

        {/* ====== FIGMA PROTOTYPE LINK ====== */}
        <Reveal>
          <div className="bg-emerald-500/[0.06] border border-emerald-500/30 rounded-xl p-5 mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Figma Prototype</p>
              <p className="text-sm text-slate-400">
                Interactive prototype built for the Usability Engineering class — the research artifact that became this app.
              </p>
            </div>
            <a
              href="https://www.figma.com/proto/PBV0J4emwef1dI7ziiWHWg/Final-Prototype---Design-Gallery-(Group-13)?node-id=0-1&t=RMhHROtDjSZNxlhp-1"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-500/[0.15] text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/[0.25] transition-colors"
            >
              View Prototype &rarr;
            </a>
          </div>
        </Reveal>

        {/* ====== S1: THE PROBLEM ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>The problem space — why medication management matters for older adults</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              The older you get, the more medications you take. Adults 65+ fill an average of 25 prescriptions per year.
              Managing that volume with just pill bottles and memory is a system that fails predictably — and the
              consequences aren't minor inconveniences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S2: FROM RESEARCH TO APP ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>From usability research to a real app in one week</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              This didn't start as a side project — it started as a class assignment. What made it ship as a
              real app is that the prototype was tested on real users with real problems, and two of those
              users happened to be my aunties.
            </p>
            <div className="relative pl-8 space-y-6">
              <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-emerald-500/60 to-emerald-500/10" />
              {origin.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-navy-800 border-2 border-emerald-500/60 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-emerald-400">{i + 1}</span>
                  </div>
                  <p className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">{step.phase}</p>
                  <p className="text-sm font-semibold text-white mb-1">{step.label}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S3: FEATURES ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Four validated features — each mapped to a real user scenario</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Each feature was designed around a specific task flow validated in usability testing.
              The goal: a user should be able to complete each task without instruction, even if they
              rarely use smartphones.
            </p>
            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`${f.bg} border ${f.border} rounded-xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold ${f.tagColor} uppercase tracking-wider`}>
                      Feature {f.id}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4">{f.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <p className={`text-[0.65rem] font-bold ${f.tagColor} uppercase tracking-wider mb-1`}>
                        User Scenario
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed italic">&ldquo;{f.userStory}&rdquo;</p>
                    </div>
                    <div>
                      <p className={`text-[0.65rem] font-bold ${f.tagColor} uppercase tracking-wider mb-1`}>
                        How It Works
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">{f.how}</p>
                    </div>
                    <div className={`bg-navy-900/60 border ${f.border} rounded-lg p-3`}>
                      <p className={`text-[0.65rem] font-bold ${f.tagColor} uppercase tracking-wider mb-1`}>
                        Technical Detail
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">{f.technical}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S4: TECH STACK ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>How it&rsquo;s built</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              The stack was chosen for one constraint above all: ship fast to real users. Every layer
              needed to be productive in days, not weeks, while still being production-ready for two
              people who depend on it daily.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-navy-600 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-navy-800 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600 w-1/6">Layer</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600 w-1/4">Technology</th>
                    <th className="px-5 py-3 font-semibold text-slate-300 border-b border-navy-600">Why</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {techStack.map((row, i) => (
                    <tr key={row.layer} className={i < techStack.length - 1 ? 'border-b border-navy-600' : ''}>
                      <td className="px-5 py-3 font-medium text-slate-300 align-top">{row.layer}</td>
                      <td className="px-5 py-3 text-emerald-400 font-medium align-top">{row.tech}</td>
                      <td className="px-5 py-3 text-slate-400 leading-relaxed align-top">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* ====== S5: DESIGN DECISIONS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Design decisions for non-technical elderly users</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              A medication app for elderly users isn&rsquo;t just a standard mobile app with a larger font size.
              Every UX decision was made with users in mind who may have reduced vision, slower motor
              precision, and low tolerance for complexity.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {designPrinciples.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-emerald-400 mb-2">{d.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== S6: WHAT MAKES IT REAL ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>What makes this different from a class project</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                Most UX class prototypes get submitted and archived. This one got installed on two phones
                because the problem was real, the users were real, and the usability research surfaced
                problems worth solving.
              </p>
              <p>
                My two aunties — one managing dialysis medications, one managing medications for memory
                loss — are the daily active users. That changes what &ldquo;done&rdquo; means. A class project
                is done when it scores well. This was done when they could use it without me in the room.
              </p>
              <p>
                The one-week shipping constraint forced every decision to be a tradeoff. No user accounts
                (too much friction). No cloud sync on first launch (too many failure points). No
                complex onboarding (users would drop before reaching the value). The simplest thing that
                works for two specific people turned out to be a genuinely good product direction.
              </p>
            </div>

            <blockquote className="border-l-2 border-emerald-500 pl-5 py-2 mt-8">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;The biggest insight from usability testing: elderly users don&rsquo;t struggle with technology
                because they&rsquo;re incapable — they struggle because most apps aren&rsquo;t designed for them.
                Remove the friction, and they use it.&rdquo;
              </p>
            </blockquote>
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
