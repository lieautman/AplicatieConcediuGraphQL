const UserApi = require('../features/user/dataSources/userApi')
const ConcediiApi = require('../features/concedii/dataSources/concediiApi')
const ConcediiSpreAprobareApi = require('../features/concediiSpreAprobare/dataSources/concediiSpreAprobareApi')
const UserDb = require('../features/user/dataSources/userDb')
const ProfilePageApi = require('../features/profilePage/dataSourses/profilePageApi')
const ConcediuAprobatApi = require('../features/aprobaConcedii/dataSources/aprobaConcediiApi')
const AngajatiApi = require('../features/angajati/dataSources/angajatiApi')
const adaugaAngajatApi = require('../features/AdaugaAngajat/dataSources/adaugaAngajatApi')
const ConcediuRespinsApi = require('../features/respingeConcedii/dataSources/respingeConcediiApi')
const AngajatiPerEchipaApi = require('../features/angajatiPerEchipa/dataSources/angajatiPerEchipaApi')
const CardApi = require('../features/cardEchipe/dataSources/cardApi')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  profilePageApi: new ProfilePageApi(),
  concediiApi: new ConcediiApi(),
  concediiSpreAprobareApi: new ConcediiSpreAprobareApi(),
  concediuAprobatApi: new ConcediuAprobatApi(),
  concediuRespinsApi: new ConcediuRespinsApi(),
  angajatiApi: new AngajatiApi(),
  adaugaAngajatApi: new adaugaAngajatApi(),
  angajatiPerEchipaApi: new AngajatiPerEchipaApi(),
  cardApi: new CardApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.ProfilePageApi.initialize({ context })
  dataSources.ConcediiApi.initialize({ context })
  dataSources.ConcediiSpreAprobareApi.initialize({ context })
  dataSources.adaugaAngajatApi.initialize({ context })
  dataSources.ConcediuAprobatApi.initialize({ context })
  dataSources.ConcediuRespinsApi.initialize({ context })
  dataSources.AngajatiApi.initialize({ context })
  dataSources.AngajatiPerEchipaApi.initialize({ context })
  dataSources.CardApi.initialize({ context })
  return dataSources
}
