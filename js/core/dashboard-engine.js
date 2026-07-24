export const DashboardEngine = {
  calculate({ empresas, indicadores, evidencias }, helpers) {
    const companiesAbove90 = empresas.filter((empresa) => helpers.calculateCompliance(empresa).percentage >= 90).length;
    const companiesBelow50 = empresas.filter((empresa) => helpers.calculateCompliance(empresa).percentage < 50).length;
    const companiesWithoutEvidence = empresas.filter((empresa) => !evidencias.some((evidencia) => evidencia.empresaId === empresa.id)).length;
    const trlAverage = (empresas.reduce((sum, empresa) => sum + empresa.trl, 0) / Math.max(1, empresas.length)).toFixed(1);

    return {
      totalEmpresas: empresas.length,
      empresasAtivas: empresas.filter((empresa) => ["Incubada", "Ativa"].includes(empresa.status)).length,
      empresasGraduadas: empresas.filter((empresa) => empresa.status === "Graduada").length,
      empresasPreIncubadas: empresas.filter((empresa) => empresa.status === "Pré-incubada").length,
      empresasCriticas: empresas.filter((empresa) => empresa.farol === "Vermelho").length,
      trlMedio: trlAverage,
      indicadoresConcluidos: indicadores.filter((item) => item.status === "atendido").length,
      indicadoresPendentes: indicadores.filter((item) => item.status !== "atendido").length,
      totalEvidencias: evidencias.length,
      empresasAcima90: companiesAbove90,
      empresasAbaixo50: companiesBelow50,
      empresasSemEvidencias: companiesWithoutEvidence,
    };
  },

  kpis(metrics) {
    return [
      ["Empresas", metrics.totalEmpresas, "Empresas cadastradas"],
      ["Bloqueadas", metrics.empresasCriticas, "Ação imediata"],
      ["Graduadas", metrics.empresasGraduadas, "Resultado da incubação"],
      ["Indicadores concluídos", metrics.indicadoresConcluidos, "Motor de Indicadores"],
      ["Evidências", metrics.totalEvidencias, "Vinculadas aos indicadores"],
      ["TRL médio", metrics.trlMedio, "Carteira"],
    ];
  },
};
