// 產生種子帳號資料
const mongoose = require('mongoose')
const Account = require('../account')
const accountList = require('../../account.json').users
const db = mongoose.connection

mongoose.connect(process.env.MONGODB_URI4, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('running seeder')
  Account.create(accountList)
    .then(() => {
      console.log("accountSeeder done!")
      db.close()
    })
    .catch(err => console.log(err))
})