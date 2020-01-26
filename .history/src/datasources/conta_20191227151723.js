const { RESTDataSource } = require('apollo-datasource-rest');

class ContaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/clientes/data-options';
  }
  async getPlanos() {
    const response = await this.get('/planos');
    return Array.isArray(response)
      ? response.map(planos => this.planos(planos))
      : [];
  }
  planos(planos) {
    return {
      value: planos.value,
      displayName: planos.displayName
    };
  }
  async getSituacaoClientes() {
    const response = await this.get('/situacao-clientes');
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
 
}

module.exports = ContaAPI;
