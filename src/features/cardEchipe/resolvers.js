const cardResolvers = {
  Query: {
    cardData: async (_, { echipa }, { dataSources }, _info) => {
      const data = await dataSources.cardApi.cardData(echipa)
      const x = data.map(el => ({
        ...el,
        echipa: el.echipa.nume
      }))
      return x
    }
  }
}

module.exports = cardResolvers
