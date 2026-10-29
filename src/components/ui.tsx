import { motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { useInView } from './useInView'

/* ── Categories ──────────────────────────────────────────────────── */

export type Category = 'payments' | 'ai' | 'mobile' | 'fintech'

export const categories: Record<Category, { label: string; bar: string; ink: string; pill: string; soft: string }> = {
  payments: { label: 'Payments / ML', bar: 'bg-payments', ink: 'text-payments-ink', pill: 'bg-payments-soft text-payments-ink', soft: 'bg-payments-soft' },
  ai: { label: 'AI', bar: 'bg-ai', ink: 'text-ai-ink', pill: 'bg-ai-soft text-ai-ink', soft: 'bg-ai-soft' },
  mobile: { label: 'Mobile', bar: 'bg-mobile', ink: 'text-mobile-ink', pill: 'bg-mobile-soft text-mobile-ink', soft: 'bg-mobile-soft' },
  fintech: { label: 'Fintech', bar: 'bg-fintech', ink: 'text-fintech-ink', pill: 'bg-fintech-soft text-fintech-ink', soft: 'bg-fintech-soft' },
}

/* ── Client-side navigation ──────────────────────────────────────── */

export function navigate(e: React.MouseEvent, href: string) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
  e.preventDefault()
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

/* ── Section ─────────────────────────────────────────────────────── */

const tones = {
  base: 'bg-bg',
  tint: 'bg-tint',
  dark: 'theme-dark bg-bg',
}

interface SectionProps {
  id: string
  tone: keyof typeof tones
  eyebrow: string
  title: string
  intro?: ReactNode
  aside?: ReactNode
  children: ReactNode
}

export function Section({ id, tone, eyebrow, title, intro, aside, children }: SectionProps) {
  return (
    <section id={id} data-section className={`${tones[tone]} text-ink scroll-mt-[64px] py-s6 md:py-s7`}>
      <div className="max-w-[1200px] mx-auto px-s3 sm:px-s4">
        <header className="mb-s5 md:mb-s6 flex flex-col md:flex-row md:items-end md:justify-between gap-s4">
          <div className="max-w-[40rem]">
            <p className="text-14 font-semibold uppercase tracking-[0.14em] text-accent mb-s2">{eyebrow}</p>
            <h2 className="font-semibold text-40 md:text-64 text-ink">{title}</h2>
            {intro && <p className="mt-s3 text-20 text-muted">{intro}</p>}
          </div>
          {aside}
        </header>
        {children}
      </div>
    </section>
  )
}

/* ── Reveal on scroll ────────────────────────────────────────────── */

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Pills and tags ──────────────────────────────────────────────── */

export function CategoryPill({ category }: { category: Category }) {
  const c = categories[category]
  return (
    <span className={`inline-flex items-center gap-s2 rounded-pill px-s3 py-s1 text-14 font-semibold ${c.pill}`}>
      <span className={`h-2 w-2 rounded-[2px] ${c.bar}`} aria-hidden="true" />
      {c.label}
    </span>
  )
}

export function NeutralPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-accent2/40 text-ink px-s3 py-s1 text-14 font-semibold">
      {children}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill border border-line bg-sunken px-s3 py-s1 text-14 text-muted">
      {children}
    </span>
  )
}

/* ── Image slot ──────────────────────────────────────────────────────
 * Shows the image when it exists; until then, a deliberate-looking
 * placeholder in the given tint so the layout never collapses.
 */

interface MediaSlotProps {
  src: string
  alt: string
  placeholder: string
  tint?: string
  className?: string
  imgClassName?: string
}

export function MediaSlot({ src, alt, placeholder, tint = 'bg-sunken', className = '', imgClassName = 'object-cover' }: MediaSlotProps) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden ${tint} ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-end p-s3 bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgb(0_0_0/0.04)_14px_28px)]"
        >
          <span className="rounded-pill bg-surface/80 px-s3 py-s1 text-14 text-muted">{placeholder}</span>
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`absolute inset-0 h-full w-full ${imgClassName}`} />
      )}
    </div>
  )
}

/* ── Card ────────────────────────────────────────────────────────────
 * One internal structure for every card on the page:
 *   media → meta row → title → body → footer (pinned to the bottom)
 * Pass `href` to make the whole card clickable via its footer link.
 */

interface CardProps {
  media?: ReactNode
  meta: ReactNode
  title: string
  subtitle?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  href?: string
  linkLabel?: string
}

export function Card({ media, meta, title, subtitle, children, footer, href, linkLabel }: CardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-1 transition-all duration-200 ${
        href ? 'hover:-translate-y-1 hover:shadow-2 focus-within:shadow-2' : ''
      }`}
    >
      {media}
      <div className="flex flex-1 flex-col gap-s3 p-s4 md:p-s5">
        <div className="flex flex-wrap items-center justify-between gap-s2">{meta}</div>
        <div>
          <h3 className="font-display text-28 font-semibold text-ink">{title}</h3>
          {subtitle && <p className="mt-s1 text-16 text-muted">{subtitle}</p>}
        </div>
        {children}
        {(footer || href) && (
          <div className="mt-auto pt-s4 border-t border-line flex flex-col gap-s3">
            {footer && <div className="flex flex-wrap gap-s2">{footer}</div>}
            {href && linkLabel && (
              <a
                href={href}
                onClick={href.startsWith('/') ? (e) => navigate(e, href) : undefined}
                className="self-start inline-flex items-center gap-s1 text-16 font-semibold text-accent after:absolute after:inset-0 after:content-[''] group-hover:underline underline-offset-4"
              >
                {linkLabel}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
