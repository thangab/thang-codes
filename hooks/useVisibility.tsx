import { useEffect, useState, RefObject } from 'react';

interface UseVisibilityProps {
  rootRef: RefObject<HTMLElement | null>;
}

const useVisibility = ({ rootRef }: UseVisibilityProps) => {
  const [visibleBlock, setVisibleBlock] = useState<string | null>(null);

  useEffect(() => {
    const blocks = rootRef.current?.querySelectorAll('section');
    if (!blocks) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBlock(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    blocks.forEach((block) => {
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, [rootRef]);

  return visibleBlock;
};

export default useVisibility;
