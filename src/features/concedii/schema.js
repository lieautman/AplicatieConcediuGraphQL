const { gql } = require('apollo-server-koa')

const concediiDefs = gql`
  type Concedii {
    id: Int
    name: String
    dataInceput: String
    dataSfarsit: String
    inlocuitor: String
    comentarii: String
    angajat: String
  }

  extend type Query {
    concediiData: [Concedii]!
  }
`

module.exports = concediiDefs
