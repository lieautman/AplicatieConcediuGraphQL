const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaAngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaAngajat(AngajatInput) {
    let Angajat = {
      id: 1,
      nume: 'ssdddssss',
      prenume: 'asdfghjkl',
      email: 'adeee@aa.a',
      parola: '123456',
      dataNasterii: '1990-01-12',
      cnp: '123456777',
      serieNumarBuletin: '111111',
      numardetelefon: '12112239',
      dataAngajarii: '2022-09-09',
      esteAngajatCuActeInRegula: 1,
      managerId: 1,
      idEchipa: 3,
      salariu: 12345
    }
    const data = await this.post('/AdaugareAngajatNou/PostAdaugareAngajatNou', Angajat)
    return data
  }
}

module.exports = adaugaAngajatApi
