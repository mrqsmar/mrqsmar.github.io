import type { Config } from 'tailwindcss'

// Wrap a token so Tailwind opacity modifiers (bg-x/20) keep working.
const tok = (name: string) =>
  `color-mix(in srgb, var(${name}) calc(<alpha-value> * 100%), transparent)`

// Map a Tailwind hue family onto one category's tokens: light shades are
// used as text throughout the site, mid shades as fills and borders.
const family = (cat: string) => ({
  50: tok(`--cat-${cat}-soft`),
  100: tok(`--cat-${cat}-soft`),
  200: tok(`--cat-${cat}-ink`),
  300: tok(`--cat-${cat}-ink`),
  400: tok(`--cat-${cat}-ink`),
  500: tok(`--cat-${cat}`),
  600: tok(`--cat-${cat}`),
  700: tok(`--cat-${cat}-ink`),
  900: tok(`--cat-${cat}-ink`),
})

const accent = {
  300: tok('--color-accent'),
  400: tok('--color-accent'),
  500: tok('--color-accent'),
  600: tok('--color-accent-hover'),
}

const danger = { 400: tok('--color-danger'), 500: tok('--color-danger') }

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic names: prefer these in new code.
        bg: tok('--color-bg'),
        tint: tok('--color-bg-tint'),
        surface: tok('--color-surface'),
        sunken: tok('--color-surface-sunken'),
        line: tok('--color-border'),
        'line-strong': tok('--color-border-strong'),
        ink: tok('--color-text'),
        muted: tok('--color-text-muted'),
        subtle: tok('--color-text-subtle'),
        accent: { DEFAULT: tok('--color-accent'), hover: tok('--color-accent-hover'), on: tok('--color-on-accent') },
        accent2: { DEFAULT: tok('--color-accent-2'), ink: tok('--color-accent-2-ink'), on: tok('--color-on-accent-2') },
        payments: { DEFAULT: tok('--cat-payments'), ink: tok('--cat-payments-ink'), soft: tok('--cat-payments-soft') },
        ai: { DEFAULT: tok('--cat-ai'), ink: tok('--cat-ai-ink'), soft: tok('--cat-ai-soft') },
        mobile: { DEFAULT: tok('--cat-mobile'), ink: tok('--cat-mobile-ink'), soft: tok('--cat-mobile-soft') },
        fintech: { DEFAULT: tok('--cat-fintech'), ink: tok('--cat-fintech-ink'), soft: tok('--cat-fintech-soft') },

        // Legacy names used by existing sections, re-pointed at the tokens
        // so the whole site follows the new system (and dark mode).
        white: tok('--color-text-strong'),
        navy: {
          900: tok('--color-bg'),
          800: tok('--color-surface'),
          700: tok('--color-surface-sunken'),
          600: tok('--color-border'),
          500: tok('--color-border-strong'),
        },
        slate: {
          200: tok('--color-text'),
          300: tok('--color-text'),
          400: tok('--color-text-muted'),
          500: tok('--color-text-subtle'),
          600: tok('--color-text-subtle'),
        },
        blue: accent,
        emerald: family('payments'),
        green: family('payments'),
        teal: family('payments'),
        violet: family('ai'),
        purple: family('ai'),
        indigo: family('ai'),
        sky: family('mobile'),
        cyan: family('mobile'),
        amber: family('fintech'),
        orange: family('fintech'),
        red: danger,
        rose: danger,
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
      },
      // Type scale, named by pixel size so it never collides with
      // Tailwind's own text-sm…text-5xl used in older sections.
      fontSize: {
        14: ['var(--text-sm)', 'var(--leading-sm)'],
        16: ['var(--text-base)', 'var(--leading-base)'],
        20: ['var(--text-lg)', 'var(--leading-lg)'],
        28: ['var(--text-xl)', 'var(--leading-xl)'],
        40: ['var(--text-2xl)', 'var(--leading-2xl)'],
        64: ['var(--text-3xl)', 'var(--leading-3xl)'],
      },
      spacing: {
        's1': 'var(--space-1)',
        's2': 'var(--space-2)',
        's3': 'var(--space-3)',
        's4': 'var(--space-4)',
        's5': 'var(--space-5)',
        's6': 'var(--space-6)',
        's7': 'var(--space-7)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
      },
    },
  },
  plugins: [],
}

export default config
