import { icon } from "./components/icons.js";
import { CompanyEngine } from "./engines/companyEngine.js";
import { IndicatorEngine } from "./engines/indicatorEngine.js";
import { DataService } from "./services/dataService.js";
import { DashboardService } from "./services/dashboardService.js";

let state = {
  empresas: [],
  indicadores: [],
  evidencias: [],
  documentos: [],
  configuracoes: {},
};

const siteMap = [
  ["Visão e gestão", "dashboard", ["Dashboard Executivo", "Dashboard Operacional", "Alertas institucionais", "Prioridades da diretoria"]],
  ["Empresas", "building", ["Carteira de empresas", "Perfil 360", "Acompanhamento", "Diagnóstico", "Histórico"]],
  ["Metodologia e evolução", "route", ["CERNE", "TRL", "Motor de regras", "Checklists", "Validações"]],
  ["Operação", "kanban", ["Planos de ação", "Mentorias", "Agenda", "Pendências", "Responsáveis"]],
  ["Conhecimento e evidências", "folder", ["Documentação", "Biblioteca de modelos", "Evidências", "Validade documental"]],
  ["Inteligência", "powerbi", ["Relatórios", "Power BI", "Indicadores", "Auditoria", "Exportações"]],
  ["Administração", "settings", ["Usuários", "Permissões", "Configurações", "Cadastros base", "Parâmetros"]],
];

const roadmap = [
  ["Fase 1", "Conceito e validação", ["Proposta visual", "Site map", "Fluxos principais", "Validação com a gestora"]],
  ["Fase 2", "Protótipo detalhado", ["Telas por perfil", "Jornadas de uso", "Componentes de interface", "Simulações de decisão"]],
  ["Fase 3", "MVP operacional", ["Cadastro de empresas", "Evidências", "Planos de ação", "Indicadores básicos"]],
  ["Fase 4", "Motor de regras", ["Requisitos configuráveis", "Checklist automático", "Bloqueios e liberações", "Auditoria"]],
  ["Fase 5", "BI e relatórios", ["Dataset oficial", "Power BI incorporado", "Relatórios executivos", "Exportações"]],
  ["Fase 6", "Escala SaaS", ["Multi-incubadora", "Perfis avançados", "Integrações", "Produto comercial"]],
];

function farolClass(farol) {
  return farol === "Verde" ? "green" : farol === "Amarelo" ? "yellow" : "red";
}

function statusClass(status) {
  if (["Validada", "Adequado", "Graduada", "atendido"].includes(status)) return "green";
  if (["Em análise", "Atenção", "Incubada", "em análise", "Ativa"].includes(status)) return "yellow";
  if (["Pendente", "Crítico", "Pré-incubada", "pendente"].includes(status)) return "red";
  return "gray";
}

function mountIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
  });
}

function setView(view) {
  document.querySelectorAll(".view").forEach((el) => el.classList.toggle("active", el.id === view));
  document.querySelectorAll(".menu button").forEach((btn) => btn.classList.toggle("active", btn.dataset.view === view));
  document.querySelector(".sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toast(text) {
  const el = document.getElementById("toast");
  el.textContent = text;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1800);
}

function renderDashboard() {
  document.getElementById("kpiGrid").innerHTML = DashboardService.getKpis(state).map(([label, value, hint]) => `
    <div class="kpi-card"><span>${label}</span><strong>${value}</strong><small>${hint}</small></div>
  `).join("");

  const months = [["Fev", 42], ["Mar", 55], ["Abr", 61], ["Mai", 73], ["Jun", 78], ["Jul", 86]];
  document.getElementById("portfolioChart").innerHTML = months.map(([m, v]) => `
    <div class="chart-column"><i style="height:${v * 2}px"></i><b>${v}%</b><span>${m}</span></div>
  `).join("");

  document.getElementById("farolLegend").innerHTML = CompanyEngine.getFarolCounts(state.empresas).map(([label, value]) => `
    <div class="legend-row"><span><i class="dot ${farolClass(label)}"></i>${label}</span><strong>${value}</strong></div>
  `).join("");

  document.getElementById("readyList").innerHTML = CompanyEngine.getReady(state.empresas).slice(0, 6).map((c) => `
    <div class="list-item"><div><b>${c.nome}</b><span>TRL ${c.trl} para TRL ${c.proximoTrl}</span></div><span class="badge green">Apta</span></div>
  `).join("");

  document.getElementById("riskList").innerHTML = CompanyEngine.getRisk(state.empresas).slice(0, 6).map((c) => `
    <div class="list-item"><div><b>${c.nome}</b><span>${c.area} · responsável ${c.responsavel}</span></div><span class="badge ${farolClass(c.farol)}">${c.farol}</span></div>
  `).join("");
}

