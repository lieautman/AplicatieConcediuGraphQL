const { topics, pubSub } = require('../../pubSub')

const concediiResolvers = {
  Query: {
    concediiData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.concediiApi.concediiData()
      return data
    }
  }
}

module.exports = concediiResolvers
