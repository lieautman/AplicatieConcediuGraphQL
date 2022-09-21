const { gql } = require('apollo-server-koa')

const profilePageDefs = gql`
  type ProfileInfo {
    Id: Int!
    Nume: String!
    Prenume: String!
    Email: String!
    Parola: String
    DataAngajarii: String
    DataNasterii: String!
    Cnp: String!
    SeriaNumarBuletin: String
    Numartelefon: String
    Poza: String
    Functia: String
    ManagerId: Int
    Salariu: Float!
    EsteAngajatCuActeInRegula: Boolean
    IdEchipa: Int
  }

  extend type Query {
    getProfileData(userEmail: String!): ProfileInfo!
  }
`

module.exports = profilePageDefs