function renderSiteMap() {
  document.getElementById("siteMapGrid").innerHTML = siteMap.map(([title, iconName, items]) => `
    <article class="site-card"><h2>${icon(iconName)}${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>
  `).join("");
}

function renderOperations() {
  const operations = [
    ["Validar evidências", "Documentos enviados pelas empresas aguardando análise técnica."],
    ["Acompanhar prazos", "Planos de ação com vencimento na semana atual."],
    ["Preparar mentorias", "Reuniões previstas com pauta e histórico da empresa."],
    ["Revisar indicadores", "Metas e resultados que precisam de atualização."],
  ];
  document.getElementById("operationsGrid").innerHTML = operations.map(([title, text]) => `
    <div class="operation-card"><b>${title}</b><span>${text}</span></div>
  `).join("");

  document.getElementById("dailyAlerts").innerHTML = CompanyEngine.getRisk(state.empresas).slice(0, 3).map((c) => `
    <div class="list-item"><div><b>${c.nome}</b><span>Revisar checklist e evidências obrigatórias</span></div><span class="badge ${farolClass(c.farol)}">${c.farol}</span></div>
  `).join("");
}

function renderCompanies() {
  const filter = document.getElementById("companyFilter").value;
  const rows = CompanyEngine.filterByStatus(state.empresas, filter);
  document.getElementById("companyRows").innerHTML = rows.map((c) => `
    <tr>
      <td><div class="company-name"><span class="avatar">${c.nome.slice(0, 2).toUpperCase()}</span><b>${c.nome}</b></div></td>
      <td>${c.responsavel}</td><td><span class="badge orange">TRL ${c.trl}</span></td><td>${c.area}</td>
      <td><span class="badge ${statusClass(c.status)}">${c.status}</span></td>
      <td><span class="badge ${farolClass(c.farol)}">${c.farol}</span></td>
      <td><button class="ghost-button" data-company="${c.id}" type="button">Ver Perfil</button></td>
    </tr>
  `).join("");
}

