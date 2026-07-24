export const IndicadorService = {
  list(engine, filters = {}) {
    return engine.getIndicadores(filters);
  },

  summary(engine) {
    return engine.getIndicatorSummary();
  },

  levels(engine) {
    return engine.getIndicatorLevels();
  },

  audiences(engine) {
    return engine.getIndicatorAudiences();
  },
};
