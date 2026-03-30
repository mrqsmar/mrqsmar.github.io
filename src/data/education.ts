export interface EducationEntry {
  school: string
  location: string
  degree: string
  graduated: string
  details?: string[]
}

export const educationData: EducationEntry[] = [
  {
    school: 'Oregon State University',
    location: 'Corvallis, OR',
    degree: 'Bachelor of Science in Computer Science, Summa Cum Laude',
    graduated: 'Graduated: June 2025',
    details: [
      'Undergraduate Teaching Assistant: CS 361 (Software Engineering) Winter 2025',
    ],
  },
  {
    school: 'Seattle University',
    location: 'Seattle, WA',
    degree: 'Bachelor of Business Administration in Finance, Cum Laude',
    graduated: 'Graduated: December 2021',
  },
]