function openCompany(id) {
  const c = CompanyEngine.getById(state.empresas, id);
  const companyIndicators = c.indicadores.map((indicatorId) => state.indicadores.find((i) => i.id === indicatorId)).filter(Boolean);
  const checks = [
    ["Indicador obrigatório", c.score > 65],
    ["Documento obrigatório", c.score > 70],
    ["Evidência aprovada", c.score > 80],
    ["Validação do gestor", c.prontaEvolucao],
  ];

  document.getElementById("companyDetail").innerHTML = `
    <div class="detail-head"><span class="eyebrow">Página da empresa</span><h1>${c.nome}</h1><p>${c.area} · Responsável ${c.responsavel}</p></div>
    <div class="detail-grid">
      <div class="mini-card"><span>Status</span><strong>${c.status}</strong></div>
      <div class="mini-card"><span>TRL atual</span><strong>${c.trl}</strong></div>
      <div class="mini-card"><span>Próximo TRL</span><strong>${c.proximoTrl}</strong></div>
      <div class="mini-card"><span>Score</span><strong>${c.score}%</strong></div>
    </div>
    <article class="panel"><div class="panel-title"><h2>Resumo</h2><span>${c.ciclo} · ${c.trilha}</span></div><p>${c.descricao}</p></article>
    <article class="panel"><div class="panel-title"><h2>Checklist obrigatório</h2><span>${c.prontaEvolucao ? "Completo" : "Em evolução"}</span></div>
      <div class="progress"><i style="width:${c.score}%"></i></div>
      <div class="checklist">${checks.map(([label, done]) => `<div class="check-row ${done ? "done" : "pending"}"><span>${done ? "☑" : "☐"}</span><b>${label}</b></div>`).join("")}</div>
    </article>
    <article class="panel"><div class="panel-title"><h2>Indicadores CERNE vinculados</h2><span>Motor de Indicadores</span></div>
      <div class="compact-list">${companyIndicators.map((i) => `<div class="list-item"><div><b>${i.id} · ${i.nome}</b><span>${i.processo}</span></div><span class="badge ${statusClass(i.status)}">${i.status}</span></div>`).join("")}</div>
    </article>
    <article class="panel"><div class="panel-title"><h2>Histórico</h2><span>Registros recentes</span></div>
      <div class="timeline">${c.historico.map((h) => `<div class="timeline-item"><b>${h.data}</b><div class="timeline-card">${h.evento}</div></div>`).join("")}</div>
    </article>
  `;
  document.getElementById("companyDrawer").classList.add("open");
  document.getElementById("companyDrawer").setAttribute("aria-hidden", "false");
}

function renderJourney() {
  const steps = [
    ["Entrada", "Cadastro da empresa, dados iniciais e responsável técnico.", "done"],
    ["Diagnóstico", "Avaliação de maturidade, necessidades e riscos.", "done"],
    ["Planejamento", "Plano de incubação, metas e documentos esperados.", "active"],
    ["Acompanhamento", "Mentorias, indicadores, evidências e planos de ação.", "active"],
    ["Avaliação", "Análise de resultados e validações por ciclo.", ""],
    ["Evolução", "Liberação de TRL, maturidade e novas metas.", ""],
    ["Conclusão", "Graduação, relatório final e histórico institucional.", ""],
  ];
  document.getElementById("journey").innerHTML = steps.map(([title, text, cls]) => `
    <div class="journey-step ${cls}"><b>${title}</b><span>${text}</span></div>
  `).join("");
}

function renderDiagnosis() {
  const questions = [
    ["Maturidade do negócio", "Modelo de negócio, clientes, receita, canais e operação."],
    ["Tecnologia e TRL", "Estágio tecnológico, validações, protótipos e próximos requisitos."],
    ["Gestão e equipe", "Papéis, governança, capacidade de execução e lacunas."],
    ["Necessidades da incubação", "Mentorias, documentos, conexões, mercado e financiamento."],
  ];
  document.getElementById("diagnosisGrid").innerHTML = questions.map(([title, text], idx) => `
    <div class="diagnosis-card"><strong>${title}</strong><p>${text}</p><div class="progress"><i style="width:${58 + idx * 9}%"></i></div></div>
  `).join("");
  document.getElementById("diagnosisOutputs").innerHTML = ["Parecer técnico", "Prioridades", "Plano de ação", "Checklist inicial"].map((title) => `
    <div class="list-item"><div><b>${title}</b><span>Saída planejada para a versão MVP.</span></div></div>
  `).join("");
}

