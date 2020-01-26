const { ApolloServer } = require('apollo-server');
//############### SCHEMAS ###########################
const endereco = require('./schemas/endereco-schema');
const usuario = require('./schemas/usuario-schema');
const query = require('./schemas/query');

//############# RESOLVERS ##############################
const resolvers = require('./resolvers/resolvers');

//#################### APIs #########################
const ContaAPI = require('./datasources/conta');
const CepAPI = require('./datasources/cep');

const server = new ApolloServer({
  typeDefs:[query,usuario, endereco],
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