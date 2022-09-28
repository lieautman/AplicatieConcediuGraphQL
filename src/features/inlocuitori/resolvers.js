const inlocuitorResolvers = {
  Query: {
    inlocuitoriData: async (_, { dataInceput, dataSfarsit, idAngajat }, { dataSources }, _info) => {
      const data = await dataSources.inlocuitoriApi.inlocuitoriData(dataInceput, dataSfarsit, idAngajat)
      return data
    }
  }
}
module.exports = inlocuitorResolvers
