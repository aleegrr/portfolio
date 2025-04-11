import { useState, useEffect } from 'react';

export default function useIsInViewport(ref) {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        const getIsInViewPort =
          bottom > 0 &&
          top < (windowHeight - elementVisible || ref.current.clientHeight);

        return setIsInViewport(getIsInViewPort);
      }
      return null;
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, isInViewPort]);

  return isInViewPort;
}
