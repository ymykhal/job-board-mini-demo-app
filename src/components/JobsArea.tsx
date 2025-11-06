import { useMemo } from 'react';
import { useJobs } from '../hooks/useJobs';
import { JobFilters } from './JobFilters';
import { JobList } from './JobList';
import { JobPagination } from './JobPagination';

export function JobsArea() {
  const {
    jobs,
    allJobs,
    search,
    setSearch,
    selectedTags,
    setSelectedTags,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useJobs();

  // Get all available tags from all jobs
  const availableTags = useMemo(() => {
    const allTags = new Set<string>();
    allJobs.forEach(job => {
      job.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags).sort();
  }, [allJobs]);

  const handleToggleTag = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag]
    );
  };

  return (
    <div className="w-full">
      <JobFilters
        search={search}
        onSearchChange={setSearch}
        availableTags={availableTags}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
      />
      
      <div className="py-6">
        <JobList jobs={jobs} />
      </div>
      
      <div className="pt-6">
        <JobPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
}