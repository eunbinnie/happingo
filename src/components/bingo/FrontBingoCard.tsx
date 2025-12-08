'use client';

import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { cn } from '@/lib/cn';
import { useEditActionStore } from '@/store';

interface FrontBingoCardProps {
  text: string;
}

// 빙고 카드 앞면 컴포넌트
const FrontBingoCard = ({ text }: FrontBingoCardProps) => {
  const isEditing = useEditActionStore(state => state.isEditing);
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
      <TextareaAutosize
        minRows={1}
        maxRows={8}
        value={content}
        onClick={e => e.stopPropagation()}
        onChange={handleContentChange}
        className={cn(
          'h-auto resize-none outline-none',
          !isEditing && 'pointer-events-none'
        )}
      />
    </div>
  );
};

export default FrontBingoCard;
