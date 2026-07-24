export const TrlEngine = {
  evaluateCompany(empresa, compliance, evidencias) {
    const approvedEvidence = evidencias.filter((item) => ["Aprovada", "Validada"].includes(item.status)).length;
    const blocked = compliance.pending > 0 || approvedEvidence === 0;
    return {
      current: empresa.trl,
      next: Math.min(9, empresa.trl + 1),
      blocked,
      status: blocked ? "TRL bloqueado" : "Apta para evolução",
      reasons: [
        compliance.pending > 0 ? "Indicadores obrigatórios pendentes" : null,
        approvedEvidence === 0 ? "Sem evidências aprovadas" : null,
      ].filter(Boolean),
    };
  },

  distribution(empresas) {
    return Array.from({ length: 9 }, (_, idx) => {
      const trl = idx + 1;
      return { trl, total: empresas.filter((empresa) => empresa.trl === trl).length };
    });
  },
};
