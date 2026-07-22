const icons = {
  dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="8" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="15" width="7" height="6" rx="2"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"/><path d="M9 21v-5h3v5"/><path d="M8 7h1M12 7h1M8 11h1M12 11h1M17 9h2a1 1 0 0 1 1 1v11"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-3"/></svg>',
  route: '<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M8 16c3-5 5-7 8-8"/></svg>',
  'file-check': '<svg viewBox="0 0 24 24"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="m9 15 2 2 4-5"/></svg>',
  folder: '<svg viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  kanban: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="5" height="16" rx="2"/><rect x="10" y="4" width="5" height="10" rx="2"/><rect x="17" y="4" width="4" height="13" rx="2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  report: '<svg viewBox="0 0 24 24"><path d="M5 3h14v18H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  powerbi: '<svg viewBox="0 0 24 24"><rect x="4" y="11" width="3" height="8" rx="1"/><rect x="10" y="7" width="3" height="12" rx="1"/><rect x="16" y="3" width="3" height="16" rx="1"/></svg>',
  audit: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z"/><path d="m9 12 2 2 4-5"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a8 8 0 0 0 .1-2l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 5.5h-4l-.4 2.6a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a8 8 0 0 0 .1 2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 2.6h4l.4-2.6a8 8 0 0 0 1.7-1l2.4 1 2-3.4z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>'
};

const companies = [
  { id: 1, name: 'BioAçaí Tech', owner: 'Ana Ribeiro', trl: 7, area: 'Bioeconomia', status: 'Incubada', farol: 'Verde', score: 92, next: 8, ready: true },
  { id: 2, name: 'Delta Saúde', owner: 'Carlos Lima', trl: 5, area: 'Healthtech', status: 'Incubada', farol: 'Amarelo', score: 78, next: 6, ready: false },
  { id: 3, name: 'MapGeo AI', owner: 'Lia Castro', trl: 4, area: 'Govtech', status: 'Pré-incubada', farol: 'Vermelho', score: 51, next: 5, ready: false },
  { id: 4, name: 'Norte Solar', owner: 'Marcos Paiva', trl: 8, area: 'Energia', status: 'Graduada', farol: 'Verde', score: 96, next: 9, ready: true },
  { id: 5, name: 'EducaLab', owner: 'Patrícia Neves', trl: 6, area: 'Edtech', status: 'Incubada', farol: 'Amarelo', score: 81, next: 7, ready: false },
  { id: 6, name: 'AgroSense', owner: 'João Mendes', trl: 3, area: 'Agrotech', status: 'Incubada', farol: 'Vermelho', score: 46, next: 4, ready: false }
];

const evidences = [
  ['Roadmap tecnológico', 'BioAçaí Tech', '22/07/2026', 'Ana Ribeiro', 'Validada'],
  ['Relatório financeiro', 'Delta Saúde', '20/07/2026', 'Carlos Lima', 'Em análise'],
  ['Plano de ação', 'MapGeo AI', '18/07/2026', 'Lia Castro', 'Pendente'],
  ['Contrato piloto', 'Norte Solar', '17/07/2026', 'Marcos Paiva', 'Validada'],
  ['Ata de mentoria', 'EducaLab', '14/07/2026', 'Patrícia Neves', 'Validada']
];

const indicators = [
  ['Receita recorrente', 82, 'Adequado'], ['Clientes ativos', 76, 'Atenção'], ['Evidências validadas', 68, 'Atenção'],
  ['TRL médio', 71, 'Adequado'], ['Planos no prazo', 59, 'Crítico'], ['Mentorias realizadas', 88, 'Adequado']
];

const docs = ['Plano financeiro', 'Plano estratégico', 'Roadmap', 'Pitch', 'Contrato', 'NDA', 'Relatórios'];
const reports = ['Relatório executivo mensal', 'Auditoria CERNE', 'Carteira de empresas', 'Evolução TRL', 'Impacto regional', 'Pendências por responsável'];
const settings = ['TRL', 'Indicadores', 'Documentos', 'Tipos de evidência', 'Áreas', 'Usuários'];

