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
const angajatiResolvers = require('../features/angajati/resolvers')
const angajatiDefs = require('../features/angajati/schema')
const concediiSpreAprobareResolvers = require('../features/concediiSpreAprobare/resolvers')
const concediiSpreAprobareDefs = require('../features/concediiSpreAprobare/schema')
const concediiDefs = require('../features/concedii/schema')
const concediuAprobatDefs = require('../features/aprobaConcedii/schema')
const concediuAprobatResolvers = require('../features/aprobaConcedii/resolvers')
const concediuRespinsDefs = require('../features/respingeConcedii/schema')
const concediuRespinsResolvers = require('../features/respingeConcedii/resolvers')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(
  userResolvers,
  profilePageResolvers,
  concediiResolvers,
  concediiSpreAprobareResolvers,
  concediuAprobatResolvers,
  angajatiResolvers,
  concediuRespinsResolvers
)

const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  userDefs,
  profilePageDefs,
  concediiDefs,
  concediiSpreAprobareDefs,
  concediuAprobatDefs,
  angajatiDefs,
  concediuRespinsDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
