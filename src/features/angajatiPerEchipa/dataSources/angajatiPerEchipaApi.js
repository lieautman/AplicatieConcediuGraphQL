const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatiPerEchipaApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAngajatiPerEchipaData(idEchipaNavigation) {
    const data = await this.get(`http://localhost:5107/Angajat/GetAngajatiPerEchipa?numeEchipa=${idEchipaNavigation}`)
    return data
  }
}

module.exports = AngajatiPerEchipaApi
