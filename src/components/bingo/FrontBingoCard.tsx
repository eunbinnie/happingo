'use client';

import { useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { cn } from '@/lib/cn';
import { BingoItem, useBingoStore, useEditActionStore } from '@/store';
import { getCurrentMonthKey } from '@/utils/date';

interface FrontBingoCardProps {
  item: BingoItem;
  firstBingoCardRef: React.RefObject<HTMLTextAreaElement> | undefined;
}

// 빙고 카드 앞면 컴포넌트
const FrontBingoCard = ({ item, firstBingoCardRef }: FrontBingoCardProps) => {
  const { id, text } = item;
  const isEditing = useEditActionStore(state => state.isEditing);
  const isSaved = useEditActionStore(state => state.isSaved);
  const isCancelled = useEditActionStore(state => state.isCancelled);
  const updateBingoText = useBingoStore(state => state.updateBingoText);
  const monthKey = getCurrentMonthKey();
  const cardRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaRef = firstBingoCardRef ?? cardRef;
  const [content, setContent] = useState(text);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // 편집 모드에서 카드 클릭 시 textarea 포커스
  const handleCardClick: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!isEditing) return;
    textareaRef.current?.focus();
  };

  useEffect(() => {
    if (!isSaved) return;
    updateBingoText(monthKey, id, content);
  }, [isSaved, monthKey, id, content, updateBingoText]);

  useEffect(() => {
    setContent(text);
  }, [text]);

  useEffect(() => {
    if (!isCancelled) return;
    setContent(text);
  }, [isCancelled, text]);

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        'text-text/60 flex aspect-3/4 items-center justify-center px-1.5 text-center text-xs font-medium break-keep sm:px-3 sm:text-sm',
        'border-text/25 bg-sub-background shadow-card dark:shadow-card-dark border',
        '[grid-area:1/1/1/1] backface-hidden',
        'focus-within:outline'
      )}
    >
      <TextareaAutosize
        ref={textareaRef}
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