function renderIndicators() {
  const levelFilter = document.getElementById("indicatorLevel");
  const audienceFilter = document.getElementById("indicatorAudience");
  const searchInput = document.getElementById("indicatorSearch");
  const levels = IndicatorEngine.getLevels(state.indicadores);
  const audiences = IndicatorEngine.getAudiences(state.indicadores);

  if (levelFilter && levelFilter.options.length === 1) {
    levelFilter.insertAdjacentHTML("beforeend", levels.map((level) => `<option>${level}</option>`).join(""));
  }
  if (audienceFilter && audienceFilter.options.length === 1) {
    audienceFilter.insertAdjacentHTML("beforeend", audiences.map((audience) => `<option>${audience}</option>`).join(""));
  }

  document.getElementById("indicatorCards").innerHTML = IndicatorEngine.summarize(state.indicadores).map(([name, value, hint]) => `
    <article class="indicator-card"><div class="panel-title"><h2>${name}</h2><span class="badge orange">${value}</span></div><p>${hint}</p></article>
  `).join("");

  const filtered = IndicatorEngine.filter(state.indicadores, {
    query: searchInput?.value || "",
    level: levelFilter?.value || "",
    audience: audienceFilter?.value || "",
  });

  document.getElementById("indicatorRows").innerHTML = filtered.map((item) => `
    <tr>
      <td><b>${item.id}</b></td>
      <td><b>${item.nome}</b><br><small>${item.descricao}</small></td>
      <td><span class="badge gray">${item.publico}</span></td>
      <td><span class="badge orange">${item.nivelCerne}</span></td>
      <td>${item.processo}</td><td>${item.pratica}</td><td>${item.categoria}</td><td>${item.periodicidade}</td>
    </tr>
  `).join("");
}

function renderTrl() {
  document.getElementById("trlRoadmap").innerHTML = Array.from({ length: 9 }, (_, i) => {
    const trl = i + 1;
    const count = state.empresas.filter((c) => c.trl === trl).length;
    const cls = trl < 5 ? "done" : trl < 8 ? "current" : "locked";
    return `<div class="trl-step ${cls}"><strong>TRL ${trl}</strong><span>${count} empresa(s)</span><p>${trl < 4 ? "Conceito e prova técnica." : trl < 7 ? "Validação e piloto." : "Mercado e escala."}</p></div>`;
  }).join("");
}

function renderEvidences() {
  document.getElementById("evidenceRows").innerHTML = state.evidencias.map((e) => {
    const empresa = state.empresas.find((c) => c.id === e.empresaId);
    return `<tr><td><b>${e.titulo}</b><br><small>${e.indicadorId}</small></td><td>${empresa?.nome || "-"}</td><td>${e.data}</td><td>${e.responsavel}</td><td><span class="badge ${statusClass(e.status)}">${e.status}</span></td><td><button class="ghost-button" type="button" data-toast="Visualização simulada">Visualizar</button> <button class="ghost-button" type="button" data-toast="Download simulado">Download</button></td></tr>`;
  }).join("");
}

function renderCards() {
  document.getElementById("documentCards").innerHTML = state.documentos.map((d) => `
    <article class="doc-card">${icon("folder")}<h2>${d.nome}</h2><p>Modelo configurável de categoria ${d.categoria.toLowerCase()}.</p><button class="ghost-button" data-toast="Modelo aberto" type="button">Abrir modelo</button></article>
  `).join("");
  document.getElementById("reportCards").innerHTML = ["Relatório executivo mensal", "Auditoria CERNE", "Carteira de empresas", "Evolução TRL", "Impacto regional", "Pendências por responsável"].map((r) => `
    <article class="report-card">${icon("report")}<h2>${r}</h2><p>Relatório preparado para tomada de decisão.</p><button class="ghost-button" data-toast="Relatório gerado" type="button">Gerar</button></article>
  `).join("");
  document.getElementById("settingsGrid").innerHTML = ["TRL", "Indicadores", "Documentos", "Tipos de evidência", "Áreas", "Usuários"].map((s) => `
    <article class="setting-card">${icon("settings")}<h2>${s}</h2><p>Cadastro administrativo para manutenção sem alterar código.</p><button class="ghost-button" data-toast="Cadastro aberto" type="button">Configurar</button></article>
  `).join("");
}

