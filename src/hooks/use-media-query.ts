import {useEffect, useState} from 'react';

export function useMediaQuery(queryString: string) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(queryString);

    function onChange() {
      setIsMatch(mediaQuery.matches);
    }

    mediaQuery.addEventListener('change', onChange, false);
    onChange();

    return () => mediaQuery.removeEventListener('change', onChange, false);
  }, [queryString]);

  return isMatch;
}
