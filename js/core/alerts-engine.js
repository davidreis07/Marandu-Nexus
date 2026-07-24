export const AlertsEngine = {
  generate({ empresas, indicadores, evidencias }, helpers) {
    const alerts = [];

    empresas.forEach((empresa) => {
      const compliance = helpers.calculateCompliance(empresa);
      const companyEvidence = evidencias.filter((item) => item.empresaId === empresa.id);
      if (empresa.farol === "Vermelho") alerts.push({ type: "critical", empresaId: empresa.id, title: `${empresa.nome} crítica`, message: "Empresa com baixo desempenho ou pendências relevantes." });
      if (compliance.pending > 0) alerts.push({ type: "warning", empresaId: empresa.id, title: `${empresa.nome} com indicadores pendentes`, message: `${compliance.pending} indicador(es) ainda pendente(s).` });
      if (!companyEvidence.length) alerts.push({ type: "warning", empresaId: empresa.id, title: `${empresa.nome} sem evidências`, message: "Nenhuma evidência vinculada à empresa." });
      if (empresa.score >= 90) alerts.push({ type: "success", empresaId: empresa.id, title: `${empresa.nome} acima de 90%`, message: "Empresa próxima de evolução ou graduação." });
    });

    const requiredPending = indicadores.filter((item) => item.obrigatorio && item.status !== "atendido");
    if (requiredPending.length) {
      alerts.push({ type: "warning", title: "Indicadores obrigatórios pendentes", message: `${requiredPending.length} indicador(es) obrigatórios precisam de atenção.` });
    }

    return alerts;
  },
};
