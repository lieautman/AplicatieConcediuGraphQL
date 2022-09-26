const userRegisterResolvers = {
  Mutation: {
    registerUser: async (
      _,
      { userNume, userPrenume, userEmail, userNumartelefon, userDataNasterii, userCnp, userSeriaNumarBuletin, userParola },
      { dataSources },
      _info
    ) => {
      const data = await dataSources.userRegisterApi.registerUser(
        userNume,
        userPrenume,
        userEmail,
        userNumartelefon,
        userDataNasterii,
        userCnp,
        userSeriaNumarBuletin,
        userParola
      )
      return data
    }
  }
}

module.exports = userRegisterResolvers
