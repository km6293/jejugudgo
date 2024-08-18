export const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const saveToSessionStorage = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSessionStorage = <T>(key: string): T | null => {
  const value = sessionStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};

export const removeFromSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
