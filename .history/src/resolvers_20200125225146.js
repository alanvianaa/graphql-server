module.exports = {
    Query: {
      usuarios: (_, {}, { dataSources }) =>
        dataSources.contaAPI.getUsuarios(),
        
      endereco: (_,__, {dataSources}) =>
        dataSources.CepAPI.getEndereco(),
      /*
      situacaoClientes: (_, __, { dataSources }) =>
      dataSources.contaAPI.getSituacaoClientes()
      */
    }
  };