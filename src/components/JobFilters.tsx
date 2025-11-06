import { useTheme } from '../hooks/useTheme';

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export function JobFilters({
  search,
  onSearchChange,
  availableTags,
  selectedTags,
  onToggleTag,
}: Props) {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-xl shadow p-4 flex flex-col gap-3 transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white'
    }`}>
      <input
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search by title, company, or tech..."
        className={`border rounded-lg px-3 py-2 w-full transition-colors duration-200 ${
          isDark 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
            : 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
        }`}
      />

      <div className="flex flex-wrap gap-2">
        {availableTags.map(tag => {
          const isActive = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors duration-200 ${
                isActive
                  ? isDark 
                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' 
                    : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                  : isDark 
                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600' 
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
