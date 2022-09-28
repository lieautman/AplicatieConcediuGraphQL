const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaConcediu(Concediu) {
    const data = await this.post('/CreareConcediu/PostConcediu', Concediu)
    return data
  }
}

module.exports = adaugaConcediuApi
