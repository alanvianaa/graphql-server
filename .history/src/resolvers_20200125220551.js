module.exports = {
    Query: {
      usuarios: (_, {}, { dataSources }) =>
        dataSources.contaAPI.getUsuarios(),
        /*
      situacaoClientes: (_, __, { dataSources }) =>
      dataSources.contaAPI.getSituacaoClientes()
      */
    }
  };