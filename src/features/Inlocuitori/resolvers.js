const inlocuitoriResolvers = {
  Query: {
    inlocuitoriData: async (_, { dataSfarsit, dataInceput, angajatId }, { dataSources }, _info) => {
      const data = await dataSources.inlocuitoriApi.inlocuitoriData(dataSfarsit, dataInceput, angajatId)
      const x = data.map(el => ({
        ...el,
        inlocuitor: el.nume + ' ' + el.prenume
      }))
      return x
    }
  }
}

module.exports = inlocuitoriResolvers
