import { ChangeEvent, useCallback, useState } from "react";

const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>(
  initValue: string
) => {
  const [state, setState] = useState<string>(initValue);

  const changeState = useCallback((e: ChangeEvent<T>) => {
    setState(e.target.value);
  }, []);

  return [state, setState, changeState] as const;
};

export default useInput;
