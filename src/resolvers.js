const { merge } = require('lodash');
const Usuario = require('./resolvers/usuario-resolver');
const Endereco = require('./resolvers/endereco-resolver');

const resolvers = merge(Usuario,Endereco);

module.exports = resolvers;