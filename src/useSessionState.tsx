import { useState, useEffect } from "react";

const useSessionState = (key: string) => {
  const [state, setState] = useState(() => {
    const sessionValue = sessionStorage.getItem(key);
    return sessionValue !== null ? JSON.parse(sessionValue) : true;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useSessionState;
