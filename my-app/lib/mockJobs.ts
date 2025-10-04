import { Job } from './JobTypes';

export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: 'Full Stack Developer',
    companyName: 'Amazon',
    location: 'Bengaluru',
    jobType: 'Full-time',
    salaryMin: 800000, salaryMax: 1200000,
    description: 'Build delightful UIs and scalable services.',
    applicationDeadline: '2025-12-31',
    createdAt: '2025-09-29'
  },
  {
    id: "2",
    title: 'Node Js Developer',
    companyName: 'Tesla',
    location: 'Hyderabad',
    jobType: 'Contract',
    salaryMin: 700000, salaryMax: 1100000,
    description: 'APIs, queues, observability.',
    applicationDeadline: '2025-12-15',
    createdAt: '2025-09-29'
  },
  
];
