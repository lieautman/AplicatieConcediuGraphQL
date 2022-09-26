const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserRegisterApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async registerUser(
    userNume,
    userPrenume,
    userEmail,
    userNumartelefon,
    userDataNasterii,
    userCnp,
    userSeriaNumarBuletin,
    userParola
  ) {
    try {
      let Angajat = {
        nume: userNume,
        prenume: userPrenume,
        email: userEmail,
        numartelefon: userNumartelefon,
        dataNasterii: userDataNasterii,
        cnp: userCnp,
        seriaNumarBuletin: userSeriaNumarBuletin,
        parola: userParola
      }
      let data1 = await this.post('/Angajat/PostAngajatInregistrare', Angajat)
      return data1
    } catch (Errr) {
      return 'Eroare!'
    }
  }
}

module.exports = UserRegisterApi
