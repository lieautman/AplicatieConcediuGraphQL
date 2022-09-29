const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaAngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaAngajat(input) {
    try {
      const data = await this.post('/AdaugareAngajatNou/PostAdaugareAngajatNou', { ...input })
      return data
    } catch {
      return 'Eroare de server!'
    }
  }
}

module.exports = adaugaAngajatApi
