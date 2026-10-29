import { useState, useEffect } from 'react'

// Each nav item highlights while any of its sections is in view.
const links = [
  { label: 'Work', id: 'work', sections: ['work', 'experience'], subPath: '/case-studies/' },
  { label: 'Projects', id: 'projects', sections: ['projects'], subPath: '/projects/' },
  { label: 'About', id: 'about', sections: ['about', 'interests'] },
  { label: 'Contact', id: 'contact', sections: ['contact'] },
]

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A section is active while it crosses the middle of the viewport.
      { rootMargin: '-45% 0px -50% 0px' }
    )
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((s) => observer.observe(s))
    const onScroll = () => {
      if (window.scrollY < 200) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [enabled])

  return active
}

type Theme = 'light' | 'dark'

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

// The saved choice wins; without one, follow the system setting.
const currentTheme = (): Theme => {
  const set = document.documentElement.dataset.theme
  return set === 'light' || set === 'dark' ? set : darkQuery().matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    const mq = darkQuery()
    const onChange = () => setTheme(currentTheme())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage blocked: the choice still applies for this visit.
    }
    setTheme(next)
  }

  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button type="button" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`} className="btn btn-ghost !p-s2">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        )}
      </svg>
    </button>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const path = window.location.pathname
  const isSubPage = path !== '/'
  const activeSection = useActiveSection(!isSubPage)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigateHome = (e: React.MouseEvent, hash?: string) => {
    e.preventDefault()
    setOpen(false)
    if (isSubPage) {
      window.history.pushState({}, '', '/' + (hash ? `#${hash}` : ''))
      window.dispatchEvent(new PopStateEvent('popstate'))
      if (hash) {
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        })
      }
    } else if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (l: (typeof links)[number]) =>
    isSubPage ? !!l.subPath && path.startsWith(l.subPath) : !!activeSection && l.sections.includes(activeSection)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-bg/80 backdrop-blur-md border-b border-line/70 py-s2' : 'bg-transparent border-b border-transparent py-s3'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-s3 sm:px-s4 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => navigateHome(e, isSubPage ? undefined : 'hero')}
          className="font-display text-[1.5rem] font-semibold text-ink tracking-tight leading-none"
        >
          MM<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-s1 md:order-last md:ml-s2">
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-s2 rounded-pill hover:bg-sunken active:bg-line transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
                  open && i === 0 ? 'rotate-45 translate-y-[7px]' : ''
                } ${open && i === 1 ? 'opacity-0' : ''} ${
                  open && i === 2 ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            ))}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:gap-s1 md:ml-auto ${
            open
              ? 'flex flex-col gap-s1 absolute top-full left-0 right-0 bg-bg border-b border-line shadow-1 p-s3'
              : 'hidden'
          }`}
        >
          {links.map((l) => {
            const active = isActive(l)
            return (
              <li key={l.id}>
                <a
                  href={isSubPage ? `/#${l.id}` : `#${l.id}`}
                  onClick={(e) => navigateHome(e, l.id)}
                  aria-current={active ? 'location' : undefined}
                  className={`block rounded-pill px-s3 py-s2 text-16 font-medium transition-colors ${
                    active ? 'bg-accent2/50 text-ink font-semibold' : 'text-muted hover:text-ink hover:bg-sunken active:bg-line'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
