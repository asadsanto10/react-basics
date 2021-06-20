import { useCallback, useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => {
  const [onSmall, setOnSmall] = useState(false);

  const checkScreeSize = useCallback(() => {
    setOnSmall(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    checkScreeSize();
    window.addEventListener('resize', checkScreeSize);

    return () => {
      window.remove('resize', checkScreeSize);
    };
  }, [checkScreeSize]);

  return onSmall;
};

export default useWindowWidth;
