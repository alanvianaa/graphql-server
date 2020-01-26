const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
  usuarios: [Usuario]!
}
type Usuario {
  id: String,
  idAuth: String,
  email: String,
  nome: String,
  telefone: String,
}
`;

module.exports = typeDefs;