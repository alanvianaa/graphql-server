const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
  planos: [Planos]!
  situacaoClientes: [SituacaoClientes]!
}
type Planos {
  value: String
  displayName: String
}
type SituacaoClientes{
  value: String
  displayName: String
}
`;

module.exports = typeDefs;