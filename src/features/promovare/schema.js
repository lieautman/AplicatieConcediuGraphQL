const { gql } = require('apollo-server-koa')

const updateManagerIdEchipaIdDefs = gql`
  type Angajat {
    nume: String
    prenume: String
    email: String
    cnp: String
    idEchipa: Int
  }

  input AngajatInput {
    nume: String
    prenume: String
    email: String
    # parola: String
    # dataAngajarii: String
    # dataNasterii: String
    cnp: String
    # seriaNumarBuletin: String
    # numarTelefon: String
    # poza: String
    ManagerId: Int
    echipa: Int
    # salariu: String
    # esteAdmin: Boolean
    # esteAngajatCuActeInRegula: Boolen
  }
  extend type Mutation {
    updateManagerIdEchipaId(input: [AngajatInput]): String
  }
`
module.exports = updateManagerIdEchipaIdDefs
