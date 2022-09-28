const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class inlocuitoriApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async inlocuitoriData(dataSfarsit, dataInceput, angajatId) {
    const inlocuitoriData1 = await this.get(
      `http://localhost:5107/CreareConcediu/GetInlocuitoriIndisponibili/${dataSfarsit}/${dataInceput}/${angajatId}`
    )

    return inlocuitoriData1
  }
}

module.exports = inlocuitoriApi
