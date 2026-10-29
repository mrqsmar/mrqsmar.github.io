import { useState } from 'react'
import { experienceData, type ExperienceRole } from '../data/experience'
import { Card, NeutralPill, Reveal, Section, Tag } from './ui'

const tools = ['SQL', 'Python', 'Tableau', 'Figma', 'Jira', 'Postman', 'Confluence', 'Git']

// Roles shown before "Show earlier roles".
const VISIBLE_ROLES = 3

function Role({ role, current }: { role: ExperienceRole; current: boolean }) {
  return (
    <li>
      <Reveal className="relative grid md:grid-cols-[180px_1fr] md:gap-s5">
        <div className="hidden md:block pt-s5 text-right">
          <p className="text-14 font-semibold text-ink">{role.dates}</p>
          <p className="text-14 text-subtle">{role.location}</p>
        </div>

        <div className="relative pl-s5 pb-s5">
          <span className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-line" aria-hidden="true" />
          <span
            className={`absolute left-0 top-[44px] h-4 w-4 rounded-full border-[3px] ${current ? 'border-accent bg-accent' : 'border-line-strong bg-bg'}`}
            aria-hidden="true"
          />
          <Card
            meta={
              <>
                <span className="text-14 font-semibold text-ink md:hidden">{role.dates}</span>
                {current && <NeutralPill>Current role</NeutralPill>}
              </>
            }
            title={role.title}
            subtitle={
              <>
                <strong className="font-semibold text-ink">{role.company}</strong>
                {role.organization && <> · {role.organization}</>}
                <span className="md:hidden"> · {role.location}</span>
              </>
            }
            footer={role.skills.map((s) => <Tag key={s}>{s}</Tag>)}
          >
            <ul className="space-y-s2">
              {role.bullets.slice(0, 3).map((b) => (
                <li key={b} className="relative pl-s3 text-16 text-muted before:absolute before:left-0 before:top-[0.6em] before:h-[6px] before:w-[6px] before:rounded-[1px] before:bg-accent">
                  {b}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Reveal>
    </li>
  )
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false)
  const recent = experienceData.slice(0, VISIBLE_ROLES)
  const earlier = experienceData.slice(VISIBLE_ROLES)

  return (
    <Section
      id="experience"
      tone="dark"
      eyebrow="03 · Experience"
      title="Where I've worked"
      aside={
        <div className="md:max-w-[22rem]">
          <p className="text-14 font-semibold uppercase tracking-[0.14em] text-subtle mb-s2">Toolkit</p>
          <ul className="flex flex-wrap gap-s2" aria-label="Tools I use">
            {tools.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <ol className="max-w-[960px]">
        {recent.map((role, i) => (
          <Role key={role.dates} role={role} current={i === 0} />
        ))}
        {showEarlier &&
          earlier.map((role) => <Role key={role.dates} role={role} current={false} />)}
      </ol>

      {earlier.length > 0 && (
        <div className="md:pl-[calc(180px+var(--space-5))]">
          <button
            type="button"
            onClick={() => setShowEarlier((v) => !v)}
            aria-expanded={showEarlier}
            className="btn btn-secondary btn-sm"
          >
            {showEarlier ? 'Hide earlier roles' : `Show earlier roles (${earlier.length})`}
            <span aria-hidden="true" className={`transition-transform ${showEarlier ? 'rotate-180' : ''}`}>↓</span>
          </button>
        </div>
      )}
    </Section>
  )
}
