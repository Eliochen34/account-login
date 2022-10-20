// 建立首頁路由

const express = require('express')
const router = express.Router()
const Account = require('../../models/account')


router.get('/', (req, res) => {
  // 判斷cookie中儲存的user內的值，如果有值則該使用者不用再輸入帳號密碼，可以直接登入。若無則導至登入頁面讓使用者輸入帳號密碼。
  const { user } = req.signedCookies
  // console.log(user)
  if (user) {
    res.render('login', { firstName: user })
  } else {
    res.render('index')
  }
})

module.exports = router