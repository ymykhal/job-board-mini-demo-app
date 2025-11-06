import { createContext } from 'react';
import type { Job } from '../types/job';

export interface JobsContextType {
  jobs: Job[]; // Current page of jobs
  allJobs: Job[]; // All jobs (for extracting tags, etc.)
  search: string;
  setSearch: (search: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  totalCount: number;
}

export const JobsContext = createContext<JobsContextType | undefined>(undefined);