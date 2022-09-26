const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class CardApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async cardData(echipa) {
    const cardData1 = await this.get(`http://localhost:5107/Angajat/GetAngajatiPerEchipa?numeEchipa=${echipa}`)
    console.log(cardData1)
    return cardData1
  }
}

module.exports = CardApi
