import { useCallback, useEffect, useState } from 'react';

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

export function writeToStorage(key: string, obj: unknown): void {
  localStorage.setItem(key, JSON.stringify(obj));
}

/**
 * @description Use only within react components
 */
export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [data, setData] = useState(loadFromStorage<T>(key, defaultValue));

  useEffect(() => {
    writeToStorage(key, data);
  });

  return [data, setData] as const;
};
