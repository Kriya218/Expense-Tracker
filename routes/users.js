const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../models')
const User = db.User

router.post('/', (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!email || !password) {
    req.flash('error', '請輸入email及密碼')
    return res.redirect('back')
  }
  if (password !== confirmPassword) {
    req.flash('error', '密碼及驗證碼不一致')
    return res.redirect('back')
  }
  
  return User.findOne({where: { email }})
    .then((user) => {
      if (user) { 
        req.flash('error', '此email已註冊')
        return res.redirect('back')
      }
      return bcrypt.hash(password, 10)
        .then((hash) =>  User.create({ name, email, password: hash })) 
    })
    .then((user) => {
      if (!user) { return res.redirect('back') }

      req.flash('success', '註冊成功')
      return res.redirect('/login')
    })
    .catch((error) => {
      error.errorMessage = '註冊失敗';
      next(error)
    });
})

module.exports = router