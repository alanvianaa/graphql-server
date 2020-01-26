module.exports = {
    Query: {
      planos: (_, __, { dataSources }) =>
        dataSources.contaAPI.getPlanos(),
      situacaoClientes: (_, __, { dataSources }) =>
      dataSources.contaAPI.getSituacaoClientes()
    }
  };