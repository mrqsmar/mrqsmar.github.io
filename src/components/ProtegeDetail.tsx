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
  'Voice AI',
  'Flask',
  'Python',
  'React.js',
  'n8n',
  'OPA / Rego',
  'Docker',
  'Anthropic API',
  'ElevenLabs',
  'VAPI',
]

const companyContext = [
  {
    name: 'ExpertScale.ai',
    role: 'The Company',
    description:
      'ExpertScale is the startup behind Digital Protégé. Their mission is to scale human expertise — giving anyone access to world-class coaching and mentorship through AI-powered digital replicas of real experts. Think of it as democratizing access to the smartest people in any field.',
    accent: 'sky',
    border: 'border-sky-500/40',
    bg: 'bg-sky-500/[0.06]',
    badge: 'bg-sky-500/[0.12] text-sky-300 border-sky-500/20',
    tagColor: 'text-sky-400',
  },
  {
    name: 'ApexReplicant.ai',
    role: 'The Product Platform',
    description:
      'ApexReplicant is ExpertScale\'s core platform for building "digital replicas" of human experts — capturing their knowledge, communication style, and coaching frameworks into an AI that can interact with users in real time. Digital Protégé is the flagship product built on this platform: a voice-first AI coach accessible at any time, at a fraction of the cost of in-person sessions.',
    accent: 'cyan',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/[0.06]',
    badge: 'bg-cyan-500/[0.12] text-cyan-300 border-cyan-500/20',
    tagColor: 'text-cyan-400',
  },
]

const metrics = [
  { value: '$75–200/hr', label: 'Cost of In-Person Coaching', sub: 'Per hour, per Noomi directory' },
  { value: '3-Person', label: 'Engineering Team', sub: 'Lean startup environment' },
  { value: '6+', label: 'Systems Built', sub: 'Auth, OPA, memory, knowledge base, infra' },
]

const problemPoints = [
  {
    icon: '💸',
    title: 'Coaching is unaffordable',
    body: 'A typical coaching session costs $75–$200/hour. With the average American salary around $62,067 (BLS 2024), consistent coaching is financially out of reach for most people.',
  },
  {
    icon: '⏰',
    title: 'Scheduling is a barrier',
    body: 'In-person and live sessions require matching availability between coach and client — creating scheduling friction that prevents people from getting help when they need it most.',
  },
  {
    icon: '🎓',
    title: 'Youth and career-seekers lack access',
    body: 'Career-seekers — especially young adults — often lack financial resources for guidance but would benefit most from expert coaching to advance their careers.',
  },
  {
    icon: '🤖',
    title: 'Existing AI tools feel robotic',
    body: 'Current AI coaching products lack natural voice interaction, dynamic responses, and personalized context — making them feel more like chatbots than real coaching sessions.',
  },
]

