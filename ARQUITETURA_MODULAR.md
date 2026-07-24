# Arquitetura Modular - Marandu Nexus

Este prototipo foi evoluido para uma arquitetura modular incremental. As telas continuam estaticas, mas a organizacao ja prepara o produto para backend, permissoes, multi-incubadora e integracoes futuras.

## Camadas

- `config/`: configuracoes centrais da plataforma, tema e ativacao de modulos.
- `data/`: base ficticia oficial do prototipo.
- `js/core/`: inicializacao, registro de modulos, roteamento, logs, notificacoes e tema.
- `js/services/`: acesso aos dados e fachadas para a interface.
- `js/core/*-engine.js`: regras de negocio reutilizaveis, sem dependencia visual.
- `modules/`: declaracao dos modulos funcionais da plataforma.

## Principios

- O Core inicializa a plataforma e oferece servicos compartilhados.
- Regras de negocio ficam nos engines.
- Telas e componentes consomem servicos, sem conhecer detalhes de persistencia.
- Modulos podem ser ativados ou desativados em `config/modules.json`.
- O menu lateral e gerado a partir do registro central de modulos.
