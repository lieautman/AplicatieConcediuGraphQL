const { lte } = require('ramda')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ProfilePageApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async preluareDateProfil(userEmail) {
    const userData1 = await this.get('/Angajat/GetDateAngajat/' + userEmail)
    let functie = 'Angajat'
    if (userData1.managerId === null) {
      functie = 'Manager'
    }
    if (userData1.esteAdmin === true) {
      functie = 'Administrator'
    }
    let userData = {
      Id: userData1.id,
      Nume: userData1.nume,
      Prenume: userData1.prenume,
      Email: userData1.email,
      Parola: userData1.parola,
      DataAngajarii: userData1.dataAngajarii,
      DataNasterii: userData1.dataNasterii,
      Cnp: userData1.cnp,
      SeriaNumarBuletin: userData1.seriaNumarBuletin,
      Numartelefon: userData1.numartelefon,
      Poza: '',
      Functia: functie,
      ManagerId: userData1.managerId,
      Salariu: userData1.salariu,
      EsteAngajatCuActeInRegula: userData1.esteAngajatCuActeInRegula,
      IdEchipa: userData1.idEchipa
    }
    return userData
  }
  async modificareDateProfil(
    userId,
    userNumeUpdated,
    userPrenumeUpdated,
    userEmailUpdated,
    userDataAngajariiUpdated,
    userNumartelefonUpdated,
    userDataNasteriiUpdated,
    userCnpUpdated,
    seriaNumarBuletinUpdated,
    salariuUpdated
  ) {
    try {
      let Angajat = {
        id: userId,
        nume: userNumeUpdated,
        prenume: userPrenumeUpdated,
        email: userEmailUpdated,
        dataAngajarii: userDataAngajariiUpdated,
        numartelefon: userNumartelefonUpdated,
        dataNasterii: userDataNasteriiUpdated,
        cnp: userCnpUpdated,
        seriaNumarBuletin: seriaNumarBuletinUpdated,
        salariu: salariuUpdated,
        parola: 'Ceva123$' //pt a putea rula (nu se va modifica)
      }
      let data1 = await this.post('/Angajat/PostEditareDateAngajat', Angajat)
      if (data1 !== '') {
        return true
      } else {
        return false
      }
    } catch (Errr) {
      return false
    }
  }
}

module.exports = ProfilePageApi
