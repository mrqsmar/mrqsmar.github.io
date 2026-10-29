import { educationData } from '../data/education'
import { MediaSlot, Reveal, Section } from './ui'

// Replace with your own About paragraph.
const ABOUT_PARAGRAPH =
  "I'm a Product Manager on the Payments team at Varo Bank, where I own Debit Card, Debit & Credit Spend and Remote Check Deposit, and partner with our Decagon team on AI. Before Varo I was a PM at Visa, growing merchant revenue recovery from $500/week to $1M/week and shipping an LLM banking assistant to production. I like working where machine learning, payments infrastructure and AI meet, and I think the best PMs understand the technology that powers their products."

export default function About() {
  return (
    <Section id="about" tone="base" eyebrow="04 · About" title="A bit about me">
      <div className="grid gap-s5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-s6 items-start">
        <Reveal className="relative max-w-[420px] w-full">
          <div aria-hidden="true" className="absolute inset-0 translate-x-s3 translate-y-s3 rounded-card bg-accent" />
          <MediaSlot
            src="/assets/me-about.jpg"
            alt="Marques Mar"
            placeholder="Photo coming soon"
            tint="bg-sunken"
            className="relative aspect-[4/5] rounded-card border-[3px] border-ink"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-20 md:text-28 text-ink [font-variation-settings:'SOFT'_50]">{ABOUT_PARAGRAPH}</p>

          <div className="mt-s5 pt-s4 border-t border-line">
            <p className="text-14 font-semibold uppercase tracking-[0.14em] text-subtle mb-s3">Education</p>
            <ul className="grid gap-s3 sm:grid-cols-2">
              {educationData.map((edu) => (
                <li key={edu.school} className="flex items-start gap-s3">
                  {edu.logo && (
                    <img src={edu.logo} alt="" className="h-12 w-12 shrink-0 rounded-[8px] border border-line bg-[#ffffff] object-contain p-s1" />
                  )}
                  <div>
                    <p className="text-16 font-semibold text-ink">{edu.school}</p>
                    <p className="text-14 text-muted">{edu.degree}</p>
                    <p className="text-14 text-subtle">{edu.graduated.replace('Graduated: ', '')}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
