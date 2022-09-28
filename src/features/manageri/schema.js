const { gql } = require('apollo-server-koa')

const manageriDefs = gql`
  type Manageri {
    id: Int
    nume: String
    prenume: String
  }

  extend type Query {
    ManageriData: [Manageri]
  }
`
module.exports = manageriDefs
