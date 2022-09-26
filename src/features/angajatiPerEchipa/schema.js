const { gql } = require('apollo-server-koa')

const angajatiPerEchipaDefs = gql`
  type AngajatiPerEchipa {
    id: Int
    nume: String
    prenume: String
    email: String
    idEchipaNavigation: String
  }

  extend type Query {
    getAngajatiPerEchipaData(idEchipaNavigation: String): [AngajatiPerEchipa]
  }
`

module.exports = angajatiPerEchipaDefs
