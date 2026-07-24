const validStatuses = ["Criada", "Pendente", "Em análise", "Aprovada", "Rejeitada", "Validada"];

export const EvidenceEngine = {
  validateEvidenceShape(evidencia) {
    if (!evidencia.indicadorId) {
      return { valid: false, reason: "Toda evidência precisa estar vinculada a um indicador." };
    }
    if (!validStatuses.includes(evidencia.status)) {
      return { valid: false, reason: "Status de evidência inválido." };
    }
    return { valid: true };
  },

  byCompany(evidencias, empresaId) {
    return evidencias.filter((item) => item.empresaId === Number(empresaId));
  },

  byIndicator(evidencias, indicadorId) {
    return evidencias.filter((item) => item.indicadorId === indicadorId);
  },

  byCategory(evidencias, tipo) {
    return evidencias.filter((item) => item.tipo === tipo);
  },

  approved(evidencias) {
    return evidencias.filter((item) => ["Aprovada", "Validada"].includes(item.status));
  },
};
