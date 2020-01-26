const { merge } = require('lodash');
const Usuario = require('./usuario-resolver');
const Endereco = require('./endereco-resolver');

const resolvers = merge(Usuario,Endereco);


module.exports = resolvers;