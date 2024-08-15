const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  return res.redirect('/login')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/records',
  failureRedirect: '/login',
  failureFlash: true
}))

router.post('/logout', (req, res) => {
  res.redirect('/login')
})


module.exports = router;