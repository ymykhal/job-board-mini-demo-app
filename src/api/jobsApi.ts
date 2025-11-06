import type { Job } from '../types/job';
import jobsMock from '../mocks/jobs.json';

export async function fetchJobs(): Promise<Job[]> {
  
    // For demo, I just return mock
  return new Promise(resolve => {
    setTimeout(() => resolve(jobsMock as Job[]), 300);
  });
}
