export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Building scalable backend systems and infrastructure. Working with Go, Java, Kubernetes, and distributed systems.',
  },
  {
    title: 'Personal Projects',
    company: 'Side Projects',
    period: '2025 - Present',
    description: 'Building full-stack apps with AI integration. Finance Tracker — a conversational expense tracker using Next.js 16, Supabase, Groq LLM, and Tailwind CSS 4. Deployed on Vercel.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Tech Startup',
    period: '2021 - 2022',
    description: 'Full-stack development with Python and TypeScript. Built internal tools and APIs.',
  },
];
