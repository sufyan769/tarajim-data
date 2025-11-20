import React from 'react';
import { usePagination, UsePaginationProps } from 'react-instantsearch';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomPagination: React.FC<UsePaginationProps> = (props) => {
  const { pages, currentRefinement, refine, isFirstPage, isLastPage } = usePagination(props);

  if (pages.length === 0) return null;

  return (
    <nav className="flex items-center gap-1" aria-label="Pagination">
      <button
        onClick={() => !isFirstPage && refine(currentRefinement - 1)}
        disabled={isFirstPage}
        className={`p-2 rounded-md border ${
          isFirstPage 
            ? 'border-transparent text-slate-300 cursor-not-allowed' 
            : 'border-paper-line text-slate-600 hover:bg-slate-50 hover:text-islamic-gold'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <ul className="flex items-center gap-1">
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => refine(page)}
              className={`w-10 h-10 rounded-md font-bold text-sm transition-colors ${
                currentRefinement === page
                  ? 'bg-islamic-gold text-white shadow-md'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              {page + 1}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => !isLastPage && refine(currentRefinement + 1)}
        disabled={isLastPage}
        className={`p-2 rounded-md border ${
          isLastPage 
            ? 'border-transparent text-slate-300 cursor-not-allowed' 
            : 'border-paper-line text-slate-600 hover:bg-slate-50 hover:text-islamic-gold'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    </nav>
  );
};