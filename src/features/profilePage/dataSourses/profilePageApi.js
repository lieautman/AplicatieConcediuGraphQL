const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ProfilePageApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async preluareDateProfil(userEmail) {
    const userData = {
      Id: 2,
      Nume: 'Adilescu',
      Prenume: 'Adi',
      Email: userEmail,
      Parola: '1234',
      DataAngajarii: '2011-01-22',
      DataNasterii: '2001-01-12',
      Cnp: '9876543210123',
      SeriaNumarBuletin: 'rk321321',
      Numartelefon: '123457890',
      Poza: '',
      Functia: 'Administrator Aplicatie Concedii',
      ManagerId: null,
      Salariu: 500.0,
      EsteAngajatCuActeInRegula: true,
      IdEchipa: 2
    }
    console.log(userData)
    const userData1 = await this.get('http://localhost:5107/Angajat/GetDateAngajat/12345')
    console.log(userData1)
    return userData
  }
}

module.exports = ProfilePageApi
