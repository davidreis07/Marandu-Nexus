export function createRouter({ registry, defaultRoute = "visao", logger } = {}) {
  let currentRoute = registry?.isActive(defaultRoute) ? defaultRoute : registry?.active()[0]?.id || defaultRoute;

  return {
    current: () => currentRoute,
    navigate(routeId) {
      if (!registry?.isActive(routeId)) {
        logger?.warn("Tentativa de acesso a modulo inativo ou inexistente.", { routeId });
        return currentRoute;
      }
      const previousRoute = currentRoute;
      currentRoute = routeId;
      logger?.info("Navegacao realizada.", { from: previousRoute, to: currentRoute });
      return currentRoute;
    },
  };
}
