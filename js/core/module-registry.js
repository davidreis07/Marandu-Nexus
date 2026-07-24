export function createModuleRegistry({ modules = [], activation = {} } = {}) {
  const moduleMap = new Map();

  modules.forEach((moduleDefinition) => {
    const active = activation[moduleDefinition.id] ?? moduleDefinition.active ?? true;
    moduleMap.set(moduleDefinition.id, { ...moduleDefinition, active });
  });

  const list = () => [...moduleMap.values()].sort((a, b) => a.order - b.order);

  return {
    list,
    active: () => list().filter((moduleDefinition) => moduleDefinition.active),
    inactive: () => list().filter((moduleDefinition) => !moduleDefinition.active),
    get: (id) => moduleMap.get(id),
    isActive: (id) => Boolean(moduleMap.get(id)?.active),
    setActive(id, active) {
      const current = moduleMap.get(id);
      if (!current) return null;
      const next = { ...current, active };
      moduleMap.set(id, next);
      return next;
    },
  };
}
