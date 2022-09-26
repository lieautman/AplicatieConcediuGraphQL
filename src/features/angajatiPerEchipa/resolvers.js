const angajatiPerEchipaResolvers = {
  Query: {
    getAngajatiPerEchipaData: async (_, { echipa }, { dataSources }, _info) => {
      const data = await dataSources.angajatiPerEchipaApi.preluareDateAngajat(echipa)
      return data
    }
  }
}
module.exports = angajatiPerEchipaResolvers
