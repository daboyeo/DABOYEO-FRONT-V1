import { useCallback, KeyboardEvent } from "react";

const ENTER = "Enter" as const;

const useEnter = <T extends HTMLInputElement | HTMLTextAreaElement>(
  func: () => void
) => {
  const enterFunc = useCallback(
    (e: KeyboardEvent<T>) => {
      if (e.key === ENTER) {
        func();
      }
    },
    [func]
  );

  return enterFunc;
};

export default useEnter;
