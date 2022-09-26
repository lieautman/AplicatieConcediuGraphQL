const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class CardApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async cardData(echipa) {
    const cardData = await this.get(`http://localhost:5107/Angajat/GetAngajatiPerEchipa?numeEchipa=${echipa}`)
    console.log(cardData)
    return cardData
  }
}

module.exports = CardApi
