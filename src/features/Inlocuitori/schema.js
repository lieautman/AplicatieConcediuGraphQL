const { gql } = require('apollo-server-koa')

const inlocuitoriDefs = gql`
  type Inlocuitori {
    nume: String
    prenume: String
    dataInceput: String
    dataSfarsit: String
    angajatId: Int
    inlocuitor: String
  }

  extend type Query {
    inlocuitoriData(dataInceput: String, dataSfarsit: String, angajatId: Int): [Inlocuitori]
  }
`
module.exports = inlocuitoriDefs
