module.exports = {
    Query: {
        endereco: (_,{cep}, {dataSources}) =>
        dataSources.cepAPI.getEndereco({numCep: cep}),
    }
  };