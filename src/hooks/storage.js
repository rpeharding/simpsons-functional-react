import { useState, useEffect } from "react";

export function useLocalStorage({ key, initialValue = "" }) {
  // gets initial data from disk, if does not exist, then use initial value
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  // detect if anything changes, if it does then store on disk
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  // expose methods
  return [state, setState];
}
