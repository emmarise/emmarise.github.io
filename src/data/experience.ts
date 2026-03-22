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
    title: 'Software Engineer Intern',
    company: 'Tech Startup',
    period: '2021 - 2022',
    description: 'Full-stack development with Python and TypeScript. Built internal tools and APIs.',
  },
];
