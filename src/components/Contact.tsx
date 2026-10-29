import { Reveal } from './ui'

const EMAIL = 'mrqsmar@gmail.com'

const links = [
  { href: 'https://linkedin.com/in/marques-mar/', label: 'LinkedIn' },
  { href: 'https://github.com/mrqsmar', label: 'GitHub' },
]

export default function Contact() {
  return (
    <section id="contact" data-section className="theme-dark bg-bg text-ink scroll-mt-[64px] py-s6 md:py-s7">
      <div className="max-w-[1200px] mx-auto px-s3 sm:px-s4">
        <Reveal>
          <p className="text-14 font-semibold uppercase tracking-[0.14em] text-accent mb-s2">06 · Contact</p>
          <h2 className="font-semibold text-ink text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] max-w-[14ch]">
            Let's talk payments, AI or <span className="text-accent2">anything fintech</span>.
          </h2>
          <p className="mt-s4 text-20 text-muted max-w-[36rem]">
            Open to conversations about ML-powered products, payments innovation and new opportunities.
          </p>

          <div className="mt-s5 flex flex-wrap items-center gap-s3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-pill bg-accent text-accent-on px-s4 py-s3 text-16 font-semibold leading-none shadow-1 hover:bg-accent-hover hover:-translate-y-0.5 transition-all"
            >
              {EMAIL}
            </a>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-s1 rounded-pill border-2 border-ink text-ink px-s4 py-s3 text-16 font-semibold leading-none hover:bg-ink hover:text-bg hover:-translate-y-0.5 transition-all"
              >
                {l.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