const siteMap = [
  ['Visão e gestão', 'dashboard', ['Dashboard Executivo', 'Dashboard Operacional', 'Alertas institucionais', 'Prioridades da diretoria']],
  ['Empresas', 'building', ['Carteira de empresas', 'Perfil 360', 'Acompanhamento', 'Diagnóstico', 'Histórico']],
  ['Metodologia e evolução', 'route', ['CERNE', 'TRL', 'Motor de regras', 'Checklists', 'Validações']],
  ['Operação', 'kanban', ['Planos de ação', 'Mentorias', 'Agenda', 'Pendências', 'Responsáveis']],
  ['Conhecimento e evidências', 'folder', ['Documentação', 'Biblioteca de modelos', 'Evidências', 'Validade documental']],
  ['Inteligência', 'powerbi', ['Relatórios', 'Power BI', 'Indicadores', 'Auditoria', 'Exportações']],
  ['Administração', 'settings', ['Usuários', 'Permissões', 'Configurações', 'Cadastros base', 'Parâmetros']]
];

const roadmap = [
  ['Fase 1', 'Conceito e validação', ['Proposta visual', 'Site map', 'Fluxos principais', 'Validação com a gestora']],
  ['Fase 2', 'Protótipo detalhado', ['Telas por perfil', 'Jornadas de uso', 'Componentes de interface', 'Simulações de decisão']],
  ['Fase 3', 'MVP operacional', ['Cadastro de empresas', 'Evidências', 'Planos de ação', 'Indicadores básicos']],
  ['Fase 4', 'Motor de regras', ['Requisitos configuráveis', 'Checklist automático', 'Bloqueios e liberações', 'Auditoria']],
  ['Fase 5', 'BI e relatórios', ['Dataset oficial', 'Power BI incorporado', 'Relatórios executivos', 'Exportações']],
  ['Fase 6', 'Escala SaaS', ['Multi-incubadora', 'Perfis avançados', 'Integrações', 'Produto comercial']]
];

function icon(name) { return icons[name] || icons.report; }
function farolClass(farol) { return farol === 'Verde' ? 'green' : farol === 'Amarelo' ? 'yellow' : 'red'; }
function statusClass(status) {
  if (['Validada', 'Adequado', 'Graduada'].includes(status)) return 'green';
  if (['Em análise', 'Atenção', 'Incubada'].includes(status)) return 'yellow';
  if (['Pendente', 'Crítico', 'Pré-incubada'].includes(status)) return 'red';
  return 'gray';
}

function mountIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
}

