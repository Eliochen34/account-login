// 引用mongoose，以及建立db連線
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI4, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db