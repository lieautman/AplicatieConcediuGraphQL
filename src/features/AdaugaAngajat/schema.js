const { gql } = require('apollo-server-koa')

const adaugaAngajatDefs = gql`
  type Angajat {
    nume: String
    prenume: String
    email: String
    parola: String
    dataNasterii: String
    cnp: String
    seriaNumarBuletin: String
    numartelefon: String
    dataAngajarii: String
    esteAngajatCuActeInRegula: Boolean
    managerId: Int
    idEchipa: Int
    salariu: Float
  }

  input AngajatInput {
    nume: String
    prenume: String
    email: String
    parola: String
    dataNasterii: String
    cnp: String
    seriaNumarBuletin: String
    numartelefon: String
    dataAngajarii: String
    esteAngajatCuActeInRegula: Boolean
    managerId: Int
    idEchipa: Int
    salariu: Float
  }
  extend type Mutation {
    adaugaAngajat(input: AngajatInput): Angajat
  }
`
module.exports = adaugaAngajatDefs
