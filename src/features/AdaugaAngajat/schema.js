const { gql } = require('apollo-server-koa')

const adaugaAngajatDefs = gql`
  type Angajat {
    nume: String
    prenume: String
    dataNasterii: String
    cnp: String
    seriaNumarBuletin: String
    numartelefon: String
    dataAngajarii: String
    managerId: Int
    echipaId: Int
    salariu: Float
  }

  input AngajatInput {
    nume: String
    prenume: String
    dataNasterii: String
    cnp: String
    serieNumarBuletin: String
    numardetelefon: String
    dataAngajarii: String
    managerId: Int
    echipaId: Int
    salariu: Float
  }
  extend type Mutation {
    adaugaAngajat(input: AngajatInput): Angajat
  }
`
module.exports = adaugaAngajatDefs
