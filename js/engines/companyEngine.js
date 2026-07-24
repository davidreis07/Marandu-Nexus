export const CompanyEngine = {
  getById(empresas, id) {
    return empresas.find((empresa) => empresa.id === Number(id));
  },

  filterByStatus(empresas, status) {
    return status ? empresas.filter((empresa) => empresa.status === status) : empresas;
  },

  getReady(empresas) {
    return empresas.filter((empresa) => empresa.prontaEvolucao);
  },

  getRisk(empresas) {
    return empresas.filter((empresa) => empresa.farol !== "Verde");
  },

  getTrlAverage(empresas) {
    const total = empresas.reduce((sum, empresa) => sum + empresa.trl, 0);
    return (total / Math.max(1, empresas.length)).toFixed(1);
  },

  getFarolCounts(empresas) {
    return ["Verde", "Amarelo", "Vermelho"].map((farol) => [
      farol,
      empresas.filter((empresa) => empresa.farol === farol).length,
    ]);
  },
};
