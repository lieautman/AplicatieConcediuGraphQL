const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatiPerEchipaApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAngajatiPerEchipaData(echipa) {
    await this.post(`/Angajat/GetAngajatiPerEchipa?numeEchipa=${echipa}`)
  }
}

module.exports = AngajatiPerEchipaApi
