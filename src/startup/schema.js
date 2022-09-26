const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const profilePageResolvers = require('../features/profilePage/resolvers')
const userDefs = require('../features/user/schema')
const profilePageDefs = require('../features/profilePage/schema')
const concediiResolvers = require('../features/concedii/resolvers')
const concediiSpreAprobareResolvers = require('../features/concediiSpreAprobare/resolvers')
const concediiSpreAprobareDefs = require('../features/concediiSpreAprobare/schema')
const concediiDefs = require('../features/concedii/schema')
const adaugaAngajatResolvers = require('../features/AdaugaAngajat/resolvers')
const adaugaAngajatDefs = require('../features/AdaugaAngajat/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(
  userResolvers,
  profilePageResolvers,
  concediiResolvers,
  concediiSpreAprobareResolvers,
  adaugaAngajatResolvers
)

const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  userDefs,
  profilePageDefs,
  concediiDefs,
  concediiSpreAprobareDefs,
  adaugaAngajatDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
