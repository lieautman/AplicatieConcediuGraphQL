const profilePageResolvers = {
  Query: {
    getProfileData: async (_, { userEmail }, { dataSources }, _info) => {
      const data = await dataSources.profilePageApi.preluareDateProfil(userEmail)
      return data
    }
  }
}

module.exports = profilePageResolvers
