const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatiPerEchipaApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async preluareDateAngajat(echipa) {
    await this.post(`http://localhost:5107/Angajat/GetAngajatiPerEchipa?numeEchipa=${echipa}`)
  }
}

module.exports = AngajatiPerEchipaApi
