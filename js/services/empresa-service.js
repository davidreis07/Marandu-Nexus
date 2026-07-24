export const EmpresaService = {
  list(engine) {
    return engine.getEmpresas();
  },

  find(engine, id) {
    return engine.getEmpresaById(id);
  },

  update(engine, id, changes) {
    return engine.updateCompany(id, changes);
  },
};
