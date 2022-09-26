const UserApi = require('../features/user/dataSources/userApi')
const ConcediiApi = require('../features/concedii/dataSources/concediiApi')
const ConcediiSpreAprobareApi = require('../features/concediiSpreAprobare/dataSources/concediiSpreAprobareApi')
const UserDb = require('../features/user/dataSources/userDb')
const ProfilePageApi = require('../features/profilePage/dataSourses/profilePageApi')
const adaugaAngajatApi = require('../features/AdaugaAngajat/dataSources/adaugaAngajatApi')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  profilePageApi: new ProfilePageApi(),
  concediiApi: new ConcediiApi(),
  concediiSpreAprobareApi: new ConcediiSpreAprobareApi(),
  adaugaAngajatApi: new adaugaAngajatApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.ProfilePageApi.initialize({ context })
  dataSources.ConcediiApi.initialize({ context })
  dataSources.ConcediiSpreAprobareApi.initialize({ context })
  dataSources.adaugaAngajatApi.initialize({ context })
  return dataSources
}
