// 建立路由accounts判斷帳號密碼是否正確，並回應對應檔案

const express = require('express')
const router = express.Router()
const Account = require('../../models/account')

router.post('/login', (req, res) => {
  
  console.log(req.body)
  const accountInput = req.body.accountInput
  const passwordInput = req.body.passwordInput
  console.log(accountInput)
  Account.findOne({ email: accountInput, password: passwordInput })
    .then(data => 
      data ? data : res.render('index', { accountInput }))
    .then(data => res.render('login', { firstName: data.firstName }))
    .catch(err => console.log(err))
  // res.render('index')
 
})





module.exports = router