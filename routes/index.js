// 引用路由1.home, 2.accounts

const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const accounts = require('./modules/accounts')

router.use('/', home)
router.use('/accounts', accounts)

module.exports = router