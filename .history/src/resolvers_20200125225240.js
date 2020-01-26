module.exports = {
    Query: {
      usuarios: (_, {}, { dataSources }) =>
        dataSources.contaAPI.getUsuarios(),
        
      endereco: (_,{cep}, {dataSources}) =>
        dataSources.CepAPI.getEndereco(cep),
      /*
      situacaoClientes: (_, __, { dataSources }) =>
      dataSources.contaAPI.getSituacaoClientes()
      */
    }
  };