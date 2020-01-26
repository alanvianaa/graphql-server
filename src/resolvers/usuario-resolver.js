module.exports = {
    Query: {
      usuarios: (_, {}, { dataSources }) =>
        dataSources.contaAPI.getUsuarios(),
    }
  };