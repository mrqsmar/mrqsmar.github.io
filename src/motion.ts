// Scroll-reveal for every [data-reveal] element on the page.
// The animation itself is CSS (see index.css); this only marks elements
// with data-in once they enter the viewport, then stops watching them.

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initReveal() {
  const root = document.documentElement
  root.classList.add('js')
  if (!('IntersectionObserver' in window)) {
    root.classList.remove('js')
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.setAttribute('data-in', '')
        io.unobserve(e.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px' }
  )

  const scan = () => document.querySelectorAll('[data-reveal]:not([data-in])').forEach((el) => io.observe(el))

  // Pick up elements added later (route changes, "Show earlier roles").
  let queued = false
  new MutationObserver(() => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => {
      queued = false
      scan()
    })
  }).observe(document.body, { childList: true, subtree: true })

  scan()
}
