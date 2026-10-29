import { Card, MediaSlot, NeutralPill, Reveal, Section } from './ui'

const interests = [
  {
    label: 'Cars',
    title: 'Car research',
    desc: 'Deep dives into specs, performance data and market trends across the automotive world.',
    photo: '/assets/interest-cars.jpg',
    alt: 'A silver Genesis Electrified G80 sedan parked on a residential street',
    tint: 'bg-fintech-soft',
  },
  {
    label: 'Fashion',
    title: 'Style as design',
    desc: 'Following trends and appreciating where design meets self-expression.',
    photo: '/assets/interest-fashion.jpg',
    alt: 'Marques in a black cap, cream hoodie and black jacket, holding a pink coffee cup',
    tint: 'bg-mobile-soft',
  },
  {
    label: 'Travel & points',
    title: 'Travel, paid in points',
    desc: 'Based in Seattle. 20 states, Japan and South Korea so far, mostly on points.',
    photo: '/assets/interest-travel.jpg',
    alt: 'Blue fishing boats moored in a harbour at dusk, with high-rise towers on the hill behind',
    tint: 'bg-ai-soft',
  },
]

export default function Interests() {
  return (
    <Section id="interests" tone="tint" eyebrow="05 · Off the clock" title="Interests">
      <div className="grid gap-s4 md:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal key={item.title} index={i} className="h-full">
            <Card
              media={
                <MediaSlot
                  src={item.photo}
                  alt={item.alt}
                  placeholder="Photo coming soon"
                  tint={item.tint}
                  className="aspect-[4/3]"
                />
              }
              meta={<NeutralPill>{item.label}</NeutralPill>}
              title={item.title}
            >
              <p className="text-16 text-muted">{item.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
