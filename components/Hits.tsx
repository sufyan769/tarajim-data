import React from 'react';
import { useHits, UseHitsProps, Highlight, Snippet } from 'react-instantsearch';
import { AlgoliaRecord } from '../types';

interface HitCardProps {
  hit: AlgoliaRecord & { 
    _highlightResult?: any; 
    _snippetResult?: any;
    [key: string]: any;
  };
}

// Helper component to render a single Hit in Wiki style
const HitCard: React.FC<HitCardProps> = ({ hit }) => {
  return (
    <article className="mb-6">
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-lg font-serif font-medium">
          <a href="#" className="text-wiki-link hover:underline hover:text-wiki-link-visited decoration-1">
             <Highlight attribute="book_title" hit={hit as any} />
          </a>
        </h3>
        <span className="text-xs text-slate-500">
           (الجزء {hit.part_number}، صفحة {hit.page_number})
        </span>
      </div>
      
      <div className="text-sm text-wiki-text leading-relaxed font-serif">
        <Snippet attribute="text_content" hit={hit as any} />
        <span className="text-xs text-slate-400 mr-1 block mt-1">
          {hit.processingTimeMS}kb ({hit.part_sequence || 0} كلمة) - <span className="text-wiki-link hover:underline cursor-pointer">تاريخ</span>
        </span>
      </div>
    </article>
  );
};

export const CustomHits: React.FC<UseHitsProps> = (props) => {
  const { hits } = useHits(props);

  if (hits.length === 0) {
    return (
      <div className="py-8 text-slate-600">
        <p>لا توجد نتائج مطابقة لاستعلامك.</p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>تأكد من كتابة الكلمات بشكل صحيح.</li>
          <li>حاول استخدام كلمات مختلفة.</li>
          <li>حاول استخدام كلمات عامة أكثر.</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {hits.map((hit: any) => (
        <HitCard key={hit.objectID} hit={hit} />
      ))}
    </div>
  );
};