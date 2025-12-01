import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  id?: string;
}

const Portal = ({ children, id = '__next-portal' }: PortalProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.id = id;
    document.body.appendChild(el);
    setContainer(el);

    return () => {
      el.remove();
    };
  }, [id]);

  return container && createPortal(children, container);
};

export default Portal;
