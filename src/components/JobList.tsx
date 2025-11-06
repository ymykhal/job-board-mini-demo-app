import type { Job } from '../types/job';
import { JobCard } from './JobCard';
import { useTheme } from '../hooks/useTheme';

interface Props {
  jobs: Job[];
}

export function JobList({ jobs }: Props) {
  const { isDark } = useTheme();

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className={`text-lg ${
          isDark ? 'text-gray-300' : 'text-slate-600'
        }`}>
          No jobs found
        </p>
        <p className={`text-sm mt-2 ${
          isDark ? 'text-gray-500' : 'text-slate-500'
        }`}>
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}