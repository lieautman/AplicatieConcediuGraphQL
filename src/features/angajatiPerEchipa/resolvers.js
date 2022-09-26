const angajatiPerEchipaResolvers = {
  Query: {
    getAngajatiPerEchipaData: async (_, { echipa }, { dataSources }, _info) => {
      const data = await dataSources.angajatiPerEchipaApi.getAngajatiPerEchipaData(echipa)
      const x = data.map(el => ({
        ...el,
        echipa: el.echipa.nume
      }))
      return x
    }
  }
}
module.exports = angajatiPerEchipaResolvers
