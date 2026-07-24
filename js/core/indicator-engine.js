export const IndicatorEngine = {
  getLevels(indicadores) {
    return [...new Set(indicadores.map((item) => item.nivelCerne))];
  },

  getAudiences(indicadores) {
    return [...new Set(indicadores.map((item) => item.publico))];
  },

  findById(indicadores, id) {
    return indicadores.find((item) => item.id === id);
  },

  getCompanyIndicators(indicadores, empresa) {
    return (empresa.indicadores || [])
      .map((indicatorId) => this.findById(indicadores, indicatorId))
      .filter(Boolean);
  },

  getCompleted(indicadores) {
    return indicadores.filter((item) => item.status === "atendido");
  },

  getPending(indicadores) {
    return indicadores.filter((item) => item.status !== "atendido");
  },

  getRequired(indicadores) {
    return indicadores.filter((item) => item.obrigatorio);
  },

  calculateCompliance(indicadores, empresa) {
    const companyIndicators = this.getCompanyIndicators(indicadores, empresa);
    const required = this.getRequired(companyIndicators);
    const base = required.length ? required : companyIndicators;
    const completed = this.getCompleted(base).length;
    const pending = Math.max(0, base.length - completed);
    const percentage = base.length ? Math.round((completed / base.length) * 100) : 0;

    return {
      total: base.length,
      completed,
      pending,
      percentage,
    };
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
