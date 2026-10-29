import { Card, CategoryPill, CountUp, Reveal, Section, categories, type Category } from './ui'

interface CaseStudy {
  category: Category
  company: string
  title: string
  metric: string
  metricLabel: string
  summary: string
  href: string
}

const cases: CaseStudy[] = [
  {
    category: 'payments',
    company: 'Visa',
    title: 'Service Orchestration ML Engine',
    metric: '$1M/week',
    metricLabel: 'merchant revenue recovered, up from $500/week',
    summary: 'ML-driven payment routing on VisaNet, tuned through model features, data pipelines and API logic.',
    href: '/case-studies/orchestration',
  },
  {
    category: 'ai',
    company: 'Visa',
    title: 'Visa Banking Assistant LLM Launch',
    metric: '25%',
    metricLabel: 'less customer friction',
    summary: 'A generative AI assistant for community banks, with RAG merchant analysis and hallucination guardrails.',
    href: '/case-studies/visa-banking',
  },
  {
    category: 'payments',
    company: 'Visa',
    title: 'ML Retry Classification for Visa SIF',
    metric: '96%',
    metricLabel: 'model confidence across 10K+ decline messages',
    summary: 'A BERT classifier that replaced brittle rules for mapping decline messages to response categories.',
    href: '/case-studies/visa',
  },
  {
    category: 'fintech',
    company: 'Visa',
    title: 'GRS: Fastest Launch in Team History',
    metric: '#1',
    metricLabel: 'fastest go-live in team history',
    summary: 'A 0→1 consent and relationship platform launched across Singapore and the U.S.',
    href: '/case-studies/grs',
  },
]

export default function CaseStudies() {
  return (
    <Section
      id="work"
      tone="tint"
      eyebrow="01 · Work"
      title="Case studies"
      intro="Payments and AI products I've owned end to end, and what they moved."
    >
      <div className="grid gap-s4 md:grid-cols-2">
        {cases.map((c, i) => {
          const cat = categories[c.category]
          return (
            <Reveal key={c.href} index={i % 2} className="h-full">
              <Card
                media={<div className={`h-2 ${cat.bar}`} aria-hidden="true" />}
                meta={
                  <>
                    <CategoryPill category={c.category} />
                    <span className="text-14 text-subtle">{c.company}</span>
                  </>
                }
                title={c.title}
                href={c.href}
                linkLabel="Read case study"
              >
                <div>
                  <p className={`font-display text-40 md:text-64 font-semibold tracking-[-0.03em] ${cat.ink}`}>
                    <CountUp value={c.metric} />
                  </p>
                  <p className="mt-s1 text-14 text-muted">{c.metricLabel}</p>
                </div>
                <p className="text-16 text-ink">{c.summary}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
