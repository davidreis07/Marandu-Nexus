export function createNotificationCenter({ targetId = "toast", duration = 1800, logger } = {}) {
  return {
    show(message, type = "info") {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.textContent = message;
      target.dataset.type = type;
      target.classList.add("show");
      logger?.info("Notificacao exibida.", { message, type });
      setTimeout(() => target.classList.remove("show"), duration);
    },
  };
}
