import { useEffect, useState } from 'react';

const useModalFadeAnimation = (active: boolean) => {
  const [visible, setVisible] = useState<boolean>(active);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null;

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

  return { visible };
};

export default useModalFadeAnimation;
