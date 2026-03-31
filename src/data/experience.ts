export interface ExperienceRole {
  title: string
  company: string
  location: string
  organization?: string
  seed?: string
  dates: string
  bullets: string[]
  skills: string[]
}

export const experienceData: ExperienceRole[] = [
  {
    title: 'AI Product Engineering Intern',
    company: 'InvestorMatch.ai',
    location: 'Remote',
    seed: 'Series A',
    dates: 'April 2025 - July 2025',
    bullets: [
      'Shipped a full-stack Voice-First AI coaching product end-to-end, enabling founders to match with investors through personalized AI-driven conversations',
      'Built a long-term memory system using VAPI, n8n, and ElevenLabs so the AI Protégé remembers previous sessions and resumes without lost context',
      'Developed a self-improving knowledge base using Anthropic API and AWS S3 that continuously updates from new expert sources and conversations',
      'Implemented production-grade security infrastructure with OPA Policy Framework on AWS, Kong API Gateway, and role-based access control for Client, Admin, and Expert roles',
      'Built full user authentication system using Flask, Bcrypt, SQLAlchemy, and Docker containerization',
    ],
    skills: ['Agentic AI', 'System Architecture', 'Containerization'],
  },
  {
    title: 'Product Manager, AI Payments Optimization',
    company: 'Visa',
    location: 'Bellevue, WA',
    organization: 'Acceptance Solutions',
    dates: 'April 2024 – January 2025',
    bullets: [
      'Enabled 484 Merchant IDs and scaled adoption from 415 to 899 MIDs, boosting merchant revenue recovery to $1M/week',
      'Launched Card Verification and Retry with Alternate Processor features; saving $150K/week via A/B-tested fallback logic',
      'Managed and mentored a first-year PM and intern as direct reports; built training plans and led weekly 1:1s, leading to high reviews and a return offer',
      'Reduced new team member ramp time by 40% through comprehensive product glossary, improving collaboration velocity',
      'Led development of a BERT-based model with ML engineers to classify payment errors, increasing visibility for users',
      'Created a Tableau-based Value Calculator and fused 6 data sources, delivering a real-time executive KPI dashboard',
      'Authored internal playbooks for AI payment feature troubleshooting, increasing support team resolution efficiency by 30%',
    ],
    skills: ['BERT / ML', 'A/B Testing', 'People Management'],
  },
  {
    title: 'Associate Product Manager, Card Platforms & Conversational AI',
    company: 'Visa',
    organization: 'VisaNet Value Added Services',
    location: 'Bellevue, WA',
    dates: 'September 2023 – April 2024',
    bullets: [
      'Launched Generalized Relationship Service, a consent and relationship management platform from 0→1, leading design of user flows, Figma wireframes, and multi-path onboarding logic',
      'Led User Acceptance Testing for GRS across Singapore + U.S., enabling the fastest go-live in team history',
      'Created the ideation for Visa Banking Assist, a ChatGPT powered banking virtual assistant through competitive analysis, built MVP with AI capabilities of Lock/Unlock Cards, Stop Payments, and Merchant Analysis',
      'Enabled validation of Visa Card Program Enrollment, a suite of APIs that allows issuers, processors and fintechs to enroll and manage cardholder programs in a digital, near real-time environment, executing 30+ Postman API calls to verify logic',
      'Improved VCPE Tableau dashboards used by 500+ employees by installing enhancements, cutting exec reporting time by 75%',
    ],
    skills: ['LLM / ChatGPT', '0->1', 'API Testing'],
  },
  {
    title: 'Associate Product Manager, AI Payments Optimization',
    company: 'Visa',
    organization: 'Acceptance Solutions',
    location: 'Bellevue, WA',
    dates: 'September 2022 – September 2023',
    bullets: [
      'Increased merchant adoption from 70 to 289, unlocking $10K+/week in recovered revenue via retuned retry logic',
      'Launched a self-service onboarding guide for legacy and new merchants to increase merchant activation rate by 270%',
      'Created a Tableau-based Value Calculator and fused 6 data sources, delivering a real-time executive KPI dashboard',
      'Defined customizable retry rules and partnered with AI/ML engineers and UX designers to ship an internal rule config UI',
      'Partnered with engineering to run A/B tests on retry rules, leading to identification of optimal configuration for high-value merchants',
    ],
    skills: ['AI/ML Ops', 'Data Analytics', 'UX Design'],
  },
]
