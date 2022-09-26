const { gql } = require('apollo-server-koa')

const angajatiPerEchipaDefs = gql`
  type AngajatiPerEchipa {
    id: Int
    nume: String
    prenume: String
    email: String
    echipa: String
  }

  extend type Query {
    getAngajatiPerEchipaData(echipa: String!): [AngajatiPerEchipa]
  }
`

module.exports = angajatiPerEchipaDefs