function setView(view) {
  document.querySelectorAll('.view').forEach((el) => el.classList.toggle('active', el.id === view));
  document.querySelectorAll('.menu button').forEach((btn) => btn.classList.toggle('active', btn.dataset.view === view));
  document.querySelector('.sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  const blocked = companies.filter((c) => c.farol === 'Vermelho').length;
  const ready = companies.filter((c) => c.ready).length;
  const trlAvg = (companies.reduce((sum, c) => sum + c.trl, 0) / companies.length).toFixed(1);
  const kpis = [
    ['Empresas', companies.length, '+2 no ciclo'],
    ['Bloqueadas', blocked, 'Ação imediata'],
    ['Prontas para evolução', ready, 'Validação final'],
    ['Indicadores pendentes', 14, 'Checklist CERNE'],
    ['Evidências pendentes', 9, 'Auditoria'],
    ['TRL médio', trlAvg, 'Carteira']
  ];
  document.getElementById('kpiGrid').innerHTML = kpis.map(([label, value, hint]) => `
    <div class="kpi-card"><span>${label}</span><strong>${value}</strong><small>${hint}</small></div>
  `).join('');

  const months = [['Fev', 42], ['Mar', 55], ['Abr', 61], ['Mai', 73], ['Jun', 78], ['Jul', 86]];
  document.getElementById('portfolioChart').innerHTML = months.map(([m, v]) => `
    <div class="chart-column"><i style="height:${v * 2}px"></i><b>${v}%</b><span>${m}</span></div>
  `).join('');

  const counts = ['Verde', 'Amarelo', 'Vermelho'].map((f) => [f, companies.filter((c) => c.farol === f).length]);
  document.getElementById('farolLegend').innerHTML = counts.map(([label, value]) => `
    <div class="legend-row"><span><i class="dot ${farolClass(label)}"></i>${label}</span><strong>${value}</strong></div>
  `).join('');

  document.getElementById('readyList').innerHTML = companies.filter((c) => c.ready).map((c) => `
    <div class="list-item"><div><b>${c.name}</b><span>TRL ${c.trl} para TRL ${c.next}</span></div><span class="badge green">Apta</span></div>
  `).join('');

  document.getElementById('riskList').innerHTML = companies.filter((c) => c.farol !== 'Verde').slice(0, 4).map((c) => `
    <div class="list-item"><div><b>${c.name}</b><span>${c.area} · responsável ${c.owner}</span></div><span class="badge ${farolClass(c.farol)}">${c.farol}</span></div>
  `).join('');
}

function renderSiteMap() {
  document.getElementById('siteMapGrid').innerHTML = siteMap.map(([title, iconName, items]) => `
    <article class="site-card">
      <h2>${icon(iconName)}${title}</h2>
      <ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderOperations() {
  const operations = [
    ['Validar evidências', 'Documentos enviados pelas empresas aguardando análise técnica.'],
    ['Acompanhar prazos', 'Planos de ação com vencimento na semana atual.'],
    ['Preparar mentorias', 'Reuniões previstas com pauta e histórico da empresa.'],
    ['Revisar indicadores', 'Metas e resultados que precisam de atualização.']
  ];
  document.getElementById('operationsGrid').innerHTML = operations.map(([title, text]) => `
    <div class="operation-card"><b>${title}</b><span>${text}</span></div>
  `).join('');

  document.getElementById('dailyAlerts').innerHTML = [
    ['MapGeo AI', 'TRL bloqueado por documentação pendente', 'red'],
    ['Delta Saúde', 'Relatório financeiro em análise', 'yellow'],
    ['BioAçaí Tech', 'Apta para evolução de TRL', 'green']
  ].map(([title, text, cls]) => `
    <div class="list-item"><div><b>${title}</b><span>${text}</span></div><span class="badge ${cls}">${cls === 'green' ? 'OK' : cls === 'yellow' ? 'Atenção' : 'Crítico'}</span></div>
  `).join('');
}

function renderJourney() {
  const steps = [
    ['Entrada', 'Cadastro da empresa, dados iniciais e responsável técnico.', 'done'],
    ['Diagnóstico', 'Avaliação de maturidade, necessidades e riscos.', 'done'],
    ['Planejamento', 'Plano de incubação, metas e documentos esperados.', 'active'],
    ['Acompanhamento', 'Mentorias, indicadores, evidências e planos de ação.', 'active'],
    ['Avaliação', 'Análise de resultados e validações por ciclo.', ''],
    ['Evolução', 'Liberação de TRL, maturidade e novas metas.', ''],
    ['Conclusão', 'Graduação, relatório final e histórico institucional.', '']
  ];
  document.getElementById('journey').innerHTML = steps.map(([title, text, cls]) => `
    <div class="journey-step ${cls}"><b>${title}</b><span>${text}</span></div>
  `).join('');
}

function renderDiagnosis() {
  const questions = [
    ['Maturidade do negócio', 'Modelo de negócio, clientes, receita, canais e operação.'],
    ['Tecnologia e TRL', 'Estágio tecnológico, validações, protótipos e próximos requisitos.'],
    ['Gestão e equipe', 'Papéis, governança, capacidade de execução e lacunas.'],
    ['Necessidades da incubação', 'Mentorias, documentos, conexões, mercado e financiamento.']
  ];
  document.getElementById('diagnosisGrid').innerHTML = questions.map(([title, text]) => `
    <div class="diagnosis-card"><strong>${title}</strong><p>${text}</p><div class="progress"><i style="width:${55 + Math.random() * 35}%"></i></div></div>
  `).join('');

  document.getElementById('diagnosisOutputs').innerHTML = [
    ['Parecer técnico', 'Resumo do estágio atual e recomendações.'],
    ['Prioridades', 'Curto, médio e longo prazo.'],
    ['Plano de ação', 'Pendências convertidas em tarefas.'],
    ['Checklist inicial', 'Requisitos gerados para acompanhamento.']
  ].map(([title, text]) => `<div class="list-item"><div><b>${title}</b><span>${text}</span></div></div>`).join('');
}

function renderCompanies() {
  const filter = document.getElementById('companyFilter').value;
  const rows = companies.filter((c) => !filter || c.status === filter);
  document.getElementById('companyRows').innerHTML = rows.map((c) => `
    <tr>
      <td><div class="company-name"><span class="avatar">${c.name.slice(0, 2).toUpperCase()}</span><b>${c.name}</b></div></td>
      <td>${c.owner}</td><td><span class="badge orange">TRL ${c.trl}</span></td><td>${c.area}</td>
      <td><span class="badge ${statusClass(c.status)}">${c.status}</span></td>
      <td><span class="badge ${farolClass(c.farol)}">${c.farol}</span></td>
      <td><button class="ghost-button" data-company="${c.id}" type="button">Visualizar</button></td>
    </tr>
  `).join('');
}

function openCompany(id) {
  const c = companies.find((item) => item.id === Number(id));
  const checks = [
    ['Indicador obrigatório', c.score > 65], ['Documento obrigatório', c.score > 70],
    ['Evidência aprovada', c.score > 80], ['Validação do gestor', c.ready]
  ];
  document.getElementById('companyDetail').innerHTML = `
    <div class="detail-head">
      <span class="eyebrow">Tela da empresa</span>
      <h1>${c.name}</h1>
      <p>${c.area} · Responsável ${c.owner}</p>
    </div>
    <div class="detail-grid">
      <div class="mini-card"><span>TRL atual</span><strong>${c.trl}</strong></div>
      <div class="mini-card"><span>Próximo TRL</span><strong>${c.next}</strong></div>
      <div class="mini-card"><span>Score</span><strong>${c.score}%</strong></div>
      <div class="mini-card"><span>Farol</span><strong>${c.farol}</strong></div>
    </div>
    <article class="panel"><div class="panel-title"><h2>Checklist obrigatório</h2><span>${c.ready ? 'Completo' : 'Em evolução'}</span></div>
      <div class="progress"><i style="width:${c.score}%"></i></div>
      <div class="checklist">${checks.map(([label, done]) => `<div class="check-row ${done ? 'done' : 'pending'}"><span>${done ? '☑' : '☐'}</span><b>${label}</b></div>`).join('')}</div>
    </article>
    <article class="panel"><div class="panel-title"><h2>Linha do tempo</h2><span>Histórico recente</span></div>
      <div class="timeline">
        <div class="timeline-item"><b>Jul/2026</b><div class="timeline-card">Evidência técnica anexada ao TRL ${c.trl}.</div></div>
        <div class="timeline-item"><b>Jun/2026</b><div class="timeline-card">Mentoria de mercado registrada.</div></div>
        <div class="timeline-item"><b>Mai/2026</b><div class="timeline-card">Plano de ação revisado pela equipe Marandu.</div></div>
      </div>
    </article>
  `;
  document.getElementById('companyDrawer').classList.add('open');
  document.getElementById('companyDrawer').setAttribute('aria-hidden', 'false');
}

function renderIndicators() {
  document.getElementById('indicatorCards').innerHTML = indicators.map(([name, pct, status]) => `
    <article class="indicator-card"><div class="panel-title"><h2>${name}</h2><span class="badge ${statusClass(status)}">${status}</span></div><div class="progress"><i style="width:${pct}%"></i></div><p>${pct}% da meta acompanhada no ciclo atual.</p></article>
  `).join('');
}

function renderTrl() {
  document.getElementById('trlRoadmap').innerHTML = Array.from({ length: 9 }, (_, i) => {
    const trl = i + 1;
    const count = companies.filter((c) => c.trl === trl).length;
    const cls = trl < 5 ? 'done' : trl < 8 ? 'current' : 'locked';
    return `<div class="trl-step ${cls}"><strong>TRL ${trl}</strong><span>${count} empresa(s)</span><p>${trl < 4 ? 'Conceito e prova técnica.' : trl < 7 ? 'Validação e piloto.' : 'Mercado e escala.'}</p></div>`;
  }).join('');
}

function renderEvidences() {
  document.getElementById('evidenceRows').innerHTML = evidences.map(([doc, company, date, owner, status]) => `
    <tr><td><b>${doc}</b></td><td>${company}</td><td>${date}</td><td>${owner}</td><td><span class="badge ${statusClass(status)}">${status}</span></td><td><button class="ghost-button" type="button" data-toast="Visualização simulada">Visualizar</button> <button class="ghost-button" type="button" data-toast="Download simulado">Download</button></td></tr>
  `).join('');
}

function renderCards() {
  document.getElementById('documentCards').innerHTML = docs.map((d) => `<article class="doc-card">${icon('folder')}<h2>${d}</h2><p>Modelo configurável disponível para uso como evidência.</p><button class="ghost-button" data-toast="Modelo aberto" type="button">Abrir modelo</button></article>`).join('');
  document.getElementById('reportCards').innerHTML = reports.map((r) => `<article class="report-card">${icon('report')}<h2>${r}</h2><p>Relatório preparado para tomada de decisão.</p><button class="ghost-button" data-toast="Relatório gerado" type="button">Gerar</button></article>`).join('');
  document.getElementById('settingsGrid').innerHTML = settings.map((s) => `<article class="setting-card">${icon('settings')}<h2>${s}</h2><p>Cadastro administrativo para manutenção sem alterar código.</p><button class="ghost-button" data-toast="Cadastro aberto" type="button">Configurar</button></article>`).join('');
}

function renderKanban() {
  const groups = {
    'A Fazer': ['Enviar relatório técnico', 'Anexar contrato piloto', 'Revisar documentação de PI'],
    'Em andamento': ['Validar roadmap', 'Atualizar plano financeiro'],
    'Concluído': ['Registrar mentoria', 'Aprovar pitch deck']
  };
  document.getElementById('kanban').innerHTML = Object.entries(groups).map(([col, tasks]) => `
    <section class="kanban-col"><h2>${col}<span>${tasks.length}</span></h2>${tasks.map((t) => `<div class="task-card"><b>${t}</b><p>Responsável definido pelo motor de regras.</p></div>`).join('')}</section>
  `).join('');
}

function renderMentoring() {
  document.getElementById('calendar').innerHTML = Array.from({ length: 21 }, (_, i) => `<div class="day ${[3, 8, 15].includes(i) ? 'active' : ''}"><b>${i + 1}</b><span>${[3, 8, 15].includes(i) ? 'Mentoria' : ''}</span></div>`).join('');
  document.getElementById('mentoringList').innerHTML = ['BioAçaí Tech com especialista de mercado', 'Delta Saúde com mentor financeiro', 'EducaLab com mentor de produto'].map((item) => `<div class="list-item"><div><b>${item}</b><span>Agenda confirmada</span></div><span class="badge orange">Hoje</span></div>`).join('');
}

function renderAudit() {
  const items = [
    ['22/07/2026', 'Ana aprovou Roadmap tecnológico da BioAçaí Tech.'],
    ['21/07/2026', 'Carlos solicitou nova evidência financeira da Delta Saúde.'],
    ['19/07/2026', 'Sistema bloqueou avanço da MapGeo AI por pendência documental.'],
    ['18/07/2026', 'Diretoria liberou evolução da Norte Solar para TRL 9.']
  ];
  document.getElementById('auditTimeline').innerHTML = items.map(([date, text]) => `<div class="timeline-item"><b>${date}</b><div class="timeline-card">${text}</div></div>`).join('');
}

function renderProductRoadmap() {
  document.getElementById('roadmapGrid').innerHTML = roadmap.map(([phase, title, items]) => `
    <article class="roadmap-card">
      <span>${phase}</span>
      <h2>${title}</h2>
      <ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function toast(text) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}

document.addEventListener('click', (event) => {
  const menuButton = event.target.closest('[data-view]');
  const targetButton = event.target.closest('[data-view-target]');
  const companyButton = event.target.closest('[data-company]');
  const closeDrawer = event.target.closest('[data-close-drawer]');
  const toastButton = event.target.closest('[data-toast]');
  if (menuButton) setView(menuButton.dataset.view);
  if (targetButton) setView(targetButton.dataset.viewTarget);
  if (companyButton) openCompany(companyButton.dataset.company);
  if (closeDrawer) {
    document.getElementById('companyDrawer').classList.remove('open');
    document.getElementById('companyDrawer').setAttribute('aria-hidden', 'true');
  }
  if (toastButton) toast(toastButton.dataset.toast);
});

document.getElementById('mobileMenu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('open'));
document.getElementById('companyFilter').addEventListener('change', renderCompanies);
document.getElementById('newCompany').addEventListener('click', () => toast('Cadastro de empresa simulado'));
document.getElementById('globalSearch').addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase();
  if (value.length > 2) toast(`Pesquisa simulada: ${value}`);
});

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
