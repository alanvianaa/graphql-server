const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ContaAPI = require('./datasources/conta');
//const CepAPI = require('./datasources/cep');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      contaAPI: new ContaAPI(),
      cepAPI: new CepAPI()
    };
  },
  context: ({ req }) => ({
    authorization: req.headers.authorization
  }),

});

server.listen().then(({ url }) => {
  console.log(`🚀 Servidor rodando em ${url}`);
});