function renderKanban() {
  const groups = {
    "A Fazer": ["Enviar relatório técnico", "Anexar contrato piloto", "Revisar documentação de PI"],
    "Em andamento": ["Validar roadmap", "Atualizar plano financeiro"],
    "Concluído": ["Registrar mentoria", "Aprovar pitch deck"],
  };
  document.getElementById("kanban").innerHTML = Object.entries(groups).map(([col, tasks]) => `
    <section class="kanban-col"><h2>${col}<span>${tasks.length}</span></h2>${tasks.map((t) => `<div class="task-card"><b>${t}</b><p>Responsável definido pelo motor de regras.</p></div>`).join("")}</section>
  `).join("");
}

function renderMentoring() {
  document.getElementById("calendar").innerHTML = Array.from({ length: 21 }, (_, i) => `<div class="day ${[3, 8, 15].includes(i) ? "active" : ""}"><b>${i + 1}</b><span>${[3, 8, 15].includes(i) ? "Mentoria" : ""}</span></div>`).join("");
  document.getElementById("mentoringList").innerHTML = state.empresas.slice(0, 3).map((empresa) => `<div class="list-item"><div><b>${empresa.nome} com mentor especialista</b><span>Agenda confirmada</span></div><span class="badge orange">Hoje</span></div>`).join("");
}

function renderAudit() {
  const items = [
    ["22/07/2026", "Evidência técnica aprovada e vinculada ao indicador CERNE."],
    ["21/07/2026", "Solicitada nova evidência financeira para empresa incubada."],
    ["19/07/2026", "Sistema marcou empresa como crítica por pendência documental."],
    ["18/07/2026", "Diretoria simulou liberação de evolução para próximo TRL."],
  ];
  document.getElementById("auditTimeline").innerHTML = items.map(([date, text]) => `<div class="timeline-item"><b>${date}</b><div class="timeline-card">${text}</div></div>`).join("");
}

function renderProductRoadmap() {
  document.getElementById("roadmapGrid").innerHTML = roadmap.map(([phase, title, items]) => `
    <article class="roadmap-card"><span>${phase}</span><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>
  `).join("");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const menuButton = event.target.closest("[data-view]");
    const targetButton = event.target.closest("[data-view-target]");
    const companyButton = event.target.closest("[data-company]");
    const closeDrawer = event.target.closest("[data-close-drawer]");
    const toastButton = event.target.closest("[data-toast]");
    if (menuButton) setView(menuButton.dataset.view);
    if (targetButton) setView(targetButton.dataset.viewTarget);
    if (companyButton) openCompany(companyButton.dataset.company);
    if (closeDrawer) {
      document.getElementById("companyDrawer").classList.remove("open");
      document.getElementById("companyDrawer").setAttribute("aria-hidden", "true");
    }
    if (toastButton) toast(toastButton.dataset.toast);
  });

  document.getElementById("mobileMenu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
  document.getElementById("companyFilter").addEventListener("change", renderCompanies);
  document.getElementById("indicatorSearch")?.addEventListener("input", renderIndicators);
  document.getElementById("indicatorLevel")?.addEventListener("change", renderIndicators);
  document.getElementById("indicatorAudience")?.addEventListener("change", renderIndicators);
  document.getElementById("newCompany").addEventListener("click", () => toast("Cadastro de empresa simulado"));
  document.getElementById("globalSearch").addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    if (value.length > 2) toast(`Pesquisa simulada: ${value}`);
  });
}

function renderAll() {
  mountIcons();
  renderDashboard();
  renderSiteMap();
  renderOperations();
  renderCompanies();
  renderJourney();
  renderDiagnosis();
  renderIndicators();
  renderTrl();
  renderEvidences();
  renderCards();
  renderKanban();
  renderMentoring();
  renderAudit();
  renderProductRoadmap();
}

async function init() {
  try {
    state = await DataService.loadAll();
    bindEvents();
    renderAll();
  } catch (error) {
    console.error(error);
    document.querySelector("main").insertAdjacentHTML("afterbegin", `
      <div class="panel"><strong>Não foi possível carregar os arquivos JSON.</strong><p>Abra o protótipo por um servidor local para habilitar o carregamento de dados.</p></div>
    `);
  }
}

init();
