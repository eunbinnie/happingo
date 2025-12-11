'use client';

import { X } from 'lucide-react';
import { PropsWithChildren } from 'react';

import useModalFadeAnimation from '@/hooks/useModalFadeAnimation';
import { cn } from '@/lib/cn';

import Portal from './Portal';

interface IModalProps extends PropsWithChildren {
  active: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}

const Modal = ({
  active,
  children,
  onClose,
  title,
  className,
}: IModalProps) => {
  const { visible } = useModalFadeAnimation(active);

  return (
    visible && (
      <Portal>
        <div className="fill-mode-forwards fixed inset-0 z-9999">
          <div
            className={cn(
              'size-full bg-black/50',
              active ? 'animate-fadeIn' : 'animate-fadeOut'
            )}
            onClick={onClose}
          />
          <div
            className={cn(
              'bg-background absolute top-1/2 left-1/2 max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 rounded-lg p-6',
              'dark:border-sub-background dark:border',
              active ? 'animate-fadeIn' : 'animate-fadeOut',
              className
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              {title && (
                <span className="text-white-primary text-lg font-semibold">
                  {title}
                </span>
              )}
              <button onClick={onClose} className="absolute top-4 right-4">
                <X size={16} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};

export default Modal;
