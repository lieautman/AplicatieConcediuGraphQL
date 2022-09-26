const angajatiResolvers = {
  Query: {
    angajatiData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.AngajatiApi.angajatiData()
      const x = data.map(el => ({
        ...el,
        echipa: el.Echipa.nume
      }))
      return x
    }
  }
}

module.exports = angajatiResolvers
