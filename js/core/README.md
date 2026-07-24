# Nexus Core

Esta pasta centraliza a inteligência de negócio do protótipo Marandu Nexus.

Fluxo planejado:

Usuário -> Interface -> Business Engine -> Engines internos -> Eventos -> Interface

Responsabilidades:

- `business-engine.js`: ponto único de entrada para operações da plataforma.
- `indicator-engine.js`: filtros, busca, obrigatoriedade e conformidade de indicadores.
- `evidence-engine.js`: vínculo e ciclo de vida das evidências.
- `trl-engine.js`: avaliação e distribuição de TRL.
- `dashboard-engine.js`: métricas calculadas do dashboard.
- `history-engine.js`: registros automáticos de ações.
- `alerts-engine.js`: alertas automáticos e configuráveis.
- `event-bus.js`: eventos internos para sincronização futura.

O front-end deve consumir o Business Engine e evitar regras de negócio nos componentes visuais.
