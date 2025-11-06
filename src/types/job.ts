export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salaryRange?: string;
  tags: string[];       // ['React', 'Node.js', 'AWS']
  postedAt: string;     // ISO date string
  description: string;
}
