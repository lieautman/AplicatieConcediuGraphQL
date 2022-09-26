const { gql } = require('apollo-server-koa')

const profilePageTableDefs = gql`
  type Concediu {
    nume: String
  }
  type DateIntoarse {
    listaCOncedii: [Concediu]
    numarPagini: Int
  }

  extend type Query {
    preluareProfilePageTable(userEmail: String, indexStart: Int, indexEnd: Int, numarElemPePagina: Int): String
  }
`

module.exports = profilePageTableDefs
