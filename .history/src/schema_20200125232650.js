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
  contas:[Conta]
  tags:[Tag]
}

type Data{
  year: Int,
  monthValue: Int,
  dayOfMonth: Int
}

type Conta{
  id: String,
  logradouro: String,
  numero: String,
  complemento: String,
  bairro: String,
  cep: String,
  cidade:String,
  uf: String,
  telefone: String
}

type Tag{
  String
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