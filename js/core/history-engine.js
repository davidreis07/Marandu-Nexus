export const HistoryEngine = {
  createEntry(action, payload = {}) {
    return {
      id: `HIS-${Date.now()}`,
      action,
      payload,
      createdAt: new Date().toISOString(),
    };
  },

  append(history, action, payload) {
    return [this.createEntry(action, payload), ...history];
  },
};
