const manageriResolvers = {
  Query: {
    manageriData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.manageriApi.manageriData()
      return data
    }
  }
}

module.exports = manageriResolvers
