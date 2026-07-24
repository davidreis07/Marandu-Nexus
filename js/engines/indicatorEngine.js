export const IndicatorEngine = {
  getLevels(indicadores) {
    return [...new Set(indicadores.map((item) => item.nivelCerne))];
  },

  getAudiences(indicadores) {
    return [...new Set(indicadores.map((item) => item.publico))];
  },

  filter(indicadores, filters = {}) {
    const query = (filters.query || "").toLowerCase();
    const level = filters.level || "";
    const audience = filters.audience || "";

    return indicadores.filter((item) => {
      const haystack = [
        item.id,
        item.nome,
        item.publico,
        item.nivelCerne,
        item.processo,
        item.pratica,
        item.categoria,
        item.periodicidade,
      ].join(" ").toLowerCase();

      return (!query || haystack.includes(query)) &&
        (!level || item.nivelCerne === level) &&
        (!audience || item.publico === audience);
    });
  },

  summarize(indicadores) {
    const levels = this.getLevels(indicadores);
    const incubadora = indicadores.filter((item) => ["Incubadora", "Ambos"].includes(item.publico)).length;
    const empresas = indicadores.filter((item) => ["Empresas", "Empresas graduadas", "Ambos"].includes(item.publico)).length;

    return [
      ["Total CERNE", indicadores.length, "Indicadores do catálogo"],
      ["Incubadora", incubadora, "Gestão institucional"],
      ["Empresas", empresas, "Acompanhamento da carteira"],
      ...levels.map((level) => [
        level,
        indicadores.filter((item) => item.nivelCerne === level).length,
        "Indicadores vinculados a este nível CERNE.",
      ]),
    ];
  },
};
