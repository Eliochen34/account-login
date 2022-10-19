// 建立路由accounts判斷帳號密碼是否正確，並回應對應檔案

const express = require('express')
const router = express.Router()
const Account = require('../../models/account')


router.post('/login', (req, res) => {
  const { accountInput, passwordInput } = req.body
  
  Account.findOne({ email: accountInput, password: passwordInput })
    .then(data => 
      data ? data : res.render('index', { accountInput }))
    .then(data => {
      res.render('login', { firstName: data.firstName })
      // 使用者成功登入後，在cookie儲存使用者名稱
      res.cookie('user', data.firstName, { signed: true })
      console.log(document.cookies)
    })
    .catch(err => console.log(err))
  // res.render('index')
 
})





module.exports = router