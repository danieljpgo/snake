// Thanks Dan Abramov.
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from 'react';

const noop = () => { };

export const useInterval = (callback: () => void, delay: number | null) => {
  const callbackRef = useRef(noop);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const tick = () => callbackRef.current();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
};
