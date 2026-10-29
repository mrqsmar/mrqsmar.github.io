import { Reveal, navigate } from './ui'

const proofPoints = [
  { lead: '$1M/week', rest: 'recovered', dot: 'bg-payments' },
  { lead: 'LLM assistant', rest: 'shipped to production', dot: 'bg-ai' },
  { lead: '2 PMs', rest: 'managed', dot: 'bg-fintech' },
]

const COPILOT_PATH = '/projects/debit-copilot'


export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[128px] pb-s6 md:pt-[160px] md:pb-s7">
      <div className="max-w-[1200px] mx-auto px-s3 sm:px-s4 grid gap-s6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-s5 lg:gap-s6 items-center">
        {/* Copy */}
        <div>
          <Reveal as="p" index={0} className="text-20 text-muted mb-s3">
            Hi, I'm
          </Reveal>

          <Reveal
            as="h1"
            index={1}
            className="font-display font-semibold text-ink text-[clamp(3.5rem,9vw,7.25rem)] leading-[0.95] tracking-[-0.035em] mb-s4"
          >
            Marques
            <br />
            Mar<span className="text-accent">.</span>
          </Reveal>

          <Reveal as="p" index={2} className="text-20 md:text-28 text-ink max-w-[30ch] mb-s3">
            Product Manager, Payments at Varo. Previously Visa.
          </Reveal>

          <Reveal index={3} className="mb-s5">
            <a
              href={COPILOT_PATH}
              onClick={(e) => navigate(e, COPILOT_PATH)}
              className="group inline-flex items-center gap-s2 rounded-pill bg-accent2/30 border border-accent2 pl-s3 pr-s3 py-s1 text-14 text-ink hover:bg-accent2/60 active:bg-accent2/80 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-payments" aria-hidden="true" />
              <span>
                Currently building: <strong className="font-semibold">Debit AI Copilot</strong>
              </span>
            </a>
          </Reveal>

          <Reveal index={4} className="flex flex-wrap gap-s3 mb-s5">
            <a href="#work" className="btn btn-primary">
              View case studies
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </Reveal>

          <Reveal as="ul" index={5} className="flex flex-wrap gap-s2" aria-label="Highlights">
            {proofPoints.map((p) => (
              <li
                key={p.lead}
                className="inline-flex items-center gap-s2 rounded-pill bg-surface border border-line shadow-1 px-s3 py-s2 text-14 text-muted"
              >
                <span className={`h-2.5 w-2.5 rounded-[3px] ${p.dot}`} aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-ink">{p.lead}</strong> {p.rest}
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* Photo */}
        <Reveal
          index={2}
          className="wobble-group relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] mx-auto md:mr-0 mb-s4 md:mb-0"
        >
          {/* Offset accent shapes behind the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-[-20px] translate-y-[20px] md:translate-x-[-32px] md:translate-y-[32px] rounded-t-pill rounded-b-[24px] bg-accent2"
          />
          <div
            aria-hidden="true"
            className="absolute -top-s3 -right-s3 md:-top-s4 md:-right-s4 h-20 w-20 md:h-28 md:w-28 rounded-full bg-accent wobble-target"
          />
          <img
            src="/assets/me-hero.jpg"
            alt="Marques Mar smiling outdoors in a grey blazer and black turtleneck"
            width={900}
            height={1125}
            className="relative block w-full aspect-[4/5] object-cover object-center rounded-t-pill rounded-b-[24px] border-[3px] border-ink shadow-2 bg-sunken"
          />
        </Reveal>
      </div>
    </section>
  )
}
