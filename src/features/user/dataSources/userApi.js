const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData() {
    const userData = { id: 1, isAdmin: true }
    return userData
  }

  async authenticateUser(userName, password) {
    const userData1 = await this.post('/Angajat/AngajatAutentificare', {
      id: 1,
      nume: 'string',
      prenume: 'string',
      email: 'admin',
      parola: 'admin',
      dataAngajarii: '2022-09-22T08:13:16.116Z',
      dataNasterii: '2022-09-22T08:13:16.116Z',
      cnp: 'string',
      seriaNumarBuletin: 'string',
      numartelefon: 'string',
      poza: '',
      esteAdmin: true,
      managerId: 0,
      salariu: 0,
      esteAngajatCuActeInRegula: true,
      idEchipa: 0
    })
    console.log(userData1)
    if (userName !== 'Administrator' || password !== 'a') return false
    else return true
  }
}

module.exports = UserApi
