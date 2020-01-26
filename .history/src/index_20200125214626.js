const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ContaAPI = require('./datasources/conta');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    contaAPI: new ContaAPI(),
  }),
  context: ({ request }) => ({
    authorization: request.headers.authorization
  })

});

server.listen().then(({ url }) => {
  console.log(`🚀 Servidor rodando em ${url}`);
});