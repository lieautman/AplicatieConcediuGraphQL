const { topics, pubSub } = require('../../pubSub')

const concediiResolvers = {
  Query: {
    concediiData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.concediiApi.concediiData()
      const x = data.map(el => ({
        ...el,
        name: el.tipConcediu.nume,
        inlocuitor: el.inlocuitor.nume,
        angajat: el.angajat.nume
      }))
      return x
    }
  }
}

module.exports = concediiResolvers
