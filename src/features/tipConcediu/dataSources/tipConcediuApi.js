const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class TipConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async tipConcediuData() {
    const tipConcediuData1 = await this.get('http://localhost:5107/CreareConcediu/TipuriConcediu')
    console.log(tipConcediuData1)
    return tipConcediuData1
  }
}

module.exports = TipConcediuApi
