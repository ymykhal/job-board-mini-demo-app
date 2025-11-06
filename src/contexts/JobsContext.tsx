import React, { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Job } from '../types/job';
import { fetchJobs } from '../api/jobsApi';
import { JobsContext } from './jobs';

interface JobsProviderProps {
  children: ReactNode;
}

export const JobsProvider: React.FC<JobsProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    fetchJobs().then(setJobs).catch(() => {
      setJobs([]); // or from local mock
    });
  }, []);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();

    return jobs.filter(job => {
      const matchesSearch =
        !term ||
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.tags.some(t => t.toLowerCase().includes(term));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every(tag => job.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [jobs, search, selectedTags]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pagedJobs = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const selectedTagsString = selectedTags.join('|');
  
  useEffect(() => {
    // reset to first page when search/tags change
    setCurrentPage(1);
  }, [search, selectedTagsString]);

  const value = {
    jobs: pagedJobs,
    allJobs: jobs,
    search,
    setSearch,
    selectedTags,
    setSelectedTags,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount: filtered.length,
  };

  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  );
};