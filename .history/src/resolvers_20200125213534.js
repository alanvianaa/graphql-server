module.exports = {
    Query: {
      usuarius: (_, __, { dataSources }) =>
        dataSources.contaAPI.getUsuarios(),
        /*
      situacaoClientes: (_, __, { dataSources }) =>
      dataSources.contaAPI.getSituacaoClientes()
      */
    }
  };