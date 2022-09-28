const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaAngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaAngajat(input) {
    const data = await this.post('/AdaugareAngajatNou/PostAdaugareAngajatNou', { ...input })
    return data
  }
}

module.exports = adaugaAngajatApi
