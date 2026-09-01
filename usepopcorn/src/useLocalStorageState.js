import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, storageKeyName) {
  const [value, setValue] = useState(function () {
    const storedData = localStorage.getItem(storageKeyName);
    return storedData ? JSON.parse(storedData) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(storageKeyName, JSON.stringify(value));
    },
    [value, storageKeyName],
  );
  return [value, setValue];
}
