export const EvidenciaService = {
  list(engine) {
    return engine.getEvidencias();
  },

  create(engine, evidencia) {
    return engine.registerEvidence(evidencia);
  },
};
