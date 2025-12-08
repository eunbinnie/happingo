'use client';

import { useState } from 'react';

import { cn } from '@/lib/cn';

interface FrontBingoCardProps {
  text: string;
}

// 빙고 카드 앞면 컴포넌트
const FrontBingoCard = ({ text }: FrontBingoCardProps) => {
  const [content, setContent] = useState(text);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div
      className={cn(
        'text-text/60 flex aspect-3/4 items-center justify-center px-1.5 text-center text-xs font-medium break-keep sm:px-3 sm:text-sm',
        'border-text/25 bg-sub-background shadow-card dark:shadow-card-dark border',
        '[grid-area:1/1/1/1] backface-hidden'
      )}
    >
      <textarea
        value={content}
        onChange={handleContentChange}
        onClick={e => e.stopPropagation()}
        className="outline-none"
      />
    </div>
  );
};

export default FrontBingoCard;
