import type { ReactNode } from 'react'
import { Card, CategoryPill, MediaSlot, Reveal, Section, Tag, categories, type Category } from './ui'

interface Project {
  category: Category
  title: string
  problem: string
  stack: string[]
  href: string
  media: ReactNode
}

// A simple voice-session mock for Protégé, which has no screenshot yet.
function VoiceMock() {
  const bars = [10, 22, 36, 18, 44, 30, 52, 26, 40, 16, 34, 48, 20, 38, 14, 28, 42, 24, 12]
  return (
    <div className={`relative aspect-[16/10] ${categories.ai.soft} flex items-center justify-center`}>
      <div className="w-[78%] rounded-card bg-surface border border-line shadow-1 p-s3">
        <div className="flex items-center gap-s2 mb-s3">
          <span className="h-8 w-8 rounded-full bg-ai" aria-hidden="true" />
          <div className="text-14">
            <p className="font-semibold text-ink leading-tight">Coach · live</p>
            <p className="text-subtle leading-tight">Voice session 04:12</p>
          </div>
        </div>
        <div className="flex items-center gap-[3px] h-14" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-pill bg-ai" style={{ height: `${h}px`, opacity: 0.35 + (i % 4) * 0.18 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

const projects: Project[] = [
  {
    category: 'payments',
    title: 'Debit Copilot',
    problem:
      'When debit approval rates move, PMs wait on analysts to explain why; this copilot answers in plain English with numbers computed by tested tools.',
    stack: ['Claude API', 'Python', 'DuckDB', 'Streamlit'],
    href: '/projects/debit-copilot',
    media: (
      <MediaSlot
        src="/debit-copilot-token-outage.png"
        alt="Debit Copilot charts showing which decline reasons moved the approval rate"
        placeholder="Debit Copilot"
        tint="bg-[#ffffff]"
        className="aspect-[16/10] border-b border-line"
        imgClassName="object-contain p-s3 bg-[#ffffff]"
      />
    ),
  },
  {
    category: 'ai',
    title: 'Digital Protégé',
    problem:
      'Professional coaching costs $75–200 an hour, so most people never get it; Protégé offers voice coaching cloned from real coaches.',
    stack: ['VAPI', 'ElevenLabs', 'n8n', 'Anthropic API', 'React'],
    href: '/projects/protege',
    media: <VoiceMock />,
  },
  {
    category: 'mobile',
    title: 'RemindeRx',
    problem:
      'My two aunts juggle medications for dialysis and memory loss, and no reminder app was built for elderly, non-technical users.',
    stack: ['Expo', 'React Native', 'Python', 'Claude Code'],
    href: '/projects/medicine-cabinet',
    media: (
      <MediaSlot
        src="/mc-home.png"
        alt="RemindeRx home screen listing today's medications and a refill alert"
        placeholder="RemindeRx"
        tint={categories.mobile.soft}
        className="aspect-[16/10]"
        imgClassName="object-contain object-top pt-s4 drop-shadow-[0_8px_16px_rgb(0_0_0/0.18)]"
      />
    ),
  },
]

export default function Products() {
  return (
    <Section
      id="projects"
      tone="base"
      eyebrow="02 · Projects"
      title="Things I've built"
      intro="Side projects where I wrote the code myself, usually to fix a problem I or someone close to me had."
    >
      <div className="grid gap-s4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.href} delay={0.08 * i} className="h-full">
            <Card
              media={p.media}
              meta={<CategoryPill category={p.category} />}
              title={p.title}
              footer={p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              href={p.href}
              linkLabel="View project"
            >
              <p className="text-16 text-muted">{p.problem}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
