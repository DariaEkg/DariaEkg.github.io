import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Запускаем таймер на delay миллисекунд
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Очистка таймера при изменении value или delay
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
