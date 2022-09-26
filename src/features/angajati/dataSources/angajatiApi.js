const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async angajatiData() {
    const angajatiData = await this.get('http://localhost:5107/Angajat/GetAllAngajati')
    console.log(angajatiData)
    return angajatiData
  }
}

module.exports = AngajatiApi
