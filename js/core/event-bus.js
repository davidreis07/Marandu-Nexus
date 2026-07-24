export function createEventBus() {
  const listeners = new Map();

  return {
    on(eventName, handler) {
      const handlers = listeners.get(eventName) || new Set();
      handlers.add(handler);
      listeners.set(eventName, handlers);
      return () => handlers.delete(handler);
    },

    emit(eventName, payload) {
      const handlers = listeners.get(eventName) || new Set();
      handlers.forEach((handler) => handler(payload));
      const allHandlers = listeners.get("*") || new Set();
      allHandlers.forEach((handler) => handler({ eventName, payload }));
    },
  };
}
