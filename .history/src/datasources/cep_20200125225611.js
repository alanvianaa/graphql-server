const { RESTDataSource } = require('apollo-datasource-rest');

class CepAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://viacep.com.br/ws';
  }
/*
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.authorization);
  }
*/
  async getEndereco({cep}) {
    return await this.get(`/${cep}/json/`);
  }

}

module.exports = CepAPI;
