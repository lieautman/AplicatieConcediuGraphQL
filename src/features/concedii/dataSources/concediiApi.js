const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediiData() {
    const concediiData = 1 //call
    return concediiData
  }
}

module.exports = ConcediiApi
