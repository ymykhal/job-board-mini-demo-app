import { useContext } from 'react';
import { JobsContext } from '../contexts/jobs';

export function useJobs() {
  const context = useContext(JobsContext);
  
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobsProvider');
  }
  
  return context;
}
