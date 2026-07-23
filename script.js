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
  {
    "id": "IND001",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.1 Sensibilizacao e Prospeccao",
    "pratica": "1.1.1 Sensibilizacao",
    "indicador": "Numero de pessoas sensibilizadas",
    "definicao": "Quantidade de pessoas alcancadas pelas acoes de sensibilizacao.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.20"
  },
  {
    "id": "IND002",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.1 Sensibilizacao e Prospeccao",
    "pratica": "1.1.1 Sensibilizacao",
    "indicador": "Numero de acoes de sensibilizacao",
    "definicao": "Quantidade de acoes/eventos/campanhas de sensibilizacao realizadas.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.20"
  },
  {
    "id": "IND003",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.1 Sensibilizacao e Prospeccao",
    "pratica": "1.1.2 Prospeccao",
    "indicador": "Numero de propostas prospectadas",
    "definicao": "Quantidade de propostas ou oportunidades identificadas pela prospeccao.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.25"
  },
  {
    "id": "IND004",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.1 Sensibilizacao e Prospeccao",
    "pratica": "1.1.3 Qualificacao de Potenciais Empreendedores",
    "indicador": "Numero de potenciais empreendedores qualificados",
    "definicao": "Quantidade de potenciais empreendedores qualificados pelo mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.30"
  },
  {
    "id": "IND005",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.2 Selecao",
    "pratica": "1.2.1 Recepcao de Propostas",
    "indicador": "Numero de propostas recebidas por ano",
    "definicao": "Total de propostas recebidas no ano.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.34"
  },
  {
    "id": "IND006",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.2 Selecao",
    "pratica": "1.2.1 Recepcao de Propostas",
    "indicador": "Numero de propostas recebidas da propria regiao",
    "definicao": "Propostas recebidas de empreendedores da regiao do mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.34"
  },
  {
    "id": "IND007",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.2 Selecao",
    "pratica": "1.2.1 Recepcao de Propostas",
    "indicador": "Numero de propostas recebidas de outras regioes",
    "definicao": "Propostas submetidas por empreendedores de outras regioes.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.34"
  },
  {
    "id": "IND008",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.2 Selecao",
    "pratica": "1.2.2 Avaliacao",
    "indicador": "Percentual de empreendimentos selecionados sobre propostas submetidas",
    "definicao": "Empreendimentos selecionados dividido pelo total de propostas submetidas.",
    "tipo": "Percentual",
    "periodicidade": "Por edital/ciclo",
    "fonte": "Manual de Implantacao Cerne 2025, p.38"
  },
  {
    "id": "IND009",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.2 Selecao",
    "pratica": "1.2.3 Contratacao",
    "indicador": "Numero de empreendimentos com contratos assinados",
    "definicao": "Quantidade de empreendimentos formalizados para ingressar no processo de apoio.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.42"
  },
  {
    "id": "IND010",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.1 Planejamento",
    "indicador": "Percentual de empreendimentos com plano de desenvolvimento atualizado",
    "definicao": "Empreendimentos com plano atualizado, por estagio de crescimento, dividido pelo total de empreendimentos ativos.",
    "tipo": "Percentual",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.47"
  },
  {
    "id": "IND011",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.2 Agregacao de Valor",
    "indicador": "Numero de servicos do portfolio realizados",
    "definicao": "Quantidade de servicos do portfolio executados para empreendimentos.",
    "tipo": "Contagem",
    "periodicidade": "Mensal",
    "fonte": "Manual de Implantacao Cerne 2025, p.51"
  },
  {
    "id": "IND012",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.3 Monitoramento",
    "indicador": "Numero de postos de trabalho gerados pelos empreendimentos apoiados",
    "definicao": "Total de empregos/postos gerados pelos empreendimentos apoiados.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.57"
  },
  {
    "id": "IND013",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.3 Monitoramento",
    "indicador": "Percentual de empreendimentos que nao concluem o processo de desenvolvimento",
    "definicao": "Empreendimentos que interrompem ou abandonam o processo dividido pelo total aplicavel.",
    "tipo": "Percentual",
    "periodicidade": "Trimestral/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.57"
  },
  {
    "id": "IND014",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.3 Monitoramento",
    "indicador": "Percentual de empreendimentos com monitoramento atualizado por nivel de maturidade",
    "definicao": "Empreendimentos com monitoramento atualizado dividido pelo total no mesmo nivel de maturidade.",
    "tipo": "Percentual",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.57"
  },
  {
    "id": "IND015",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.3 Monitoramento",
    "indicador": "Faturamento total dos empreendimentos apoiados",
    "definicao": "Somatorio do faturamento dos empreendimentos apoiados.",
    "tipo": "Moeda",
    "periodicidade": "Mensal",
    "fonte": "Manual de Implantacao Cerne 2025, p.57"
  },
  {
    "id": "IND016",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.3 Monitoramento",
    "indicador": "Total de impostos gerados pelos empreendimentos apoiados",
    "definicao": "Somatorio de impostos gerados/recolhidos pelos empreendimentos apoiados.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.57"
  },
  {
    "id": "IND017",
    "publico": "Empresas",
    "nivel": "Cerne 1",
    "processo": "1.3 Desenvolvimento do Empreendimento",
    "pratica": "1.3.3 Monitoramento",
    "indicador": "Captacao de recursos pelos empreendimentos apoiados",
    "definicao": "Total de recursos captados pelos empreendimentos apoiados.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.57"
  },
  {
    "id": "IND018",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.1 Graduacao",
    "indicador": "Numero de graduadas",
    "definicao": "Quantidade de empreendimentos graduados.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.64"
  },
  {
    "id": "IND019",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.1 Graduacao",
    "indicador": "Percentual de graduadas estabelecidas na regiao",
    "definicao": "Graduadas estabelecidas na regiao dividido pelo total de graduadas.",
    "tipo": "Percentual",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.64"
  },
  {
    "id": "IND020",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Percentual de graduadas que permanecem no mercado apos 1 ano",
    "definicao": "Graduadas ativas apos 1 ano dividido pelo total de graduadas elegiveis.",
    "tipo": "Percentual",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND021",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Percentual de graduadas que permanecem no mercado apos 5 anos",
    "definicao": "Graduadas ativas apos 5 anos dividido pelo total de graduadas elegiveis.",
    "tipo": "Percentual",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND022",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Numero de postos de trabalho gerados pelas graduadas",
    "definicao": "Total de empregos/postos gerados pelas empresas graduadas.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND023",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Faturamento total das graduadas",
    "definicao": "Somatorio do faturamento das empresas graduadas.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND024",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Total de impostos gerados pelas graduadas",
    "definicao": "Somatorio de impostos gerados/recolhidos pelas graduadas.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND025",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Investimentos recebidos pelas graduadas",
    "definicao": "Total de investimentos recebidos pelas empresas graduadas.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND026",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Percentual de graduadas adquiridas por outras empresas",
    "definicao": "Graduadas adquiridas dividido pelo total de graduadas elegiveis.",
    "tipo": "Percentual",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND027",
    "publico": "Empresas graduadas",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Percentual de empresas que realizaram fusao com outras empresas",
    "definicao": "Empresas graduadas que realizaram fusao dividido pelo total elegivel.",
    "tipo": "Percentual",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND028",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.4 Graduacao e Relacionamento com Graduadas",
    "pratica": "1.4.2 Relacionamento com Graduadas",
    "indicador": "Numero de empreendedores que apoiam as acoes do mecanismo de inovacao",
    "definicao": "Quantidade de empreendedores graduados/relacionados que apoiam acoes do mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.68"
  },
  {
    "id": "IND029",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.5 Gerenciamento Basico",
    "pratica": "1.5.1 Estrutura Organizacional",
    "indicador": "Numero de parceiros regionais, nacionais e internacionais",
    "definicao": "Quantidade de parceiros ativos por abrangencia.",
    "tipo": "Contagem",
    "periodicidade": "Trimestral/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.73"
  },
  {
    "id": "IND030",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.5 Gerenciamento Basico",
    "pratica": "1.5.1 Estrutura Organizacional",
    "indicador": "Numero de eventos organizados ou coorganizados",
    "definicao": "Eventos organizados pelo mecanismo ou com participacao na equipe organizadora.",
    "tipo": "Contagem",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.73"
  },
  {
    "id": "IND031",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.5 Gerenciamento Basico",
    "pratica": "1.5.2 Gestao do Mecanismo de Inovacao",
    "indicador": "Total de receita gerada pelo mecanismo de inovacao",
    "definicao": "Receita economica e financeira gerada pelo mecanismo.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.76-77"
  },
  {
    "id": "IND032",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.5 Gerenciamento Basico",
    "pratica": "1.5.2 Gestao do Mecanismo de Inovacao",
    "indicador": "Quantidade de recursos captados pelo mecanismo de inovacao",
    "definicao": "Recursos captados junto a instituicoes publicas e privadas.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.76-77"
  },
  {
    "id": "IND033",
    "publico": "Incubadora",
    "nivel": "Cerne 1",
    "processo": "1.5 Gerenciamento Basico",
    "pratica": "1.5.3 Comunicacao e Marketing",
    "indicador": "Numero de pessoas alcancadas pelas acoes de marketing",
    "definicao": "Pessoas alcancadas por campanhas, conteudos e canais de comunicacao.",
    "tipo": "Contagem",
    "periodicidade": "Mensal",
    "fonte": "Manual de Implantacao Cerne 2025, p.80-81"
  },
  {
    "id": "IND034",
    "publico": "Incubadora",
    "nivel": "Cerne 2",
    "processo": "2.1 Gestao Estrategica",
    "pratica": "2.1.1 Planejamento Estrategico",
    "indicador": "Percentual de membros da governanca e parceiros que participaram do planejamento estrategico",
    "definicao": "Participantes da governanca e parceiros envolvidos dividido pelo total esperado.",
    "tipo": "Percentual",
    "periodicidade": "Por ciclo de planejamento",
    "fonte": "Manual de Implantacao Cerne 2025, p.85-86"
  },
  {
    "id": "IND035",
    "publico": "Incubadora",
    "nivel": "Cerne 2",
    "processo": "2.1 Gestao Estrategica",
    "pratica": "2.1.2 Administracao Estrategica",
    "indicador": "Percentual das acoes previstas no planejamento estrategico realizadas com exito",
    "definicao": "Acoes concluidas com exito dividido pelo total previsto.",
    "tipo": "Percentual",
    "periodicidade": "Mensal/Trimestral",
    "fonte": "Manual de Implantacao Cerne 2025, p.88-89"
  },
  {
    "id": "IND036",
    "publico": "Incubadora",
    "nivel": "Cerne 2",
    "processo": "2.2 Ampliacao de Limites",
    "pratica": "2.2.1 Estimulo a Ideacao",
    "indicador": "Numero de ambientes de ideacao em parceria com o mecanismo",
    "definicao": "Ambientes de ideacao que atuam em parceria com o mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.92"
  },
  {
    "id": "IND037",
    "publico": "Incubadora",
    "nivel": "Cerne 2",
    "processo": "2.2 Ampliacao de Limites",
    "pratica": "2.2.2 Servicos a Organizacoes",
    "indicador": "Receita total com servicos executados para organizacoes publicas e privadas",
    "definicao": "Receita financeira ou economica obtida com servicos para organizacoes.",
    "tipo": "Moeda",
    "periodicidade": "Mensal/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.95"
  },
  {
    "id": "IND038",
    "publico": "Empresas",
    "nivel": "Cerne 2",
    "processo": "2.3 Avaliacao do Mecanismo de Inovacao",
    "pratica": "2.3.1 Avaliacao da Qualidade",
    "indicador": "Numero de premios de inovacao recebidos pelos empreendimentos apoiados e/ou graduados",
    "definicao": "Premios associados a inovacao recebidos por apoiadas e graduadas.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.99-100"
  },
  {
    "id": "IND039",
    "publico": "Empresas",
    "nivel": "Cerne 2",
    "processo": "2.3 Avaliacao do Mecanismo de Inovacao",
    "pratica": "2.3.1 Avaliacao da Qualidade",
    "indicador": "Numero de empreendimentos contemplados por editais de inovacao",
    "definicao": "Empreendimentos apoiados e/ou graduados contemplados em editais de inovacao.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.99-100"
  },
  {
    "id": "IND040",
    "publico": "Empresas",
    "nivel": "Cerne 2",
    "processo": "2.3 Avaliacao do Mecanismo de Inovacao",
    "pratica": "2.3.1 Avaliacao da Qualidade",
    "indicador": "Numero de empreendimentos que receberam aporte de capital",
    "definicao": "Empreendimentos apoiados e/ou graduados que receberam aporte.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.99-100"
  },
  {
    "id": "IND041",
    "publico": "Incubadora",
    "nivel": "Cerne 2",
    "processo": "2.3 Avaliacao do Mecanismo de Inovacao",
    "pratica": "2.3.2 Avaliacao dos Impactos",
    "indicador": "Numero de pessoas com acesso ao relatorio de impactos",
    "definicao": "Pessoas que tiveram acesso ao relatorio de impactos do mecanismo na regiao.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.103"
  },
  {
    "id": "IND042",
    "publico": "Incubadora",
    "nivel": "Cerne 3",
    "processo": "3.1 Relacionamento Institucional",
    "pratica": "3.1.1 Interacao com o Entorno",
    "indicador": "Numero de projetos executados em parceria com atores do ecossistema regional",
    "definicao": "Projetos realizados em parceria com atores do ecossistema de inovacao da regiao.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.109"
  },
  {
    "id": "IND043",
    "publico": "Incubadora",
    "nivel": "Cerne 3",
    "processo": "3.1 Relacionamento Institucional",
    "pratica": "3.1.2 Participacao na Proposicao de Politicas Publicas",
    "indicador": "Numero de foruns dos quais o mecanismo participa",
    "definicao": "Foruns de politica publica/ecossistema com participacao do mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.113"
  },
  {
    "id": "IND044",
    "publico": "Incubadora",
    "nivel": "Cerne 3",
    "processo": "3.1 Relacionamento Institucional",
    "pratica": "3.1.2 Participacao na Proposicao de Politicas Publicas",
    "indicador": "Numero de proposicoes apresentadas nos foruns",
    "definicao": "Proposicoes apresentadas pelo mecanismo nos foruns em que participa.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.113"
  },
  {
    "id": "IND045",
    "publico": "Empresas",
    "nivel": "Cerne 3",
    "processo": "3.2 Desenvolvimento em Rede",
    "pratica": "3.2.1 Rede de Apoio aos Empreendimentos",
    "indicador": "Percentual de empresas que possuem um profissional apoiador",
    "definicao": "Empresas com profissional apoiador dividido pelo total de empresas apoiadas aplicavel.",
    "tipo": "Percentual",
    "periodicidade": "Trimestral/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.117-118"
  },
  {
    "id": "IND046",
    "publico": "Incubadora",
    "nivel": "Cerne 3",
    "processo": "3.2 Desenvolvimento em Rede",
    "pratica": "3.2.1 Rede de Apoio aos Empreendimentos",
    "indicador": "Numero de profissionais e instituicoes apoiadores no banco de parceiros",
    "definicao": "Profissionais e instituicoes apoiadores cadastrados no banco de parceiros.",
    "tipo": "Contagem",
    "periodicidade": "Trimestral/Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.117-118"
  },
  {
    "id": "IND047",
    "publico": "Incubadora",
    "nivel": "Cerne 3",
    "processo": "3.2 Desenvolvimento em Rede",
    "pratica": "3.2.2 Gestao de Ofertas e Demandas",
    "indicador": "Numero de projetos de conexao entre oferta e demanda realizados",
    "definicao": "Projetos executados para conectar ofertas e demandas.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.121"
  },
  {
    "id": "IND048",
    "publico": "Empresas",
    "nivel": "Cerne 3",
    "processo": "3.2 Desenvolvimento em Rede",
    "pratica": "3.2.2 Gestao de Ofertas e Demandas",
    "indicador": "Numero de empreendimentos apoiados e graduados participantes de projetos de conexao",
    "definicao": "Empreendimentos apoiados e graduados que participaram de projetos de conexao oferta-demanda.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.121"
  },
  {
    "id": "IND049",
    "publico": "Empresas",
    "nivel": "Cerne 3",
    "processo": "3.2 Desenvolvimento em Rede",
    "pratica": "3.2.3 Expansao da Atuacao Territorial",
    "indicador": "Numero de empreendimentos apoiados instalados fora da regiao do mecanismo",
    "definicao": "Empreendimentos apoiados localizados fora da regiao do mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.124"
  },
  {
    "id": "IND050",
    "publico": "Ambos",
    "nivel": "Cerne 3",
    "processo": "3.3 Responsabilidade Social e Ambiental",
    "pratica": "3.3.1 Gestao Ambiental",
    "indicador": "Numero de acoes de gestao ambiental operacionalizadas",
    "definicao": "Acoes de gestao ambiental realizadas pelo mecanismo, incluindo atuacao junto a empresas apoiadas.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.127"
  },
  {
    "id": "IND051",
    "publico": "Ambos",
    "nivel": "Cerne 3",
    "processo": "3.3 Responsabilidade Social e Ambiental",
    "pratica": "3.3.2 Responsabilidade Social",
    "indicador": "Numero de acoes de responsabilidade social operacionalizadas",
    "definicao": "Acoes de responsabilidade social realizadas pelo mecanismo e/ou com empreendimentos apoiados.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.130"
  },
  {
    "id": "IND052",
    "publico": "Incubadora",
    "nivel": "Cerne 4",
    "processo": "4.1 Atuacao Internacional",
    "pratica": "4.1.1 Internacionalizacao do Mecanismo de Inovacao",
    "indicador": "Numero de projetos executados com parceiros internacionais",
    "definicao": "Projetos internacionais executados com parceiros do mecanismo.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.135"
  },
  {
    "id": "IND053",
    "publico": "Empresas",
    "nivel": "Cerne 4",
    "processo": "4.1 Atuacao Internacional",
    "pratica": "4.1.2 Internacionalizacao dos Empreendimentos",
    "indicador": "Numero de empreendimentos participando de projetos de internacionalizacao",
    "definicao": "Empreendimentos apoiados e graduados participantes de projetos de internacionalizacao.",
    "tipo": "Contagem",
    "periodicidade": "Anual",
    "fonte": "Manual de Implantacao Cerne 2025, p.138-139"
  }
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
  const levelFilter = document.getElementById('indicatorLevel');
  const audienceFilter = document.getElementById('indicatorAudience');
  const searchInput = document.getElementById('indicatorSearch');
  const levels = [...new Set(indicators.map((item) => item.nivel))];
  const audiences = [...new Set(indicators.map((item) => item.publico))];

  if (levelFilter && levelFilter.options.length === 1) {
    levelFilter.insertAdjacentHTML('beforeend', levels.map((level) => `<option>${level}</option>`).join(''));
  }
  if (audienceFilter && audienceFilter.options.length === 1) {
    audienceFilter.insertAdjacentHTML('beforeend', audiences.map((audience) => `<option>${audience}</option>`).join(''));
  }

  const byLevel = levels.map((level) => [level, indicators.filter((item) => item.nivel === level).length]);
  const companyIndicators = indicators.filter((item) => ['Empresas', 'Empresas graduadas', 'Ambos'].includes(item.publico)).length;
  const incubatorIndicators = indicators.filter((item) => ['Incubadora', 'Ambos'].includes(item.publico)).length;
  document.getElementById('indicatorCards').innerHTML = [
    ['Total CERNE', indicators.length, 'Indicadores do catálogo'],
    ['Incubadora', incubatorIndicators, 'Gestão institucional'],
    ['Empresas', companyIndicators, 'Acompanhamento da carteira'],
    ...byLevel
  ].map(([name, value, hint]) => `
    <article class="indicator-card"><div class="panel-title"><h2>${name}</h2><span class="badge orange">${value}</span></div><p>${hint || 'Indicadores vinculados a este nível CERNE.'}</p></article>
  `).join('');

  const query = (searchInput?.value || '').toLowerCase();
  const level = levelFilter?.value || '';
  const audience = audienceFilter?.value || '';
  const filtered = indicators.filter((item) => {
    const haystack = [item.id, item.indicador, item.publico, item.nivel, item.processo, item.pratica, item.tipo, item.periodicidade].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!level || item.nivel === level) && (!audience || item.publico === audience);
  });

  document.getElementById('indicatorRows').innerHTML = filtered.map((item) => `
    <tr>
      <td><b>${item.id}</b></td>
      <td><b>${item.indicador}</b><br><small>${item.definicao}</small></td>
      <td><span class="badge gray">${item.publico}</span></td>
      <td><span class="badge orange">${item.nivel}</span></td>
      <td>${item.processo}</td>
      <td>${item.pratica}</td>
      <td>${item.tipo}</td>
      <td>${item.periodicidade}</td>
    </tr>
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
document.getElementById('indicatorSearch')?.addEventListener('input', renderIndicators);
document.getElementById('indicatorLevel')?.addEventListener('change', renderIndicators);
document.getElementById('indicatorAudience')?.addEventListener('change', renderIndicators);
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
