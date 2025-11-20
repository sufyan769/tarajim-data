import React, { useState, useEffect, useRef } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch';
import { Search, X } from 'lucide-react';

export const CustomSearchBox: React.FC<UseSearchBoxProps> = (props) => {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query || '');
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync local state with Algolia state only if query changes externally
  useEffect(() => {
    if (query !== inputValue && query !== undefined) {
      setInputValue(query);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refine(inputValue);
  };

  const handleReset = () => {
    setInputValue('');
    refine('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl gap-2">
      <div className="relative flex-grow group">
        <input
          ref={inputRef}
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          placeholder="ابحث في التاريخ الكبير..."
          className="w-full h-10 px-3 text-sm md:text-base bg-white border border-wiki-border rounded-sm focus:outline-none focus:border-wiki-link focus:ring-1 focus:ring-wiki-link transition-shadow placeholder-slate-400 font-sans"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleReset}
            className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400 hover:text-red-500"
            aria-label="مسح"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="px-5 h-10 bg-wiki-link text-white font-bold text-sm rounded-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        <span>بحث</span>
      </button>
    </form>
  );
};