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
    return await this.get(`/usuarios`);
  }
}

module.exports = ContaAPI;
