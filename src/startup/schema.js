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
const concediiDefs = require('../features/concedii/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(userResolvers, profilePageResolvers)

const typeDefs = [...sources.map(source => source.document), ...oldTypeDefs, userDefs, profilePageDefs]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
