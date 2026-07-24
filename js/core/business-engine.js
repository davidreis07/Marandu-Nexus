import { AlertsEngine } from "./alerts-engine.js";
import { DashboardEngine } from "./dashboard-engine.js";
import { EvidenceEngine } from "./evidence-engine.js";
import { HistoryEngine } from "./history-engine.js";
import { IndicatorEngine } from "./indicator-engine.js";
import { TrlEngine } from "./trl-engine.js";
import { createEventBus } from "./event-bus.js";

export function createBusinessEngine(initialState) {
  let state = structuredClone(initialState);
  let history = [];
  const bus = createEventBus();

  const helpers = {
    calculateCompliance(empresa) {
      return IndicatorEngine.calculateCompliance(state.indicadores, empresa);
    },
  };

  function emitChange(action, payload = {}) {
    history = HistoryEngine.append(history, action, payload);
    bus.emit(action, payload);
    bus.emit("state:changed", getSnapshot());
  }

  function getSnapshot() {
    return {
      ...state,
      history,
      alerts: AlertsEngine.generate(state, helpers),
      dashboard: DashboardEngine.calculate(state, helpers),
    };
  }

  return {
    on: bus.on,

    getState: getSnapshot,

    getDashboardKpis() {
      return DashboardEngine.kpis(DashboardEngine.calculate(state, helpers));
    },

    getAlerts() {
      return AlertsEngine.generate(state, helpers);
    },

    getEmpresas() {
      return state.empresas.map((empresa) => ({
        ...empresa,
        compliance: IndicatorEngine.calculateCompliance(state.indicadores, empresa),
        trlStatus: TrlEngine.evaluateCompany(empresa, IndicatorEngine.calculateCompliance(state.indicadores, empresa), EvidenceEngine.byCompany(state.evidencias, empresa.id)),
      }));
    },

    getEmpresaById(id) {
      return this.getEmpresas().find((empresa) => empresa.id === Number(id));
    },

    getIndicadores(filters = {}) {
      return IndicatorEngine.filter(state.indicadores, filters);
    },

    getIndicatorSummary() {
      return IndicatorEngine.summarize(state.indicadores);
    },

    getIndicatorLevels() {
      return IndicatorEngine.getLevels(state.indicadores);
    },

    getIndicatorAudiences() {
      return IndicatorEngine.getAudiences(state.indicadores);
    },

    getCompanyIndicators(empresa) {
      return IndicatorEngine.getCompanyIndicators(state.indicadores, empresa);
    },

    getEvidencias() {
      return state.evidencias;
    },

    getDocumentos() {
      return state.documentos;
    },

    getTrlDistribution() {
      return TrlEngine.distribution(state.empresas);
    },

    registerEvidence(evidencia) {
      const validation = EvidenceEngine.validateEvidenceShape(evidencia);
      if (!validation.valid) return { ok: false, error: validation.reason };
      state = {
        ...state,
        evidencias: [evidencia, ...state.evidencias],
      };
      emitChange("evidence:registered", evidencia);
      return { ok: true };
    },

    updateCompany(id, changes) {
      const empresa = state.empresas.find((item) => item.id === Number(id));
      if (!empresa) return { ok: false, error: "Empresa não encontrada." };
      state = {
        ...state,
        empresas: state.empresas.map((item) => item.id === Number(id) ? { ...item, ...changes } : item),
      };
      emitChange("company:updated", { id, changes });
      return { ok: true };
    },
  };
}
