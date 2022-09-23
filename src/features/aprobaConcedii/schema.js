const { gql } = require('apollo-server-koa')

const concediuAprobatDefs = gql`
  type ConcediuAprobat {
    id: Int!
    name: String
    dataInceput: String
    dataSfarsit: String
    inlocuitor: String
    comentarii: String
    stareConcediu: Int
    angajat: String
  }

  extend type Mutation {
    updateConcediu(id: Int!): ConcediuAprobat
  }
`

module.exports = concediuAprobatDefs
