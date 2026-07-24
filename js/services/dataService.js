const cache = new Map();

async function fetchJson(fileName) {
  const path = `data/${fileName}.json`;
  if (cache.has(path)) return cache.get(path);
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Não foi possível carregar ${path}`);
  const data = await response.json();
  cache.set(path, data);
  return data;
}

export const DataService = {
  async loadAll() {
    let empresas;
    let indicadores;
    let evidencias;
    let documentos;
    let configuracoes;

    try {
      [empresas, indicadores, evidencias, documentos, configuracoes] = await Promise.all([
        fetchJson("empresas"),
        fetchJson("indicadores"),
        fetchJson("evidencias"),
        fetchJson("documentos"),
        fetchJson("configuracoes"),
      ]);
    } catch (error) {
      if (!window.NexusSeed) throw error;
      ({ empresas, indicadores, evidencias, documentos, configuracoes } = window.NexusSeed);
    }

    return { empresas, indicadores, evidencias, documentos, configuracoes };
  },
};
