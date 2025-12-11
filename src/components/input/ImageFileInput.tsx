'use client';

import { ImageUp, Pencil } from 'lucide-react';

import { BingoItem, useBingoStore } from '@/store';
import { MONTH_KEY } from '@/utils/date';

type ImageUploadMode = 'create' | 'edit';

interface ImageFileInputProps {
  mode: ImageUploadMode;
  id: string;
  item?: BingoItem;
}

const ImageFileInput = ({ mode, id, item }: ImageFileInputProps) => {
  const updateBingoImage = useBingoStore(state => state.updateBingoImage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      updateBingoImage(MONTH_KEY, id, dataUrl);
    };
    reader.readAsDataURL(file);
  };

  if (mode === 'create') {
    return (
      <>
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
      </>
    );
  }

  return (
    item &&
    item.image && (
      <div className="absolute top-0 right-0 flex size-7 items-center justify-center p-2 md:size-8">
        <Pencil
          color="#f3f6f9"
          className="drop-shadow-icon-soft hover:drop-shadow-icon-strong transition-all duration-300"
        />
      </div>
    )
  );
};

export default ImageFileInput;
