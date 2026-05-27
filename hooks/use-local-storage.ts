"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        setValue(JSON.parse(item) as T);
      }
    } catch {
      setValue(initialValue);
    }
  }, [initialValue, key]);

  useEffect(() => {
    if (!mounted) return;

    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, mounted, value]);

  return [value, setValue] as const;
}
