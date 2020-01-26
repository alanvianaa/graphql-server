const { gql } = require('apollo-server');
const endereco = require('./schemas/endereco-schema');
const usuario = require('./schemas/usuario-schema');

const root = gql`
    type Query {
        root: String
    }
    type Mutation{
        root: String
    }
`;

const typeDefs = [root, endereco, usuario];

module.exports = typeDefs;