module.exports = {
    Query: {
      usuarios: (_, __, { dataSources }) =>
        dataSources.contaAPI.getUsuarios(),
        /*
      situacaoClientes: (_, __, { dataSources }) =>
      dataSources.contaAPI.getSituacaoClientes()
      */
    }
  };