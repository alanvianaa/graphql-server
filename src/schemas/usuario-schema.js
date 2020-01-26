const { gql } = require('apollo-server');

const typeDefs = gql`

type Usuario {
  id: String,
  idAuth: String,
  email: String,
  nome: String,
  telefone: String,
  dtCadastro: Data,
  contas:[Conta],
  tags:[String]
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

extend type Query {
  usuarios: Usuario!
}

`;

module.exports = typeDefs;