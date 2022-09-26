const { lte } = require('ramda')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ProfilePageTableApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async preluareProfilePageTable(userEmail, indexStart, indexEnd, numarElemPePagina) {
    let Angajat = {
      id: 1,
      nume: 'aa',
      prenume: 'aa',
      email: userEmail,
      dataAngajarii: '2000-01-01',
      numartelefon: '1234567890',
      dataNasterii: '2000-01-01',
      cnp: '1234567890123',
      seriaNumarBuletin: 'rk123123',
      salariu: 500,
      parola: 'Aaa1234567$'
    }
    console.log(indexStart)
    console.log(indexEnd)
    let data1 = await this.post('/Concediu/PostPreluareConcedii/' + indexStart + '/' + indexEnd, Angajat)
    let data2 = await this.post('/Concediu/PostPreluareNumarDePagini/' + numarElemPePagina, Angajat)
    console.log(data1)
    console.log(data2)
    return 'mmmmm'
  }
}

module.exports = ProfilePageTableApi
