import { useEffect, useState } from 'react';

function getStorageValue() {
  const saved = localStorage.getItem('COIN_WALLET') as string;
  const initial = JSON.parse(saved);
  return initial || ['bitcoin', 'ethereum', 'klever'];
}

export const useLocalStorage = () => {
  const [value, setValue] = useState(() => {
    return getStorageValue();
  });

  useEffect(() => {
    localStorage.setItem('COIN_WALLET', JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
