const { gql } = require('apollo-server-koa')

const concediiDefs = gql`
  type Concedii {
    id: Int!
    tipConcediu: String
    dataInceput: Date
    dataSfarsit: Date
    inlocuitor: String
    motiv: String
    angajat: String
  }

  extend type Query {
    concediiData: [Concedii]!
  }
`

module.exports = concediiDefs
