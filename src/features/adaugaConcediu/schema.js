const { gql } = require('apollo-server-koa')
const adaugaConcediuDefs = gql`
  type Concediu {
    dataInceput: String
    dataIncetare: String
    comentarii: String
    concediuId: Int
    angajatId: Int
    numarZileDisponibile: Int
    numarZileSelectat: Int
  }

  input ConcediuInput {
    dataInceput: String
    dataIncetare: String
    comentarii: String
    concediuId: Int
    angajatId: Int
    numarZileDisponibile: Int
    numarZileSelectat: Int
  }
  extend type Mutation {
    adaugaConcediu(input: ConcediuInput): Concediu
  }
`
module.exports = adaugaConcediuDefs
