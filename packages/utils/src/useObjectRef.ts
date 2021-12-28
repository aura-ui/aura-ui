/*
All credit here goes to the react-aria team.
This code is taken from a commit that will be included in the next release,
to which it can be removed
See the following issue for more info: https://github.com/adobe/react-spectrum/issues/834
*/

import { MutableRefObject, useRef } from 'react';
import { useLayoutEffect } from '.';

/**
 * Offers an object ref for a given callback ref or an object ref. Especially
 * helfpul when passing forwarded refs (created using `React.forwardRef`) to
 * React Aria Hooks.
 *
 * @param forwardedRef The original ref intended to be used.
 * @returns An object ref that updates the given ref.
 * @see https://reactjs.org/docs/forwarding-refs.html
 */
export function useObjectRef<T>(
  forwardedRef?: ((instance: T | null) => void) | MutableRefObject<T | null> | null
): MutableRefObject<T | null> {
  const objRef = useRef<T>(null);

  /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */
  useLayoutEffect(() => {
    if (!forwardedRef) {
      return;
    }

    if (typeof forwardedRef === 'function') {
      forwardedRef(objRef.current);
    } else {
      forwardedRef.current = objRef.current;
    }
  }, [forwardedRef]);

  return objRef;
}
