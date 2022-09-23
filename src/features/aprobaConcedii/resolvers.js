const concediuAprobatResolvers = {
  Mutation: {
    updateConcediu: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.userApi.updateConcediu(id)
      return data
    }
  }
}
module.exports = concediuAprobatResolvers
