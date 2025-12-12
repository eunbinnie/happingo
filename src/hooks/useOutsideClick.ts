import { MutableRefObject, useEffect } from 'react';

const useOutsideClick = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
