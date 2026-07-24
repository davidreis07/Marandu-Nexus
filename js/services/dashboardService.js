import { CompanyEngine } from "../engines/companyEngine.js";

export const DashboardService = {
  getKpis({ empresas, indicadores, evidencias }) {
    return [
      ["Empresas", empresas.length, "Empresas cadastradas"],
      ["Bloqueadas", empresas.filter((empresa) => empresa.farol === "Vermelho").length, "Ação imediata"],
      ["Prontas para evolução", CompanyEngine.getReady(empresas).length, "Validação final"],
      ["Indicadores CERNE", indicadores.length, "Catálogo oficial"],
      ["Evidências pendentes", evidencias.filter((evidencia) => evidencia.status === "Pendente").length, "Auditoria"],
      ["TRL médio", CompanyEngine.getTrlAverage(empresas), "Carteira"],
    ];
  },
};
