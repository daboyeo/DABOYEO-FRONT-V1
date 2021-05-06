import { useCallback, useState } from "react";

const useBoolean = (initValue: boolean) => {
  const [state, setState] = useState<boolean>(initValue);
  const changeState = useCallback(() => {
    setState((prev) => !prev);
  }, []);
  return [state, setState, changeState] as const;
};

export default useBoolean;
