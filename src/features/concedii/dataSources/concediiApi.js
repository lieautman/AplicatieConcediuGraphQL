const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediiData() {
    const concediiData = await this.get('http://localhost:5107/Concediu/GetAllConcedii')
    console.log(concediiData)
    return concediiData
  }
}

module.exports = ConcediiApi
