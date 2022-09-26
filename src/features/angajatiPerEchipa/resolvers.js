const angajatiPerEchipaResolvers = {
  Query: {
    getAngajatiPerEchipaData: async (_, { idEchipaNavigation }, { dataSources }, _info) => {
      const data = await dataSources.angajatiPerEchipaApi.getAngajatiPerEchipaData(idEchipaNavigation)
      const x = data.map(el => ({
        ...el,
        idEchipaNavigation: el.echipa.nume
      }))
      return x
    }
  }
}
module.exports = angajatiPerEchipaResolvers
