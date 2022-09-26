const { gql } = require('apollo-server-koa')

const adaugaAngajatDefs = gql`
  type Angajat {
    id: Int
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
    echipaId: Int
    salariu: Float
  }

  input AngajatInput {
    id: Int
    nume: String
    prenume: String
    email: String
    parola: String
    dataNasterii: String
    cnp: String
    serieNumarBuletin: String
    numardetelefon: String
    dataAngajarii: String
    esteAngajatCuActeInRegula: Boolean
    managerId: Int
    echipaId: Int
    salariu: Float
  }
  extend type Mutation {
    adaugaAngajat(input: AngajatInput): Angajat
  }
`
module.exports = adaugaAngajatDefs