const contributions = [
  {
    id: '01',
    category: 'User Registration & Authentication',
    accent: 'sky',
    border: 'border-sky-500/40',
    bg: 'bg-sky-500/[0.06]',
    tagColor: 'text-sky-400',
    badgeBg: 'bg-sky-500/[0.12] text-sky-400',
    items: [
      'Built the User Registration Page — a form collecting Name, Email, Role, and Password with real-time inline error messaging when fields are left empty',
      'Enforced password strength requirements on the frontend to prevent weak credentials at the point of entry',
      'Created a registration API endpoint using Flask, Bcrypt, and SQLAlchemy to securely hash and store user credentials',
      'Designed the MySQL database schema (First Name, Email, Role, Password) as the backbone of user management',
      'Implemented an email verification service that emails users a confirmation link after successful registration',
      'Used Postman to validate POST requests — new account registration, duplicate account detection, and password reset flows',
    ],
  },
  {
    id: '02',
    category: 'Security & Access Control (OPA / Kong)',
    accent: 'violet',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/[0.06]',
    tagColor: 'text-violet-400',
    badgeBg: 'bg-violet-500/[0.12] text-violet-400',
    items: [
      'Built an OPA (Open Policy Agent) Policy Framework in AWS that defines authorization rules with policies, user inputs, and automated tests',
      'Implemented role-based access rules for Client, Admin, and Expert using Rego — each role gets a distinct permission set',
      'Built a Policy Loading Service that dynamically loads the correct policy for each role at request time',
      'Configured Kong API Gateway with OPA policies to intercept HTTP requests and route them to the backend only when authorized',
      'Spun up a Docker Compose stack for a local API management environment with Kong for development and testing',
      'Created a Policy Decision Logging tool and YAML config for OPA — logging every access decision for audit trails',
      'Implemented CORS security measures to restrict cross-origin requests to trusted domains only',
    ],
  },
  {
    id: '03',
    category: 'Infrastructure & Containerization',
    accent: 'indigo',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-500/[0.06]',
    tagColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/[0.12] text-indigo-400',
    items: [
      'Built Docker containerization for the full application stack — enabling consistent, portable deployments across environments',
      'Configured Docker Compose to orchestrate multiple services (Flask API, Kong gateway, OPA policy engine) locally',
      'Built out a unit testing suite for the registration forms, covering field validation and error state logic',
    ],
  },
  {
    id: '04',
    category: 'Long-Term Memory System',
    accent: 'emerald',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/[0.06]',
    tagColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/[0.12] text-emerald-400',
    items: [
      'Built a long-term memory system so the AI coach retains context across sessions — users can pick up interviews or coaching discussions exactly where they left off without re-explaining their background',
      'Added a "Resume Conversation" button on the frontend that surfaces when a user returns and has a prior session on record',
      'Integrated VAPI to pass session IDs to Flask, enabling the AI to retrieve and inject prior context into the voice pipeline',
      'Used n8n workflows to log every interaction so session state is captured automatically after each call',
      'Wired ElevenLabs to deliver a personalized "Welcome back" greeting before resuming — making the re-entry feel natural',
    ],
  },
  {
    id: '05',
    category: 'Interview Continuity System',
    accent: 'teal',
    border: 'border-teal-500/40',
    bg: 'bg-teal-500/[0.06]',
    tagColor: 'text-teal-400',
    badgeBg: 'bg-teal-500/[0.12] text-teal-400',
    items: [
      'Built an interview question system — questions stored in a JSON file, embedded in MySQL, with each question logged individually to track progress per user',
      'Designed the system to return the user to their last unanswered question when they resume, preventing repetition and maintaining session continuity',
      'VAPI passes the session ID to Flask to determine resume position; n8n tracks the workflow and automates post-interview follow-up steps',
      'ElevenLabs reads the next question aloud to the user in a natural voice when the session resumes',
    ],
  },
  {
    id: '06',
    category: 'Digital Knowledge Base Management',
    accent: 'amber',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/[0.06]',
    tagColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/[0.12] text-amber-400',
    items: [
      'Built a digital knowledge base management system that automatically consolidates expert information from multiple sources — keeping each expert\'s AI assistant current and accurate',
      'Used n8n to automate data ingestion: fetching from APIs, processing user-uploaded documentation, executing database queries, and formatting the output into a structured knowledge base',
      'Stored structured JSON knowledge base files in AWS S3, with continuous updates triggered by new conversations and interactions — the more the coach is used, the more accurate it becomes',
      'Processed new interaction data through Anthropic\'s API to extract insights and merge them into the existing knowledge base using JSON merging logic',
    ],
  },
]

const techStack = [
  { layer: 'Frontend', tech: 'React.js + CSS', detail: 'User registration UI, error states, form validation, and the resume conversation button — all client-side components I built.' },
  { layer: 'Backend API', tech: 'Flask + Python', detail: 'REST API handling user registration, session management, and VAPI session ID routing for memory resumption.' },
  { layer: 'Database', tech: 'MySQL + SQLAlchemy', detail: 'User schema and interview question storage. SQLAlchemy as the ORM for schema definition and query management.' },
  { layer: 'Auth Security', tech: 'Bcrypt + itsdangerous', detail: 'Password hashing at registration and secure email verification token generation for account confirmation.' },
  { layer: 'API Gateway', tech: 'Kong + OPA', detail: 'Kong intercepts all HTTP requests; OPA policy engine evaluates Rego rules per role before routing to the backend.' },
  { layer: 'Policy Language', tech: 'Rego (OPA)', detail: 'Authorization logic written in Rego defining what Client, Admin, and Expert roles can access — with tests for each policy.' },
  { layer: 'Containerization', tech: 'Docker + Docker Compose', detail: 'Full app stack containerized for reproducible local and cloud deployments; multi-service orchestration via Compose.' },
  { layer: 'Workflow Automation', tech: 'n8n', detail: 'Automated post-session logging, knowledge base ingestion pipelines, and post-interview follow-up sequences.' },
  { layer: 'Voice AI', tech: 'VAPI + ElevenLabs', detail: 'VAPI handles voice input/output pipeline and session ID passing; ElevenLabs renders natural-sounding voice responses from cloned expert voices.' },
  { layer: 'LLM', tech: 'Anthropic Claude (Sonnet 4)', detail: 'Core reasoning engine for dynamic coaching responses. Also used to process conversation data into knowledge base updates.' },
  { layer: 'Cloud Storage', tech: 'AWS S3', detail: 'Stores structured JSON knowledge base files that continuously update from new conversations.' },
  { layer: 'Data / Storage', tech: 'Supabase + Airtable + JSON', detail: 'Supabase for real-time data; Airtable for lightweight structured data management; JSON as the interchange format throughout.' },
  { layer: 'Testing', tech: 'Postman + Unit Tests', detail: 'Postman for API endpoint validation (registration, duplicates, password reset); unit test suite covering form validation logic.' },
]

