const { RESTDataSource } = require('apollo-datasource-rest');

class ContaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.authorization);
  }

  async getUsuarios() {
    const response = await this.get('/usuarios');
    return Array.isArray(response)
      ? response.map(usuarios => this.usuarios(usuarios))
      : [];
  }
  usuarios(usuarios) {
    return {
      id: usuarios.id,
      idAuth: usuarios.idAuth,
      email: usuarios.email,
      nome: usuarios.nome,
      telefone: usuarios.telefone,
    };
  }
  /*
  async getSituacaoClientes() {
    const response = await this.get('/usuarios');
    return Array.isArray(response)
      ? response.map(situacao => this.situacaoClientes(situacao))
      : [];
  }
  situacaoClientes(situacao) {
    return {
      value: situacao.value,
      displayName: situacao.displayName
    };
  }
 */
}

module.exports = ContaAPI;
