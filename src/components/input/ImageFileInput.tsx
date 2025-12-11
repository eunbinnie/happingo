import { ImageUp } from 'lucide-react';

import { useBingoStore } from '@/store';
import { MONTH_KEY } from '@/utils/date';

type ImageUploadMode = 'create' | 'edit';

interface ImageFileInputProps {
  mode: ImageUploadMode;
  id: string;
}

const ImageFileInput = ({ mode, id }: ImageFileInputProps) => {
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
};

export default ImageFileInput;
