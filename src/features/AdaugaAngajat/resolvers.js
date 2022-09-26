const adaugaAngajatResolvers = {
  Mutation: {
    adaugaAngajat: (_, { angajatInput }, { dataSources }) => {
      return dataSources.adaugaAngajatApi.adaugaAngajat(angajatInput)
    }
  }
}
module.exports = adaugaAngajatResolvers
