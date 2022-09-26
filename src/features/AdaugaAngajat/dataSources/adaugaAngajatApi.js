const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaAngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaAngajat(AngajatInput) {
    const data = await this.post('/AdaugareAngajatNou/PostAdaugareAngajatNou', {})
    return data
  }
}

module.exports = adaugaAngajatApi
