import React from 'react';
import { useStats } from 'react-instantsearch';

export const Stats: React.FC = (props) => {
  const { nbHits, processingTimeMS } = useStats(props);

  return (
    <div className="text-sm text-slate-400 font-medium animate-fade-in">
      تم العثور على <span className="text-islamic-gold font-bold">{nbHits.toLocaleString('ar-EG')}</span> نتيجة 
      في <span className="dir-ltr inline-block">({processingTimeMS}ms)</span>
    </div>
  );
};