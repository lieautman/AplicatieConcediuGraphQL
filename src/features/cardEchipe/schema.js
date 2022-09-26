const { gql } = require('apollo-server-koa')

const cardDefs = gql`
  type Angajat {
    id: Int
    nume: String
    prenume: String
    email: String
    echipa: String
  }

  extend type Query {
    cardData(echipa: String): [Angajat]
  }
`
module.exports = cardDefs
