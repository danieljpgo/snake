import { useEffect, useRef } from 'react'

const useKey = (callback: (event: DocumentEventMap['keypress']) => void, key: string) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handle = (event: DocumentEventMap['keypress']) => {
      if (event.key === key) {
        callbackRef.current(event);
      }
    }

    document.addEventListener('keypress', handle);
    return () => (
      document.removeEventListener('keypress', handle)
    );
  }, [key]);
};

export default useKey;