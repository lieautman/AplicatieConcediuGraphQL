const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EchipaApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async echipaData() {
    const echipaData1 = await this.get('http://localhost:5107/Angajat/GetEchipe')
    console.log(echipaData1)
    return echipaData1
  }
}

module.exports = EchipaApi
