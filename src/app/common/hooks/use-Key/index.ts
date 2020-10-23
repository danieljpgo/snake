import { useEffect, useRef } from 'react'

const useKey = (callback: (event: DocumentEventMap['keypress']) => void, keys: ReadonlyArray<string>) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  console.log(keys)

  useEffect(() => {
    const handle = (event: DocumentEventMap['keypress']) => {
      if (keys.find((key) => key === event.key)) {
        callbackRef.current(event);
      }
    }

    console.log('inside useeffect')

    document.addEventListener('keypress', handle);
    return () => (
      document.removeEventListener('keypress', handle)
    );
  }, [keys]);
};

export default useKey;