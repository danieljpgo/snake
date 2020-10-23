import { useEffect, useRef } from 'react'

export const useKey = (callback: (event: KeyboardEvent) => void, keys: ReadonlyArray<string>) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (keys.find((key) => key === event.key)) {
        callbackRef.current(event);
      }
    }
    document.addEventListener('keypress', handle);

    return () => (
      document.removeEventListener('keypress', handle)
    );
  }, [keys]);
};