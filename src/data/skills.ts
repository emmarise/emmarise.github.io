export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Go', 'Java', 'Python', 'TypeScript', 'SQL'],
  },
  {
    category: 'Infrastructure',
    items: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'CI/CD'],
  },
  {
    category: 'Databases & Messaging',
    items: ['PostgreSQL', 'Redis', 'Kafka', 'DynamoDB'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['gRPC', 'REST', 'GraphQL', 'Git', 'Linux'],
  },
];
