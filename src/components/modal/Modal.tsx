import { X } from 'lucide-react';
import { PropsWithChildren, useEffect, useState } from 'react';

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
  const [visible, setVisible] = useState<boolean>(active);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (active) {
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        setVisible(false);
      }, 300);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [active]);

  return (
    visible && (
      <Portal>
        <div className="fill-mode-forwards fixed inset-0 z-9999">
          <div
            className={cn(
              'bg-black-background size-full',
              active ? 'animate-fade-in' : 'animate-fade-out'
            )}
            onClick={onClose}
          />
          <div
            className={cn(
              'bg-black-secondary absolute top-1/2 left-1/2 w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 rounded-lg px-4 pt-6 pb-8',
              active ? 'animate-fade-in' : 'animate-fade-out',
              className
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              {title && (
                <span className="text-white-primary text-lg font-semibold">
                  {title}
                </span>
              )}
              <button onClick={onClose}>
                <X />
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
