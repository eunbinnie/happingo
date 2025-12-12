'use client';

import useModalFadeAnimation from '@/hooks/useModalFadeAnimation';
import { cn } from '@/lib/cn';

interface ImageCardMenuProps {
  active: boolean;
  onClose: () => void;
}

const ImageCardMenu = ({ active, onClose }: ImageCardMenuProps) => {
  const { visible } = useModalFadeAnimation(active);

  return (
    visible && (
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={cn(
          'bg-sub-background border-text/25 absolute right-1 z-50 max-h-80 w-40 overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          active ? 'animate-fadeIn' : 'animate-fadeOut'
        )}
      >
        <div className="cursor-default rounded-sm px-2 py-1.5 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-100/50">
          사진 변경
        </div>
        <div className="cursor-default rounded-sm px-2 py-1.5 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-100/50">
          사진 삭제
        </div>
      </div>
    )
  );
};

export default ImageCardMenu;