export default function ProtegeDetail() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">

        {/* ====== HERO ====== */}
        <Reveal>
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-4">
            AI Product Engineering — Internship Project
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Digital Protégé
          </h1>
          <p className="text-base text-slate-400 mb-4 leading-relaxed">
            A voice-first AI coaching platform built to make expert-level guidance accessible and affordable.
            I served as an AI Product Engineer on a 3-person team — contributing to user authentication,
            API security, infrastructure, and the AI memory systems that make coaching feel continuous and personal.
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {heroTags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-sky-500/[0.12] text-sky-300 border border-sky-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ====== COMPANY CONTEXT ====== */}
        <Reveal>
          <section className="mb-20">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Where This Was Built
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {companyContext.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                  className={`${c.bg} border ${c.border} rounded-xl p-5`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold ${c.tagColor} uppercase tracking-wider px-2.5 py-1 rounded-full ${c.badge} border`}>
                      {c.role}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold ${c.tagColor} mb-2`}>{c.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-navy-800 border border-navy-600 rounded-xl p-5">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">How they connect</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-sky-400 font-medium">ExpertScale.ai</span> is the company.{' '}
                <span className="text-cyan-400 font-medium">ApexReplicant.ai</span> is their platform for building expert digital replicas.{' '}
                <span className="text-white font-medium">Digital Protégé</span> is the flagship product — a voice AI coaching tool built on that platform, targeting career-seekers and professionals who need expert guidance but can't afford recurring in-person sessions.
              </p>
            </div>
          </section>
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
                <span className="block text-2xl md:text-3xl font-bold text-sky-400">{m.value}</span>
                <span className="block text-sm font-medium text-white mt-1">{m.label}</span>
                <span className="block text-xs text-slate-500 mt-1">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ====== PROBLEM SPACE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>The problem — coaching is expensive, inaccessible, and hard to scale</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              A typical in-person coaching session runs $75–$200/hour. With the average American salary at roughly
              $62,067 per year (Bureau of Labor Statistics, 2024), consistent coaching is effectively a luxury.
              Career-seekers — particularly youth — who could benefit most from expert guidance are often priced out entirely.
              On top of cost, existing AI alternatives feel robotic: they don't capture voice naturally, their responses don't adapt,
              and they have no memory of past sessions. Digital Protégé was built to close that gap.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problemPoints.map((p, i) => (
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

        {/* ====== MY ROLE ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>My role — AI Product Engineer</SectionTitle>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                On a 3-person engineering team, I owned the full user authentication and security layer —
                from the registration form a user sees on day one, to the OPA policies that govern what they
                can access once they're inside the system. I also built the infrastructure that makes the
                AI feel persistent: the long-term memory system, interview continuity, and the knowledge base pipeline
                that keeps each expert's AI assistant up to date.
              </p>
              <p>
                This wasn't a course project with fixed requirements — it was a real startup product with real
                constraints. Decisions had to balance security (CORS, RBAC, token-based verification), developer
                experience (Docker Compose, testable API endpoints), and user experience (natural voice resumption,
                "welcome back" greeting, no lost context between sessions).
              </p>
            </div>

            <blockquote className="border-l-2 border-sky-500 pl-5 py-2 mt-8">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "The most technically interesting challenge was building a system where the AI doesn't just respond —
                it remembers. Connecting VAPI session IDs through Flask to n8n and back to ElevenLabs meant the voice
                experience felt continuous, not transactional."
              </p>
            </blockquote>
          </section>
        </Reveal>

        {/* ====== CONTRIBUTIONS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>What I built — contribution by contribution</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Each cluster below represents a distinct system I owned end-to-end — from implementation
              through testing and integration with the rest of the product.
            </p>
            <div className="space-y-6">
              {contributions.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className={`${c.bg} border ${c.border} rounded-xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold ${c.tagColor} uppercase tracking-wider`}>
                      {c.id}
                    </span>
                    <h3 className="text-base font-bold text-white">{c.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {c.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.tagColor} opacity-80 shrink-0`}
                          style={{ backgroundColor: 'currentColor' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== HOW THE PRODUCT WORKS ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>How the product works — end to end</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Digital Protégé is a voice-first AI coaching platform. Here's the pipeline from a user's first word to the response they hear:
            </p>
            <div className="relative pl-8 space-y-6">
              <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-sky-500/60 to-sky-500/10" />
              {[
                { step: '1', label: 'User speaks', detail: 'VAPI captures the user\'s voice input and converts it to text via speech-to-text. The session ID is passed alongside the transcript so context can be retrieved.' },
                { step: '2', label: 'Memory retrieval', detail: 'Flask receives the request, queries the long-term memory store for any prior session context, and prepends it to the prompt — so the LLM knows what was discussed before.' },
                { step: '3', label: 'LLM processing', detail: 'Anthropic\'s Claude model processes the transcript with full session context plus the expert\'s knowledge base. It generates a coaching response tailored to the user\'s current stage.' },
                { step: '4', label: 'Voice response', detail: 'ElevenLabs converts the LLM\'s text response into a natural-sounding voice — cloned from the actual expert. The user hears a real-sounding coach, not a robotic text-to-speech system.' },
                { step: '5', label: 'Session logging', detail: 'n8n logs the interaction to the database. The knowledge base updates with any new insights. The next time the user returns, the system knows exactly where to resume.' },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-navy-800 border-2 border-sky-500/60 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-sky-400">{s.step}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{s.label}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ====== TECH STACK ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>Technology stack</SectionTitle>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Each technology was chosen for a specific reason — not because it was fashionable, but because it
              solved a real constraint in a lean, 3-person team building a production-grade voice AI product.
            </p>
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
                      <td className="px-5 py-3 text-sky-400 font-medium align-top">{row.tech}</td>
                      <td className="px-5 py-3 text-slate-400 leading-relaxed align-top">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* ====== WHAT THIS DEMONSTRATES ====== */}
        <Reveal>
          <section className="mb-20">
            <SectionTitle>What this demonstrates for recruiters and PMs</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Full-stack ownership',
                  body: 'I owned systems end-to-end — database schema design, API endpoints, security policies, containerization, and frontend components — not just one layer.',
                },
                {
                  title: 'Security thinking',
                  body: 'Built CORS protections, role-based access control via OPA/Rego, password hashing with Bcrypt, and email verification — treating security as a first-class concern, not an afterthought.',
                },
                {
                  title: 'AI integration depth',
                  body: 'Went beyond calling an LLM. Built the memory infrastructure, knowledge base pipelines, session continuity, and voice orchestration that make AI feel genuinely useful — not just a demo.',
                },
                {
                  title: 'Product judgment',
                  body: 'Made technical decisions in service of the user experience — "welcome back" voice greetings, seamless session resumption, question-level interview progress tracking — details that make the difference between a prototype and a product.',
                },
                {
                  title: 'Systems thinking',
                  body: 'Connected disparate tools (VAPI, n8n, Flask, ElevenLabs, AWS S3, Anthropic API) into coherent workflows with clear data contracts and audit logging throughout.',
                },
                {
                  title: 'Startup velocity',
                  body: 'Shipped multiple production-grade systems on a 3-person team — balancing code quality with delivery speed in a real startup context with real product goals.',
                },
              ].map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-navy-800 border border-navy-600 rounded-xl p-5"
                >
                  <h3 className="text-sm font-bold text-sky-400 mb-2">{d.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
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
              className="text-sm text-sky-400 hover:text-sky-300 transition-colors"
            >
              &larr; Back to portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
