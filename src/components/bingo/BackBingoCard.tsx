'use client';

import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/cn';

interface BackBingoCardProps {
  id: string;
}
// 빙고 카드 뒷면 컴포넌트
const BackBingoCard = ({ id }: BackBingoCardProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setPreviewUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={cn(
        'border-text/25 bg-sub-background shadow-card dark:shadow-card-dark aspect-3/4',
        'rotate-y-180 [grid-area:1/1/1/1] backface-hidden',
        'flex items-center justify-center',
        previewUrl ? 'relative' : 'border'
      )}
    >
      <label
        htmlFor={id}
        className="border-text/25 flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed p-1 sm:gap-2"
      >
        <div className="flex size-4 items-center justify-center sm:size-6">
          <ImageUp />
        </div>
        <span className="text-2xs sm:text-xs">사진 추가하기</span>
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      {previewUrl && (
        <div className="absolute inset-0">
          <Image src={previewUrl} alt="preview" fill className="object-cover" />
        </div>
      )}
    </div>
  );
};

export default BackBingoCard;
