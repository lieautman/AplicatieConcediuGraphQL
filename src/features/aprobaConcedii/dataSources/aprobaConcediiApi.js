const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediuAprobatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediuAprobatData() {
    const concediuAprobatData = await this.post('http://localhost:5107/Concediu/UpdateStareConcediuAprobare?id=${id}')
    console.log(concediuAprobatData)
    return concediuAprobatData
  }
}

module.exports = ConcediuAprobatApi
