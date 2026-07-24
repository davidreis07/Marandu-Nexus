import { createLogger } from "./logger.js";
import { createModuleRegistry } from "./module-registry.js";
import { createNotificationCenter } from "./notification-center.js";
import { createRouter } from "./router.js";
import { createThemeManager } from "./theme-manager.js";

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Nao foi possivel carregar ${path}`);
    return response.json();
  } catch {
    return fallback;
  }
}

export async function createPlatformCore({ modules = [] } = {}) {
  const fallback = window.NexusConfig || {};
  const [platformConfig, moduleConfig] = await Promise.all([
    loadJson("config/platform.config.json", fallback.platform || {}),
    loadJson("config/modules.json", fallback.modules || {}),
  ]);
  const logger = createLogger();
  const theme = createThemeManager(platformConfig);
  const registry = createModuleRegistry({
    modules,
    activation: moduleConfig.modulos || {},
  });
  const router = createRouter({ registry, logger });
  const notifications = createNotificationCenter({ logger });

  theme.apply();
  logger.info("Core da plataforma inicializado.", {
    sistema: platformConfig.nomeSistema,
    versao: platformConfig.versao,
    modulosAtivos: registry.active().length,
  });

  return {
    config: platformConfig,
    modules: registry,
    router,
    logger,
    notifications,
    getActiveModules: registry.active,
    getInactiveModules: registry.inactive,
    navigate: router.navigate,
    notify: notifications.show,
  };
}
