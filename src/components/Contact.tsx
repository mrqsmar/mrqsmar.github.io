import { useEffect, useRef, useState } from 'react'
import { Reveal } from './ui'

const EMAIL = 'mrqsmar@gmail.com'

const links = [
  { href: 'https://linkedin.com/in/marques-mar/', label: 'LinkedIn' },
  { href: 'https://github.com/mrqsmar', label: 'GitHub' },
]

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Older browsers or a blocked clipboard: fall back to a hidden textarea.
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok
  }
}

function CopyEmail() {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onClick = async () => {
    setState((await copyText(EMAIL)) ? 'copied' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), 1500)
  }

  return (
    <button type="button" onClick={onClick} className="btn btn-ghost btn-sm">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {state === 'copied' ? (
          <path d="M5 12l5 5L20 7" />
        ) : (
          <>
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15V5a2 2 0 012-2h10" />
          </>
        )}
      </svg>
      <span aria-live="polite">{state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy email'}</span>
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" data-section className="theme-dark bg-bg text-ink scroll-mt-[64px] py-s6 md:py-s7">
      <div className="max-w-[1200px] mx-auto px-s3 sm:px-s4">
        <Reveal>
          <p className="text-14 font-semibold uppercase tracking-[0.14em] text-accent mb-s2">06 · Contact</p>
          <h2 className="font-semibold text-ink text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] max-w-[14ch]">
            Let's talk payments, AI or <span className="text-accent2">anything fintech</span>.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-s4 text-20 text-muted max-w-[36rem]">
            Open to conversations about ML-powered products, payments innovation and new opportunities.
          </p>
        </Reveal>

        <Reveal index={2} className="mt-s5 flex flex-wrap items-center gap-s3">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            {EMAIL}
          </a>
          <CopyEmail />
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {l.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
