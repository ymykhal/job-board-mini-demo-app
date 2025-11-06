import { useState } from 'react';
import type { Job } from '../types/job';
import { useTheme } from '../hooks/useTheme';

interface Props {
  job: Job;
}

export function JobCard({ job }: Props) {
  const { isDark } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={`rounded-xl shadow-sm p-4 flex flex-col gap-2 transition-colors duration-300 cursor-pointer hover:shadow-md ${
      isDark 
        ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
        : 'bg-white hover:shadow-lg'
    }`}
    onClick={toggleExpanded}
    >
      <div className="flex flex-wrap justify-between gap-2">
        <div>
          <h2 className={`text-lg font-semibold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {job.title}
          </h2>
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {job.company}
          </p>
        </div>
        <div className={`text-right text-xs ${
          isDark ? 'text-gray-500' : 'text-slate-500'
        }`}>
          <span>{job.location}</span>
          <div>{job.postedAt}</div>
        </div>
      </div>

      <div className="relative">
        <p className={`text-sm transition-all duration-300 ${
          isDark ? 'text-gray-300' : 'text-slate-700'
        } ${isExpanded ? '' : 'line-clamp-2'}`}>
          {job.description}
        </p>
        
        {/* Expand/Collapse indicator */}
        <div className={`mt-1 text-xs font-medium transition-colors duration-200 ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          {isExpanded ? 'Click to show less' : 'Click to read more'}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {job.tags.map(tag => (
          <span
            key={tag}
            className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
              isDark 
                ? 'bg-gray-700 text-gray-300' 
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
