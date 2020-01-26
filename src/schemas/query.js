const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
  usuarios: Usuario!
  endereco(cep: String!): Endereco!
}
`;

module.exports = typeDefs;