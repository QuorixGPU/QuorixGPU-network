const cache = new Map();

export function setCache(
  key: string,
  value: unknown
) {
  cache.set(key, value);
}

export function getCache(
  key: string
) {
  return cache.get(key);
}
