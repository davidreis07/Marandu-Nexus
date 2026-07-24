export function createThemeManager(config = {}) {
  const apply = () => {
    const theme = config.tema || {};
    const root = document.documentElement;
    if (theme.corPrimaria) root.style.setProperty("--orange", theme.corPrimaria);
    if (theme.corFundo) root.style.setProperty("--bg", theme.corFundo);
    if (theme.corTexto) root.style.setProperty("--ink", theme.corTexto);
    return theme;
  };

  return { apply };
}
