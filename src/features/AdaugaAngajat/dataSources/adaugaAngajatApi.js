const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaAngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaAngajat(Angajat) {
    const data = await this.post('/AdaugareAngajatNou/PostAdaugareAngajatNou', Angajat)
    return data
  }
}

module.exports = adaugaAngajatApi
