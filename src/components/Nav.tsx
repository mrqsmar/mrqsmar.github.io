import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Education', 'Case Studies', 'Products I Built', 'Skills', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const isSubPage = window.location.pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
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

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg border-b border-line py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => navigateHome(e, isSubPage ? undefined : 'hero')}
          className="font-display text-[1.5rem] font-semibold text-ink tracking-tight leading-none"
        >
          MM<span className="text-accent">.</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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

        {/* Links */}
        <ul
          className={`md:flex md:gap-8 ${
            open
              ? 'flex flex-col absolute top-full left-0 right-0 bg-bg border-b border-line shadow-1 py-2'
              : 'hidden'
          }`}
        >
          {links.map((label) => {
            const id = label.toLowerCase().replace(/\s+/g, '-')
            const href = isSubPage ? `/#${id}` : `#${id}`
            return (
              <li key={id}>
                <a
                  href={href}
                  onClick={(e) => navigateHome(e, id)}
                  className="block text-sm font-medium text-muted hover:text-ink transition-colors md:py-0 py-3.5 px-6 md:px-0 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
