export function createLogger({ storageKey = "marandu:nexus:logs", maxEntries = 120 } = {}) {
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch {
      return [];
    }
  };

  const write = (entries) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(entries.slice(-maxEntries)));
    } catch {
      // Local storage can be unavailable in restricted browsers.
    }
  };

  const add = (level, message, context = {}) => {
    const entry = {
      level,
      message,
      context,
      date: new Date().toISOString(),
    };
    const entries = [...read(), entry].slice(-maxEntries);
    write(entries);
    return entry;
  };

  return {
    info: (message, context) => add("info", message, context),
    warn: (message, context) => add("warn", message, context),
    error: (message, context) => add("error", message, context),
    list: read,
    clear: () => write([]),
  };
}
