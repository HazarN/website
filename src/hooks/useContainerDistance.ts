import { useEffect, useState } from 'react';

export function useContainerDistance(ref: React.RefObject<HTMLElement | null>) {
  const [containerDistance, setContainerDistance] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const update = () => {
      setWidth(window.innerWidth);

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    window.addEventListener('resize', update);
    update();

    return () => window.removeEventListener('resize', update);
  }, [ref]);

  return [containerDistance, width];
}
