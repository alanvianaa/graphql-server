const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
  usuarios: Usuario!
  endereco(cep: String!): Endereco!
}
type Usuario {
  id: String,
  idAuth: String,
  email: String,
  nome: String,
  telefone: String,
  dtCadastro: Data
}

type Data{
  year: Int,
  monthValue: Int,
  dayOfMonth: Int
}

type Endereco{
  cep: String,
  logradouro: String,
  complemento: String,
  bairro: String,
  localidade: String,
  uf: String,
  unidade: String,
  ibge: String,
  gia: String
}
`;

module.exports = typeDefs;