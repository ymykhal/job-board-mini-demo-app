import { useTheme } from '../hooks/useTheme';

interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function JobPagination({ currentPage, totalPages, onChange }: Props) {
  const { isDark } = useTheme();

  if (totalPages <= 1) {
    return null; // Don't show pagination if there's only one page or no pages
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            i === currentPage
              ? isDark 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
              : isDark 
                ? 'text-gray-300 hover:bg-gray-700' 
                : 'text-slate-700 hover:bg-slate-100'
          }`}
          aria-label={`Go to page ${i}`}
          aria-current={i === currentPage ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          currentPage === 1
            ? isDark 
              ? 'text-gray-600 cursor-not-allowed' 
              : 'text-slate-400 cursor-not-allowed'
            : isDark 
              ? 'text-gray-300 hover:bg-gray-700' 
              : 'text-slate-700 hover:bg-slate-100'
        }`}
        aria-label="Go to previous page"
      >
        Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          currentPage === totalPages
            ? isDark 
              ? 'text-gray-600 cursor-not-allowed' 
              : 'text-slate-400 cursor-not-allowed'
            : isDark 
              ? 'text-gray-300 hover:bg-gray-700' 
              : 'text-slate-700 hover:bg-slate-100'
        }`}
        aria-label="Go to next page"
      >
        Next
      </button>
    </nav>
  );
}